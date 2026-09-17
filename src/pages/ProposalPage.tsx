import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Save, Download, RotateCcw, CheckCircle2, ChevronDown, ChevronUp, Star, DollarSign } from 'lucide-react';
import { ProposalPreview } from '../components/ProposalStudio/ProposalPreview';
import { ProposalState, MasterCompanyData, ServiceType, Currency } from '../types/proposal';
import { proposalTemplates, defaultMasterData, ALL_SERVICES, formatPrice } from '../data/proposalTemplates';

// ─── Constants ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'hxs_draft_proposal_v2';
const MASTER_KEY = 'hxs_master_data_v2';

function makeProposalNumber() {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) {
    try {
      const d = JSON.parse(existing) as ProposalState;
      if (d.proposalNumber) return d.proposalNumber;
    } catch {}
  }
  const count = parseInt(localStorage.getItem('hxs_proposal_count') || '0') + 1;
  localStorage.setItem('hxs_proposal_count', String(count));
  return `HXS-${new Date().getFullYear()}-${String(count).padStart(3, '0')}`;
}

function makeDefaultState(service: ServiceType = 'Social Media Marketing'): ProposalState {
  const template = proposalTemplates[service];
  return {
    id: crypto.randomUUID(),
    proposalNumber: makeProposalNumber(),
    service,
    currency: 'PKR',
    client: {
      name: '',
      contactPerson: '',
      industry: '',
      location: '',
      website: '',
      email: '',
      phone: '',
      proposalDate: new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' }),
      validUntil: '30 Days from Proposal Date',
      logo: null,
      coverImage: null,
      requirements: '',
      reelGifs: [],
    },
    sections: JSON.parse(JSON.stringify(template.sections)),
    selectedPackageId: null,
    customPrice: '',
    selectedAddOnIds: [],
    notes: '',
  };
}

// ─── Image Upload Helper ───────────────────────────────────────────────────────

function ImageUploader({ label, value, onChange }: { label: string; value: string | null; onChange: (b64: string | null) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => onChange(e.target?.result as string);
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">{label}</label>
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
        onClick={() => inputRef.current?.click()}
        className="relative border-2 border-dashed border-[#E5DED9] rounded-lg p-4 cursor-pointer hover:border-[#FF6A00] transition-colors bg-[#FAF8F6] flex flex-col items-center justify-center gap-2 min-h-[80px]"
      >
        {value
          ? <img src={value} alt="upload" className="max-h-16 object-contain rounded" />
          : <span className="text-xs text-[#8A817C]">Click or drag to upload image</span>
        }
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
      </div>
      {value && (
        <button onClick={() => onChange(null)} className="mt-1 text-xs text-red-400 hover:text-red-600 transition-colors">Remove</button>
      )}
    </div>
  );
}

// ─── GIF / Video Multi-Uploader ───────────────────────────────────────────────

function GifUploader({ values, onChange }: { values: string[]; onChange: (files: string[]) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onChange([...values, result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const remove = (idx: number) => onChange(values.filter((_, i) => i !== idx));

  return (
    <div>
      <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">
        Client GIFs / Reels Content
        <span className="ml-2 text-[10px] normal-case font-normal text-[#8A817C]">(GIF, MP4, WEBM, PNG — appears in PDF)</span>
      </label>

      {/* Upload zone */}
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-[#E5DED9] rounded-xl p-5 cursor-pointer hover:border-[#FF6A00] transition-colors bg-[#FAF8F6] flex flex-col items-center justify-center gap-2 min-h-[90px] mb-3"
      >
        <span className="text-2xl">🎬</span>
        <span className="text-[11px] font-bold text-[#5C504A]">Click or drag GIFs / Videos here</span>
        <span className="text-[10px] text-[#8A817C]">Multiple files supported</span>
        <input
          ref={inputRef}
          type="file"
          accept="image/gif,image/*,video/mp4,video/webm,video/*"
          multiple
          className="hidden"
          onChange={e => handleFiles(e.target.files)}
        />
      </div>

      {/* Previews grid */}
      {values.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {values.map((src, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden border border-[#E5DED9] bg-black aspect-[9/16]">
              {src.startsWith('data:video') ? (
                <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <img src={src} alt={`reel ${i+1}`} className="w-full h-full object-cover" />
              )}
              {/* Orange badge */}
              <div className="absolute bottom-1 left-1 bg-[#FF6A00] text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                Reel {i + 1}
              </div>
              {/* Remove button */}
              <button
                onClick={e => { e.stopPropagation(); remove(i); }}
                className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center hover:bg-red-700 transition-colors"
              >×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// ─── Main Component ────────────────────────────────────────────────────────────

const ProposalPage: React.FC = () => {
  const [data, setData] = useState<ProposalState>(() => makeDefaultState());
  const [masterData, setMasterData] = useState<MasterCompanyData>(defaultMasterData);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'client' | 'package' | 'addons' | 'sections' | 'master'>('client');
  const [zoom, setZoom] = useState(65);
  const previewRef = useRef<HTMLDivElement>(null);

  // noindex
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots'; meta.content = 'noindex, nofollow'; meta.id = 'proposal-noindex';
    document.head.appendChild(meta);
    return () => { const el = document.getElementById('proposal-noindex'); if (el) document.head.removeChild(el); };
  }, []);

  // Load from storage
  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY); if (s) setData(JSON.parse(s));
      const m = localStorage.getItem(MASTER_KEY); if (m) setMasterData(JSON.parse(m));
    } catch {}
  }, []);

  const handleSave = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(MASTER_KEY, JSON.stringify(masterData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  }, [data, masterData]);

  const handleReset = useCallback(() => {
    if (window.confirm('Reset this proposal? Unsaved changes will be lost.')) {
      const fresh = makeDefaultState();
      setData(fresh);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleServiceChange = useCallback((newService: ServiceType) => {
    const template = proposalTemplates[newService];
    setData(prev => ({
      ...prev,
      service: newService,
      sections: JSON.parse(JSON.stringify(template.sections)),
      selectedPackageId: null,
      customPrice: '',
      selectedAddOnIds: [],
    }));
  }, []);

  const handleCurrencyToggle = useCallback(() => {
    setData(prev => ({ ...prev, currency: prev.currency === 'PKR' ? 'USD' : 'PKR' }));
  }, []);

  const generatePDF = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `HXS-${(data.client.name || 'Client').replace(/\s+/g, '-')}-Proposal-${new Date().toISOString().split('T')[0]}`,
  });

  const template = proposalTemplates[data.service];
  const selectedPkg = data.selectedPackageId ? template?.packages.find(p => p.id === data.selectedPackageId) : null;
  const selectedAddOns = template?.addOns.filter(a => data.selectedAddOnIds.includes(a.id)) || [];

  const totalPKR = (selectedPkg?.price_pkr || 0) + selectedAddOns.reduce((s, a) => s + a.price_pkr, 0);
  const totalUSD = (selectedPkg?.price_usd || 0) + selectedAddOns.reduce((s, a) => s + a.price_usd, 0);

  const update = (partial: Partial<ProposalState>) => setData(prev => ({ ...prev, ...partial }));
  const updateClient = (partial: Partial<typeof data.client>) => setData(prev => ({ ...prev, client: { ...prev.client, ...partial } }));

  const TABS: { key: typeof activeTab; label: string }[] = [
    { key: 'client', label: 'Client' },
    { key: 'package', label: 'Package' },
    { key: 'addons', label: 'Add-ons' },
    { key: 'sections', label: 'Sections' },
    { key: 'master', label: 'Company' },
  ];

  return (
    <div className="flex flex-col bg-[#F2F0ED] min-h-screen pt-[72px]">

      {/* ── Studio Header ── */}
      <header className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-[#E5DED9] shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-base font-black tracking-tight text-[#0A0A0A]">Proposal Studio</div>
              <div className="text-[10px] text-[#8A817C] -mt-0.5">Hussain X Solutions</div>
            </div>
            <span className="hidden sm:inline text-xs font-semibold px-2.5 py-1 bg-[#FF6A00]/10 text-[#FF6A00] rounded-full border border-[#FF6A00]/20">
              {data.proposalNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Currency Toggle */}
            <button
              onClick={handleCurrencyToggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5DED9] bg-[#FAF8F6] text-xs font-bold text-[#0A0A0A] hover:border-[#FF6A00] transition-all"
              title="Toggle Currency"
            >
              <DollarSign size={12} />
              {data.currency}
            </button>

            {isSaved && (
              <span className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
                <CheckCircle2 size={13} /> Saved
              </span>
            )}
            <button onClick={handleReset} className="p-2 text-[#8A817C] hover:text-red-500 transition-colors" title="Reset">
              <RotateCcw size={15} />
            </button>
            <button onClick={handleSave} className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F6] border border-[#E5DED9] hover:border-[#FF6A00] rounded-lg text-xs font-semibold transition-all">
              <Save size={13} /> Save
            </button>
            <button
              onClick={() => generatePDF()}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FF6A00] hover:bg-[#E85D00] text-white rounded-lg text-xs font-bold shadow-md transition-all"
            >
              <Download size={13} /> Download PDF
            </button>
          </div>
        </div>

        {/* Service selector bar */}
        <div className="flex items-center gap-3 px-4 pb-2.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A817C] whitespace-nowrap">Service:</span>
          <select
            value={data.service}
            onChange={e => handleServiceChange(e.target.value as ServiceType)}
            className="flex-1 bg-[#FAF8F6] border border-[#E5DED9] rounded-lg px-3 py-1.5 text-sm font-bold text-[#0A0A0A] focus:outline-none focus:border-[#FF6A00] cursor-pointer"
          >
            {ALL_SERVICES.map(s => (
              <option key={s} value={s}>{proposalTemplates[s].icon} {s}</option>
            ))}
          </select>
          <span className="hidden sm:block text-[10px] text-[#8A817C] whitespace-nowrap">{template?.tagline}</span>
        </div>
      </header>

      {/* ── Main Two-Column Layout ── */}
      <div className="flex flex-1" style={{ marginTop: '108px', height: 'calc(100vh - 108px - 72px)' }}>

        {/* LEFT: Editor */}
        <div className="w-full lg:w-[42%] xl:w-[38%] bg-white border-r border-[#E5DED9] flex flex-col overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-[#E5DED9] overflow-x-auto">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 min-w-fit py-2.5 px-2 text-[11px] font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.key ? 'border-[#FF6A00] text-[#FF6A00]' : 'border-transparent text-[#5C504A] hover:text-[#0A0A0A]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">

            {/* ── CLIENT TAB ── */}
            {activeTab === 'client' && (
              <>
                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Client / Business Name *</label>
                  <input type="text" value={data.client.name} onChange={e => updateClient({ name: e.target.value })}
                    className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]"
                    placeholder="e.g. ABC Restaurant" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Industry *</label>
                    <input type="text" value={data.client.industry} onChange={e => updateClient({ industry: e.target.value })}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" placeholder="Restaurant" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Contact Person</label>
                    <input type="text" value={data.client.contactPerson} onChange={e => updateClient({ contactPerson: e.target.value })}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" placeholder="Mr. Ahmed" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Location</label>
                    <input type="text" value={data.client.location} onChange={e => updateClient({ location: e.target.value })}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" placeholder="Lahore, Pakistan" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Website</label>
                    <input type="text" value={data.client.website} onChange={e => updateClient({ website: e.target.value })}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" placeholder="example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Proposal Date</label>
                    <input type="text" value={data.client.proposalDate} onChange={e => updateClient({ proposalDate: e.target.value })}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Valid Until</label>
                    <input type="text" value={data.client.validUntil} onChange={e => updateClient({ validUntil: e.target.value })}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Client Requirements / Goals</label>
                  <textarea rows={4} value={data.client.requirements} onChange={e => updateClient({ requirements: e.target.value })}
                    className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6] resize-none"
                    placeholder="Specific goals, current problems, budget, target audience..." />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <ImageUploader label="Client Logo" value={data.client.logo} onChange={logo => updateClient({ logo })} />
                  <ImageUploader label="Cover Image" value={data.client.coverImage} onChange={coverImage => updateClient({ coverImage })} />
                </div>

                {/* GIF / Reels upload */}
                <div className="pt-2 border-t border-[#E5DED9]">
                  <GifUploader
                    values={data.client.reelGifs || []}
                    onChange={reelGifs => updateClient({ reelGifs })}
                  />
                </div>
              </>
            )}

            {/* ── PACKAGE TAB ── */}
            {activeTab === 'package' && template && (
              <>
                {/* Currency toggle inside tab */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-[#5C504A]">Select Package</span>
                  <button onClick={handleCurrencyToggle}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#E5DED9] hover:border-[#FF6A00] transition-colors">
                    Show in {data.currency === 'PKR' ? 'USD $' : 'PKR ₨'}
                  </button>
                </div>

                <div className="space-y-3">
                  {template.packages.map(pkg => {
                    const isSelected = data.selectedPackageId === pkg.id;
                    return (
                      <div key={pkg.id}
                        onClick={() => update({ selectedPackageId: isSelected ? null : pkg.id, customPrice: '' })}
                        className={`rounded-xl border-2 cursor-pointer transition-all overflow-hidden ${isSelected ? 'border-[#FF6A00] shadow-md shadow-[#FF6A00]/10' : 'border-[#E5DED9] hover:border-[#FF6A00]/40'}`}>
                        {/* Header */}
                        <div className={`px-4 py-3 flex items-center justify-between ${isSelected ? 'bg-[#0A0A0A]' : 'bg-[#FAF8F6]'}`}>
                          <div>
                            <div className={`font-bold text-sm flex items-center gap-2 ${isSelected ? 'text-white' : 'text-[#0A0A0A]'}`}>
                              {pkg.name}
                              {pkg.recommended && <span className="text-[9px] font-bold px-2 py-0.5 bg-[#FF6A00] text-white rounded-full">★ BEST</span>}
                            </div>
                            <div className={`text-[10px] ${isSelected ? 'text-[#888]' : 'text-[#5C504A]'}`}>{pkg.tagline}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[#FF6A00] font-black text-lg">
                              {pkg.price_pkr === 0 ? 'Custom' : formatPrice(pkg.price_pkr, pkg.price_usd, data.currency)}
                            </div>
                            <div className={`text-[9px] ${isSelected ? 'text-[#888]' : 'text-[#8A817C]'}`}>/ {pkg.billingFrequency}</div>
                          </div>
                        </div>
                        {/* Features (shown when selected) */}
                        {isSelected && (
                          <div className="px-4 py-3 bg-white border-t border-[#E5DED9] grid grid-cols-1 gap-1">
                            {pkg.features.map((f, fi) => (
                              <div key={fi} className="flex items-center gap-2 text-[10px]">
                                <span className={`font-bold ${f.included ? 'text-[#FF6A00]' : 'text-[#ccc]'}`}>{f.included ? '✓' : '×'}</span>
                                <span className={f.included ? 'text-[#0A0A0A]' : 'text-[#ccc] line-through'}>{f.text}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Custom price override */}
                <div className="pt-2 border-t border-[#E5DED9]">
                  <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Custom Price Override</label>
                  <input type="text" value={data.customPrice} onChange={e => update({ customPrice: e.target.value })}
                    className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]"
                    placeholder="e.g. PKR 55,000 / month" />
                  <p className="text-[9px] text-[#8A817C] mt-1">Overrides the selected package price in the PDF.</p>
                </div>

                {/* Total */}
                {selectedPkg && (
                  <div className="bg-[#0A0A0A] rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[#888] uppercase tracking-wider">Subtotal</span>
                      <span className="font-bold text-[#FF6A00]">{formatPrice(selectedPkg.price_pkr, selectedPkg.price_usd, data.currency)}</span>
                    </div>
                    {selectedAddOns.length > 0 && (
                      <>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] text-[#888] uppercase tracking-wider">Add-ons ({selectedAddOns.length})</span>
                          <span className="font-bold text-[#FF6A00]">{formatPrice(selectedAddOns.reduce((s,a)=>s+a.price_pkr,0), selectedAddOns.reduce((s,a)=>s+a.price_usd,0), data.currency)}</span>
                        </div>
                        <div className="border-t border-[#333] mt-2 pt-2 flex justify-between">
                          <span className="text-xs font-bold text-white">Total</span>
                          <span className="text-base font-black text-[#FF6A00]">{formatPrice(totalPKR, totalUSD, data.currency)}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </>
            )}

            {/* ── ADD-ONS TAB ── */}
            {activeTab === 'addons' && template && (
              <>
                <p className="text-[10px] text-[#8A817C]">Select optional add-ons to enhance this proposal.</p>
                <div className="space-y-2">
                  {template.addOns.map(addon => {
                    const isSelected = data.selectedAddOnIds.includes(addon.id);
                    return (
                      <label key={addon.id}
                        className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${isSelected ? 'border-[#FF6A00] bg-[#FF6A00]/5' : 'border-[#E5DED9] bg-[#FAF8F6] hover:border-[#FF6A00]/40'}`}>
                        <input type="checkbox" checked={isSelected}
                          onChange={e => update({ selectedAddOnIds: e.target.checked ? [...data.selectedAddOnIds, addon.id] : data.selectedAddOnIds.filter(id => id !== addon.id) })}
                          className="w-4 h-4 accent-[#FF6A00] mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-bold text-[#0A0A0A]">{addon.name}</div>
                          <div className="text-[10px] text-[#8A817C]">{addon.description}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-[11px] font-black text-[#FF6A00]">
                            {formatPrice(addon.price_pkr, addon.price_usd, data.currency)}
                          </div>
                          <div className="text-[9px] text-[#8A817C]">/ add-on</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="pt-3 border-t border-[#E5DED9]">
                    <div className="text-[10px] font-bold text-[#0A0A0A] mb-1">Selected Add-ons Total:</div>
                    <div className="text-lg font-black text-[#FF6A00]">
                      {formatPrice(selectedAddOns.reduce((s,a)=>s+a.price_pkr,0), selectedAddOns.reduce((s,a)=>s+a.price_usd,0), data.currency)}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ── SECTIONS TAB ── */}
            {activeTab === 'sections' && (
              <>
                <p className="text-[10px] text-[#8A817C]">Toggle, rename, and edit each proposal section.</p>
                <div className="space-y-2">
                  {data.sections.sort((a,b) => a.order - b.order).map((section, idx) => (
                    <div key={section.id} className={`rounded-xl border overflow-hidden ${section.enabled ? 'border-[#E5DED9]' : 'border-[#E5DED9]/50 opacity-50'}`}>
                      <div className="flex items-center gap-2 p-3 bg-[#FAF8F6] border-b border-[#E5DED9]">
                        <input type="checkbox" checked={section.enabled}
                          onChange={e => {
                            const newSecs = [...data.sections];
                            const i = newSecs.findIndex(s => s.id === section.id);
                            newSecs[i] = { ...newSecs[i], enabled: e.target.checked };
                            update({ sections: newSecs });
                          }}
                          className="w-4 h-4 accent-[#FF6A00] flex-shrink-0" />
                        <input type="text" value={section.title}
                          onChange={e => {
                            const newSecs = [...data.sections];
                            const i = newSecs.findIndex(s => s.id === section.id);
                            newSecs[i] = { ...newSecs[i], title: e.target.value };
                            update({ sections: newSecs });
                          }}
                          className="font-bold text-[11px] text-[#0A0A0A] bg-transparent focus:outline-none flex-1" />
                      </div>
                      {section.enabled && (
                        <div className="p-3">
                          <textarea rows={5} value={section.content}
                            onChange={e => {
                              const newSecs = [...data.sections];
                              const i = newSecs.findIndex(s => s.id === section.id);
                              newSecs[i] = { ...newSecs[i], content: e.target.value };
                              update({ sections: newSecs });
                            }}
                            className="w-full bg-white border border-[#E5DED9] rounded-lg px-3 py-2 text-[11px] focus:border-[#FF6A00] focus:outline-none resize-y" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── MASTER / COMPANY TAB ── */}
            {activeTab === 'master' && (
              <>
                <div className="text-[10px] text-[#8A817C] mb-2">Company info auto-fills all proposals. Save after editing.</div>
                {[
                  { label: 'Company Name', key: 'name' as const, type: 'text' },
                  { label: 'Website', key: 'website' as const, type: 'text' },
                  { label: 'Email', key: 'email' as const, type: 'text' },
                  { label: 'Phone / WhatsApp', key: 'phone' as const, type: 'text' },
                  { label: 'Address', key: 'address' as const, type: 'text' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">{field.label}</label>
                    <input type={field.type} value={masterData[field.key] as string}
                      onChange={e => setMasterData(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6]" />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] font-bold uppercase text-[#5C504A] mb-1 block">Terms & Conditions</label>
                  <textarea rows={8} value={masterData.terms} onChange={e => setMasterData(prev => ({ ...prev, terms: e.target.value }))}
                    className="w-full border border-[#E5DED9] rounded-lg px-3 py-2 text-sm focus:border-[#FF6A00] focus:outline-none bg-[#FAF8F6] resize-y" />
                </div>
                <ImageUploader label="Company Logo (for PDF Header)" value={masterData.logo} onChange={logo => setMasterData(prev => ({ ...prev, logo }))} />
                <button onClick={handleSave}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#0A0A0A] hover:bg-[#FF6A00] text-white rounded-xl text-sm font-bold transition-all">
                  <Save size={14} /> Save Company Settings
                </button>
              </>
            )}

          </div>
        </div>

        {/* RIGHT: Live Preview */}
        <div className="hidden lg:flex flex-col flex-1 bg-[#E8E4E0] overflow-hidden">
          {/* Preview toolbar */}
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-[#E5DED9] flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C504A]">Live PDF Preview</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#8A817C]">Zoom:</span>
              {[50, 65, 80, 100].map(z => (
                <button key={z} onClick={() => setZoom(z)}
                  className={`text-[10px] px-2 py-0.5 rounded font-bold transition-colors ${zoom === z ? 'bg-[#FF6A00] text-white' : 'bg-[#FAF8F6] text-[#5C504A] hover:bg-[#E5DED9]'}`}>
                  {z}%
                </button>
              ))}
            </div>
          </div>

          {/* Preview area */}
          <div className="flex-1 overflow-auto p-6 flex justify-center">
            <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.2s ease' }}>
              <ProposalPreview ref={previewRef} data={data} masterData={masterData} />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProposalPage;
