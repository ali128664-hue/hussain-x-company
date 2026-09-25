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
    id: 'software-development',
    number: '01',
    title: 'Custom Software Development',
    tagline: 'Got a unique business problem? We build the software to solve it.',
    description: 'We engineer custom software — ERPs, CRMs, SaaS platforms, school and hospital management systems, POS, and more — built precisely for how your business operates. No generic off-the-shelf tools, just solutions that fit.',
    icon: 'Code2',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'software',
    technologies: ['React', 'Node.js', 'Python', 'Laravel', 'PostgreSQL', 'Docker', 'AWS'],
    subServices: [
      { name: 'Enterprise Business Software', description: 'Large-scale systems that manage your entire operations — finance, HR, inventory, and reporting in one place.' },
      { name: 'ERP & CRM Systems', description: 'Custom Enterprise Resource Planning and Customer Relationship Management tools built around your workflows.' },
      { name: 'SaaS Platform Development', description: 'Multi-tenant, subscription-based platforms with billing, user management, and admin dashboards.' },
      { name: 'School & Hospital Management', description: 'Portals for students, patients, staff, and administrators — complete with scheduling, records, and billing.' },
      { name: 'POS & Inventory Systems', description: 'Point-of-sale software and real-time inventory tracking for retail, restaurants, and warehouses.' },
      { name: 'Business Process Automation', description: 'Identify bottlenecks and replace manual tasks with smart digital workflows that save time and reduce errors.' },
      { name: 'Custom Dashboards & Analytics', description: 'Data visualization and reporting tools that turn raw business data into actionable insights.' },
      { name: 'API Development & Integration', description: 'Connect your existing tools with custom REST or GraphQL APIs for seamless data flow across systems.' },
    ]
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Design & Development',
    tagline: 'Fast, beautiful websites that rank, convert, and represent you at your best.',
    description: 'From corporate websites and landing pages to complex web applications and WordPress sites — we build fast, SEO-optimized, and visually polished digital presences using modern tech stacks like React and Next.js.',
    icon: 'Globe',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'design',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Node.js'],
    subServices: [
      { name: 'Corporate & Business Websites', description: 'Professional websites that position your brand credibly and convert visitors into enquiries.' },
      { name: 'High-Converting Landing Pages', description: 'Focused, distraction-free pages engineered to maximize sign-ups, leads, and sales.' },
      { name: 'Web Application Development', description: 'Full-stack web apps with complex logic, authentication, dashboards, and real-time features.' },
      { name: 'WordPress Development', description: 'Custom WordPress themes, plugins, and WooCommerce stores — fully optimized and easy to manage.' },
      { name: 'Progressive Web Apps (PWA)', description: 'Web experiences that install like apps — offline-capable, fast, and mobile-first.' },
      { name: 'Website Redesign & Optimization', description: 'Transform slow, dated websites into fast, modern platforms that rank better and convert more.' },
      { name: 'Web Portals & Dashboards', description: 'Secure portals for clients, staff, or partners — with custom roles, permissions, and data views.' },
      { name: 'Performance & Core Web Vitals', description: "Audit and optimize your existing site for Google's performance benchmarks and SEO ranking signals." },
    ]
  },
  {
    id: 'mobile-app-development',
    number: '03',
    title: 'Mobile App Development',
    tagline: 'iOS and Android apps your users will actually love to use.',
    description: 'We build high-quality mobile apps — native or cross-platform — that deliver smooth, fast, and intuitive experiences. Whether you need a consumer app, a business tool, or an enterprise mobility solution, we handle design to deployment.',
    icon: 'Smartphone',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'software',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    subServices: [
      { name: 'iOS App Development', description: "Native iPhone and iPad apps built with Swift, optimized for Apple's ecosystem and App Store standards." },
      { name: 'Android App Development', description: 'Native Android apps built with Kotlin for a smooth, performant experience across all Android devices.' },
      { name: 'Cross-Platform Apps (React Native & Flutter)', description: 'One codebase, two platforms. Ship faster without compromising on quality or native feel.' },
      { name: 'App UI/UX Design', description: 'Intuitive, visually polished mobile interfaces designed around real user behavior and journeys.' },
      { name: 'Enterprise Mobility Solutions', description: 'Secure internal apps for field teams, logistics, and corporate operations.' },
      { name: 'App Store Deployment & ASO', description: 'We handle the full submission process and optimize your store listing for maximum visibility.' },
      { name: 'App Maintenance & Updates', description: 'Ongoing bug fixes, OS updates, performance monitoring, and feature rollouts post-launch.' },
    ]
  },
  {
    id: 'ecommerce-solutions',
    number: '04',
    title: 'E-Commerce Solutions',
    tagline: 'Online stores engineered to sell — from day one.',
    description: 'We build high-converting e-commerce experiences on Shopify, WooCommerce, or fully custom platforms. Every store we launch is optimized for speed, search rankings, and seamless checkout — because a great store that nobody finds is worthless.',
    icon: 'ShoppingBag',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'design',
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'JazzCash'],
    subServices: [
      { name: 'Shopify Store Development', description: 'Custom Shopify themes, app integrations, and Shopify Plus solutions — built to convert and scale.' },
      { name: 'WooCommerce & WordPress Stores', description: 'Flexible WordPress-based e-commerce with complete product management and payment integration.' },
      { name: 'Custom E-Commerce Platforms', description: 'Fully bespoke online stores with unique logic, custom checkout flows, and proprietary features.' },
      { name: 'Multi-Vendor Marketplaces', description: 'Platforms where multiple sellers list and sell — like a mini-Amazon built for your niche.' },
      { name: 'Payment Gateway Integration', description: 'Stripe, PayPal, JazzCash, EasyPaisa, and other local and international payment systems.' },
      { name: 'Product Feed & Inventory Syncing', description: 'Connect your store with physical POS, warehouses, and dropshipping suppliers in real-time.' },
      { name: 'E-Commerce SEO & CRO', description: 'Optimize product pages for Google rankings and A/B test checkout flows to increase purchase rates.' },
      { name: 'Store Migration', description: 'Safely migrate your store from Magento, WooCommerce, or any other platform to a faster solution.' },
    ]
  },
  {
    id: 'ui-ux-design',
    number: '05',
    title: 'UI/UX & Product Design',
    tagline: 'Interfaces that feel intuitive, look stunning, and convert visitors into users.',
    description: 'Great design isn\'t decoration — it\'s strategy. We design digital products from the ground up: research-driven wireframes, high-fidelity prototypes, and production-ready design systems that give your developers a crystal-clear blueprint.',
    icon: 'Layers',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Maze', 'Hotjar', 'Framer', 'Principle'],
    subServices: [
      { name: 'UX Research & User Flows', description: 'Understand your users before designing for them — journey mapping, competitive analysis, and persona creation.' },
      { name: 'Wireframing & Prototyping', description: 'Interactive prototypes that test ideas and get stakeholder buy-in before a single line of code is written.' },
      { name: 'UI Design (Web & Mobile)', description: 'Pixel-perfect, on-brand visual designs for web platforms, mobile apps, and SaaS dashboards.' },
      { name: 'Design Systems & Component Libraries', description: 'Scalable, reusable design systems that keep your product consistent as your team and product grow.' },
      { name: 'Dashboard & Admin Panel Design', description: 'Complex data-heavy interfaces designed for clarity — so your users find what they need instantly.' },
      { name: 'Usability Testing', description: 'Real-user testing sessions that surface friction points before launch, not after.' },
      { name: 'Developer Handoff', description: 'Design files delivered with precise specs, assets, and documentation that developers can build from immediately.' },
    ]
  },
  {
    id: 'branding-creative',
    number: '06',
    title: 'Brand Identity & Creative',
    tagline: 'Look like the business you want to be — not the one you started as.',
    description: 'Your brand is your first impression, your last word, and everything in between. We craft logos, full visual identity systems, marketing materials, pitch decks, and video content that make your business instantly recognizable and genuinely memorable.',
    icon: 'Sparkles',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'creative',
    subServices: [
      { name: 'Logo Design', description: 'Timeless, versatile logos that capture the essence of your brand and work across every medium.' },
      { name: 'Brand Identity System', description: 'Complete visual standards: color palette, typography, logo variations, usage rules, and brand guidelines.' },
      { name: 'Corporate Stationery & Print', description: 'Business cards, letterheads, envelopes, and branded office materials that reinforce professionalism.' },
      { name: 'Marketing Collateral', description: 'Brochures, flyers, banners, social media templates, and pitch decks designed to win clients.' },
      { name: 'Video Production & Editing', description: 'Brand videos, product demos, reels, and motion graphics that communicate what words alone cannot.' },
      { name: 'Packaging Design', description: 'Consumer product packaging that stands out on shelves and screens — both physical and digital.' },
      { name: 'Brand Copywriting', description: 'Taglines, web copy, brand voice guidelines, and messaging that sound like you — at your best.' },
    ]
  },
  {
    id: 'seo-services',
    number: '07',
    title: 'SEO & Organic Growth',
    tagline: 'Rank higher on Google. Get found first. Grow without paid ads.',
    description: 'We implement comprehensive SEO strategies that drive sustainable organic traffic. Technical fixes, keyword research, content planning, and high-quality backlinks — every lever pulled to get your site to the top and keep it there.',
    icon: 'Search',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'marketing',
    technologies: ['Google Search Console', 'Google Analytics 4', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Yoast'],
    subServices: [
      { name: 'Full SEO Audit', description: 'A deep technical and content analysis of your site — every issue ranked by impact on your rankings.' },
      { name: 'Keyword Research & Strategy', description: 'Find the exact terms your customers search, map them to pages, and prioritize by traffic and conversion potential.' },
      { name: 'On-Page Optimization', description: 'Titles, meta descriptions, headers, internal links, and content — all optimized for both users and search engines.' },
      { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawlability, structured data, XML sitemaps, and mobile optimization.' },
      { name: 'Content Strategy & Blog Writing', description: 'SEO-optimized articles, guides, and landing pages that attract and educate your target audience.' },
      { name: 'Link Building & Off-Page SEO', description: 'High-quality backlinks from relevant, authoritative sites that signal trust to Google.' },
      { name: 'Local SEO & Google Business', description: 'Dominate local search results and Google Maps so nearby customers find you first.' },
      { name: 'Monthly Reporting & Insights', description: 'Clear, jargon-free reports on rankings, traffic, and revenue impact — delivered every month.' },
    ]
  },
  {
    id: 'digital-marketing',
    number: '08',
    title: 'Digital Marketing & Paid Ads',
    tagline: 'Get your brand in front of the right people, at the right moment.',
    description: 'From social media management and Google Ads to content marketing and email campaigns — we run coordinated digital marketing across every channel that matters. Data-driven, ROI-focused, and always optimized.',
    icon: 'Megaphone',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'marketing',
    technologies: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads', 'HubSpot', 'Mailchimp', 'Looker Studio'],
    subServices: [
      { name: 'Social Media Management', description: 'Content calendars, creative posts, reels, captions, and community management across all platforms.' },
      { name: 'Google Ads (Search & Display)', description: 'Campaigns that put you at the top of Google for keywords your customers are actively searching.' },
      { name: 'Meta & Instagram Ads', description: 'Laser-targeted Facebook and Instagram campaigns based on demographics, interests, and behavior.' },
      { name: 'TikTok Advertising', description: 'Short-form video ad campaigns on TikTok — the fastest-growing platform for reaching younger audiences.' },
      { name: 'Remarketing Campaigns', description: 'Re-engage website visitors who didn\'t convert the first time — recover lost leads and sales.' },
      { name: 'Email Marketing & Automation', description: 'Automated drip sequences, newsletters, and promotions that nurture leads into paying customers.' },
      { name: 'Content Marketing', description: 'Blogs, guides, social content, and video scripts that build authority and attract organic followers.' },
      { name: 'Analytics & ROI Reporting', description: 'Full-funnel tracking with GA4 and Meta Pixel — know exactly what\'s working and what\'s not.' },
    ]
  },
  {
    id: 'ai-automation',
    number: '09',
    title: 'AI & Business Automation',
    tagline: 'Automate the repetitive. Amplify what makes your business human.',
    description: 'We integrate cutting-edge AI into your workflows — intelligent chatbots, process automation, predictive analytics, and machine learning solutions. The result: your team spends less time on manual tasks and more time on work that actually matters.',
    icon: 'Brain',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'technology',
    technologies: ['OpenAI', 'LangChain', 'Python', 'Zapier', 'Make.com', 'Hugging Face', 'TensorFlow'],
    subServices: [
      { name: 'AI Chatbots & Virtual Assistants', description: 'Intelligent bots that handle customer support, lead qualification, and FAQs — 24/7 without human intervention.' },
      { name: 'Workflow & Process Automation', description: 'Map your manual processes and automate them using tools like Zapier, Make, or custom-built scripts.' },
      { name: 'Machine Learning Models', description: 'Custom ML algorithms trained on your data to predict churn, recommend products, or detect anomalies.' },
      { name: 'Natural Language Processing (NLP)', description: 'Text classification, sentiment analysis, document extraction, and language understanding systems.' },
      { name: 'Predictive Analytics', description: 'Use historical business data to forecast sales, demand, and customer behavior with precision.' },
      { name: 'AI Content Generation Pipelines', description: 'Automated systems that generate and publish content at scale using GPT and fine-tuned models.' },
      { name: 'Computer Vision Systems', description: 'Image and video analysis — object detection, quality control, and visual data processing.' },
      { name: 'Automated Reporting & Alerts', description: 'Scheduled data pipelines that generate and distribute insights to your team automatically.' },
    ]
  },
  {
    id: 'cloud-devops',
    number: '10',
    title: 'Cloud, DevOps & Security',
    tagline: 'Infrastructure that is always on, always fast, and always secure.',
    description: 'We architect and manage cloud environments on AWS, Azure, and GCP — with automated deployments, containerization, database optimization, API security, and cybersecurity audits. Your infrastructure becomes a competitive advantage, not a liability.',
    icon: 'Cloud',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'technology',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    subServices: [
      { name: 'Cloud Migration & Architecture', description: 'Move your on-premise systems to AWS, Azure, or GCP — with zero data loss and minimal downtime.' },
      { name: 'CI/CD Pipeline Setup', description: 'Automated build, test, and deployment workflows that ship code faster and with fewer mistakes.' },
      { name: 'Docker & Kubernetes', description: 'Containerize your applications for consistent, portable environments that scale on demand.' },
      { name: 'Database Design & Optimization', description: 'Schema design, query optimization, indexing, backup strategies, and high-availability database setups.' },
      { name: 'API Security & Custom API Development', description: 'Secure, well-documented REST and GraphQL APIs — plus integration with third-party platforms.' },
      { name: 'Cybersecurity Audits & Penetration Testing', description: 'Find vulnerabilities before attackers do — ethical hacking, security hardening, and compliance review.' },
      { name: 'Server Monitoring & Uptime Alerts', description: '24/7 infrastructure monitoring with automated alerts so you know about issues before your users do.' },
      { name: 'Data Backup & Disaster Recovery', description: 'Bulletproof backup strategies and tested recovery plans so a failure never becomes a catastrophe.' },
    ]
  },
  {
    id: 'qa-testing',
    number: '11',
    title: 'QA Testing & Reliability',
    tagline: 'We break your software before your users do.',
    description: 'Shipping buggy software destroys trust. Our QA team runs rigorous manual and automated testing across devices, browsers, and load conditions — catching every critical issue before your launch. Clean code, flawless experience.',
    icon: 'ShieldCheck',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'technology',
    technologies: ['Selenium', 'Cypress', 'Jest', 'Postman', 'JMeter', 'BrowserStack'],
    subServices: [
      { name: 'Manual QA Testing', description: 'Hands-on exploratory testing to catch edge cases, usability issues, and bugs that automation misses.' },
      { name: 'Automated Test Suites', description: 'Scripted regression tests using Selenium, Cypress, or Jest — run automatically on every code push.' },
      { name: 'API Testing', description: 'Validate all backend endpoints for correct responses, error handling, and security vulnerabilities.' },
      { name: 'Performance & Load Testing', description: 'Simulate thousands of concurrent users to ensure your app stays stable under real-world traffic.' },
      { name: 'Cross-Browser & Device Testing', description: 'Verify pixel-perfect compatibility across Chrome, Safari, Firefox, and every major mobile device.' },
      { name: 'Security Penetration Testing', description: 'Ethical hacking to identify SQL injection, XSS, authentication flaws, and other attack vectors.' },
      { name: 'Regression Testing', description: 'After every update, we re-test critical user flows to ensure new code didn\'t break existing features.' },
    ]
  },
  {
    id: 'website-support',
    number: '12',
    title: 'Website Care & Support',
    tagline: 'We don\'t disappear after launch. We\'re your long-term digital partner.',
    description: 'Technology moves fast and websites need constant attention. We provide ongoing support, security patching, performance monitoring, and feature enhancements so your digital products keep working perfectly — day after day.',
    icon: 'Headphones',
    gradient: 'from-[#F5620F] to-[#D9540A]',
    category: 'technology',
    subServices: [
      { name: 'Security Patches & Updates', description: 'Regular core, plugin, and dependency updates to keep your site protected from known vulnerabilities.' },
      { name: 'Performance Monitoring', description: 'Uptime checks, speed audits, and Core Web Vitals tracking with automated alerts for issues.' },
      { name: 'Bug Fixing & Emergency Support', description: 'Fast-response debugging for critical issues — with guaranteed response times based on your plan.' },
      { name: 'Feature Additions', description: 'Extend your platform with new features as your business grows — without starting from scratch.' },
      { name: 'Content Updates & Management', description: 'Regular content, image, pricing, and product updates so your site always reflects your latest offerings.' },
      { name: 'Database Backup & Recovery', description: 'Scheduled automated backups with tested restore procedures — so data loss is never a risk.' },
      { name: '24/7 Technical Support', description: 'A dedicated help desk for critical issues, available around the clock for supported clients.' },
    ]
  },
];

// ─── Journey / Process Steps ────────────────────────────────────────────────

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start by deeply understanding your business — your goals, users, competitors, and constraints. No assumptions, just research.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Strategy becomes visual. Wireframes, prototypes, and architecture plans — all reviewed and approved before development begins.',
    icon: 'Layers',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our engineers write clean, tested, production-ready code — with weekly demos so you see progress every step of the way.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Rigorous QA, staging testing, and then a smooth deployment — with full post-launch monitoring for the first 30 days.',
    icon: 'Sparkles',
  },
  {
    number: '05',
    title: 'Grow',
    description: 'After launch we amplify — SEO, ads, analytics, and continuous improvements. We stay until your metrics move.',
    icon: 'Megaphone',
  },
];

// ─── Industries ─────────────────────────────────────────────────────────────

export const industries = [
  { name: 'E-Commerce & Retail', icon: 'ShoppingBag', description: 'Custom stores, inventory systems, and multi-vendor marketplaces.' },
  { name: 'Healthcare & MedTech', icon: 'ShieldCheck', description: 'Patient management, clinic portals, and HIPAA-compliant platforms.' },
  { name: 'Education & E-Learning', icon: 'Brain', description: 'LMS platforms, school management, and interactive learning tools.' },
  { name: 'Real Estate & Property', icon: 'Globe', description: 'Property listing portals, virtual tours, and CRM systems.' },
  { name: 'Travel & Hospitality', icon: 'Sparkles', description: 'Booking engines, hotel management, and travel experience apps.' },
  { name: 'Finance & Fintech', icon: 'Layers', description: 'Secure fintech apps, payment platforms, and banking portals.' },
  { name: 'Manufacturing & Industry', icon: 'Code2', description: 'ERP, production tracking, and supply chain automation.' },
  { name: 'Professional Services', icon: 'Headphones', description: 'CRM, workflow automation, and client management platforms.' },
  { name: 'Startups & MVPs', icon: 'Megaphone', description: 'Rapid MVP development to validate ideas and attract investors.' },
  { name: 'SMEs & Local Business', icon: 'Smartphone', description: 'Affordable, impactful digital solutions for growing businesses.' },
  { name: 'NGOs & Non-Profits', icon: 'Cloud', description: 'Donation platforms, volunteer management, and impact reporting.' },
];
