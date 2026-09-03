export interface NavCategory {
  title: string;
  items: { label: string; serviceId: string; icon: string }[];
}

export const megaMenuCategories: NavCategory[] = [
  {
    title: 'Software Development',
    items: [
      { label: 'Custom Software', serviceId: 'custom-software', icon: 'MonitorSmartphone' },
      { label: 'Web Applications', serviceId: 'web-development', icon: 'Layout' },
      { label: 'Mobile Apps', serviceId: 'mobile-apps', icon: 'Smartphone' },
      { label: 'SaaS Development', serviceId: 'saas', icon: 'Cloud' },
      { label: 'API Integration', serviceId: 'api-integration', icon: 'Cable' },
    ]
  },
  {
    title: 'Design & Development',
    items: [
      { label: 'UI/UX Design', serviceId: 'ui-ux-design', icon: 'Palette' },
      { label: 'Web Development', serviceId: 'web-development', icon: 'Globe' },
      { label: 'E-commerce', serviceId: 'ecommerce', icon: 'ShoppingCart' },
      { label: 'WordPress', serviceId: 'web-development', icon: 'FileText' },
      { label: 'Shopify', serviceId: 'ecommerce', icon: 'ShoppingBag' },
    ]
  },
  {
    title: 'Technology',
    items: [
      { label: 'Cloud & DevOps', serviceId: 'cloud-devops', icon: 'Server' },
      { label: 'Database Solutions', serviceId: 'database', icon: 'Database' },
      { label: 'AI & Automation', serviceId: 'ai-automation', icon: 'Bot' },
      { label: 'Cyber Security', serviceId: 'cyber-security', icon: 'Shield' },
      { label: 'QA & Testing', serviceId: 'qa-testing', icon: 'CheckCircle2' },
    ]
  },
  {
    title: 'Digital Growth',
    items: [
      { label: 'SEO', serviceId: 'digital-marketing', icon: 'Search' },
      { label: 'Digital Marketing', serviceId: 'digital-marketing', icon: 'TrendingUp' },
      { label: 'Social Media', serviceId: 'digital-marketing', icon: 'Share2' },
      { label: 'PPC', serviceId: 'digital-marketing', icon: 'MousePointerClick' },
      { label: 'Content Marketing', serviceId: 'digital-marketing', icon: 'PenTool' },
    ]
  },
  {
    title: 'Creative',
    items: [
      { label: 'Branding', serviceId: 'branding', icon: 'Brush' },
      { label: 'Logo Design', serviceId: 'branding', icon: 'Image' },
      { label: 'Video Editing', serviceId: 'branding', icon: 'Video' },
      { label: 'Creative Design', serviceId: 'branding', icon: 'Figma' },
    ]
  }
];

export const digitalJourneySteps = [
  { number: '01', title: 'Discover', description: 'Understand the business and requirements.', icon: 'Search' },
  { number: '02', title: 'Strategy', description: 'Define the technology and growth strategy.', icon: 'Target' },
  { number: '03', title: 'Design', description: 'Create UX/UI and visual direction.', icon: 'Palette' },
  { number: '04', title: 'Develop', description: 'Build the website, software or application.', icon: 'Code2' },
  { number: '05', title: 'Test', description: 'Quality assurance and optimization.', icon: 'CheckCircle' },
  { number: '06', title: 'Launch', description: 'Deploy and launch the solution.', icon: 'Rocket' },
  { number: '07', title: 'Market', description: 'SEO, social media, PPC and digital marketing.', icon: 'TrendingUp' },
  { number: '08', title: 'Grow', description: 'Continuous optimization, maintenance and support.', icon: 'BarChart3' },
];

export const industries = [
  { name: 'E-commerce', icon: 'ShoppingCart', description: 'Online stores and marketplaces' },
  { name: 'Healthcare', icon: 'Heart', description: 'Clinics, hospitals and health tech' },
  { name: 'Education', icon: 'GraduationCap', description: 'Schools, LMS and ed-tech' },
  { name: 'Real Estate', icon: 'Building2', description: 'Property portals and management' },
  { name: 'Travel & Tourism', icon: 'Plane', description: 'Booking and travel platforms' },
  { name: 'Finance', icon: 'Landmark', description: 'Fintech and banking solutions' },
  { name: 'Retail', icon: 'Store', description: 'POS and inventory systems' },
  { name: 'Manufacturing', icon: 'Factory', description: 'ERP and production systems' },
  { name: 'Professional Services', icon: 'Briefcase', description: 'CRM and workflow tools' },
  { name: 'Startups', icon: 'Rocket', description: 'MVP development and scaling' },
  { name: 'SMEs', icon: 'Building', description: 'Business management solutions' },
];

export const techStack = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'PHP', 'Laravel'] },
  { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { category: 'Database', techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { category: 'CMS / E-Commerce', techs: ['WordPress', 'Shopify', 'WooCommerce'] },
  { category: 'Cloud', techs: ['AWS', 'Google Cloud', 'Docker', 'CI/CD'] },
  { category: 'Marketing', techs: ['Google Ads', 'Meta Ads', 'SEMrush', 'Analytics'] },
];
