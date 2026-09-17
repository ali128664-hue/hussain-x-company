import React, { forwardRef } from 'react';
import { ProposalState, MasterCompanyData } from '../../types/proposal';
import { proposalTemplates, formatPrice } from '../../data/proposalTemplates';

interface Props {
  data: ProposalState;
  masterData: MasterCompanyData;
}

const BRAND = '#FF6A00';
const DARK  = '#0A0A0A';
const MID   = '#5C504A';
const LIGHT  = '#FAF8F6';
const BORDER = '#E5DED9';

// ─── Header & Footer Components ───────────────────────────────────────────────

const Hdr: React.FC<{ label: string; pg: number }> = ({ label, pg }) => (
  <div style={{
    background: DARK,
    padding: '8px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    borderBottom: `2px solid ${BRAND}`,
  }}>
    <span style={{ color: BRAND, fontWeight: 800, fontSize: 9.5, letterSpacing: 2, textTransform: 'uppercase' }}>
      Hussain X Solutions
    </span>
    <span style={{ color: '#999', fontSize: 8.5, letterSpacing: 1, textTransform: 'uppercase' }}>
      {label}
    </span>
    <span style={{ color: '#bbb', fontSize: 8.5, fontWeight: 600 }}>
      Page {pg}
    </span>
  </div>
);

const Ftr: React.FC<{ pg: number; web: string }> = ({ pg, web }) => (
  <div style={{
    background: LIGHT,
    borderTop: `1px solid ${BORDER}`,
    padding: '6px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  }}>
    <span style={{ fontSize: 8, color: MID }}>{web}</span>
    <span style={{ fontSize: 8, color: MID }}>Confidential Proposal</span>
    <span style={{ fontSize: 8, color: BRAND, fontWeight: 700 }}>Page {pg}</span>
  </div>
);

const SecTitle: React.FC<{ children: React.ReactNode; size?: number; mb?: number }> = ({ children, size = 18, mb = 12 }) => (
  <div style={{ marginBottom: mb }}>
    <div style={{ width: 32, height: 3.5, background: BRAND, borderRadius: 2, marginBottom: 6 }} />
    <h2 style={{ fontSize: size, fontWeight: 800, color: DARK, margin: 0, lineHeight: 1.2 }}>{children}</h2>
  </div>
);

const FeatureDot: React.FC<{ text: string; inc: boolean }> = ({ text, inc }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0', borderBottom: `1px solid ${BORDER}` }}>
    <span style={{
      width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
      background: inc ? BRAND : '#ddd', color: inc ? '#fff' : '#aaa',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 8, fontWeight: 800,
    }}>
      {inc ? '✓' : '×'}
    </span>
    <span style={{ fontSize: 9.5, color: inc ? DARK : '#aaa', textDecoration: inc ? 'none' : 'line-through', lineHeight: 1.3 }}>
      {text}
    </span>
  </div>
);

// ─── Standard A4 Page Container ───────────────────────────────────────────────

const Page: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  pg?: number;
  label?: string;
  masterData?: MasterCompanyData;
}> = ({ children, dark, pg, label, masterData }) => (
  <div
    className="proposal-page"
    style={{
      width: '210mm',
      height: '296.5mm',
      maxHeight: '296.5mm',
      background: dark ? DARK : '#fff',
      pageBreakAfter: 'always',
      pageBreakInside: 'avoid',
      breakAfter: 'page',
      breakInside: 'avoid',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box',
    }}
  >
    {label && pg && <Hdr label={label} pg={pg} />}
    <div style={{
      padding: '22px 32px',
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}>
      {children}
    </div>
    {masterData && pg && <Ftr pg={pg} web={masterData.website} />}
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────

export const ProposalPreview = forwardRef<HTMLDivElement, Props>(({ data, masterData }, ref) => {
  const template = proposalTemplates[data.service];
  if (!template) {
    return (
      <div style={{ width: '210mm', background: '#fff', padding: 60, textAlign: 'center', color: '#aaa' }}>
        Select a service to preview proposal.
      </div>
    );
  }

  const selectedPkg = data.selectedPackageId
    ? template.packages.find(p => p.id === data.selectedPackageId) ?? null
    : null;

  const selectedAddOns = template.addOns.filter(a => data.selectedAddOnIds.includes(a.id));
  const totalAddOnsPKR = selectedAddOns.reduce((s, a) => s + a.price_pkr, 0);
  const totalAddOnsUSD = selectedAddOns.reduce((s, a) => s + a.price_usd, 0);
  const basePKR = selectedPkg?.price_pkr ?? 0;
  const baseUSD = selectedPkg?.price_usd ?? 0;

  const enabledSec = [...data.sections].filter(s => s.enabled).sort((a, b) => a.order - b.order);
  const getSec = (id: string) => enabledSec.find(s => s.id === id);

  const strategySec = enabledSec.find(s =>
    ['smm_strategy','seo_strategy','gads_strategy','meta_strategy','web_strategy',
     'wp_strategy','shopify_strategy','design_strategy','content_strategy','cdm_strategy','custom_intro'].includes(s.id)
  );

  const scopeSec = enabledSec.find(s =>
    ['smm_scope','seo_scope','gads_scope','meta_scope','web_scope',
     'wp_scope','shopify_scope','design_scope','content_scope','cdm_scope','custom_scope'].includes(s.id)
  );

  const extraSecs = enabledSec.filter(s =>
    !['exec_summary','understanding','goals','why_us','terms','payment_terms','next_steps',
      'smm_strategy','seo_strategy','gads_strategy','meta_strategy','web_strategy',
      'wp_strategy','shopify_strategy','design_strategy','content_strategy','cdm_strategy','custom_intro',
      'smm_scope','seo_scope','gads_scope','meta_scope','web_scope',
      'wp_scope','shopify_scope','design_scope','content_scope','cdm_scope','custom_scope',
    ].includes(s.id)
  );

  // Check if we have visual/reels media or content previews
  const hasReelsOrGifs = (data.client.reelGifs && data.client.reelGifs.length > 0) || extraSecs.length > 0 || template.kpis.length > 0;

  let pageIndex = 1;

  return (
    <div ref={ref} className="proposal-preview-wrapper" style={{ background: '#D8D4D0', padding: '16px 0' }}>

      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 1: COVER PAGE
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="proposal-page"
        style={{
          width: '210mm',
          height: '296.5mm',
          maxHeight: '296.5mm',
          background: '#fff',
          pageBreakAfter: 'always',
          pageBreakInside: 'avoid',
          breakAfter: 'page',
          breakInside: 'avoid',
          fontFamily: "'Poppins', sans-serif",
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          marginBottom: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Dark Hero section */}
        <div style={{
          background: DARK,
          flex: 1.2,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '36px 40px',
        }}>
          {/* Background image or gradient */}
          {data.client.coverImage ? (
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${data.client.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25,
            }} />
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #201710 100%)',
            }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: `${BRAND}25`, filter: 'blur(50px)' }} />
              <div style={{ position: 'absolute', bottom: -40, left: 20, width: 160, height: 160, borderRadius: '50%', background: `${BRAND}15`, filter: 'blur(40px)' }} />
            </div>
          )}

          {/* Left vertical brand line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: BRAND }} />

          {/* Top Row: Logo & Service Pill */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {masterData.logo ? (
              <img src={masterData.logo} alt={masterData.name} style={{ height: 34, objectFit: 'contain' }} />
            ) : (
              <div style={{ color: '#fff', fontWeight: 900, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
                {masterData.name}
              </div>
            )}
            <div style={{
              background: BRAND, color: '#fff',
              padding: '5px 14px', borderRadius: 20,
              fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase',
            }}>
              {template.icon} {data.service}
            </div>
          </div>

          {/* Center: Title & Subtitle */}
          <div style={{ position: 'relative', zIndex: 2, margin: '28px 0 10px' }}>
            <div style={{ fontSize: 9, color: BRAND, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>
              Business Growth Proposal
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.15 }}>
              {data.service}
            </h1>
            <p style={{ fontSize: 12, color: '#bbb', margin: '10px 0 0', maxWidth: 460, lineHeight: 1.5 }}>
              {template.tagline}
            </p>
          </div>

          {/* Package Badge if selected */}
          {selectedPkg && (
            <div style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff14', border: '1px solid #ffffff25', borderRadius: 8, padding: '6px 14px', width: 'fit-content' }}>
              <span style={{ fontSize: 10, color: '#aaa', textTransform: 'uppercase', letterSpacing: 1 }}>Selected Tier:</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: BRAND }}>{selectedPkg.name}</span>
              <span style={{ fontSize: 10, color: '#fff' }}>·</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>
                {formatPrice(selectedPkg.price_pkr, selectedPkg.price_usd, data.currency)}/{selectedPkg.billingFrequency}
              </span>
            </div>
          )}
        </div>

        {/* Bottom Client & Meta section */}
        <div style={{
          padding: '28px 40px 24px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
            {/* Prepared For */}
            <div>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: MID, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                Prepared Exclusively For:
              </div>
              {data.client.logo && (
                <img src={data.client.logo} alt="client" style={{ height: 26, objectFit: 'contain', marginBottom: 8 }} />
              )}
              <div style={{ fontSize: 20, fontWeight: 900, color: DARK, lineHeight: 1.2 }}>
                {data.client.name || 'Valued Client'}
              </div>
              {data.client.industry && <div style={{ fontSize: 11, color: MID, marginTop: 3 }}>Industry: {data.client.industry}</div>}
              {data.client.location && <div style={{ fontSize: 10.5, color: MID }}>Location: {data.client.location}</div>}
              {data.client.contactPerson && <div style={{ fontSize: 10.5, color: MID }}>Attention: {data.client.contactPerson}</div>}
            </div>

            {/* Proposal Details */}
            <div style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: MID, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                Document Details
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 10, color: MID }}>Reference ID:</span>
                <span style={{ fontSize: 10.5, fontWeight: 800, color: BRAND }}>{data.proposalNumber}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 10, color: MID }}>Issued On:</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: DARK }}>
                  {data.client.proposalDate || new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 10, color: MID }}>Valid Until:</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: DARK }}>{data.client.validUntil || '30 Days'}</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 24, paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 9.5, color: MID }}>📞 {masterData.phone}</span>
            <span style={{ fontSize: 9.5, color: MID }}>✉️ {masterData.email}</span>
            <span style={{ fontSize: 9.5, color: BRAND, fontWeight: 700 }}>🌐 {masterData.website}</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 2: EXECUTIVE SUMMARY, OBJECTIVES & STRATEGY
      ══════════════════════════════════════════════ */}
      {(() => {
        pageIndex++;
        const p2Num = pageIndex;
        return (
          <Page pg={p2Num} label="Strategic Overview" masterData={masterData}>
            {getSec('exec_summary') && (
              <div style={{ marginBottom: 16 }}>
                <SecTitle mb={8}>{getSec('exec_summary')!.title}</SecTitle>
                {/* 3 Overview Badges */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
                  {[
                    { icon: '👤', label: 'Client', val: data.client.name || 'Valued Partner' },
                    { icon: template.icon, label: 'Service Domain', val: data.service },
                    { icon: '📦', label: 'Recommended Tier', val: selectedPkg?.name || 'Tailored Package' },
                  ].map((c, i) => (
                    <div key={i} style={{ background: i === 1 ? DARK : LIGHT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
                      <div style={{ fontSize: 16, marginBottom: 3 }}>{c.icon}</div>
                      <div style={{ fontSize: 7.5, color: i === 1 ? '#888' : MID, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: 10, fontWeight: 800, color: i === 1 ? '#fff' : DARK }}>{c.val}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 10, color: MID, lineHeight: 1.65, whiteSpace: 'pre-wrap', margin: 0 }}>
                  {getSec('exec_summary')!.content}
                </p>
              </div>
            )}

            {getSec('understanding') && (
              <div style={{ marginBottom: 14 }}>
                <SecTitle size={16} mb={6}>{getSec('understanding')!.title}</SecTitle>
                <p style={{ fontSize: 9.8, color: MID, lineHeight: 1.6, whiteSpace: 'pre-wrap', margin: 0 }}>
                  {getSec('understanding')!.content}
                </p>
              </div>
            )}

            {getSec('goals') && (
              <div style={{ marginBottom: 14 }}>
                <SecTitle size={16} mb={6}>{getSec('goals')!.title}</SecTitle>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                  {getSec('goals')!.content.split('\n').filter(Boolean).map((g, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, padding: '8px 10px', background: LIGHT, borderRadius: 6, border: `1px solid ${BORDER}` }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: BRAND, color: '#fff', fontSize: 8.5, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: 9.5, color: DARK, lineHeight: 1.4 }}>{g.replace(/^[•\-]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {strategySec && (
              <div>
                <SecTitle size={16} mb={6}>{strategySec.title}</SecTitle>
                <p style={{ fontSize: 9.5, color: MID, lineHeight: 1.6, whiteSpace: 'pre-wrap', margin: 0 }}>
                  {strategySec.content}
                </p>
              </div>
            )}
          </Page>
        );
      })()}

      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 3: SCOPE OF WORK, PROCESS & DELIVERABLES
      ══════════════════════════════════════════════ */}
      {(() => {
        pageIndex++;
        const p3Num = pageIndex;
        return (
          <Page pg={p3Num} label="Scope & Execution" masterData={masterData}>
            {scopeSec && (
              <div style={{ marginBottom: 16 }}>
                <SecTitle mb={8}>{scopeSec.title}</SecTitle>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  {scopeSec.content.split('\n').filter(Boolean).map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 6,
                      padding: '6px 9px', background: LIGHT, borderRadius: 6,
                      border: `1px solid ${BORDER}`,
                    }}>
                      <span style={{ color: BRAND, fontWeight: 800, fontSize: 11, flexShrink: 0, lineHeight: 1.3 }}>✓</span>
                      <span style={{ fontSize: 9.2, color: DARK, lineHeight: 1.4 }}>{item.replace(/^✅\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process */}
            <div style={{ marginBottom: 14 }}>
              <SecTitle size={16} mb={8}>Implementation Workflow</SecTitle>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {template.process.map(step => (
                  <div key={step.step} style={{
                    background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: 7,
                    padding: '9px 10px', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: `${BRAND}20`, position: 'absolute', top: 2, right: 6, lineHeight: 1 }}>
                      {String(step.step).padStart(2, '0')}
                    </div>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%', background: BRAND, color: '#fff',
                      fontSize: 9, fontWeight: 800, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', marginBottom: 4,
                    }}>{step.step}</div>
                    <div style={{ fontSize: 9.5, fontWeight: 700, color: DARK, marginBottom: 2 }}>{step.title}</div>
                    <div style={{ fontSize: 8.5, color: MID, lineHeight: 1.35 }}>{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div style={{ marginBottom: 12 }}>
              <SecTitle size={16} mb={6}>Deliverables Checklist</SecTitle>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {template.deliverables.map((d, i) => (
                  <span key={i} style={{
                    display: 'inline-block',
                    padding: '4px 10px', borderRadius: 16,
                    background: i % 2 === 0 ? DARK : LIGHT,
                    color: i % 2 === 0 ? '#fff' : DARK,
                    border: i % 2 === 0 ? 'none' : `1px solid ${BORDER}`,
                    fontSize: 8.5, fontWeight: 600,
                  }}>
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Requirements note if any */}
            {data.client.requirements && (
              <div style={{ padding: '10px 14px', background: `${BRAND}08`, border: `1px solid ${BRAND}30`, borderRadius: 7, borderLeft: `3px solid ${BRAND}` }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: BRAND, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 3 }}>
                  Custom Scope & Client Preferences
                </div>
                <p style={{ fontSize: 9, color: MID, lineHeight: 1.5, margin: 0, whiteSpace: 'pre-wrap' }}>
                  {data.client.requirements}
                </p>
              </div>
            )}
          </Page>
        );
      })()}

      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 4: REELS / GIFS & CREATIVE CONCEPTS (IF REELS OR MEDIA AVAILABLE)
      ══════════════════════════════════════════════ */}
      {hasReelsOrGifs && (() => {
        pageIndex++;
        const p4Num = pageIndex;
        const gifs = data.client.reelGifs || [];
        return (
          <Page pg={p4Num} label="Creative Assets & Reels" masterData={masterData}>
            <SecTitle mb={6}>Reels & Visual Content Preview</SecTitle>
            <p style={{ fontSize: 9.5, color: MID, marginBottom: 14, lineHeight: 1.5 }}>
              Short-form video content (Instagram Reels / TikTok / Shorts) drives the highest organic reach and conversions.
              <strong> Client provides raw videos/GIFs/photos</strong>, and our production team handles scripting, pacing, hooks, viral audio curation, captions, and brand styling.
            </p>

            {/* Media Mockups: If client provided GIFs/videos, show them; otherwise show creative concepts */}
            {gifs.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(gifs.length, 3)}, 1fr)`, gap: 12, marginBottom: 16 }}>
                {gifs.slice(0, 3).map((src, i) => (
                  <div key={i} style={{
                    borderRadius: 10, overflow: 'hidden', border: `2px solid ${BRAND}`,
                    background: '#000', aspectRatio: '9/16', maxHeight: 220,
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}>
                    {src.startsWith('data:video') ? (
                      <video src={src} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <img src={src} alt={`Client Reel ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                    <div style={{
                      position: 'absolute', bottom: 6, left: 6,
                      background: BRAND, color: '#fff',
                      padding: '2px 8px', borderRadius: 10,
                      fontSize: 8, fontWeight: 800,
                    }}>
                      Reel Asset {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                background: LIGHT, border: `2px dashed ${BORDER}`, borderRadius: 10,
                padding: '16px 20px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <span style={{ fontSize: 28 }}>🎬</span>
                <div>
                  <div style={{ fontSize: 10.5, fontWeight: 800, color: DARK, marginBottom: 2 }}>
                    Client Asset Workflow: Videos & GIFs
                  </div>
                  <div style={{ fontSize: 9, color: MID, lineHeight: 1.5 }}>
                    Client sends raw smartphone video clips, product showcase GIFs, or photo assets via WhatsApp/Google Drive.
                    Hussain X Solutions transforms them into high-converting branded reels with captions, sound design, and transitions.
                  </div>
                </div>
              </div>
            )}

            {/* Content Preview / Extra Sections if available */}
            {extraSecs.map(s => (
              <div key={s.id} style={{ marginBottom: 12 }}>
                <SecTitle size={14} mb={4}>{s.title}</SecTitle>
                <p style={{ fontSize: 9.2, color: MID, lineHeight: 1.55, whiteSpace: 'pre-wrap', margin: 0 }}>
                  {s.content}
                </p>
              </div>
            ))}

            {/* Performance KPIs Grid */}
            {template.kpis.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <SecTitle size={14} mb={6}>Target Performance Metrics</SecTitle>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                  {template.kpis.map((kpi, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 9px', background: LIGHT, borderRadius: 6, border: `1px solid ${BORDER}` }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: BRAND, flexShrink: 0 }} />
                      <span style={{ fontSize: 9, color: DARK, fontWeight: 600 }}>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Page>
        );
      })()}

      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 5: INVESTMENT, PACKAGES & PAYMENT TERMS
      ══════════════════════════════════════════════ */}
      {(() => {
        pageIndex++;
        const pInvNum = pageIndex;
        return (
          <Page pg={pInvNum} label="Investment & Packages" masterData={masterData}>
            <SecTitle mb={6}>Pricing & Package Options</SecTitle>
            <p style={{ fontSize: 9.5, color: MID, marginBottom: 12 }}>
              Select from our proven tiers or opt for a customized scope. All prices are transparent with zero hidden fees.
            </p>

            {/* Package Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: template.packages.length <= 2 ? `repeat(${template.packages.length}, 1fr)` : '1fr 1fr',
              gap: 10, marginBottom: 14,
            }}>
              {template.packages.map((pkg) => {
                const isSel = data.selectedPackageId === pkg.id;
                return (
                  <div key={pkg.id} style={{
                    border: isSel ? `2px solid ${BRAND}` : `1px solid ${BORDER}`,
                    borderRadius: 9, overflow: 'hidden',
                    background: isSel ? '#fff' : LIGHT,
                    boxShadow: isSel ? `0 4px 16px ${BRAND}20` : 'none',
                  }}>
                    <div style={{ background: isSel ? DARK : '#ebe7e3', padding: '9px 12px', position: 'relative' }}>
                      {pkg.recommended && (
                        <div style={{
                          position: 'absolute', top: 6, right: 8,
                          background: BRAND, color: '#fff',
                          fontSize: 7, fontWeight: 800, padding: '1.5px 6px', borderRadius: 10,
                        }}>★ RECOMMENDED</div>
                      )}
                      <div style={{ fontSize: 12, fontWeight: 800, color: isSel ? '#fff' : DARK }}>{pkg.name}</div>
                      <div style={{ fontSize: 8, color: isSel ? '#aaa' : MID }}>{pkg.tagline}</div>
                      <div style={{ marginTop: 4 }}>
                        <span style={{ fontSize: 16, fontWeight: 900, color: BRAND }}>
                          {pkg.price_pkr === 0 ? 'Custom' : formatPrice(pkg.price_pkr, pkg.price_usd, data.currency)}
                        </span>
                        <span style={{ fontSize: 8, color: isSel ? '#888' : MID, marginLeft: 4 }}>/ {pkg.billingFrequency}</span>
                      </div>
                    </div>
                    <div style={{ padding: '8px 12px', background: isSel ? '#fff' : LIGHT }}>
                      {pkg.features.map((f, fi) => (
                        <FeatureDot key={fi} text={f.text} inc={f.included} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Package Breakdown Box */}
            {(selectedPkg || data.customPrice) && (
              <div style={{ background: DARK, borderRadius: 9, padding: '14px 18px', color: '#fff', marginBottom: 12 }}>
                <div style={{ fontSize: 7.5, color: '#888', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                  Investment Summary
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800 }}>{selectedPkg?.name || 'Custom Solution'}</div>
                    <div style={{ fontSize: 8.5, color: '#888' }}>{selectedPkg?.description || 'Tailored to project specifications'}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 18, fontWeight: 900, color: BRAND }}>
                      {data.customPrice || (selectedPkg ? formatPrice(selectedPkg.price_pkr, selectedPkg.price_usd, data.currency) : '—')}
                    </div>
                    <div style={{ fontSize: 7.5, color: '#888' }}>{selectedPkg?.billingFrequency || ''}</div>
                  </div>
                </div>

                {selectedAddOns.length > 0 && (
                  <>
                    <div style={{ borderTop: '1px solid #282828', marginTop: 8, paddingTop: 6 }}>
                      {selectedAddOns.map(ao => (
                        <div key={ao.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                          <span style={{ fontSize: 8.5, color: '#bbb' }}>+ {ao.name}</span>
                          <span style={{ fontSize: 8.5, color: BRAND, fontWeight: 700 }}>
                            {formatPrice(ao.price_pkr, ao.price_usd, data.currency)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid #333', marginTop: 6, paddingTop: 6, display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 10, fontWeight: 800 }}>Total Investment</span>
                      <span style={{ fontSize: 14, fontWeight: 900, color: BRAND }}>
                        {formatPrice(basePKR + totalAddOnsPKR, baseUSD + totalAddOnsUSD, data.currency)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Payment Methods */}
            {getSec('payment_terms') && (
              <div style={{ padding: '10px 14px', background: `${BRAND}10`, border: `1px solid ${BRAND}30`, borderRadius: 7, borderLeft: `3px solid ${BRAND}` }}>
                <div style={{ fontSize: 8, fontWeight: 800, color: BRAND, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 3 }}>
                  Payment Methods & Remittance
                </div>
                <p style={{ fontSize: 9, color: MID, lineHeight: 1.5, margin: 0 }}>
                  {getSec('payment_terms')!.content}
                </p>
              </div>
            )}
          </Page>
        );
      })()}

      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 6: WHY US, TERMS & NEXT STEPS (CLOSING PAGE)
      ══════════════════════════════════════════════ */}
      {(() => {
        pageIndex++;
        const pCloseNum = pageIndex;
        return (
          <Page pg={pCloseNum} label="Terms & Next Steps" masterData={masterData}>
            {/* Why Hussain X Solutions */}
            {getSec('why_us') && (
              <div style={{ marginBottom: 14 }}>
                <SecTitle mb={6}>{getSec('why_us')!.title}</SecTitle>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                  {getSec('why_us')!.content.split('\n').filter(Boolean).map((point, i) => (
                    <div key={i} style={{ padding: '8px 10px', background: i % 2 === 0 ? LIGHT : '#fff', border: `1px solid ${BORDER}`, borderRadius: 6 }}>
                      <p style={{ fontSize: 8.8, color: DARK, lineHeight: 1.45, margin: 0 }}>
                        {point.replace(/^✦\s*/, '')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms & Conditions */}
            {getSec('terms') && (
              <div style={{ marginBottom: 14 }}>
                <SecTitle size={15} mb={6}>{getSec('terms')!.title}</SecTitle>
                <div style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: 7, padding: '10px 12px' }}>
                  {getSec('terms')!.content.split('\n').filter(Boolean).slice(0, 5).map((line, i) => (
                    <p key={i} style={{ fontSize: 8.2, color: MID, lineHeight: 1.45, margin: '0 0 3px' }}>{line}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Next Steps */}
            {getSec('next_steps') && (
              <div style={{ marginBottom: 14 }}>
                <SecTitle size={15} mb={6}>Next Steps to Kick-Off</SecTitle>
                <div style={{ background: '#fcfbfa', border: `1px solid ${BORDER}`, borderRadius: 7, padding: '10px 14px' }}>
                  {getSec('next_steps')!.content.split('\n').filter(Boolean).map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5, alignItems: 'center' }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: BRAND, color: '#fff', fontWeight: 800, fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: 9, color: DARK, lineHeight: 1.35 }}>
                        {step.replace(/^Step \d+ —\s*/, '')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Box */}
            <div style={{ background: DARK, borderRadius: 8, padding: '12px 16px', color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>📞</span>
                <div>
                  <div style={{ fontSize: 7, color: '#888', textTransform: 'uppercase' }}>Phone / WhatsApp</div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, color: '#fff' }}>{masterData.phone}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>✉️</span>
                <div>
                  <div style={{ fontSize: 7, color: '#888', textTransform: 'uppercase' }}>Official Email</div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, color: '#fff' }}>{masterData.email}</div>
                </div>
              </div>
            </div>
          </Page>
        );
      })()}

      {/* ══════════════════════════════════════════════════════════════════════
          PRINT SPECIFIC CSS STYLES
      ══════════════════════════════════════════════════════════════════════ */}
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .proposal-preview-wrapper {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .proposal-page {
            width: 210mm !important;
            height: 296.5mm !important;
            max-height: 296.5mm !important;
            margin: 0 auto !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            box-shadow: none !important;
            overflow: hidden !important;
          }
          .proposal-page:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
        }
      `}</style>
    </div>
  );
});

ProposalPreview.displayName = 'ProposalPreview';
