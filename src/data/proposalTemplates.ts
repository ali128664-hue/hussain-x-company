import {
  ProposalTemplate,
  MasterCompanyData,
  ProposalSection,
  PricingPackage,
  AddOn,
  ServiceType,
} from '../types/proposal';

// ─── Master Company Defaults ──────────────────────────────────────────────────

export const defaultMasterData: MasterCompanyData = {
  name: 'Hussain X Solutions',
  website: 'hussainxsolution.com',
  email: 'info@hussainxsolution.com',
  phone: '0348-0766608',
  whatsapp: '923480766608',
  address: 'Model Town Q Block, Lahore, Pakistan',
  logo: null,
  about:
    'Hussain X Solutions is a full-service digital agency based in Lahore, Pakistan. We specialize in Social Media Marketing, SEO, Paid Advertising, Web & App Development, and Creative Design — delivering measurable results for businesses of all sizes across Pakistan and globally.',
  mission:
    'Our mission is to empower every business with the digital tools, strategies, and creative excellence needed to thrive in a competitive market.',
  terms: `1. Payment Terms: 50% advance payment required before project commencement. Remaining 50% upon delivery or as per agreed milestones.
2. Revision Policy: Up to 3 rounds of minor revisions included. Major scope changes billed separately.
3. Cancellation Policy: Either party may terminate with 15 days written notice. Work completed up to termination date is billable.
4. Content & Assets: Client is responsible for providing required content, logos, images, and access credentials within 5 business days of project start.
5. Confidentiality: All client data, business information, and project details are kept strictly confidential.
6. Intellectual Property: All deliverables remain property of the client upon full payment.
7. Third-party Costs: Ad budgets (Google Ads, Meta Ads), domain, hosting, and premium tools are NOT included unless explicitly stated.
8. Timeline Dependencies: Project timelines depend on timely client feedback. Delays on client's end may extend delivery dates.`,
  paymentTerms:
    'JazzCash: 0348-0766608 | Bank Transfer: Please contact us for bank details | Easy Paisa | USDT (TRC20) accepted for international clients.',
  cta: 'Ready to take your business to the next level? Contact us today and let\'s get started!',
};

// ─── Shared Common Sections ───────────────────────────────────────────────────

const makeSections = (extra: ProposalSection[]): ProposalSection[] => [
  {
    id: 'exec_summary',
    title: 'Executive Summary',
    content:
      'We are excited to present this proposal to you. At Hussain X Solutions, we believe every business deserves a powerful digital presence. This document outlines a customized strategy designed specifically for your business goals, target audience, and growth objectives.\n\nOur team combines strategic thinking, creative excellence, and data-driven execution to deliver tangible results — not just activity.',
    enabled: true,
    order: 1,
    locked: false,
  },
  {
    id: 'understanding',
    title: 'Understanding Your Business',
    content:
      'Based on our research and discussions, we understand that your business is looking to strengthen its digital footprint, attract more qualified customers, and build a consistent brand presence online.\n\nWe recognize the unique challenges in your industry and have crafted this proposal to directly address those pain points while maximizing your ROI.',
    enabled: true,
    order: 2,
  },
  {
    id: 'goals',
    title: 'Goals & Objectives',
    content: `• Increase brand awareness and online visibility
• Drive consistent and qualified leads
• Build trust and authority in your industry
• Improve engagement with your target audience
• Generate measurable business growth`,
    enabled: true,
    order: 3,
  },
  ...extra,
  {
    id: 'why_us',
    title: 'Why Hussain X Solutions?',
    content: `✦ Proven Track Record — Trusted by 100+ businesses across Pakistan and internationally.
✦ Expert Team — Dedicated specialists in every domain: design, development, marketing, and analytics.
✦ Transparent Communication — Weekly updates, monthly reports, and always-available support.
✦ Results-Focused — We measure success by your growth, not just by deliverables.
✦ Affordable Excellence — Premium quality at competitive rates tailored for the Pakistani market.
✦ End-to-End Service — From strategy to execution to reporting, everything under one roof.`,
    enabled: true,
    order: 90,
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    content: defaultMasterData.terms,
    enabled: true,
    order: 91,
  },
  {
    id: 'payment_terms',
    title: 'Payment Terms',
    content: defaultMasterData.paymentTerms,
    enabled: true,
    order: 92,
  },
  {
    id: 'next_steps',
    title: 'Next Steps',
    content: `We are ready to begin as soon as you are. Here is how we move forward:

Step 1 — Review this proposal carefully.
Step 2 — Reply with any questions or required adjustments.
Step 3 — Sign the agreement / confirm via WhatsApp.
Step 4 — Make the initial payment to reserve your project slot.
Step 5 — Kick-off call to align on strategy and timelines.
Step 6 — Project commences!

📞 Call / WhatsApp: 0348-0766608
📧 Email: info@hussainxsolution.com
🌐 Website: hussainxsolution.com`,
    enabled: true,
    order: 93,
  },
];

// ─── ADD-ONS LIBRARY ──────────────────────────────────────────────────────────

const commonAddOns: AddOn[] = [
  { id: 'ao-report', name: 'Advanced Monthly Report', description: 'Detailed analytics dashboard with competitor benchmarking', price_pkr: 5000, price_usd: 18 },
  { id: 'ao-consult', name: 'Monthly Strategy Call (1hr)', description: 'Dedicated 1-on-1 strategy session with senior consultant', price_pkr: 8000, price_usd: 29 },
];

const smmAddOns: AddOn[] = [
  { id: 'ao-smm-reels', name: 'Extra 4 Reels / Month', description: 'Professional short-form video content', price_pkr: 12000, price_usd: 43 },
  { id: 'ao-smm-stories', name: 'Daily Stories (30/month)', description: 'Branded story content every day', price_pkr: 8000, price_usd: 29 },
  { id: 'ao-smm-photo', name: 'Professional Photography Session', description: 'On-site product/brand photography (1 day shoot)', price_pkr: 25000, price_usd: 89 },
  { id: 'ao-smm-ads', name: 'Meta Ads Management', description: 'Facebook + Instagram paid campaigns management', price_pkr: 15000, price_usd: 54 },
  { id: 'ao-smm-platform', name: 'Additional Platform', description: 'Add TikTok, Twitter/X, or Pinterest management', price_pkr: 10000, price_usd: 36 },
  ...commonAddOns,
];

const seoAddOns: AddOn[] = [
  { id: 'ao-seo-gbp', name: 'Google Business Profile Optimization', description: 'Complete GMB setup, posts, Q&A, and optimization', price_pkr: 10000, price_usd: 36 },
  { id: 'ao-seo-blog', name: 'Extra Blog Article / Month', description: 'SEO-optimized 1000-word article', price_pkr: 6000, price_usd: 21 },
  { id: 'ao-seo-links', name: 'Premium Backlink Package (10 links)', description: 'High-DA dofollow link building', price_pkr: 20000, price_usd: 71 },
  { id: 'ao-seo-keywords', name: 'Extra 15 Keywords', description: 'Expand keyword targeting scope', price_pkr: 8000, price_usd: 29 },
  ...commonAddOns,
];

const adsAddOns: AddOn[] = [
  { id: 'ao-ads-landing', name: 'Custom Landing Page', description: 'High-converting dedicated landing page for campaigns', price_pkr: 30000, price_usd: 107 },
  { id: 'ao-ads-creative', name: 'Ad Creatives Pack (10 Banners)', description: 'Professionally designed ad visuals', price_pkr: 15000, price_usd: 54 },
  { id: 'ao-ads-ab', name: 'A/B Testing Setup', description: 'Split testing for optimal campaign performance', price_pkr: 10000, price_usd: 36 },
  ...commonAddOns,
];

const webAddOns: AddOn[] = [
  { id: 'ao-web-pages', name: 'Extra 5 Pages', description: 'Additional inner pages beyond scope', price_pkr: 15000, price_usd: 54 },
  { id: 'ao-web-seo', name: 'SEO Setup (3 Months)', description: 'On-page SEO, sitemap, schema markup', price_pkr: 25000, price_usd: 89 },
  { id: 'ao-web-wa', name: 'WhatsApp Chat Integration', description: 'Floating WhatsApp button & chat widget', price_pkr: 5000, price_usd: 18 },
  { id: 'ao-web-maint', name: 'Monthly Maintenance (6 months)', description: 'Updates, security patches, content changes', price_pkr: 8000, price_usd: 29 },
  { id: 'ao-web-speed', name: 'Speed & Performance Optimization', description: 'Core Web Vitals optimization, caching, CDN setup', price_pkr: 12000, price_usd: 43 },
  ...commonAddOns,
];

const designAddOns: AddOn[] = [
  { id: 'ao-design-src', name: 'Source Files Included', description: 'Editable AI/PSD/Figma source files', price_pkr: 10000, price_usd: 36 },
  { id: 'ao-design-rush', name: '48-Hour Rush Delivery', description: 'Priority turnaround for urgent projects', price_pkr: 8000, price_usd: 29 },
  { id: 'ao-design-print', name: 'Print-Ready Files', description: 'CMYK, bleed, crop marks for physical printing', price_pkr: 5000, price_usd: 18 },
  ...commonAddOns,
];

// ─── SERVICE TEMPLATES ────────────────────────────────────────────────────────

export const proposalTemplates: Record<string, ProposalTemplate> = {

  // ═══════════════════════════════════════════════
  // 1. SOCIAL MEDIA MARKETING
  // ═══════════════════════════════════════════════
  'Social Media Marketing': {
    serviceName: 'Social Media Marketing',
    icon: '📱',
    tagline: 'Build Your Brand. Grow Your Community. Drive Real Results.',
    sections: makeSections([
      {
        id: 'smm_strategy', title: 'Social Media Strategy', enabled: true, order: 4,
        content: `Our social media strategy is built on three pillars: Consistent Branding, Engaging Content, and Data-Driven Optimization.

📌 Platform Strategy:
• Instagram — Visual storytelling, Reels, Stories, and product showcasing
• Facebook — Community building, boosted posts, and lead generation
• LinkedIn — Professional authority, B2B connections (if applicable)
• TikTok — Short-form viral content for brand awareness

📌 Content Mix:
• Educational posts (30%) — Tips, how-tos, industry insights
• Promotional posts (20%) — Offers, product/service highlights
• Engagement posts (30%) — Polls, questions, UGC, behind-the-scenes
• Reels / Video (20%) — Trending formats, brand storytelling

📌 Hashtag Strategy:
Research and implementation of targeted hashtags to maximize organic reach within your niche and location.`,
      },
      {
        id: 'smm_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Platform Audit & Optimization (profiles, bio, highlights)
✅ Monthly Content Calendar (planned and approved in advance)
✅ Professional Graphic Design for every post
✅ Captions & Copywriting in Urdu / English
✅ Hashtag Research & Implementation
✅ Reel / Short Video Production & Editing
✅ Story Content Creation
✅ Community Management (replies, comments, DMs)
✅ Competitor Analysis (monthly)
✅ Monthly Performance Report with insights`,
      },
      {
        id: 'smm_content_preview', title: 'Content Strategy Preview', enabled: true, order: 6,
        content: `Sample post concepts we will create for your brand:

🟠 POST TYPE 1 — "Before & After"
Show transformation: "Before our management → messy feed, no engagement" vs "After → professional, consistent, growing"

🟠 POST TYPE 2 — Product Spotlight
High-quality mockup of your product/service with branded design, call-to-action, and trending aesthetic

🟠 POST TYPE 3 — Educational Carousel
"5 Things You Didn't Know About [Your Industry]" — swipeable, shareable, saves-generating content

🟠 POST TYPE 4 — Reel Concept
Fast-paced 15–30 second video showcasing your product/service with trending audio and captions

All content is created fresh each month, tailored to your audience's interests and current platform trends.`,
      },
      {
        id: 'smm_reporting', title: 'Reporting & Key Metrics', enabled: true, order: 7,
        content: `We provide a comprehensive monthly performance report covering:

📊 Reach & Impressions — How many people saw your content
❤️ Engagement Rate — Likes, comments, shares, saves
👥 Follower Growth — Net new followers gained
🎬 Reel Views — Video performance metrics
💬 DM & Comment Response Rate — Community management quality
📈 Best Performing Content — What worked and why

Reports are delivered by the 5th of each month with strategic recommendations for the following month.`,
      },
    ]),
    packages: [
      {
        id: 'smm-basic', name: 'Basic', tagline: 'Get Started Online', description: 'Ideal for new businesses establishing their social media presence',
        price_pkr: 30000, price_usd: 109, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: '2 Platforms (Facebook + Instagram)', included: true },
          { text: '12 Feed Posts / Month', included: true },
          { text: '2 Reels / Month', included: true },
          { text: '8 Stories / Month', included: true },
          { text: 'Captions & Hashtags', included: true },
          { text: 'Monthly Content Calendar', included: true },
          { text: 'Profile Bio Optimization', included: true },
          { text: 'Basic Monthly Report', included: true },
          { text: 'Community Management', included: false },
          { text: 'Competitor Analysis', included: false },
          { text: 'Advanced Analytics', included: false },
        ],
      },
      {
        id: 'smm-starter', name: 'Starter', tagline: 'Build Consistent Presence', description: 'Perfect for small businesses ready to grow consistently',
        price_pkr: 50000, price_usd: 179, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: '3 Platforms (FB + IG + LinkedIn/TikTok)', included: true },
          { text: '16 Feed Posts / Month', included: true },
          { text: '4 Reels / Month', included: true },
          { text: '15 Stories / Month', included: true },
          { text: 'Professional Copywriting', included: true },
          { text: 'Content Calendar (approved before posting)', included: true },
          { text: 'Profile & Highlights Optimization', included: true },
          { text: 'Community Management (5 days/week)', included: true },
          { text: 'Hashtag Strategy', included: true },
          { text: 'Monthly Performance Report', included: true },
          { text: 'Competitor Analysis', included: false },
        ],
      },
      {
        id: 'smm-growth', name: 'Growth', tagline: 'Accelerate Your Brand', description: 'For growing brands ready to dominate their niche',
        price_pkr: 80000, price_usd: 286, billingFrequency: 'Monthly', recommended: true,
        features: [
          { text: '3 Platforms + TikTok', included: true },
          { text: '20 Feed Posts / Month', included: true },
          { text: '6 Reels / Month', included: true },
          { text: '20 Stories / Month', included: true },
          { text: 'Premium Copywriting (Urdu + English)', included: true },
          { text: 'Content Calendar + Approval Workflow', included: true },
          { text: 'Full Profile Optimization', included: true },
          { text: 'Community Management (7 days/week)', included: true },
          { text: 'Hashtag Research & Strategy', included: true },
          { text: 'Monthly Competitor Analysis', included: true },
          { text: 'Detailed Monthly Report + Strategy Call', included: true },
        ],
      },
      {
        id: 'smm-premium', name: 'Premium', tagline: 'Total Social Domination', description: 'Complete social media management for serious brands',
        price_pkr: 130000, price_usd: 464, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'All Platforms (FB, IG, TikTok, LinkedIn, Twitter/X)', included: true },
          { text: '30 Feed Posts / Month', included: true },
          { text: '10 Reels / Month', included: true },
          { text: 'Unlimited Stories', included: true },
          { text: 'Premium Bilingual Copywriting', included: true },
          { text: 'Full Content Calendar + Pre-Approvals', included: true },
          { text: 'Influencer Outreach Coordination', included: true },
          { text: 'Community Management (24/7)', included: true },
          { text: 'Advanced Hashtag + Trend Strategy', included: true },
          { text: 'Weekly Competitor Analysis', included: true },
          { text: 'Weekly Report + Monthly Strategy Session', included: true },
        ],
      },
    ],
    addOns: smmAddOns,
    kpis: ['Reach & Impressions', 'Engagement Rate', 'Follower Growth', 'Reel Views', 'Story Views', 'Link Clicks', 'DM Responses'],
    process: [
      { step: 1, title: 'Audit & Strategy', description: 'Profile audit, competitor research, audience analysis' },
      { step: 2, title: 'Content Planning', description: 'Monthly calendar, themes, and visual concepts' },
      { step: 3, title: 'Content Creation', description: 'Graphics, captions, reels, and story design' },
      { step: 4, title: 'Client Approval', description: 'Review and approve before any post goes live' },
      { step: 5, title: 'Publishing', description: 'Scheduled posting at optimal engagement times' },
      { step: 6, title: 'Monitoring & Reporting', description: 'Community management and monthly analytics report' },
    ],
    deliverables: ['Content Calendar', 'Designed Posts', 'Reels', 'Stories', 'Captions & Hashtags', 'Monthly Report', 'Community Management Log'],
  },

  // ═══════════════════════════════════════════════
  // 2. SEO
  // ═══════════════════════════════════════════════
  'SEO': {
    serviceName: 'SEO',
    icon: '🔍',
    tagline: 'Rank Higher. Get Found. Grow Organically.',
    sections: makeSections([
      {
        id: 'seo_strategy', title: 'SEO Strategy', enabled: true, order: 4,
        content: `Our SEO approach is built on a proven 3-phase methodology:

PHASE 1 — TECHNICAL FOUNDATION (Month 1)
• Complete technical SEO audit
• Fix crawl errors, broken links, 404s
• Optimize site speed and Core Web Vitals
• Implement proper URL structure and sitemaps
• Schema markup implementation

PHASE 2 — ON-PAGE OPTIMIZATION (Month 1–2)
• Keyword research and competitive gap analysis
• Title tags, meta descriptions, headers optimization
• Internal linking structure improvement
• Content optimization for target keywords
• Image alt text and file optimization

PHASE 3 — OFF-PAGE AUTHORITY (Ongoing)
• High-quality backlink acquisition
• Local citations and directory listings
• Guest posting on relevant platforms
• Brand mention monitoring and building`,
      },
      {
        id: 'seo_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Full Technical SEO Audit (100+ checkpoints)
✅ Keyword Research (based on package)
✅ Competitor Keyword Gap Analysis
✅ On-page Optimization (titles, metas, headers, content)
✅ Internal Link Structure Improvement
✅ Schema / Structured Data Implementation
✅ XML Sitemap & Robots.txt Optimization
✅ Google Search Console & Analytics Setup
✅ Monthly Backlink Building Campaign
✅ Local SEO Optimization (Google Business Profile)
✅ Monthly Progress Report with ranking data`,
      },
      {
        id: 'seo_reporting', title: 'Reporting & Key Metrics', enabled: true, order: 6,
        content: `📊 Keyword Rankings — Position tracking for all target keywords
🌐 Organic Traffic — Monthly visitors from search engines
👁️ Impressions & CTR — Google Search Console data
🔗 Domain Authority — Website authority score growth
📥 Backlinks Acquired — New links built each month
🏆 Competitor Comparison — Ranking vs. top 3 competitors

Reports delivered monthly via PDF + Google Data Studio dashboard access.`,
      },
    ]),
    packages: [
      {
        id: 'seo-local', name: 'Local SEO', tagline: 'Dominate Your City', description: 'Perfect for local businesses targeting customers in a specific city',
        price_pkr: 38000, price_usd: 135, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Technical SEO Audit', included: true },
          { text: '10 Target Keywords', included: true },
          { text: 'Google Business Profile Optimization', included: true },
          { text: 'On-page Optimization (5 pages)', included: true },
          { text: 'Local Citations Building (10/month)', included: true },
          { text: 'Monthly Ranking Report', included: true },
          { text: 'Schema Markup (Local Business)', included: true },
          { text: 'Link Building', included: false },
          { text: 'Content Creation', included: false },
        ],
      },
      {
        id: 'seo-standard', name: 'Standard', tagline: 'Grow Your Organic Traffic', description: 'For established businesses targeting regional reach',
        price_pkr: 65000, price_usd: 230, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Comprehensive Technical Audit', included: true },
          { text: '20 Target Keywords', included: true },
          { text: 'Google Business Profile', included: true },
          { text: 'On-page Optimization (10 pages)', included: true },
          { text: 'Local + Niche Citations (20/month)', included: true },
          { text: '5 Backlinks / Month', included: true },
          { text: 'Schema Markup', included: true },
          { text: 'Monthly Blog Article (1)', included: true },
          { text: 'Monthly Report + GSC Access', included: true },
          { text: 'Competitor Analysis', included: false },
        ],
      },
      {
        id: 'seo-growth', name: 'Growth', tagline: 'Scale Your Search Visibility', description: 'Aggressive SEO for businesses serious about organic growth',
        price_pkr: 105000, price_usd: 375, billingFrequency: 'Monthly', recommended: true,
        features: [
          { text: 'Full Technical + Content Audit', included: true },
          { text: '40 Target Keywords', included: true },
          { text: 'Google Business Profile Management', included: true },
          { text: 'On-page Optimization (20 pages)', included: true },
          { text: 'Authority Citations (30/month)', included: true },
          { text: '10 High-DA Backlinks / Month', included: true },
          { text: 'Full Schema Implementation', included: true },
          { text: '2 Blog Articles / Month', included: true },
          { text: 'Competitor Gap Analysis (monthly)', included: true },
          { text: 'Detailed Report + Strategy Call', included: true },
        ],
      },
      {
        id: 'seo-enterprise', name: 'Enterprise', tagline: 'National / International Domination', description: 'For large businesses and e-commerce targeting national/global reach',
        price_pkr: 195000, price_usd: 695, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Deep Technical + Site Architecture Audit', included: true },
          { text: '80+ Target Keywords', included: true },
          { text: 'Multi-location GBP Management', included: true },
          { text: 'Full Site On-page Optimization', included: true },
          { text: 'Premium Citations (50+/month)', included: true },
          { text: '20+ Premium Backlinks / Month', included: true },
          { text: 'Advanced Schema & Rich Snippets', included: true },
          { text: '4 Blog Articles / Month', included: true },
          { text: 'Weekly Competitor Monitoring', included: true },
          { text: 'Custom Dashboard + Weekly Report', included: true },
        ],
      },
    ],
    addOns: seoAddOns,
    kpis: ['Keyword Rankings', 'Organic Traffic Growth', 'Domain Authority', 'Backlinks Acquired', 'CTR Improvement', 'Core Web Vitals Score'],
    process: [
      { step: 1, title: 'Audit', description: 'Technical SEO audit & competitor analysis' },
      { step: 2, title: 'Strategy', description: 'Keyword mapping & optimization roadmap' },
      { step: 3, title: 'On-Page', description: 'Title, meta, content & structure optimization' },
      { step: 4, title: 'Off-Page', description: 'Backlink building & citations' },
      { step: 5, title: 'Monitor', description: 'Ranking tracking & Search Console monitoring' },
      { step: 6, title: 'Report', description: 'Monthly report with next-month strategy' },
    ],
    deliverables: ['Technical Audit Report', 'Keyword Strategy Doc', 'Optimized Pages', 'Backlinks Report', 'GSC Dashboard', 'Monthly Ranking Report'],
  },

  // ═══════════════════════════════════════════════
  // 3. GOOGLE ADS / PPC
  // ═══════════════════════════════════════════════
  'Google Ads / PPC': {
    serviceName: 'Google Ads / PPC',
    icon: '🎯',
    tagline: 'Your Ads. Right Person. Right Time. Maximum ROI.',
    sections: makeSections([
      {
        id: 'gads_strategy', title: 'Google Ads Strategy', enabled: true, order: 4,
        content: `Our Google Ads management is built around one objective: maximum ROI for every rupee/dollar you spend.

CAMPAIGN TYPES WE MANAGE:
• Search Campaigns — Capture high-intent customers actively searching for your services
• Display Campaigns — Visual brand awareness across Google's network of 2M+ websites
• Shopping Campaigns — Product-based ads for e-commerce businesses
• Remarketing — Re-engage visitors who didn't convert the first time
• Performance Max — AI-powered campaigns across all Google channels

OUR OPTIMIZATION APPROACH:
• Weekly bid adjustments based on performance data
• Negative keyword management to eliminate wasted spend
• Ad copy A/B testing for highest CTR
• Landing page alignment for maximum Quality Score
• Conversion tracking setup and optimization`,
      },
      {
        id: 'gads_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Google Ads Account Setup / Audit
✅ Keyword Research & Match Type Strategy
✅ Campaign Structure & Ad Group Organization
✅ Ad Copy Creation (3+ variations per ad group)
✅ Conversion Tracking Setup (calls, forms, purchases)
✅ Google Analytics 4 Integration
✅ Negative Keyword List Management
✅ Bid Strategy Optimization (manual or Smart Bidding)
✅ Weekly Performance Monitoring
✅ Monthly Report with ROAS & CPA data
✅ Landing Page Recommendations

NOTE: Ad budget (spend) is separate from management fee.`,
      },
    ]),
    packages: [
      {
        id: 'gads-starter', name: 'Starter', tagline: 'Launch Your First Campaign', description: 'For small businesses starting with Google Ads',
        price_pkr: 45000, price_usd: 160, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Up to 2 Campaigns', included: true },
          { text: 'Keyword Research (50 keywords)', included: true },
          { text: 'Ad Copy Creation (2 variations)', included: true },
          { text: 'Basic Conversion Tracking', included: true },
          { text: 'Monthly Report', included: true },
          { text: 'Ad Budget: Up to PKR 50,000 managed', included: true },
          { text: 'Remarketing Campaigns', included: false },
          { text: 'Shopping Campaigns', included: false },
        ],
      },
      {
        id: 'gads-growth', name: 'Growth', tagline: 'Scale Your Campaigns', description: 'For businesses ready to invest seriously in paid search',
        price_pkr: 80000, price_usd: 285, billingFrequency: 'Monthly', recommended: true,
        features: [
          { text: 'Up to 5 Campaigns', included: true },
          { text: 'Keyword Research (150+ keywords)', included: true },
          { text: 'Ad Copy A/B Testing (3 variations)', included: true },
          { text: 'Full Conversion Tracking + GA4', included: true },
          { text: 'Negative Keyword Management', included: true },
          { text: 'Remarketing Campaign Setup', included: true },
          { text: 'Ad Budget: Up to PKR 200,000 managed', included: true },
          { text: 'Bi-weekly Performance Report', included: true },
        ],
      },
      {
        id: 'gads-premium', name: 'Premium', tagline: 'Maximum PPC Performance', description: 'Full-scale Google Ads management for high-growth businesses',
        price_pkr: 135000, price_usd: 480, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Unlimited Campaigns', included: true },
          { text: 'Comprehensive Keyword Strategy', included: true },
          { text: 'Advanced Ad Copy Testing', included: true },
          { text: 'Shopping + Performance Max Campaigns', included: true },
          { text: 'Full Funnel Conversion Tracking', included: true },
          { text: 'Advanced Remarketing Audiences', included: true },
          { text: 'Ad Budget: PKR 500,000+ managed', included: true },
          { text: 'Weekly Report + Strategy Call', included: true },
        ],
      },
    ],
    addOns: adsAddOns,
    kpis: ['Impressions', 'Click-Through Rate (CTR)', 'Cost Per Click (CPC)', 'Conversions', 'Cost Per Acquisition (CPA)', 'Return on Ad Spend (ROAS)'],
    process: [
      { step: 1, title: 'Account Setup', description: 'Campaign structure, tracking, and goals' },
      { step: 2, title: 'Keyword Strategy', description: 'Research, match types, negatives' },
      { step: 3, title: 'Ad Creation', description: 'Compelling ad copy with extensions' },
      { step: 4, title: 'Launch', description: 'Live campaigns with real-time monitoring' },
      { step: 5, title: 'Optimize', description: 'Weekly bid adjustments and A/B tests' },
      { step: 6, title: 'Report', description: 'Monthly ROAS and performance analysis' },
    ],
    deliverables: ['Campaign Setup', 'Ad Copy Variations', 'Conversion Tracking', 'Negative Keyword List', 'Monthly ROAS Report'],
  },

  // ═══════════════════════════════════════════════
  // 4. META ADS
  // ═══════════════════════════════════════════════
  'Meta Ads': {
    serviceName: 'Meta Ads',
    icon: '📣',
    tagline: 'Facebook & Instagram Ads That Actually Convert.',
    sections: makeSections([
      {
        id: 'meta_strategy', title: 'Meta Ads Strategy', enabled: true, order: 4,
        content: `We craft data-driven Meta (Facebook + Instagram) ad campaigns that target the right audience, at the right time, with the right message.

CAMPAIGN OBJECTIVES WE RUN:
• Lead Generation — Capture leads directly inside Facebook/Instagram
• Traffic — Drive qualified visitors to your website or landing page
• Conversions — Pixel-optimized campaigns for purchases or sign-ups
• Brand Awareness — Reach and impression-maximized campaigns
• Engagement — Grow page likes, post interaction, and followers
• Retargeting — Re-engage warm audiences who interacted with your brand

AUDIENCE STRATEGY:
• Interest-based targeting (demographics, behaviors, interests)
• Lookalike audiences (based on your existing customers)
• Custom audiences (website visitors, video viewers, email lists)
• Retargeting funnels (awareness → consideration → conversion)`,
      },
      {
        id: 'meta_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Meta Business Suite Setup & Pixel Installation
✅ Audience Research & Segmentation
✅ Campaign & Ad Set Structure
✅ Creative Ad Design (static + carousel + video)
✅ Ad Copywriting (primary text, headlines, CTAs)
✅ A/B Testing (audiences, creatives, copy)
✅ Conversion Event Setup & Tracking
✅ Retargeting Campaign Setup
✅ Weekly Monitoring & Budget Adjustments
✅ Monthly Performance Report

NOTE: Ad spend budget is NOT included in management fee.`,
      },
    ]),
    packages: [
      {
        id: 'meta-starter', name: 'Starter', tagline: 'Start Advertising Smart', description: 'Entry-level Meta Ads for local businesses',
        price_pkr: 42000, price_usd: 150, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: '2 Active Campaigns', included: true },
          { text: '4 Ad Creatives (static)', included: true },
          { text: 'Audience Research & Setup', included: true },
          { text: 'Basic Pixel Setup', included: true },
          { text: 'Ad Budget Managed: Up to PKR 30,000', included: true },
          { text: 'Monthly Report', included: true },
          { text: 'Retargeting Campaigns', included: false },
          { text: 'Video Ads', included: false },
        ],
      },
      {
        id: 'meta-growth', name: 'Growth', tagline: 'Scale Your Meta Presence', description: 'For businesses investing seriously in paid social',
        price_pkr: 75000, price_usd: 268, billingFrequency: 'Monthly', recommended: true,
        features: [
          { text: '4 Active Campaigns', included: true },
          { text: '8 Ad Creatives (static + carousel)', included: true },
          { text: 'Advanced Audience Segmentation', included: true },
          { text: 'Full Pixel & Event Tracking', included: true },
          { text: 'Retargeting Campaign', included: true },
          { text: 'Lookalike Audiences', included: true },
          { text: 'Ad Budget Managed: Up to PKR 100,000', included: true },
          { text: 'Bi-weekly Report + Optimization', included: true },
        ],
      },
      {
        id: 'meta-premium', name: 'Premium', tagline: 'Dominate Meta Advertising', description: 'Full-funnel Meta advertising for maximum conversions',
        price_pkr: 125000, price_usd: 446, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Unlimited Campaigns', included: true },
          { text: '15+ Ad Creatives (static + carousel + video)', included: true },
          { text: 'Full Funnel Strategy (Awareness → Conversion)', included: true },
          { text: 'Advanced CAPI (Conversions API) Setup', included: true },
          { text: 'Full Retargeting + Custom Audiences', included: true },
          { text: 'Dynamic Product Ads (for e-commerce)', included: true },
          { text: 'Ad Budget: PKR 300,000+ managed', included: true },
          { text: 'Weekly Report + Strategy Session', included: true },
        ],
      },
    ],
    addOns: adsAddOns,
    kpis: ['Reach & Impressions', 'CTR', 'Cost Per Lead (CPL)', 'Conversions', 'ROAS', 'Frequency', 'Relevance Score'],
    process: [
      { step: 1, title: 'Pixel Setup', description: 'Install and configure Meta Pixel & events' },
      { step: 2, title: 'Audience Build', description: 'Create targeting, lookalike & retargeting audiences' },
      { step: 3, title: 'Ad Creative', description: 'Design visuals and write compelling copy' },
      { step: 4, title: 'Launch', description: 'Live campaigns with daily monitoring' },
      { step: 5, title: 'A/B Test', description: 'Test audiences, creatives and copy variants' },
      { step: 6, title: 'Scale & Report', description: 'Scale winners, cut losers, monthly report' },
    ],
    deliverables: ['Pixel & Events Setup', 'Audience Strategy Doc', 'Ad Creatives', 'Campaign Structure', 'Monthly Report'],
  },

  // ═══════════════════════════════════════════════
  // 5. WEBSITE DEVELOPMENT
  // ═══════════════════════════════════════════════
  'Website Development': {
    serviceName: 'Website Development',
    icon: '🌐',
    tagline: 'Fast. Beautiful. Conversion-Optimized Websites.',
    sections: makeSections([
      {
        id: 'web_strategy', title: 'Development Approach', enabled: true, order: 4,
        content: `We build modern, high-performance websites using the latest technologies — designed not just to look great, but to convert visitors into customers.

TECH STACK:
• Frontend: React.js / Next.js / HTML5 + Tailwind CSS
• Backend: Node.js / PHP / Python (as needed)
• CMS: WordPress, Custom CMS, or Headless CMS
• Database: MySQL / MongoDB / PostgreSQL
• Hosting: cPanel, Cloudflare, VPS (deployment support included)

OUR DESIGN PHILOSOPHY:
• Mobile-First Design — Looks perfect on every device
• Speed-Optimized — Sub-3-second load times
• SEO-Ready — Proper structure for Google indexing
• User Experience (UX) — Clean navigation, clear CTAs
• Brand Consistency — Colors, fonts, and style that match your identity`,
      },
      {
        id: 'web_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Requirements Gathering & Discovery Call
✅ Wireframing & UI/UX Design (Figma mockups)
✅ Client Approval on Design Before Development
✅ Responsive Frontend Development
✅ CMS Integration (easy content management)
✅ Contact Form + WhatsApp Integration
✅ Basic On-page SEO Setup
✅ Google Analytics 4 Integration
✅ Cross-browser Testing (Chrome, Safari, Firefox, Edge)
✅ Mobile Responsiveness Testing
✅ Performance Optimization
✅ Deployment & Go-live Support
✅ 30-Day Post-Launch Support`,
      },
      {
        id: 'web_timeline', title: 'Project Timeline', enabled: true, order: 6,
        content: `📅 Week 1: Discovery, requirements finalization, and sitemap creation
📅 Week 2: Wireframing and UI design (Figma mockups for approval)
📅 Week 3–4: Frontend development and CMS integration
📅 Week 5: Content population, testing, and QA
📅 Week 6: Final review, client approval, and deployment

Timeline may vary based on scope. Rush delivery available at additional cost.`,
      },
    ]),
    packages: [
      {
        id: 'web-landing', name: 'Landing Page', tagline: 'Single High-Converting Page', description: 'Perfect for product launches, campaigns, and lead generation',
        price_pkr: 35000, price_usd: 125, billingFrequency: 'One-time', recommended: false,
        features: [
          { text: '1 Page Design + Development', included: true },
          { text: 'Mobile Responsive', included: true },
          { text: 'Contact Form Integration', included: true },
          { text: 'WhatsApp Button', included: true },
          { text: 'Basic On-page SEO', included: true },
          { text: 'Google Analytics', included: true },
          { text: 'Delivery: 5–7 Days', included: true },
          { text: 'CMS / Admin Panel', included: false },
          { text: 'Multiple Pages', included: false },
        ],
      },
      {
        id: 'web-business', name: 'Business Website', tagline: 'Professional Corporate Presence', description: 'Complete website for businesses and service providers',
        price_pkr: 110000, price_usd: 395, billingFrequency: 'One-time', recommended: false,
        features: [
          { text: 'Up to 8 Pages', included: true },
          { text: 'Custom Design (not a template)', included: true },
          { text: 'Mobile + Tablet Responsive', included: true },
          { text: 'CMS Integration', included: true },
          { text: 'Contact Form + WhatsApp', included: true },
          { text: 'SEO-Optimized Structure', included: true },
          { text: 'Google Analytics + GSC Setup', included: true },
          { text: 'Social Media Links', included: true },
          { text: 'Delivery: 3–4 Weeks', included: true },
        ],
      },
      {
        id: 'web-ecommerce', name: 'E-Commerce', tagline: 'Sell Online 24/7', description: 'Full online store with payment integration and product management',
        price_pkr: 240000, price_usd: 855, billingFrequency: 'One-time', recommended: true,
        features: [
          { text: 'Unlimited Products', included: true },
          { text: 'Payment Gateway (JazzCash, EasyPaisa, Card)', included: true },
          { text: 'Product Categories & Filters', included: true },
          { text: 'Shopping Cart & Checkout', included: true },
          { text: 'Order Management Dashboard', included: true },
          { text: 'Customer Accounts & Wishlists', included: true },
          { text: 'Inventory Management', included: true },
          { text: 'SEO-Optimized Product Pages', included: true },
          { text: 'Delivery: 6–8 Weeks', included: true },
        ],
      },
      {
        id: 'web-custom', name: 'Custom Web App', tagline: 'Tailored Digital Solution', description: 'Custom web applications, portals, dashboards, and SaaS products',
        price_pkr: 0, price_usd: 0, billingFrequency: 'Per Project', recommended: false,
        features: [
          { text: 'Custom Requirements Analysis', included: true },
          { text: 'Database Architecture Design', included: true },
          { text: 'User Authentication & Roles', included: true },
          { text: 'Admin Dashboard / CRM', included: true },
          { text: 'API Development & Integration', included: true },
          { text: 'Scalable Architecture', included: true },
          { text: 'Full Source Code Ownership', included: true },
          { text: 'Timeline: Based on scope', included: true },
        ],
      },
    ],
    addOns: webAddOns,
    kpis: ['Page Load Speed', 'Core Web Vitals Score', 'Mobile Responsiveness', 'SEO Score', 'Uptime %', 'Conversion Rate'],
    process: [
      { step: 1, title: 'Discovery', description: 'Requirements, sitemap, and goal alignment' },
      { step: 2, title: 'Design', description: 'Figma wireframes and visual design (approved before coding)' },
      { step: 3, title: 'Develop', description: 'Frontend + backend development' },
      { step: 4, title: 'Test', description: 'Cross-browser, mobile, and performance testing' },
      { step: 5, title: 'Deploy', description: 'Live deployment and DNS setup' },
      { step: 6, title: 'Support', description: '30-day post-launch support and training' },
    ],
    deliverables: ['Figma Design Files', 'Developed Website', 'CMS Training', 'SEO Setup', 'Analytics Integration', 'Source Code (on request)'],
  },

  // ═══════════════════════════════════════════════
  // 6. WORDPRESS DEVELOPMENT
  // ═══════════════════════════════════════════════
  'WordPress Development': {
    serviceName: 'WordPress Development',
    icon: '🗂️',
    tagline: 'Powerful WordPress Sites. Easy to Manage. Ready to Grow.',
    sections: makeSections([
      {
        id: 'wp_strategy', title: 'WordPress Strategy', enabled: true, order: 4,
        content: `WordPress powers 43% of all websites globally — and for good reason. We build optimized, secure, and scalable WordPress websites that are easy for you to manage, with no technical knowledge required.

OUR WORDPRESS EXPERTISE:
• Custom Theme Development (no page-builders — clean code)
• Elementor Pro / WPBakery implementations when needed
• WooCommerce for e-commerce
• Membership sites and online courses
• Multi-language sites (WPML)
• REST API integration
• Performance optimization (LiteSpeed Cache, Cloudflare, WP Rocket)`,
      },
      {
        id: 'wp_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ WordPress Installation & Configuration
✅ Premium Theme Setup / Custom Theme Development
✅ Plugin Installation & Configuration (SEO, Security, Speed)
✅ Responsive Design Implementation
✅ Content Migration (if applicable)
✅ Contact Forms & WhatsApp Integration
✅ WooCommerce Setup (if e-commerce)
✅ Security Hardening (SSL, Firewall, Backups)
✅ Speed Optimization (Caching, CDN, Image Compression)
✅ SEO Plugin Configuration (Yoast / RankMath)
✅ Admin Training Session`,
      },
    ]),
    packages: [
      {
        id: 'wp-basic', name: 'Basic', tagline: 'Quick & Clean WordPress Site', description: 'Simple WordPress site with premium theme',
        price_pkr: 42000, price_usd: 150, billingFrequency: 'One-time', recommended: false,
        features: [
          { text: 'Premium Theme Installation', included: true },
          { text: 'Up to 5 Pages', included: true },
          { text: 'Basic Plugin Setup (SEO, Security)', included: true },
          { text: 'Contact Form', included: true },
          { text: 'Mobile Responsive', included: true },
          { text: 'Delivery: 1–2 Weeks', included: true },
          { text: 'Custom Design', included: false },
          { text: 'WooCommerce', included: false },
        ],
      },
      {
        id: 'wp-professional', name: 'Professional', tagline: 'Custom WordPress Website', description: 'Custom-designed WordPress website with full functionality',
        price_pkr: 95000, price_usd: 340, billingFrequency: 'One-time', recommended: true,
        features: [
          { text: 'Custom Design (Elementor Pro / Custom)', included: true },
          { text: 'Up to 10 Pages', included: true },
          { text: 'Full Plugin Suite (SEO, Speed, Security)', included: true },
          { text: 'Blog Setup', included: true },
          { text: 'WhatsApp + Contact Forms', included: true },
          { text: 'Speed Optimization', included: true },
          { text: 'Admin Training', included: true },
          { text: 'Delivery: 3–4 Weeks', included: true },
        ],
      },
      {
        id: 'wp-ecommerce', name: 'WooCommerce Store', tagline: 'Sell on WordPress', description: 'Full WooCommerce e-commerce store on WordPress',
        price_pkr: 165000, price_usd: 590, billingFrequency: 'One-time', recommended: false,
        features: [
          { text: 'Custom WooCommerce Theme', included: true },
          { text: 'Unlimited Products', included: true },
          { text: 'Payment Gateway Integration', included: true },
          { text: 'Coupon & Discount System', included: true },
          { text: 'Inventory Management', included: true },
          { text: 'Order Email Notifications', included: true },
          { text: 'Speed & SEO Optimization', included: true },
          { text: 'Delivery: 4–5 Weeks', included: true },
        ],
      },
    ],
    addOns: webAddOns,
    kpis: ['Page Speed Score', 'Uptime', 'Security Score', 'SEO Score', 'Conversion Rate'],
    process: [
      { step: 1, title: 'Planning', description: 'Requirements and site structure' },
      { step: 2, title: 'Setup', description: 'WordPress install, theme, plugins' },
      { step: 3, title: 'Design', description: 'Page building and custom design' },
      { step: 4, title: 'Content', description: 'Content population and optimization' },
      { step: 5, title: 'Test', description: 'Speed, security, and mobile testing' },
      { step: 6, title: 'Launch', description: 'Deployment and admin training' },
    ],
    deliverables: ['WordPress Site', 'Plugin Configuration', 'Speed Optimization', 'Training Session', 'Admin Login Credentials'],
  },

  // ═══════════════════════════════════════════════
  // 7. SHOPIFY DEVELOPMENT
  // ═══════════════════════════════════════════════
  'Shopify Development': {
    serviceName: 'Shopify Development',
    icon: '🛍️',
    tagline: 'Build Your Dream Online Store on Shopify.',
    sections: makeSections([
      {
        id: 'shopify_strategy', title: 'Shopify Strategy', enabled: true, order: 4,
        content: `Shopify is the world's leading e-commerce platform — we help you unlock its full potential with a professionally designed, conversion-optimized store.

OUR SHOPIFY EXPERTISE:
• Custom Shopify Theme Development
• Shopify Theme Customization (Dawn, Debut, etc.)
• Product & Collection Setup
• Payment Gateway Integration (International + Pakistan: JazzCash, Meezan)
• Shopify Apps Installation & Configuration
• Shopify SEO Optimization
• Abandoned Cart Recovery Setup
• Email Marketing Integration (Klaviyo, Omnisend)`,
      },
      {
        id: 'shopify_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Shopify Store Setup & Configuration
✅ Custom Theme Design / Theme Customization
✅ Product Upload & Organization (categories, tags, variants)
✅ Payment Gateway Setup
✅ Shipping Zones & Rate Configuration
✅ Apps Setup (reviews, wishlist, email capture)
✅ SEO Optimization (product pages, meta tags)
✅ Mobile Optimization
✅ Analytics & Tracking Setup
✅ Admin Panel Training`,
      },
    ]),
    packages: [
      {
        id: 'shopify-basic', name: 'Basic Store', tagline: 'Launch Your Shopify Store', description: 'Simple Shopify store with theme setup',
        price_pkr: 55000, price_usd: 195, billingFrequency: 'One-time', recommended: false,
        features: [
          { text: 'Theme Selection & Setup', included: true },
          { text: 'Up to 20 Products', included: true },
          { text: 'Basic Customization', included: true },
          { text: 'Payment Gateway', included: true },
          { text: 'Mobile Responsive', included: true },
          { text: 'Delivery: 1–2 Weeks', included: true },
          { text: 'Custom Design', included: false },
          { text: 'Apps Integration', included: false },
        ],
      },
      {
        id: 'shopify-professional', name: 'Professional', tagline: 'Custom Branded Store', description: 'Fully customized Shopify store with premium design',
        price_pkr: 130000, price_usd: 465, billingFrequency: 'One-time', recommended: true,
        features: [
          { text: 'Custom Theme Design', included: true },
          { text: 'Up to 100 Products', included: true },
          { text: 'Premium Apps Setup (reviews, upsell)', included: true },
          { text: 'Payment Gateway Integration', included: true },
          { text: 'Email Marketing Integration', included: true },
          { text: 'SEO Optimization', included: true },
          { text: 'Analytics & Facebook Pixel', included: true },
          { text: 'Delivery: 3–4 Weeks', included: true },
        ],
      },
      {
        id: 'shopify-enterprise', name: 'Enterprise', tagline: 'High-Volume E-Commerce', description: 'Advanced Shopify store for serious e-commerce businesses',
        price_pkr: 250000, price_usd: 895, billingFrequency: 'One-time', recommended: false,
        features: [
          { text: 'Custom Theme Development (from scratch)', included: true },
          { text: 'Unlimited Products', included: true },
          { text: 'Multi-currency & Multi-language', included: true },
          { text: 'Advanced Apps Suite', included: true },
          { text: 'Abandoned Cart Recovery', included: true },
          { text: 'Advanced SEO + Schema', included: true },
          { text: 'Conversion Rate Optimization (CRO)', included: true },
          { text: 'Delivery: 6–8 Weeks', included: true },
        ],
      },
    ],
    addOns: webAddOns,
    kpis: ['Store Conversion Rate', 'Average Order Value', 'Bounce Rate', 'Page Load Speed', 'Revenue per Visitor'],
    process: [
      { step: 1, title: 'Plan', description: 'Store structure, product catalog, and navigation' },
      { step: 2, title: 'Design', description: 'Custom theme design and branding' },
      { step: 3, title: 'Build', description: 'Theme development and app integration' },
      { step: 4, title: 'Products', description: 'Upload and organize product catalog' },
      { step: 5, title: 'Test', description: 'Checkout, payment, and mobile testing' },
      { step: 6, title: 'Launch', description: 'Live store + admin training' },
    ],
    deliverables: ['Shopify Store', 'Custom Theme', 'Product Catalog', 'App Configuration', 'Training Session'],
  },

  // ═══════════════════════════════════════════════
  // 8. GRAPHIC DESIGN
  // ═══════════════════════════════════════════════
  'Graphic Design': {
    serviceName: 'Graphic Design',
    icon: '🎨',
    tagline: 'Designs That Speak. Brands That Stick.',
    sections: makeSections([
      {
        id: 'design_strategy', title: 'Design Approach', enabled: true, order: 4,
        content: `Great design is more than beautiful visuals — it communicates your brand's personality, builds trust, and drives action. We create designs that are not just aesthetically stunning but strategically aligned with your business goals.

OUR DESIGN CAPABILITIES:
• Brand Identity & Logo Design
• Social Media Post Design (feed, stories, reels covers)
• Brochure & Flyer Design (print + digital)
• Business Card Design
• Banner & Poster Design
• Packaging Design
• Presentation Design (PowerPoint / Google Slides)
• YouTube Thumbnails & Channel Art
• Infographic Design
• Marketing Collateral (letterheads, envelopes, etc.)`,
      },
      {
        id: 'design_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Brand Brief & Style Discussion
✅ Concept Development (2–3 initial concepts)
✅ Client Revision Rounds (as per package)
✅ Final File Delivery (PNG, JPG, PDF)
✅ High-Resolution Print Files
✅ Social Media-Optimized Files
✅ Brand Color & Font Documentation (branding packages)`,
      },
    ]),
    packages: [
      {
        id: 'design-basic', name: 'Basic', tagline: 'Essential Design Package', description: 'Ideal for single-project design needs',
        price_pkr: 22000, price_usd: 78, billingFrequency: 'Per Project', recommended: false,
        features: [
          { text: '1 Logo Design (3 concepts)', included: true },
          { text: '2 Revision Rounds', included: true },
          { text: 'Final Files: PNG + JPG', included: true },
          { text: 'Business Card Design', included: true },
          { text: '3 Social Media Posts', included: true },
          { text: 'Delivery: 3–5 Days', included: true },
          { text: 'Source Files (AI/PSD)', included: false },
          { text: 'Brand Guidelines', included: false },
        ],
      },
      {
        id: 'design-standard', name: 'Standard', tagline: 'Complete Brand Identity', description: 'Full branding package for businesses',
        price_pkr: 55000, price_usd: 195, billingFrequency: 'Per Project', recommended: true,
        features: [
          { text: 'Logo Design (5 concepts)', included: true },
          { text: '3 Revision Rounds', included: true },
          { text: 'Business Card + Letterhead Design', included: true },
          { text: 'Social Media Profile Kit (10 posts)', included: true },
          { text: 'Flyer / Brochure Design', included: true },
          { text: 'Email Signature Design', included: true },
          { text: 'Brand Color Palette Documentation', included: true },
          { text: 'Source Files Included', included: true },
          { text: 'Delivery: 7–10 Days', included: true },
        ],
      },
      {
        id: 'design-premium', name: 'Premium', tagline: 'Enterprise Brand Package', description: 'Comprehensive branding for established businesses',
        price_pkr: 110000, price_usd: 395, billingFrequency: 'Per Project', recommended: false,
        features: [
          { text: 'Complete Logo Suite (primary, secondary, icon)', included: true },
          { text: 'Unlimited Revisions', included: true },
          { text: 'Full Stationery Design', included: true },
          { text: 'Social Media Kit (25+ designs)', included: true },
          { text: 'Packaging Design (if applicable)', included: true },
          { text: 'Presentation Template (20 slides)', included: true },
          { text: 'Full Brand Guidelines Document', included: true },
          { text: 'All Source Files (AI, PSD, Figma)', included: true },
          { text: 'Delivery: 2–3 Weeks', included: true },
        ],
      },
    ],
    addOns: designAddOns,
    kpis: ['Brand Consistency Score', 'Design Approval Rate', 'Revision Rounds', 'Delivery Time', 'Client Satisfaction'],
    process: [
      { step: 1, title: 'Brief', description: 'Brand discussion, style preferences, references' },
      { step: 2, title: 'Concept', description: 'Initial design concepts created' },
      { step: 3, title: 'Review', description: 'Client feedback and revisions' },
      { step: 4, title: 'Refine', description: 'Polish and finalize design' },
      { step: 5, title: 'Approve', description: 'Final client sign-off' },
      { step: 6, title: 'Deliver', description: 'All files in required formats' },
    ],
    deliverables: ['Final Logo Files', 'Source Files', 'Print-Ready Files', 'Social Media Kit', 'Brand Guidelines'],
  },

  // ═══════════════════════════════════════════════
  // 9. CONTENT MARKETING
  // ═══════════════════════════════════════════════
  'Content Marketing': {
    serviceName: 'Content Marketing',
    icon: '✍️',
    tagline: 'Content That Educates, Engages, and Converts.',
    sections: makeSections([
      {
        id: 'content_strategy', title: 'Content Marketing Strategy', enabled: true, order: 4,
        content: `Content marketing is the art of attracting and retaining customers by consistently creating valuable, relevant content. We build content strategies that position you as the authority in your industry.

OUR CONTENT SERVICES:
• Blog Writing (SEO-optimized, 800–2000 words)
• Article Writing (industry publications, guest posts)
• Website Copywriting (homepage, services, about)
• Email Newsletter Writing
• Social Media Captions & Scripts
• Video Script Writing
• Product Descriptions
• Press Releases
• Case Studies & Whitepapers`,
      },
      {
        id: 'content_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Content Audit (existing content review)
✅ Content Strategy & Topic Planning
✅ Keyword Research for SEO-based content
✅ Blog / Article Writing (as per package)
✅ Internal Linking Strategy
✅ Meta Title & Description for each article
✅ Image recommendations and alt text
✅ Content Calendar (monthly planning)
✅ Performance Tracking (traffic, engagement)`,
      },
    ]),
    packages: [
      {
        id: 'content-basic', name: 'Basic', tagline: 'Start Your Content Journey', description: 'Entry-level content marketing for small businesses',
        price_pkr: 28000, price_usd: 100, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: '2 Blog Articles / Month (800–1000 words)', included: true },
          { text: 'SEO Keyword Research', included: true },
          { text: 'Meta Title & Description', included: true },
          { text: 'Content Calendar', included: true },
          { text: 'English Writing', included: true },
          { text: 'Internal Linking', included: false },
          { text: 'Social Media Adaptation', included: false },
        ],
      },
      {
        id: 'content-standard', name: 'Standard', tagline: 'Build Content Authority', description: 'Regular content publishing for consistent organic growth',
        price_pkr: 55000, price_usd: 195, billingFrequency: 'Monthly', recommended: true,
        features: [
          { text: '4 Blog Articles / Month (1000–1500 words)', included: true },
          { text: 'Advanced SEO Keyword Targeting', included: true },
          { text: 'Full On-page Optimization', included: true },
          { text: 'Internal Linking Strategy', included: true },
          { text: 'Social Media Caption Adaptation (4 posts)', included: true },
          { text: 'Monthly Content Performance Report', included: true },
          { text: 'Urdu + English Writing', included: true },
        ],
      },
      {
        id: 'content-premium', name: 'Premium', tagline: 'Content Dominance', description: 'Comprehensive content marketing for maximum authority',
        price_pkr: 105000, price_usd: 375, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: '8 Blog Articles / Month (1500–2000 words)', included: true },
          { text: '1 Long-form Pillar Content / Month (3000+ words)', included: true },
          { text: 'Email Newsletter (2/month)', included: true },
          { text: 'Full SEO Strategy per Article', included: true },
          { text: 'Social Media Adaptation (all posts)', included: true },
          { text: 'Case Studies or Whitepapers (quarterly)', included: true },
          { text: 'Detailed Monthly Report', included: true },
        ],
      },
    ],
    addOns: [...commonAddOns, { id: 'ao-content-email', name: 'Email Newsletter Campaign', description: 'Bi-weekly branded email newsletter', price_pkr: 10000, price_usd: 36 }],
    kpis: ['Organic Traffic', 'Time on Page', 'Bounce Rate', 'Social Shares', 'Backlinks Generated', 'Lead Attribution'],
    process: [
      { step: 1, title: 'Audit', description: 'Existing content and gap analysis' },
      { step: 2, title: 'Strategy', description: 'Topic cluster and keyword planning' },
      { step: 3, title: 'Create', description: 'Research, writing, and editing' },
      { step: 4, title: 'Optimize', description: 'SEO on-page optimization per article' },
      { step: 5, title: 'Publish', description: 'Website publishing and social sharing' },
      { step: 6, title: 'Measure', description: 'Traffic and engagement tracking' },
    ],
    deliverables: ['Blog Articles', 'Content Calendar', 'SEO Reports', 'Social Media Adaptations', 'Monthly Analytics'],
  },

  // ═══════════════════════════════════════════════
  // 10. COMPLETE DIGITAL MARKETING
  // ═══════════════════════════════════════════════
  'Complete Digital Marketing': {
    serviceName: 'Complete Digital Marketing',
    icon: '🚀',
    tagline: 'All-in-One Digital Growth. One Partner. Maximum Results.',
    sections: makeSections([
      {
        id: 'cdm_strategy', title: 'Complete Digital Strategy', enabled: true, order: 4,
        content: `This is our flagship all-in-one digital marketing package. Instead of managing multiple agencies, we handle everything under one roof — from social media and SEO to paid ads and content — with a unified strategy that ensures all channels work together.

CHANNELS INCLUDED (based on package):
📱 Social Media Marketing — Instagram, Facebook, TikTok, LinkedIn
🔍 Search Engine Optimization — Organic search visibility
🎯 Google Ads — Search + Display campaigns
📣 Meta Ads — Facebook & Instagram paid campaigns
✍️ Content Marketing — Blog articles + email newsletters
🎨 Graphic Design — All visual content across platforms

INTEGRATED APPROACH:
Our team works as one unit — the SEO team informs content, content feeds social media, social media data refines ads targeting, and ads results shape overall strategy. This cross-channel synergy maximizes every rupee you invest.`,
      },
      {
        id: 'cdm_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: `✅ Dedicated Account Manager (single point of contact)
✅ Monthly Strategy Meeting
✅ Social Media Management (platforms as per package)
✅ Content Creation (posts, reels, stories)
✅ SEO (on-page + off-page + local)
✅ Google Ads Management
✅ Meta Ads Management
✅ Blog Content Writing
✅ Email Newsletter
✅ Graphic Design Support
✅ Comprehensive Monthly Report (all channels)
✅ Quarterly Strategy Review`,
      },
    ]),
    packages: [
      {
        id: 'cdm-gold', name: 'Gold', tagline: 'Start Growing Digitally', description: 'Essential digital marketing covering core channels',
        price_pkr: 160000, price_usd: 570, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'Social Media (FB + IG) — 16 Posts + 3 Reels', included: true },
          { text: 'SEO — 15 Keywords, On-page Optimization', included: true },
          { text: 'Google Ads — 2 Campaigns Management', included: true },
          { text: 'Meta Ads — 2 Campaigns Management', included: true },
          { text: '2 Blog Articles / Month', included: true },
          { text: 'Dedicated Account Manager', included: true },
          { text: 'Monthly Comprehensive Report', included: true },
          { text: 'Strategy Call (monthly)', included: true },
        ],
      },
      {
        id: 'cdm-platinum', name: 'Platinum', tagline: 'Serious Digital Growth', description: 'Full multi-channel digital marketing for growing businesses',
        price_pkr: 275000, price_usd: 980, billingFrequency: 'Monthly', recommended: true,
        features: [
          { text: 'Social Media (FB + IG + TikTok) — 24 Posts + 6 Reels', included: true },
          { text: 'SEO — 30 Keywords, Full Optimization + 5 Links/month', included: true },
          { text: 'Google Ads — 4 Campaigns + Remarketing', included: true },
          { text: 'Meta Ads — 4 Campaigns + Retargeting', included: true },
          { text: '4 Blog Articles / Month', included: true },
          { text: 'Email Newsletter (bi-monthly)', included: true },
          { text: 'Dedicated Account Manager + Designer', included: true },
          { text: 'Bi-weekly Report + Strategy Call', included: true },
        ],
      },
      {
        id: 'cdm-diamond', name: 'Diamond', tagline: 'Total Digital Domination', description: 'The ultimate all-inclusive digital marketing powerhouse',
        price_pkr: 480000, price_usd: 1715, billingFrequency: 'Monthly', recommended: false,
        features: [
          { text: 'All Platforms — 30+ Posts + 10 Reels/month', included: true },
          { text: 'Enterprise SEO — 60+ Keywords + 15 Links/month', included: true },
          { text: 'Google Ads — Full account management', included: true },
          { text: 'Meta Ads — Full funnel campaigns', included: true },
          { text: '8 Blog Articles + 1 Pillar Content/month', included: true },
          { text: 'Weekly Email Newsletter', included: true },
          { text: 'Dedicated Team (Manager, Designer, Writer, Ads Specialist)', included: true },
          { text: 'Weekly Reports + Monthly Board-level Presentation', included: true },
        ],
      },
    ],
    addOns: [...smmAddOns, ...seoAddOns, ...adsAddOns],
    kpis: ['Overall Leads Generated', 'Total Revenue Attribution', 'Blended ROAS', 'Organic Traffic Growth', 'Social Media Reach', 'Email Open Rate'],
    process: [
      { step: 1, title: 'Audit', description: 'Full digital presence audit across all channels' },
      { step: 2, title: 'Strategy', description: 'Integrated cross-channel strategy and roadmap' },
      { step: 3, title: 'Execute', description: 'Simultaneous execution across all channels' },
      { step: 4, title: 'Monitor', description: 'Daily monitoring and real-time optimization' },
      { step: 5, title: 'Optimize', description: 'Weekly cross-channel performance review' },
      { step: 6, title: 'Report', description: 'Comprehensive monthly report + strategy refinement' },
    ],
    deliverables: ['Integrated Strategy Document', 'All Social Content', 'SEO Reports', 'Ads Performance Reports', 'Content Assets', 'Monthly Dashboard'],
  },

  // ═══════════════════════════════════════════════
  // 11. CUSTOM PROPOSAL
  // ═══════════════════════════════════════════════
  'Custom Proposal': {
    serviceName: 'Custom Proposal',
    icon: '⚙️',
    tagline: 'A Proposal Tailored to Your Unique Requirements.',
    sections: makeSections([
      {
        id: 'custom_intro', title: 'Custom Solution Overview', enabled: true, order: 4,
        content: `Every business is unique — and sometimes a standard package simply doesn\'t fit. This custom proposal has been crafted specifically for your requirements based on our discovery discussions.

We have analyzed your needs, evaluated the scope of work, and designed a tailored solution that delivers maximum value for your specific goals.`,
      },
      {
        id: 'custom_scope', title: 'Scope of Work', enabled: true, order: 5,
        content: 'Please describe the specific scope of work here. Replace this placeholder with the agreed deliverables, timelines, and responsibilities.',
      },
    ]),
    packages: [
      {
        id: 'custom-tailored', name: 'Custom Package', tagline: 'Tailored to Your Needs', description: 'A bespoke solution designed for your specific requirements',
        price_pkr: 0, price_usd: 0, billingFrequency: 'TBD', recommended: false,
        features: [
          { text: 'Requirements Analysis', included: true },
          { text: 'Custom Deliverables', included: true },
          { text: 'Dedicated Project Manager', included: true },
          { text: 'Flexible Timeline', included: true },
        ],
      },
    ],
    addOns: commonAddOns,
    kpis: ['Project Completion', 'Client Satisfaction', 'Deliverables Quality', 'On-time Delivery'],
    process: [
      { step: 1, title: 'Discovery', description: 'Deep dive into requirements' },
      { step: 2, title: 'Proposal', description: 'Custom scoping and pricing' },
      { step: 3, title: 'Agree', description: 'Contract and milestone agreement' },
      { step: 4, title: 'Execute', description: 'Project delivery per agreed scope' },
      { step: 5, title: 'Review', description: 'Feedback and revisions' },
      { step: 6, title: 'Handover', description: 'Final delivery and documentation' },
    ],
    deliverables: ['As per agreed scope'],
  },
};

// ─── Currency Helpers ─────────────────────────────────────────────────────────

export const PKR_TO_USD_RATE = 280;

export function formatPrice(pkr: number, usd: number, currency: 'PKR' | 'USD'): string {
  if (pkr === 0 && usd === 0) return 'Custom Quote';
  if (currency === 'PKR') return `PKR ${pkr.toLocaleString('en-PK')}`;
  return `$${usd.toLocaleString('en-US')}`;
}

export const ALL_SERVICES = Object.keys(proposalTemplates) as ServiceType[];
