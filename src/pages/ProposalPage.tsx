import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Save, Download, RotateCcw, CheckCircle2 } from 'lucide-react';
import { ProposalPreview } from '../components/ProposalStudio/ProposalPreview';
import { ProposalState, MasterCompanyData, ServiceType } from '../types/proposal';
import { proposalTemplates, defaultMasterData } from '../data/proposalTemplates';

const DEFAULT_STATE: ProposalState = {
  id: crypto.randomUUID(),
  proposalNumber: `HXS-${new Date().getFullYear()}-001`,
  service: 'Social Media Marketing',
  client: {
    name: '',
    contactPerson: '',
    industry: '',
    location: '',
    website: '',
    email: '',
    phone: '',
    proposalDate: new Date().toLocaleDateString(),
    validUntil: '30 Days',
    logo: null,
    coverImage: null,
    requirements: ''
  },
  sections: proposalTemplates['Social Media Marketing'].sections,
  selectedPackageId: null,
  customPrice: '',
  addOns: []
};

const ProposalPage: React.FC = () => {
  const [data, setData] = useState<ProposalState>(DEFAULT_STATE);
  const [masterData, setMasterData] = useState<MasterCompanyData>(defaultMasterData);
  const [isSaved, setIsSaved] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'client' | 'sections' | 'pricing' | 'master'>('client');

  // Inject noindex so search engines don't index this internal tool
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    meta.id = 'proposal-noindex';
    document.head.appendChild(meta);
    return () => {
      const existing = document.getElementById('proposal-noindex');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  // Load from LocalStorage
  useEffect(() => {
    const savedProposal = localStorage.getItem('hxs_draft_proposal');
    const savedMaster = localStorage.getItem('hxs_master_data');
    if (savedProposal) {
      try { setData(JSON.parse(savedProposal)); } catch (e) {}
    }
    if (savedMaster) {
      try { setMasterData(JSON.parse(savedMaster)); } catch (e) {}
    }
  }, []);

  // Save Draft
  const handleSave = () => {
    localStorage.setItem('hxs_draft_proposal', JSON.stringify(data));
    localStorage.setItem('hxs_master_data', JSON.stringify(masterData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    if(window.confirm('Are you sure you want to reset this proposal? Unsaved changes will be lost.')){
      setData({ ...DEFAULT_STATE, id: crypto.randomUUID() });
      localStorage.removeItem('hxs_draft_proposal');
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newService = e.target.value as ServiceType;
    const template = proposalTemplates[newService] || proposalTemplates['Custom'];
    setData(prev => ({
      ...prev,
      service: newService,
      sections: template.sections,
      selectedPackageId: null,
      customPrice: ''
    }));
  };

  const generatePDF = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `HXS-${data.client.name.replace(/\s+/g, '-')}-Proposal-${new Date().toISOString().split('T')[0]}`,
    onAfterPrint: () => console.log('Printed successfully')
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0A0A0A] flex flex-col pt-24 pb-0">
      
      {/* Top Header / Action Bar */}
      <header className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-[#E5DED9] px-6 py-3 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold tracking-tight">Proposal Studio</h1>
          <span className="text-sm font-medium px-3 py-1 bg-[#FAF8F6] rounded-full border border-[#E5DED9] text-[#5C504A]">
            {data.proposalNumber}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {isSaved && <span className="text-sm text-[#25D366] font-medium flex items-center gap-1"><CheckCircle2 size={16}/> Saved</span>}
          <button onClick={handleReset} className="p-2 text-[#8A817C] hover:text-red-500 transition-colors" title="Reset">
            <RotateCcw size={18} />
          </button>
          <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-[#FAF8F6] border border-[#E5DED9] hover:border-[#FF6A00] rounded-lg text-sm font-semibold transition-all">
            <Save size={16} /> Save Draft
          </button>
          <button onClick={() => generatePDF()} className="flex items-center gap-2 px-5 py-2 bg-[#FF6A00] hover:bg-[#E85D00] text-white rounded-lg text-sm font-bold shadow-md transition-all">
            <Download size={16} /> Download PDF
          </button>
        </div>
      </header>

      {/* Main Studio Area */}
      <div className="flex flex-1 mt-14 overflow-hidden h-[calc(100vh-136px)]">
        
        {/* LEFT PANEL: Editor */}
        <div className="w-full lg:w-[45%] xl:w-[40%] bg-white border-r border-[#E5DED9] overflow-y-auto custom-scrollbar flex flex-col">
          
          {/* Service Selector */}
          <div className="p-6 border-b border-[#E5DED9] bg-[#FAF8F6]">
            <label className="text-xs font-bold uppercase tracking-wider text-[#5C504A] mb-2 block">Select Service Type</label>
            <select 
              value={data.service}
              onChange={handleServiceChange}
              className="w-full bg-white border border-[#E5DED9] rounded-xl px-4 py-3 text-lg font-bold text-[#0A0A0A] focus:outline-none focus:border-[#FF6A00] shadow-sm"
            >
              {Object.keys(proposalTemplates).map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#E5DED9] bg-white sticky top-0 z-10">
            {['client', 'sections', 'pricing', 'master'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-3 text-sm font-semibold capitalize border-b-2 transition-colors ${activeTab === tab ? 'border-[#FF6A00] text-[#FF6A00]' : 'border-transparent text-[#5C504A] hover:text-[#0A0A0A]'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 flex-1">
            {activeTab === 'client' && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Client / Business Name *</label>
                  <input 
                    type="text" 
                    value={data.client.name}
                    onChange={e => setData({...data, client: {...data.client, name: e.target.value}})}
                    className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    placeholder="e.g. Acme Corp"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Industry *</label>
                    <input 
                      type="text" 
                      value={data.client.industry}
                      onChange={e => setData({...data, client: {...data.client, industry: e.target.value}})}
                      className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Contact Person</label>
                    <input 
                      type="text" 
                      value={data.client.contactPerson}
                      onChange={e => setData({...data, client: {...data.client, contactPerson: e.target.value}})}
                      className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Proposal Date</label>
                    <input 
                      type="text" 
                      value={data.client.proposalDate}
                      onChange={e => setData({...data, client: {...data.client, proposalDate: e.target.value}})}
                      className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Valid Until</label>
                    <input 
                      type="text" 
                      value={data.client.validUntil}
                      onChange={e => setData({...data, client: {...data.client, validUntil: e.target.value}})}
                      className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Client Requirements / Goals</label>
                  <textarea 
                    rows={4}
                    value={data.client.requirements}
                    onChange={e => setData({...data, client: {...data.client, requirements: e.target.value}})}
                    className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none resize-none"
                    placeholder="Specific requests, problems, goals..."
                  />
                </div>
              </div>
            )}

            {activeTab === 'sections' && (
              <div className="space-y-4">
                <p className="text-sm text-[#5C504A] mb-4">Toggle and edit sections that will appear in the proposal.</p>
                {data.sections.map((section, idx) => (
                  <div key={section.id} className="border border-[#E5DED9] rounded-xl overflow-hidden bg-[#FAF8F6]">
                    <div className="flex items-center justify-between p-4 bg-white border-b border-[#E5DED9]">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={section.enabled}
                          onChange={e => {
                            const newSecs = [...data.sections];
                            newSecs[idx].enabled = e.target.checked;
                            setData({...data, sections: newSecs});
                          }}
                          className="w-4 h-4 accent-[#FF6A00]"
                        />
                        <input 
                          type="text" 
                          value={section.title}
                          onChange={e => {
                            const newSecs = [...data.sections];
                            newSecs[idx].title = e.target.value;
                            setData({...data, sections: newSecs});
                          }}
                          className="font-bold text-[#0A0A0A] bg-transparent focus:outline-none focus:border-b focus:border-[#FF6A00]"
                        />
                      </div>
                    </div>
                    {section.enabled && (
                      <div className="p-4">
                        <textarea 
                          rows={6}
                          value={section.content}
                          onChange={e => {
                            const newSecs = [...data.sections];
                            newSecs[idx].content = e.target.value;
                            setData({...data, sections: newSecs});
                          }}
                          className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-3 text-sm focus:border-[#FF6A00] focus:outline-none resize-y"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Custom Pricing Line</label>
                  <input 
                    type="text" 
                    value={data.customPrice}
                    onChange={e => setData({...data, customPrice: e.target.value})}
                    className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    placeholder="e.g. $1,500 / month"
                  />
                  <p className="text-xs text-[#8A817C] mt-1">Leave blank to hide the investment section.</p>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Add-ons (Comma separated)</label>
                  <input 
                    type="text" 
                    value={data.addOns.join(', ')}
                    onChange={e => setData({...data, addOns: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})}
                    className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                    placeholder="e.g. Google Ads Setup, Monthly Reporting"
                  />
                </div>
              </div>
            )}

            {activeTab === 'master' && (
              <div className="space-y-6">
                <p className="text-sm text-[#5C504A] mb-4">Master Company Data persists across all proposals.</p>
                <div>
                  <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Company Name</label>
                  <input 
                    type="text" 
                    value={masterData.name}
                    onChange={e => setMasterData({...masterData, name: e.target.value})}
                    className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-[#5C504A] mb-1.5 block">Default Terms & Conditions</label>
                  <textarea 
                    rows={10}
                    value={masterData.terms}
                    onChange={e => setMasterData({...masterData, terms: e.target.value})}
                    className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-2.5 focus:border-[#FF6A00] focus:outline-none resize-y"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Live A4 Preview */}
        <div className="w-full lg:w-[55%] xl:w-[60%] bg-[#E5DED9]/30 p-8 overflow-y-auto flex justify-center custom-scrollbar">
          <div className="transform scale-[0.6] sm:scale-75 lg:scale-90 xl:scale-100 origin-top shadow-2xl rounded-sm transition-transform">
             <ProposalPreview ref={previewRef} data={data} masterData={masterData} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProposalPage;
