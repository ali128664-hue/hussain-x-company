import React, { forwardRef } from 'react';
import { ProposalState, MasterCompanyData, PricingPackage, Currency } from '../../types/proposal';
import { proposalTemplates, formatPrice } from '../../data/proposalTemplates';

interface Props {
  data: ProposalState;
  masterData: MasterCompanyData;
}

// ─── Shared PDF Styles ─────────────────────────────────────────────────────────

const BRAND = '#FF6A00';
const DARK = '#0A0A0A';
const MID = '#5C504A';
const LIGHT = '#FAF8F6';
const BORDER = '#E5DED9';

// ─── Sub-components ───────────────────────────────────────────────────────────

const PageWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`relative bg-white ${className}`}
    style={{
      width: '210mm',
      minHeight: '297mm',
      pageBreakAfter: 'always',
      overflow: 'hidden',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    }}
  >
    {children}
  </div>
);

const PageHeader: React.FC<{ label: string; pageNum: number; total?: number }> = ({ label, pageNum, total }) => (
  <div style={{ background: DARK, padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ color: BRAND, fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
      Hussain X Solutions
    </span>
    <span style={{ color: '#888', fontSize: '9px', letterSpacing: '1px' }}>
      {label}
    </span>
    {total && (
      <span style={{ color: '#555', fontSize: '9px' }}>
        {pageNum} / {total}
      </span>
    )}
  </div>
);

const PageFooter: React.FC<{ pageNum: number; masterData: MasterCompanyData }> = ({ pageNum, masterData }) => (
  <div style={{
    position: 'absolute', bottom: 0, left: 0, right: 0,
    background: LIGHT, borderTop: `2px solid ${BORDER}`,
    padding: '8px 40px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
  }}>
    <span style={{ fontSize: '8px', color: MID }}>{masterData.website}</span>
    <span style={{ fontSize: '8px', color: MID }}>Strictly Confidential</span>
    <span style={{ fontSize: '8px', color: BRAND, fontWeight: 700 }}>Page {pageNum}</span>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ marginBottom: '20px' }}>
    <div style={{ width: '36px', height: '4px', background: BRAND, borderRadius: '2px', marginBottom: '10px' }} />
    <h2 style={{ fontSize: '22px', fontWeight: 800, color: DARK, margin: 0, lineHeight: 1.2 }}>{children}</h2>
  </div>
);

const FeatureRow: React.FC<{ text: string; included: boolean }> = ({ text, included }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0', borderBottom: `1px solid ${BORDER}` }}>
    <span style={{
      width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
      background: included ? BRAND : '#E5DED9', color: included ? '#fff' : MID,
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700
    }}>
      {included ? '✓' : '×'}
    </span>
    <span style={{ fontSize: '11px', color: included ? DARK : '#aaa', textDecoration: included ? 'none' : 'line-through' }}>
      {text}
    </span>
  </div>
);

// ─── Main Preview ─────────────────────────────────────────────────────────────

export const ProposalPreview = forwardRef<HTMLDivElement, Props>(({ data, masterData }, ref) => {
  const template = proposalTemplates[data.service];
  if (!template) return <div className="p-8 text-center text-gray-400">Select a service to see the preview.</div>;

  const selectedPkg = data.selectedPackageId
    ? template.packages.find(p => p.id === data.selectedPackageId)
    : null;

  const selectedAddOns = template.addOns.filter(a => data.selectedAddOnIds.includes(a.id));

  const totalAddOnsPKR = selectedAddOns.reduce((s, a) => s + a.price_pkr, 0);
  const totalAddOnsUSD = selectedAddOns.reduce((s, a) => s + a.price_usd, 0);

  const basePKR = selectedPkg?.price_pkr || 0;
  const baseUSD = selectedPkg?.price_usd || 0;

  const enabledSections = data.sections.filter(s => s.enabled).sort((a, b) => a.order - b.order);

  return (
    <div ref={ref} style={{ background: '#e8e8e8', padding: '20px 0', fontFamily: "'Poppins', sans-serif" }}>

      {/* ══════════════════════════════════════════
          PAGE 1: COVER
      ══════════════════════════════════════════ */}
      <PageWrapper>
        {/* Left dark sidebar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '72px',
          background: DARK,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'space-between', padding: '30px 0'
        }}>
          <div style={{ color: BRAND, fontSize: '20px', fontWeight: 900, writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '3px' }}>
            HXS
          </div>
          <div style={{ width: '2px', background: BRAND, flex: 1, margin: '20px 0', borderRadius: '2px', maxHeight: '80px' }} />
          <div style={{ color: '#555', fontSize: '9px', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '2px' }}>
            {new Date().getFullYear()}
          </div>
        </div>

        {/* Cover image or gradient background */}
        <div style={{
          position: 'absolute', left: '72px', top: 0, right: 0, height: '55%',
          background: data.client.coverImage
            ? `url(${data.client.coverImage}) center/cover no-repeat`
            : `linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 50%, #16213e 100%)`,
          overflow: 'hidden',
        }}>
          {!data.client.coverImage && (
            <>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: `${BRAND}22`, blur: '60px' }} />
              <div style={{ position: 'absolute', bottom: '-20px', left: '20px', width: '120px', height: '120px', borderRadius: '50%', background: `${BRAND}15` }} />
              {/* Abstract grid lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={i} x1={`${i * 14}%`} y1="0" x2={`${i * 14}%`} y2="100%" stroke="white" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line key={i} x1="0" y1={`${i * 18}%`} x2="100%" y2={`${i * 18}%`} stroke="white" strokeWidth="0.5" />
                ))}
              </svg>
            </>
          )}
          {/* Orange accent bar */}
          <div style={{ position: 'absolute', top: '0', left: '0', width: '4px', height: '100%', background: BRAND }} />
          {/* Service badge */}
          <div style={{
            position: 'absolute', top: '28px', right: '28px',
            background: BRAND, color: '#fff',
            padding: '6px 16px', borderRadius: '20px',
            fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase'
          }}>
            {template.icon} {data.service}
          </div>
        </div>

        {/* Content area below image */}
        <div style={{ position: 'absolute', left: '72px', right: 0, top: '55%', bottom: 0, padding: '32px 36px', background: '#fff' }}>
          {/* Company logo / name */}
          <div style={{ marginBottom: '20px' }}>
            {masterData.logo
              ? <img src={masterData.logo} alt={masterData.name} style={{ height: '36px', objectFit: 'contain' }} />
              : <div style={{ fontSize: '13px', fontWeight: 800, color: DARK, letterSpacing: '2px', textTransform: 'uppercase' }}>{masterData.name}</div>
            }
          </div>

          {/* Proposal title */}
          <div style={{ fontSize: '9px', fontWeight: 700, color: BRAND, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Digital Strategy Proposal
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: DARK, lineHeight: 1.2, margin: '0 0 20px' }}>
            {data.service}
          </h1>
          <p style={{ fontSize: '11px', color: MID, margin: '0 0 24px', lineHeight: 1.5 }}>
            {template.tagline}
          </p>

          {/* Divider */}
          <div style={{ borderTop: `2px solid ${BORDER}`, paddingTop: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '8px', color: MID, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Prepared For</div>
                {data.client.logo
                  ? <img src={data.client.logo} alt={data.client.name} style={{ height: '28px', objectFit: 'contain', marginBottom: '6px' }} />
                  : null
                }
                <div style={{ fontSize: '16px', fontWeight: 800, color: DARK }}>{data.client.name || 'Client Name'}</div>
                <div style={{ fontSize: '11px', color: MID }}>{data.client.industry || 'Industry'}</div>
              </div>
              <div>
                <div style={{ fontSize: '8px', color: MID, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Proposal Details</div>
                <div style={{ fontSize: '11px', color: DARK, fontWeight: 600 }}>{data.proposalNumber}</div>
                <div style={{ fontSize: '10px', color: MID }}>Date: {data.client.proposalDate || new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                <div style={{ fontSize: '10px', color: MID }}>Valid: {data.client.validUntil || '30 Days'}</div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ══════════════════════════════════════════
          PAGE 2: EXECUTIVE SUMMARY + UNDERSTANDING
      ══════════════════════════════════════════ */}
      {enabledSections.filter(s => ['exec_summary', 'understanding', 'goals'].includes(s.id)).length > 0 && (
        <PageWrapper style={{ marginTop: '10px' }}>
          <PageHeader label="Overview" pageNum={2} />
          <div style={{ padding: '32px 40px 60px' }}>

            {enabledSections.filter(s => s.id === 'exec_summary').map(s => (
              <div key={s.id} style={{ marginBottom: '32px' }}>
                <SectionTitle>{s.title}</SectionTitle>
                {/* 3 highlight cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                  {[
                    { label: 'Client', value: data.client.name || '—', icon: '👤' },
                    { label: 'Service', value: data.service, icon: template.icon },
                    { label: 'Package', value: selectedPkg?.name || 'Custom', icon: '📦' },
                  ].map((card, i) => (
                    <div key={i} style={{ background: i === 1 ? DARK : LIGHT, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '14px', textAlign: 'center' }}>
                      <div style={{ fontSize: '20px', marginBottom: '6px' }}>{card.icon}</div>
                      <div style={{ fontSize: '8px', color: i === 1 ? '#888' : MID, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{card.label}</div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: i === 1 ? '#fff' : DARK }}>{card.value}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '11px', color: MID, lineHeight: 1.7, whiteSpace: 'pre-wrap', margin: 0 }}>{s.content}</p>
              </div>
            ))}

            {enabledSections.filter(s => s.id === 'understanding').map(s => (
              <div key={s.id} style={{ marginBottom: '28px' }}>
                <SectionTitle>{s.title}</SectionTitle>
                <p style={{ fontSize: '11px', color: MID, lineHeight: 1.7, whiteSpace: 'pre-wrap', margin: 0 }}>{s.content}</p>
              </div>
            ))}

            {enabledSections.filter(s => s.id === 'goals').map(s => (
              <div key={s.id}>
                <SectionTitle>{s.title}</SectionTitle>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {s.content.split('\n').filter(Boolean).map((goal, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px', background: LIGHT, borderRadius: '6px', border: `1px solid ${BORDER}` }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: BRAND, color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: '10px', color: DARK, lineHeight: 1.5 }}>{goal.replace(/^[•\-]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
          <PageFooter pageNum={2} masterData={masterData} />
        </PageWrapper>
      )}

      {/* ══════════════════════════════════════════
          PAGE 3: STRATEGY + PROCESS
      ══════════════════════════════════════════ */}
      <PageWrapper style={{ marginTop: '10px' }}>
        <PageHeader label="Strategy & Process" pageNum={3} />
        <div style={{ padding: '32px 40px 60px' }}>

          {enabledSections.filter(s => ['smm_strategy','seo_strategy','gads_strategy','meta_strategy','web_strategy','wp_strategy','shopify_strategy','design_strategy','content_strategy','cdm_strategy','custom_intro'].includes(s.id)).map(s => (
            <div key={s.id} style={{ marginBottom: '28px' }}>
              <SectionTitle>{s.title}</SectionTitle>
              <p style={{ fontSize: '10.5px', color: MID, lineHeight: 1.8, whiteSpace: 'pre-wrap', margin: 0 }}>{s.content}</p>
            </div>
          ))}

          {/* Process steps */}
          <SectionTitle>Our Process</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {template.process.map((step) => (
              <div key={step.step} style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '14px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '28px', fontWeight: 900, color: `${BRAND}20`, position: 'absolute', top: '6px', right: '10px' }}>
                  {String(step.step).padStart(2, '0')}
                </div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: BRAND, color: '#fff', fontSize: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                  {step.step}
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: DARK, marginBottom: '4px' }}>{step.title}</div>
                <div style={{ fontSize: '9.5px', color: MID, lineHeight: 1.5 }}>{step.description}</div>
              </div>
            ))}
          </div>

        </div>
        <PageFooter pageNum={3} masterData={masterData} />
      </PageWrapper>

      {/* ══════════════════════════════════════════
          PAGE 4: SCOPE + DELIVERABLES
      ══════════════════════════════════════════ */}
      <PageWrapper style={{ marginTop: '10px' }}>
        <PageHeader label="Scope & Deliverables" pageNum={4} />
        <div style={{ padding: '32px 40px 60px' }}>

          {enabledSections.filter(s => ['smm_scope','seo_scope','gads_scope','meta_scope','web_scope','wp_scope','shopify_scope','design_scope','content_scope','cdm_scope','custom_scope'].includes(s.id)).map(s => (
            <div key={s.id} style={{ marginBottom: '28px' }}>
              <SectionTitle>{s.title}</SectionTitle>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {s.content.split('\n').filter(Boolean).map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '8px 10px', background: LIGHT, borderRadius: '6px', border: `1px solid ${BORDER}` }}>
                    <span style={{ color: BRAND, fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '10px', color: DARK, lineHeight: 1.5 }}>{item.replace(/^✅\s*/, '')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Deliverables */}
          <SectionTitle>What You Will Receive</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {template.deliverables.map((d, i) => (
              <span key={i} style={{
                padding: '6px 14px', borderRadius: '20px',
                background: i % 3 === 0 ? DARK : i % 3 === 1 ? BRAND : LIGHT,
                color: i % 3 === 2 ? DARK : '#fff',
                border: i % 3 === 2 ? `1px solid ${BORDER}` : 'none',
                fontSize: '10px', fontWeight: 600,
              }}>
                {d}
              </span>
            ))}
          </div>

          {/* Client requirements if entered */}
          {data.client.requirements && (
            <div style={{ marginTop: '28px', padding: '20px', background: `${BRAND}08`, border: `1px solid ${BRAND}30`, borderRadius: '8px', borderLeft: `4px solid ${BRAND}` }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: BRAND, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Client Requirements & Notes</div>
              <p style={{ fontSize: '10px', color: MID, lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>{data.client.requirements}</p>
            </div>
          )}

        </div>
        <PageFooter pageNum={4} masterData={masterData} />
      </PageWrapper>

      {/* ══════════════════════════════════════════
          PAGE 5: PACKAGES / INVESTMENT
      ══════════════════════════════════════════ */}
      <PageWrapper style={{ marginTop: '10px' }}>
        <PageHeader label="Investment" pageNum={5} />
        <div style={{ padding: '32px 40px 60px' }}>

          <SectionTitle>Package Options</SectionTitle>

          {/* Package cards */}
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(template.packages.length, 2)}, 1fr)`, gap: '14px', marginBottom: '24px' }}>
            {template.packages.map((pkg) => {
              const isSelected = data.selectedPackageId === pkg.id;
              const isRecommended = pkg.recommended;
              return (
                <div key={pkg.id} style={{
                  border: isSelected ? `2px solid ${BRAND}` : `1px solid ${BORDER}`,
                  borderRadius: '10px', overflow: 'hidden',
                  boxShadow: isSelected ? `0 4px 20px ${BRAND}30` : 'none',
                  background: isSelected ? '#fff' : LIGHT,
                }}>
                  {/* Package header */}
                  <div style={{ background: isSelected ? DARK : '#f0ece8', padding: '14px 18px', position: 'relative' }}>
                    {isRecommended && (
                      <div style={{ position: 'absolute', top: '10px', right: '12px', background: BRAND, color: '#fff', fontSize: '8px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>
                        RECOMMENDED
                      </div>
                    )}
                    <div style={{ fontSize: '14px', fontWeight: 800, color: isSelected ? '#fff' : DARK }}>{pkg.name}</div>
                    <div style={{ fontSize: '9px', color: isSelected ? '#aaa' : MID, marginTop: '2px' }}>{pkg.tagline}</div>
                    <div style={{ marginTop: '10px' }}>
                      <span style={{ fontSize: '20px', fontWeight: 900, color: BRAND }}>
                        {formatPrice(pkg.price_pkr, pkg.price_usd, data.currency)}
                      </span>
                      <span style={{ fontSize: '9px', color: isSelected ? '#888' : MID, marginLeft: '6px' }}>/ {pkg.billingFrequency}</span>
                    </div>
                  </div>
                  {/* Features */}
                  <div style={{ padding: '12px 18px' }}>
                    {pkg.features.map((f, fi) => (
                      <FeatureRow key={fi} text={f.text} included={f.included} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected package summary */}
          {(selectedPkg || data.customPrice) && (
            <div style={{ background: DARK, borderRadius: '10px', padding: '20px 24px', color: '#fff' }}>
              <div style={{ fontSize: '9px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Selected Investment Summary</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800 }}>{selectedPkg?.name || 'Custom Package'}</div>
                  <div style={{ fontSize: '10px', color: '#888', marginTop: '2px' }}>{selectedPkg?.description || ''}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: BRAND }}>
                    {data.customPrice || (selectedPkg ? formatPrice(selectedPkg.price_pkr, selectedPkg.price_usd, data.currency) : '—')}
                  </div>
                  <div style={{ fontSize: '9px', color: '#888' }}>{selectedPkg?.billingFrequency || ''}</div>
                </div>
              </div>

              {/* Add-ons */}
              {selectedAddOns.length > 0 && (
                <>
                  <div style={{ borderTop: '1px solid #333', paddingTop: '12px', marginBottom: '8px', fontSize: '9px', color: '#888', letterSpacing: '1px', textTransform: 'uppercase' }}>Add-ons</div>
                  {selectedAddOns.map(ao => (
                    <div key={ao.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '10px', color: '#ccc' }}>{ao.name}</span>
                      <span style={{ fontSize: '10px', color: BRAND, fontWeight: 600 }}>{formatPrice(ao.price_pkr, ao.price_usd, data.currency)}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid #333', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>Total</span>
                    <span style={{ fontSize: '14px', fontWeight: 900, color: BRAND }}>
                      {formatPrice(basePKR + totalAddOnsPKR, baseUSD + totalAddOnsUSD, data.currency)}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

        </div>
        <PageFooter pageNum={5} masterData={masterData} />
      </PageWrapper>

      {/* ══════════════════════════════════════════
          PAGE 6: REPORTING + KPIs + SERVICE SPECIFIC
      ══════════════════════════════════════════ */}
      <PageWrapper style={{ marginTop: '10px' }}>
        <PageHeader label="Reporting & KPIs" pageNum={6} />
        <div style={{ padding: '32px 40px 60px' }}>

          {/* Service specific sections (timeline, reporting etc) */}
          {enabledSections.filter(s => !['exec_summary','understanding','goals','why_us','terms','payment_terms','next_steps',
            'smm_strategy','seo_strategy','gads_strategy','meta_strategy','web_strategy','wp_strategy','shopify_strategy','design_strategy','content_strategy','cdm_strategy','custom_intro',
            'smm_scope','seo_scope','gads_scope','meta_scope','web_scope','wp_scope','shopify_scope','design_scope','content_scope','cdm_scope','custom_scope',
          ].includes(s.id)).map(s => (
            <div key={s.id} style={{ marginBottom: '24px' }}>
              <SectionTitle>{s.title}</SectionTitle>
              <p style={{ fontSize: '10.5px', color: MID, lineHeight: 1.8, whiteSpace: 'pre-wrap', margin: 0 }}>{s.content}</p>
            </div>
          ))}

          {/* KPI section */}
          <SectionTitle>Key Performance Indicators</SectionTitle>
          <p style={{ fontSize: '10px', color: MID, marginBottom: '14px', fontStyle: 'italic' }}>
            Key metrics we will monitor and report on regularly:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {template.kpis.map((kpi, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: LIGHT, borderRadius: '8px', border: `1px solid ${BORDER}` }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: BRAND, flexShrink: 0 }} />
                <span style={{ fontSize: '10px', color: DARK, fontWeight: 500 }}>{kpi}</span>
              </div>
            ))}
          </div>

        </div>
        <PageFooter pageNum={6} masterData={masterData} />
      </PageWrapper>

      {/* ══════════════════════════════════════════
          PAGE 7: WHY US + TERMS + NEXT STEPS
      ══════════════════════════════════════════ */}
      <PageWrapper style={{ marginTop: '10px' }}>
        <PageHeader label="Why HXS & Next Steps" pageNum={7} />
        <div style={{ padding: '32px 40px 60px' }}>

          {enabledSections.filter(s => s.id === 'why_us').map(s => (
            <div key={s.id} style={{ marginBottom: '28px' }}>
              <SectionTitle>{s.title}</SectionTitle>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {s.content.split('\n').filter(Boolean).map((point, i) => (
                  <div key={i} style={{ padding: '14px', background: i % 2 === 0 ? DARK : LIGHT, borderRadius: '8px', border: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: '10px', color: i % 2 === 0 ? '#ddd' : MID, lineHeight: 1.6, margin: 0 }}>{point.replace(/^✦\s*/, '')}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {enabledSections.filter(s => s.id === 'terms').map(s => (
            <div key={s.id} style={{ marginBottom: '24px' }}>
              <SectionTitle>{s.title}</SectionTitle>
              <div style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px 20px' }}>
                {s.content.split('\n').filter(Boolean).map((line, i) => (
                  <p key={i} style={{ fontSize: '9.5px', color: MID, lineHeight: 1.7, margin: '0 0 6px' }}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {enabledSections.filter(s => s.id === 'payment_terms').map(s => (
            <div key={s.id} style={{ marginBottom: '24px', padding: '16px 20px', background: `${BRAND}10`, border: `1px solid ${BRAND}30`, borderRadius: '8px', borderLeft: `4px solid ${BRAND}` }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: BRAND, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Payment Methods</div>
              <p style={{ fontSize: '10px', color: MID, lineHeight: 1.6, margin: 0 }}>{s.content}</p>
            </div>
          ))}

        </div>
        <PageFooter pageNum={7} masterData={masterData} />
      </PageWrapper>

      {/* ══════════════════════════════════════════
          PAGE 8: NEXT STEPS + CTA
      ══════════════════════════════════════════ */}
      <PageWrapper style={{ marginTop: '10px' }}>
        <div style={{ background: DARK, height: '100%', minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative */}
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: `${BRAND}15` }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: `${BRAND}10` }} />

          <div style={{ position: 'relative', zIndex: 1, padding: '48px 48px 40px' }}>
            <div style={{ fontSize: '9px', color: BRAND, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Final Step</div>
            {enabledSections.filter(s => s.id === 'next_steps').map(s => (
              <div key={s.id}>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#fff', margin: '0 0 32px', lineHeight: 1.2 }}>
                  Let's Build Something<br /><span style={{ color: BRAND }}>Great Together</span>
                </h2>
                <div style={{ background: '#ffffff10', borderRadius: '12px', padding: '24px 28px', border: '1px solid #ffffff15', marginBottom: '32px' }}>
                  {s.content.split('\n').filter(Boolean).map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: BRAND, color: '#fff', fontWeight: 800, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: '11px', color: '#ddd', lineHeight: 1.5, paddingTop: '3px' }}>{step.replace(/^Step \d+ —\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact info */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '32px' }}>
              {[
                { icon: '📞', label: 'Call / WhatsApp', value: masterData.phone },
                { icon: '📧', label: 'Email', value: masterData.email },
                { icon: '🌐', label: 'Website', value: masterData.website },
                { icon: '📍', label: 'Office', value: masterData.address },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#ffffff08', borderRadius: '8px', border: '1px solid #ffffff15' }}>
                  <span style={{ fontSize: '18px' }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: '8px', color: '#888', letterSpacing: '1px', textTransform: 'uppercase' }}>{c.label}</div>
                    <div style={{ fontSize: '10px', color: '#fff', fontWeight: 600 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer branding */}
            <div style={{ borderTop: '1px solid #333', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>HUSSAIN X SOLUTIONS</div>
                <div style={{ fontSize: '9px', color: '#888', marginTop: '2px' }}>Premium Digital Agency · Lahore, Pakistan</div>
              </div>
              <div style={{ fontSize: '9px', color: '#555' }}>
                {data.proposalNumber} · {data.client.proposalDate || new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      <style>{`
        @page { size: A4 portrait; margin: 0; }
        @media print {
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          * { box-sizing: border-box; }
        }
      `}</style>
    </div>
  );
});

ProposalPreview.displayName = 'ProposalPreview';
