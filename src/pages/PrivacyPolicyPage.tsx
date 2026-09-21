import React, { useEffect } from 'react';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SEOHead } from '@/components/SEOHead';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you visit our website or contact us, we may collect the following types of information:',
      '• Personal Information: Name, email address, phone number, and company name when you fill out our contact form or request a consultation.',
      '• Usage Data: Information about how you interact with our website, including pages visited, time spent, and browser type.',
      '• Communication Data: Messages, emails, or inquiries you send us directly.',
      'We only collect information that is necessary to provide our services and improve your experience.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      '• To respond to your inquiries and provide the services you have requested.',
      '• To communicate with you about project updates, proposals, and service information.',
      '• To improve our website content and user experience.',
      '• To send relevant service updates or promotional content (only if you have opted in).',
      'We will never sell, rent, or trade your personal information to third parties for marketing purposes.',
    ],
  },
  {
    title: '3. Cookies & Tracking Technologies',
    content: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience.',
      '• Essential Cookies: Required for basic website functionality.',
      '• Analytics Cookies: Help us understand how visitors use our site (e.g., Google Analytics).',
      '• Preference Cookies: Remember your settings and preferences.',
      'You can control or disable cookies through your browser settings.',
    ],
  },
  {
    title: '4. Data Sharing & Third Parties',
    content: [
      'We may share your information with trusted third-party service providers who assist us in operating our business, such as hosting providers, analytics platforms, and communication tools.',
      'All third-party partners are contractually obligated to handle your data securely. We do not sell your data to any third party.',
    ],
  },
  {
    title: '5. Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your information against unauthorized access, including SSL encryption, secure server infrastructure, and restricted access controls.',
      'However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'You may have the following rights regarding your personal data:',
      '• Right to Access: Request a copy of the personal data we hold about you.',
      '• Right to Rectification: Request correction of inaccurate or incomplete data.',
      '• Right to Erasure: Request deletion of your personal data.',
      '• Right to Object: Object to our processing of your personal data.',
      'To exercise any of these rights, please contact us at info@hussainxsolution.com.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    content: [
      'We reserve the right to update this Privacy Policy at any time. When we make significant changes, we will update the date at the top of this page.',
      'We encourage you to review this page periodically to stay informed about how we protect your information.',
    ],
  },
  {
    title: '8. Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, please contact us:',
      'Email: info@hussainxsolution.com',
      'Phone: +92 348 0766608',
      'Address: Model Town Q Block, Lahore, Pakistan',
    ],
  },
];

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-20">
      <SEOHead
        title="Privacy Policy"
        description="Read the official Privacy Policy of Hussain X Solution. Understand how we collect, protect, and use your personal information."
        canonicalPath="/privacy-policy"
      />
      <section className="relative overflow-hidden py-16 border-b border-[#E5DED9] text-center bg-[#FFFFFF]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6A00]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5DED9] bg-[#FAF8F6] mb-6">
              <span className="text-xs font-semibold text-[#FF6A00] tracking-wide uppercase">Legal Document</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Privacy <GradientText>Policy</GradientText>
            </h1>
            <p className="text-[#5C504A] text-sm mb-4">Last Updated: September 2026</p>
            <p className="text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              At <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong>, your privacy is our priority. This policy explains how we collect, use, and protect your personal information when you use our website or services.
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

export default PrivacyPolicyPage;
