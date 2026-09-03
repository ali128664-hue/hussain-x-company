export interface SubService {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  subServices: SubService[];
  technologies?: string[];
  category: 'software' | 'design' | 'technology' | 'marketing' | 'creative';
}

export const services: Service[] = [
  {
    id: 'social-media-marketing',
    number: '01',
    title: 'Social Media Marketing',
    tagline: 'End-to-end social media management, from post planning to viral growth.',
    description: 'We handle your entire social media presence. From deciding what to post and designing eye-catching creatives, to scheduling content calendars and running targeted ads, we build a loyal community around your brand.',
    icon: 'Share2',
    gradient: 'from-pink-500 to-rose-500',
    category: 'marketing',
    technologies: ['Meta Business Suite', 'TikTok Ads Manager', 'Hootsuite', 'Canva', 'Adobe Premiere Pro', 'Figma'],
    subServices: [
      { name: 'Strategy & Content Calendar', description: 'Deciding exactly what to post, when to post, and planning monthly content schedules.' },
      { name: 'Creative Post & Reel Design', description: 'Designing visually stunning graphics, animations, and editing engaging video reels.' },
      { name: 'Copywriting & Hashtag Research', description: 'Writing engaging captions and researching trending hashtags to maximize organic reach.' },
      { name: 'Community Management', description: 'Actively replying to comments, direct messages, and building relationships with your audience.' },
      { name: 'Paid Social Campaigns (Ads)', description: 'Running highly targeted Meta (Facebook/Instagram) and TikTok ads to generate leads and sales.' },
      { name: 'Influencer Outreach', description: 'Finding and collaborating with relevant influencers to promote your brand to their followers.' },
      { name: 'Monthly Analytics & Reporting', description: 'Providing detailed reports on follower growth, engagement rates, and ROI.' }
    ]
  },
  {
    id: 'seo-services',
    number: '02',
    title: 'Search Engine Optimization',
    tagline: 'Dominate Google rankings with deep technical and content strategies.',
    description: 'Our comprehensive SEO approach ensures your website ranks at the top of Google. We handle everything from finding the exact keywords your customers use, to fixing technical website issues and building high-authority backlinks.',
    icon: 'Search',
    gradient: 'from-emerald-400 to-teal-500',
    category: 'marketing',
    technologies: ['Google Search Console', 'Google Analytics 4', 'SEMrush', 'Ahrefs', 'Yoast SEO', 'Screaming Frog'],
    subServices: [
      { name: 'Comprehensive SEO Audit', description: 'Deep technical analysis of your current website to find and fix ranking roadblocks.' },
      { name: 'In-depth Keyword Research', description: 'Finding exactly what terms your customers are searching for and targeting them.' },
      { name: 'On-Page Optimization', description: 'Optimizing your website titles, meta tags, URLs, and internal linking structure.' },
      { name: 'Technical SEO', description: 'Improving website loading speed, mobile responsiveness, and XML sitemap architecture.' },
      { name: 'Content Strategy & Blogging', description: 'Writing high-quality, SEO-optimized articles and blogs to capture organic traffic.' },
      { name: 'Off-Page SEO & Backlinks', description: 'Acquiring high-authority backlinks from reputable websites to boost your domain trust.' },
      { name: 'Local SEO & Google My Business', description: 'Optimizing your Google Maps presence to dominate local searches in your city.' }
    ]
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX Design',
    tagline: 'Beautiful, intuitive interfaces that users love.',
    description: 'We design digital experiences that are not only visually stunning but also highly functional. Our user-centric approach ensures higher engagement and conversion rates.',
    icon: 'Palette',
    gradient: 'from-pink-500 to-purple-500',
    category: 'design',
    subServices: [
      { name: 'Wireframing & Prototyping', description: 'Visualizing layout and flow before development.' },
      { name: 'User Interface (UI) Design', description: 'Crafting visually stunning screens and elements.' },
      { name: 'User Experience (UX) Design', description: 'Optimizing the user journey for maximum conversion.' },
      { name: 'Mobile App Design', description: 'Creating intuitive interfaces for iOS and Android.' },
      { name: 'Web Application Design', description: 'Designing complex dashboards and SaaS interfaces.' },
      { name: 'Design Systems', description: 'Building consistent, reusable component libraries.' },
      { name: 'Usability Testing', description: 'Gathering real user feedback to refine designs.' },
      { name: 'Interaction Design', description: 'Adding engaging micro-interactions and animations.' }
    ]
  },
  {
    id: 'web-development',
    number: '04',
    title: 'Web Development',
    tagline: 'High-performance, modern websites built for scale.',
    description: 'From landing pages to complex web applications, we build fast, secure, and SEO-friendly websites using the latest modern tech stacks like React and Next.js.',
    icon: 'MonitorSmartphone',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'design',
    subServices: [
      { name: 'Frontend Development', description: 'Building responsive, interactive UIs with React and Vue.' },
      { name: 'Backend Development', description: 'Creating robust server logic with Node.js and Python.' },
      { name: 'Full-Stack Solutions', description: 'End-to-end web application development.' },
      { name: 'CMS Development', description: 'Custom WordPress, Webflow, and headless CMS setups.' },
      { name: 'Progressive Web Apps (PWA)', description: 'Websites that feel and work like native mobile apps.' },
      { name: 'Website Redesign', description: 'Modernizing outdated websites for better performance.' },
      { name: 'Web Portals', description: 'Secure portals for customers, partners, or employees.' },
      { name: 'Performance Optimization', description: 'Speeding up websites for better SEO and UX.' }
    ]
  },
  {
    id: 'mobile-apps',
    number: '05',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform apps for iOS and Android.',
    description: 'We build seamless, high-performance mobile applications that keep your users engaged. Whether native or cross-platform, we deliver excellence in your pocket.',
    icon: 'Smartphone',
    gradient: 'from-violet-500 to-purple-500',
    category: 'software',
    subServices: [
      { name: 'iOS App Development', description: 'Native apps for iPhones and iPads using Swift.' },
      { name: 'Android App Development', description: 'Native apps for Android devices using Kotlin.' },
      { name: 'Cross-Platform Apps', description: 'Building for both platforms using React Native or Flutter.' },
      { name: 'App UI/UX Design', description: 'Designing intuitive mobile interfaces.' },
      { name: 'Enterprise Mobility', description: 'Secure apps for internal corporate use.' },
      { name: 'App Maintenance', description: 'Ongoing updates, bug fixes, and feature additions.' },
      { name: 'App Store Deployment', description: 'Managing the launch process on Apple and Google stores.' }
    ]
  },
  {
    id: 'custom-software',
    number: '06',
    title: 'Custom Software Development',
    tagline: 'Tailored solutions to power your specific business needs.',
    description: 'We build scalable, secure, and robust custom software solutions designed exactly for your unique operational requirements. From simple tools to complex enterprise systems, we engineer software that drives efficiency and growth.',
    icon: 'Code2',
    gradient: 'from-orange-500 to-amber-500',
    category: 'software',
    subServices: [
      { name: 'Custom Business Software', description: 'Bespoke applications tailored to your daily operations.' },
      { name: 'Enterprise Software', description: 'Large-scale systems for corporate infrastructure.' },
      { name: 'CRM Systems', description: 'Custom Customer Relationship Management tools.' },
      { name: 'ERP Solutions', description: 'Enterprise Resource Planning for complete business management.' },
      { name: 'Inventory Management', description: 'Real-time stock and supply chain tracking.' },
      { name: 'HR Management', description: 'Automated payroll, attendance, and employee tracking.' },
      { name: 'School Management', description: 'Complete portals for students, teachers, and administration.' },
      { name: 'Hospital/Clinic Management', description: 'Patient records, appointments, and billing systems.' },
      { name: 'POS Systems', description: 'Point of Sale software for retail and restaurants.' },
      { name: 'Reporting & Analytics', description: 'Custom dashboards for data-driven decisions.' }
    ]
  },
  {
    id: 'ecommerce',
    number: '07',
    title: 'E-commerce Development',
    tagline: 'High-converting online stores and marketplaces.',
    description: 'We build robust, secure, and scalable e-commerce platforms that drive sales. From Shopify to custom multi-vendor marketplaces, we power your digital retail business.',
    icon: 'ShoppingCart',
    gradient: 'from-green-500 to-emerald-500',
    category: 'design',
    subServices: [
      { name: 'Shopify Development', description: 'Custom themes and apps for Shopify stores.' },
      { name: 'WooCommerce Setup', description: 'WordPress-based e-commerce solutions.' },
      { name: 'Custom E-commerce', description: 'Bespoke platforms built from scratch for unique needs.' },
      { name: 'Multi-vendor Marketplaces', description: 'Platforms like Amazon or Etsy for multiple sellers.' },
      { name: 'Payment Gateway Integration', description: 'Secure setup of Stripe, PayPal, and local gateways.' },
      { name: 'B2B E-commerce', description: 'Wholesale portals with custom pricing and bulk ordering.' },
      { name: 'Cart Abandonment Recovery', description: 'Systems to bring back lost customers.' },
      { name: 'Inventory Syncing', description: 'Connecting online stores with physical POS systems.' }
    ]
  },
  {
    id: 'digital-marketing',
    number: '08',
    title: 'Digital Marketing & Growth',
    tagline: 'Comprehensive campaigns to scale your overall revenue.',
    description: 'Beyond SMM and SEO, we handle complete digital ecosystems including email automation, conversion rate optimization, and advanced analytics to ensure every dollar spent returns maximum value.',
    icon: 'TrendingUp',
    gradient: 'from-orange-400 to-orange-600',
    category: 'marketing',
    technologies: ['Google Analytics 4', 'Meta Business Manager', 'Google Ads', 'Mailchimp', 'HubSpot', 'Looker Studio'],
    subServices: [
      { name: 'Email Marketing & Automation', description: 'Designing and executing automated drip campaigns and newsletters.' },
      { name: 'Conversion Rate Optimization (CRO)', description: 'Analyzing user behavior to tweak website design and increase sales.' },
      { name: 'App Store Optimization (ASO)', description: 'Boosting mobile app visibility in App Stores.' },
      { name: 'Advanced Analytics & ROI Reporting', description: 'Deep tracking integrations with GA4 and Meta Pixel.' },
      { name: 'Video Marketing & YouTube SEO', description: 'Creating compelling video content strategies.' },
      { name: 'PR & Online Reputation Management', description: 'Managing brand image across digital platforms.' }
    ]
  },
  {
    id: 'branding',
    number: '09',
    title: 'Branding & Creative',
    tagline: 'Crafting compelling visual identities that resonate and endure.',
    description: 'Your brand is more than a logo. We create cohesive, memorable visual identities and creative assets that tell your story, differentiate you from competitors, and forge an emotional connection with your audience.',
    icon: 'Brush',
    gradient: 'from-purple-500 to-pink-500',
    category: 'creative',
    subServices: [
      { name: 'Logo Design', description: 'Memorable marks that capture your brand essence.' },
      { name: 'Brand Identity Systems', description: 'Comprehensive guidelines for typography, color, and style.' },
      { name: 'Corporate Stationery', description: 'Professional designs for business cards and letterheads.' },
      { name: 'Marketing Collateral', description: 'Brochures, flyers, and digital pitch decks.' },
      { name: 'Video Editing & Production', description: 'Compelling motion graphics and promotional videos.' },
      { name: 'Packaging Design', description: 'Attractive physical wrapping for consumer products.' },
      { name: 'Copywriting', description: 'Persuasive text that aligns with your brand voice.' }
    ]
  },
  {
    id: 'business-automation',
    number: '10',
    title: 'Business Automation',
    tagline: 'Replacing manual effort with efficient digital workflows.',
    description: 'Free your team from repetitive tasks. We analyze your business processes and implement smart automation tools that save time, reduce human error, and allow your staff to focus on high-value work.',
    icon: 'Workflow',
    gradient: 'from-indigo-500 to-violet-600',
    category: 'software',
    subServices: [
      { name: 'Process Analysis', description: 'Identifying bottlenecks suitable for automation.' },
      { name: 'Zapier/Make Integration', description: 'Connecting disparate tools without custom code.' },
      { name: 'Sales Pipeline Automation', description: 'Streamlining lead follow-ups and CRM updates.' },
      { name: 'Automated Reporting', description: 'Generating and distributing scheduled data insights.' },
      { name: 'Invoice & Billing Automation', description: 'Streamlining financial processes and reminders.' },
      { name: 'Data Entry Automation', description: 'Eliminating manual copying and pasting between systems.' }
    ]
  },
  {
    id: 'ai-automation',
    number: '11',
    title: 'AI & Automation Solutions',
    tagline: 'Harness the power of Artificial Intelligence for your business.',
    description: 'We integrate cutting-edge AI technologies into your workflows. From smart chatbots to predictive analytics, we help you stay ahead of the curve.',
    icon: 'Bot',
    gradient: 'from-cyan-500 to-blue-600',
    category: 'technology',
    subServices: [
      { name: 'AI Chatbots', description: 'Intelligent virtual assistants for customer support.' },
      { name: 'Process Automation', description: 'RPA to automate repetitive administrative tasks.' },
      { name: 'Predictive Analytics', description: 'Using historical data to forecast future trends.' },
      { name: 'Machine Learning Models', description: 'Custom algorithms for specific business problems.' },
      { name: 'NLP Solutions', description: 'Natural language processing for text analysis.' },
      { name: 'Computer Vision', description: 'Image and video analysis systems.' },
      { name: 'AI Integration', description: 'Adding AI capabilities to existing software.' }
    ]
  },
  {
    id: 'cloud-devops',
    number: '12',
    title: 'Cloud & DevOps',
    tagline: 'Scalable, secure, and highly available infrastructure.',
    description: 'We architect and manage cloud environments that ensure your applications are always fast, secure, and ready to scale with your business growth.',
    icon: 'Cloud',
    gradient: 'from-sky-400 to-blue-500',
    category: 'technology',
    subServices: [
      { name: 'Cloud Migration', description: 'Moving on-premise systems to AWS, Azure, or GCP.' },
      { name: 'Serverless Architecture', description: 'Building highly scalable, low-maintenance backends.' },
      { name: 'CI/CD Pipelines', description: 'Automated testing and deployment workflows.' },
      { name: 'Infrastructure as Code', description: 'Managing servers via Terraform or CloudFormation.' },
      { name: 'Containerization', description: 'Docker and Kubernetes implementation.' },
      { name: 'Server Monitoring', description: '24/7 uptime tracking and automated alerts.' },
      { name: 'Cloud Security', description: 'Securing infrastructure against modern threats.' }
    ]
  },
  {
    id: 'cyber-security',
    number: '13',
    title: 'Cyber Security',
    tagline: 'Protecting your digital assets and sensitive data.',
    description: 'We implement robust security measures to protect your software, networks, and data from breaches, ensuring compliance and peace of mind.',
    icon: 'Shield',
    gradient: 'from-red-500 to-rose-600',
    category: 'technology',
    subServices: [
      { name: 'Vulnerability Assessments', description: 'Scanning systems for known security flaws.' },
      { name: 'Penetration Testing', description: 'Ethical hacking to find and fix vulnerabilities.' },
      { name: 'Data Encryption', description: 'Securing sensitive information in transit and at rest.' },
      { name: 'Compliance Audits', description: 'Ensuring adherence to GDPR, HIPAA, or PCI-DSS.' },
      { name: 'Security Architecture', description: 'Designing secure software from the ground up.' },
      { name: 'Incident Response', description: 'Rapid mitigation of active security breaches.' },
      { name: 'Employee Training', description: 'Educating staff on phishing and security best practices.' }
    ]
  },
  {
    id: 'qa-testing',
    number: '14',
    title: 'Software Testing & QA',
    tagline: 'Ensuring flawless performance and bug-free experiences.',
    description: 'Our rigorous quality assurance processes guarantee that your software works perfectly under all conditions, providing a seamless experience for your users.',
    icon: 'CheckCircle',
    gradient: 'from-teal-400 to-emerald-500',
    category: 'technology',
    subServices: [
      { name: 'Manual Testing', description: 'Human-driven exploration to find edge cases.' },
      { name: 'Automated Testing', description: 'Scripted tests for regression and continuous integration.' },
      { name: 'Performance Testing', description: 'Ensuring stability under heavy user loads.' },
      { name: 'Security Testing', description: 'Identifying vulnerabilities before release.' },
      { name: 'Usability Testing', description: 'Verifying intuitive navigation and UX.' },
      { name: 'API Testing', description: 'Ensuring backend endpoints return correct data.' },
      { name: 'Cross-Browser Testing', description: 'Verifying compatibility across all major browsers.' }
    ]
  },
  {
    id: 'api-integration',
    number: '15',
    title: 'API & System Integration',
    tagline: 'Connecting your tools for seamless data flow.',
    description: 'We connect disparate software systems, allowing them to communicate securely and share data in real-time, eliminating data silos in your organization.',
    icon: 'Zap',
    gradient: 'from-yellow-400 to-orange-500',
    category: 'technology',
    subServices: [
      { name: 'Custom API Development', description: 'Building secure REST and GraphQL endpoints.' },
      { name: 'Third-Party Integration', description: 'Connecting Stripe, Twilio, Salesforce, etc.' },
      { name: 'Legacy System Integration', description: 'Modernizing connections to older software.' },
      { name: 'Payment Gateways', description: 'Secure transaction processing integration.' },
      { name: 'ERP/CRM Integration', description: 'Syncing data between core business systems.' },
      { name: 'Data Migration', description: 'Safely moving data between platforms.' },
      { name: 'API Documentation', description: 'Creating clear guides for other developers.' }
    ]
  },
  {
    id: 'database',
    number: '16',
    title: 'Database Development',
    tagline: 'Secure, scalable, and optimized data architecture.',
    description: 'We design and optimize databases that can handle massive amounts of data efficiently, ensuring your applications run fast and your data remains secure.',
    icon: 'Database',
    gradient: 'from-slate-500 to-gray-700',
    category: 'technology',
    subServices: [
      { name: 'Database Architecture', description: 'Designing optimized relational or NoSQL schemas.' },
      { name: 'Performance Tuning', description: 'Speeding up slow queries and optimizing indexes.' },
      { name: 'Data Warehousing', description: 'Centralizing data for business intelligence.' },
      { name: 'Database Migration', description: 'Moving data to modern cloud databases safely.' },
      { name: 'Backup & Recovery', description: 'Implementing disaster recovery protocols.' },
      { name: 'High Availability Setup', description: 'Ensuring databases stay online 24/7.' }
    ]
  },
  {
    id: 'saas',
    number: '17',
    title: 'SaaS Development',
    tagline: 'Building the next generation of subscription software.',
    description: 'We help startups and enterprises build scalable Software-as-a-Service platforms. From multi-tenant architecture to subscription billing, we cover it all.',
    icon: 'CloudLightning',
    gradient: 'from-fuchsia-500 to-pink-600',
    category: 'software',
    subServices: [
      { name: 'Multi-Tenant Architecture', description: 'Securely isolating data for different clients.' },
      { name: 'Subscription Billing', description: 'Integrating Stripe or Paddle for recurring payments.' },
      { name: 'User Management', description: 'Roles, permissions, and team management systems.' },
      { name: 'Admin Dashboards', description: 'Comprehensive panels to monitor SaaS metrics.' },
      { name: 'API Provisioning', description: 'Allowing users to connect to your SaaS programmatically.' },
      { name: 'Scalability Planning', description: 'Ensuring the app grows smoothly with your user base.' }
    ]
  },
  {
    id: 'maintenance',
    number: '18',
    title: 'Maintenance & Support',
    tagline: 'Keeping your digital assets secure and up-to-date.',
    description: 'Technology changes rapidly. We provide ongoing support, security patches, and updates to ensure your software and websites continue to operate flawlessly.',
    icon: 'Wrench',
    gradient: 'from-gray-400 to-slate-500',
    category: 'technology',
    subServices: [
      { name: 'Security Patching', description: 'Applying updates to fix known vulnerabilities.' },
      { name: 'Bug Fixing', description: 'Resolving issues that arise during usage.' },
      { name: 'Performance Monitoring', description: 'Keeping an eye on speed and uptime.' },
      { name: 'Feature Enhancements', description: 'Adding new capabilities as your business grows.' },
      { name: 'Server Maintenance', description: 'Managing hosting environments and backups.' },
      { name: 'Code Refactoring', description: 'Improving existing code for better maintainability.' },
      { name: '24/7 Technical Support', description: 'Dedicated help desk for critical issues.' }
    ]
  }
];

export interface NavCategory {
  title: string;
  items: { label: string; serviceId: string; icon: any }[];
}

export const megaMenuCategories: NavCategory[] = [
  {
    title: 'Marketing & Growth',
    items: [
      { label: 'Social Media Marketing', serviceId: 'social-media-marketing', icon: 'Share2' },
      { label: 'SEO Services', serviceId: 'seo-services', icon: 'Search' },
      { label: 'Digital Marketing', serviceId: 'digital-marketing', icon: 'TrendingUp' },
    ]
  },
  {
    title: 'Software Development',
    items: [
      { label: 'Custom Software', serviceId: 'custom-software', icon: 'Code2' },
      { label: 'Mobile Apps', serviceId: 'mobile-apps', icon: 'Smartphone' },
      { label: 'SaaS Development', serviceId: 'saas', icon: 'CloudLightning' },
      { label: 'Business Automation', serviceId: 'business-automation', icon: 'Workflow' }
    ]
  },
  {
    title: 'Design & Web',
    items: [
      { label: 'UI/UX Design', serviceId: 'ui-ux-design', icon: 'Palette' },
      { label: 'Web Development', serviceId: 'web-development', icon: 'MonitorSmartphone' },
      { label: 'E-commerce', serviceId: 'ecommerce', icon: 'ShoppingCart' },
      { label: 'Branding & Creative', serviceId: 'branding', icon: 'Brush' }
    ]
  },
  {
    title: 'Technology',
    items: [
      { label: 'Cloud & DevOps', serviceId: 'cloud-devops', icon: 'Cloud' },
      { label: 'Cyber Security', serviceId: 'cyber-security', icon: 'Shield' },
      { label: 'AI Solutions', serviceId: 'ai-automation', icon: 'Bot' },
      { label: 'API Integration', serviceId: 'api-integration', icon: 'Zap' }
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
