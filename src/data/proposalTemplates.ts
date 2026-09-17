import { ProposalTemplate, MasterCompanyData, ProposalSection, PricingPackage } from '../types/proposal';

export const defaultMasterData: MasterCompanyData = {
  name: 'Hussain X Solutions',
  website: 'hussainxsolution.com',
  email: 'info@hussainxsolution.com',
  phone: '0348-0766608',
  address: 'Model Town Q Block, Lahore, Pakistan',
  logo: null,
  about: 'We are a premium digital agency specializing in custom software, modern web development, and result-oriented digital marketing strategies.',
  terms: '1. Payment Terms: 50% upfront, 50% upon completion.\n2. Revisions: Up to 3 rounds of minor revisions are included.\n3. Cancellation: Either party may terminate the agreement with 15 days written notice.\n4. Confidentiality: All client data remains strictly confidential.'
};

const commonSections: ProposalSection[] = [
  { id: 'exec_summary', title: 'Executive Summary', content: 'We are thrilled to present this proposal. Our goal is to partner with you to accelerate your growth and deliver outstanding results.', enabled: true, order: 1 },
  { id: 'understanding', title: 'Understanding Your Business', content: 'Based on our discussions, we understand that you are looking to expand your digital presence and drive more targeted results in your industry.', enabled: true, order: 2 },
  { id: 'goals', title: 'Goals & Objectives', content: '- Increase brand visibility\n- Drive qualified traffic\n- Improve conversion rates\n- Establish a strong market presence', enabled: true, order: 3 },
  { id: 'why_us', title: 'Why Hussain X Solutions', content: 'We bring a blend of strategic thinking, creative design, and technical excellence. Our team is dedicated to your success, offering transparent communication and data-driven results.', enabled: true, order: 90 },
  { id: 'terms', title: 'Terms & Conditions', content: defaultMasterData.terms, enabled: true, order: 91 },
  { id: 'next_steps', title: 'Next Steps', content: '1. Review this proposal\n2. Sign the agreement\n3. Kick-off meeting\n4. Project commencement', enabled: true, order: 92 }
];

export const proposalTemplates: Record<string, ProposalTemplate> = {
  'Social Media Marketing': {
    serviceName: 'Social Media Marketing',
    sections: [
      ...commonSections,
      { id: 'strategy', title: 'Proposed Strategy', content: 'Our social media strategy focuses on community building, engaging visual content, and consistent brand messaging across Instagram, Facebook, and LinkedIn.', enabled: true, order: 4 },
      { id: 'scope', title: 'Scope of Work', content: '- Platform Audit & Setup\n- Content Creation (Graphics & Video)\n- Copywriting & Hashtag Strategy\n- Community Management\n- Monthly Performance Reporting', enabled: true, order: 5 },
      { id: 'timeline', title: 'Timeline & Workflow', content: 'Month 1: Strategy & Setup\nMonth 2-3: Growth & Engagement\nOngoing: Optimization & Scaling', enabled: true, order: 6 },
    ],
    packages: [
      { id: 'smm-starter', name: 'Starter', description: 'Perfect for small businesses', price: '$500', billingFrequency: 'Monthly', features: ['12 Posts / Month', '2 Reels', 'Community Management', 'Basic Reporting'] },
      { id: 'smm-growth', name: 'Growth', description: 'For growing brands', price: '$900', billingFrequency: 'Monthly', features: ['20 Posts / Month', '4 Reels', 'Story Strategy', 'Advanced Reporting'] },
    ]
  },
  'SEO': {
    serviceName: 'SEO',
    sections: [
      ...commonSections,
      { id: 'strategy', title: 'SEO Strategy', content: 'A comprehensive approach covering Technical SEO, On-Page Optimization, and High-Quality Link Building to dominate search results.', enabled: true, order: 4 },
      { id: 'scope', title: 'Scope of Work', content: '- Technical SEO Audit\n- Keyword Research & Mapping\n- On-page Content Optimization\n- Link Building Campaigns\n- Local SEO Setup', enabled: true, order: 5 },
      { id: 'reporting', title: 'Reporting & KPIs', content: 'Key Metrics:\n- Organic Traffic Growth\n- Keyword Ranking Improvements\n- Click-Through Rates (CTR)\n- Conversion Rates', enabled: true, order: 6 },
    ],
    packages: [
      { id: 'seo-standard', name: 'Standard SEO', description: 'Local & Regional Focus', price: '$600', billingFrequency: 'Monthly', features: ['Technical Audit', '15 Keywords', 'On-page SEO', 'Monthly Report'] },
      { id: 'seo-enterprise', name: 'Enterprise SEO', description: 'National / Global Reach', price: '$1200', billingFrequency: 'Monthly', features: ['Comprehensive Audit', '50+ Keywords', 'Content Creation', 'Advanced Link Building'] },
    ]
  },
  'Website Development': {
    serviceName: 'Website Development',
    sections: [
      ...commonSections,
      { id: 'strategy', title: 'Development Approach', content: 'We build modern, blazing-fast, and responsive websites utilizing the latest tech stack (React, Next.js, Tailwind) to ensure maximum performance and user engagement.', enabled: true, order: 4 },
      { id: 'scope', title: 'Scope of Work', content: '- UI/UX Prototyping\n- Frontend Development\n- CMS Integration\n- Mobile Responsiveness\n- Testing & Deployment', enabled: true, order: 5 },
      { id: 'timeline', title: 'Project Timeline', content: 'Week 1-2: Design & Prototyping\nWeek 3-5: Development\nWeek 6: Testing & Launch', enabled: true, order: 6 },
    ],
    packages: [
      { id: 'web-business', name: 'Business Website', description: 'Corporate identity and lead generation', price: '$1500', billingFrequency: 'One-time', features: ['Up to 10 Pages', 'Responsive Design', 'CMS Integration', 'Basic SEO Setup'] },
      { id: 'web-ecommerce', name: 'E-Commerce Solution', description: 'Full-scale online store', price: '$3500', billingFrequency: 'One-time', features: ['Unlimited Products', 'Payment Gateway', 'Inventory Management', 'Advanced Analytics'] },
    ]
  },
  'Custom': {
    serviceName: 'Custom',
    sections: [...commonSections],
    packages: [
      { id: 'custom-pack', name: 'Custom Package', description: 'Tailored to your specific needs', price: 'Custom', billingFrequency: 'TBD', features: ['Requirement Analysis', 'Custom Deliverables'] }
    ]
  }
};
