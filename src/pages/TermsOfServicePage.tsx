import React, { useEffect } from 'react';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SEOHead } from '@/components/SEOHead';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the website and services of HUSSAIN X SOLUTION ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service.',
      'If you do not agree with any part of these terms, you may not access our website or engage our services. These Terms apply to all visitors, clients, and users of our services.',
    ],
  },
  {
    title: '2. Services Provided',
    content: [
      'HUSSAIN X SOLUTION offers a comprehensive range of digital services including but not limited to:',
      '• Custom Software Development (Web, Mobile, SaaS, ERP, CRM)',
      '• UI/UX Design and Branding',
      '• Digital Marketing (SEO, Social Media, PPC, Content Marketing)',
      '• Cloud & DevOps, AI & Automation, Cyber Security',
      '• E-Commerce Development and Maintenance & Support',
      'The scope, timeline, and deliverables of each project are defined in a separate written agreement or proposal accepted by both parties.',
    ],
  },
  {
    title: '3. Client Responsibilities',
    content: [
      'As a client, you agree to:',
      '• Provide accurate, complete, and timely information required for project delivery.',
      '• Respond to our requests for feedback, approvals, and content within agreed timelines.',
      '• Ensure that all content, logos, images, and materials you provide are legally owned or licensed by you.',
      '• Make payments according to the agreed schedule outlined in your project agreement.',
      'Delays caused by late responses or incomplete information from the client may result in revised timelines and additional costs.',
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      'Upon full payment of all invoices, HUSSAIN X SOLUTION transfers ownership of the final deliverables to the client.',
      'We retain the right to use completed projects in our portfolio, case studies, and marketing materials unless explicitly agreed otherwise in writing.',
      'All source code, designs, and proprietary tools developed by HUSSAIN X SOLUTION prior to or independent of your project remain our intellectual property.',
      'Any third-party tools, plugins, or libraries used in your project are subject to their respective licenses.',
    ],
  },
  {
    title: '5. Payment Terms',
    content: [
      'Payment terms are as specified in the individual project proposal or contract.',
      '• Projects typically require a deposit (50% or as agreed) before work begins.',
      '• Remaining balances are due upon project completion or delivery of final files.',
      '• Late payments may incur a late fee of 2% per month on outstanding balances.',
      '• We reserve the right to pause or withhold project delivery until outstanding payments are received.',
      'All prices are in Pakistani Rupees (PKR) or US Dollars (USD) as specified in the agreement.',
    ],
  },
  {
    title: '6. Revisions & Change Requests',
    content: [
      'Each project includes a defined number of revision rounds as specified in the project proposal.',
      'Additional revisions or changes beyond the agreed scope will be quoted and billed separately.',
      'Major scope changes — such as significant feature additions or design overhauls — may require a revised timeline and pricing agreement.',
    ],
  },
  {
    title: '7. Confidentiality',
    content: [
      'Both parties agree to treat any shared information — including business strategies, technical specifications, and proprietary data — as confidential.',
      'We will not disclose your confidential information to third parties without your prior written consent, except as required by law.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'HUSSAIN X SOLUTION shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.',
      'Our total liability to any client for any claim arising out of our services shall not exceed the total amount paid by the client for those services.',
      'We are not responsible for third-party services, platforms, or tools used in delivering your project (e.g., hosting outages, plugin bugs).',
    ],
  },
  {
    title: '9. Termination',
    content: [
      'Either party may terminate the service agreement with 14 days written notice.',
      'Upon termination, the client is responsible for payment of all work completed up to the termination date.',
      'We reserve the right to immediately terminate services for non-payment, breach of these Terms, or abusive conduct.',
    ],
  },
  {
    title: '10. Governing Law',
    content: [
      'These Terms of Service are governed by the laws of Pakistan.',
      'Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      'For questions about these Terms of Service, please contact:',
      'Email: info@hussainxsolution.com',
      'Phone: +92 348 0766608',
      'Address: Model Town Q Block, Lahore, Pakistan',
    ],
  },
];

const TermsOfServicePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-20">
      <SEOHead
        title="Terms of Service"
        description="Read the Terms of Service for Hussain X Solution. Understand our project agreements, delivery processes, and service policies."
        canonicalPath="/terms-of-service"
      />
      <section className="relative overflow-hidden py-16 border-b border-[#E5DED9] text-center bg-[#FFFFFF]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6A00]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5DED9] bg-[#FAF8F6] mb-6">
              <span className="text-xs font-semibold text-[#FF6A00] tracking-wide uppercase">Legal Document</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Terms of <GradientText>Service</GradientText>
            </h1>
            <p className="text-[#5C504A] text-sm mb-4">Last Updated: September 2026</p>
            <p className="text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              Please read these Terms of Service carefully before using our services. By engaging with <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong>, you agree to be bound by these terms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <div className="bg-[#FAF8F6] border border-[#E5DED9] rounded-2xl p-8 shadow-sm">
                <h2 className="text-lg font-bold text-[#FF6A00] mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-[#5C504A] leading-relaxed text-sm">{para}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
