import React, { forwardRef } from 'react';
import { ProposalState, MasterCompanyData } from '../../types/proposal';

interface Props {
  data: ProposalState;
  masterData: MasterCompanyData;
}

export const ProposalPreview = forwardRef<HTMLDivElement, Props>(({ data, masterData }, ref) => {
  const selectedPackage = data.selectedPackageId 
    ? (/* find package logic passed or done here, actually let's pass selectedPackage directly if possible, or lookup */ null) 
    : null;

  return (
    <div 
      ref={ref} 
      className="bg-white print:bg-white text-black print:text-black w-full min-h-screen font-sans"
      style={{
        // A4 proportions for preview (210x297mm) -> roughly 1:1.414
        // In print mode, standard A4 margins apply.
      }}
    >
      {/* Page 1: Cover */}
      <div className="proposal-page flex flex-col justify-between h-[297mm] w-[210mm] mx-auto p-12 bg-white shadow-xl print:shadow-none print:w-auto print:h-screen relative overflow-hidden page-break-after">
        
        {/* Cover Background/Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 pt-20">
          <div className="mb-16">
            {masterData.logo ? (
               <img src={masterData.logo} alt={masterData.name} className="h-16 object-contain" />
            ) : (
               <h1 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A] uppercase">{masterData.name}</h1>
            )}
          </div>
          
          <div className="space-y-6 mt-32">
            <h2 className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm">Proposal</h2>
            <h1 className="text-6xl font-black text-[#0A0A0A] leading-tight">
              {data.service} <br />
              Strategy
            </h1>
          </div>
        </div>

        <div className="relative z-10 border-t-2 border-[#0A0A0A] pt-8 mt-auto mb-16">
          <p className="text-sm font-bold text-[#8A817C] uppercase tracking-wider mb-2">Prepared For</p>
          {data.client.logo && (
            <img src={data.client.logo} alt={data.client.name} className="h-12 object-contain mb-4" />
          )}
          <h3 className="text-3xl font-bold text-[#0A0A0A]">{data.client.name || 'Client Name'}</h3>
          <p className="text-lg text-[#5C504A] mt-1">{data.client.industry || 'Industry'}</p>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-[#0A0A0A] font-semibold">{data.client.proposalDate || new Date().toLocaleDateString()}</p>
            <p className="text-[#5C504A] text-sm">Valid until: {data.client.validUntil || '30 days'}</p>
          </div>
        </div>
      </div>

      {/* Internal Pages */}
      <div className="px-12 py-16 w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:w-auto">
        {data.sections.filter(s => s.enabled).sort((a,b) => a.order - b.order).map((section, idx) => (
          <div key={section.id} className="mb-16 page-break-inside-avoid">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6 pb-2 border-b-2 border-[#FF6A00] inline-block">
              {section.title}
            </h2>
            <div className="text-[#5C504A] leading-relaxed whitespace-pre-wrap text-lg">
              {section.content}
            </div>
          </div>
        ))}

        {/* Pricing Section (Rendered dynamically if package selected) */}
        {data.customPrice && (
          <div className="mb-16 page-break-inside-avoid">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6 pb-2 border-b-2 border-[#FF6A00] inline-block">
              Investment
            </h2>
            <div className="bg-[#FAF8F6] border border-[#E5DED9] p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-[#E5DED9] pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A]">Proposed Package</h3>
                  <p className="text-[#5C504A] mt-1">Based on our requirements analysis</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-[#FF6A00]">{data.customPrice}</div>
                  <div className="text-sm text-[#5C504A] font-medium uppercase tracking-wider mt-1">Investment</div>
                </div>
              </div>
              {data.addOns.length > 0 && (
                <div>
                  <h4 className="font-bold mb-3 text-[#0A0A0A]">Selected Add-ons:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[#5C504A]">
                    {data.addOns.map((addon, i) => (
                      <li key={i}>{addon}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
      
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page-break-after { page-break-after: always; }
          .page-break-inside-avoid { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
});
