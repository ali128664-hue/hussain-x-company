import re

file_path = 'src/data/servicesData.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the digital marketing block
new_dm = '''    id: 'digital-marketing',
    number: '14',
    title: 'Digital Marketing & Growth',
    tagline: 'Data-driven strategies to amplify your brand presence, reach, and ROI.',
    description: 'We do not just build great digital products; we make sure the world finds them. Our holistic digital marketing strategies drive targeted traffic, generate highly qualified leads, and significantly boost your online conversions through data-backed methodologies.',
    icon: 'TrendingUp',
    gradient: 'from-orange-400 to-orange-600',
    category: 'marketing',
    subServices: [
      { name: 'Search Engine Optimization (SEO)', description: 'Complete on-page, off-page, and technical SEO to rank your website on the first page of Google, driving high-intent organic traffic consistently.' },
      { name: 'Social Media Marketing (SMM)', description: 'Strategic brand building on Facebook, Instagram, LinkedIn, and TikTok. We create engaging content calendars, manage communities, and build loyal followings.' },
      { name: 'Meta & Google Ads (PPC)', description: 'Laser-targeted Pay-Per-Click campaigns across Google Search, Display, YouTube, and Meta (Facebook/Instagram) to maximize your Return on Ad Spend (ROAS).' },
      { name: 'Content Marketing & Strategy', description: 'High-quality blog posts, articles, infographics, and video scripts designed to establish your brand authority and capture audience attention.' },
      { name: 'Email Marketing & Automation', description: 'Designing and executing automated drip campaigns, newsletters, and promotional emails to nurture leads and retain existing customers.' },
      { name: 'Local SEO & Google My Business', description: 'Optimizing your local presence so customers in your specific geographical area find your business first when searching for related services.' },
      { name: 'Conversion Rate Optimization (CRO)', description: 'Analyzing user behavior using heatmaps and A/B testing to tweak your website design and copy, turning more visitors into paying buyers.' },
      { name: 'Video Marketing & YouTube SEO', description: 'Creating compelling video content strategies and optimizing your YouTube channel to rank higher and engage viewers longer.' },
      { name: 'App Store Optimization (ASO)', description: 'Boosting your mobile app visibility in the Apple App Store and Google Play Store to drive organic, high-quality downloads.' },
      { name: 'Advanced Analytics & ROI Reporting', description: 'Deep tracking integrations with GA4, Meta Pixel, and custom dashboards to give you 100% transparency on campaign performance.' }
    ],
    technologies: ['Google Analytics 4', 'Meta Business Manager', 'Google Ads', 'SEMrush', 'Ahrefs', 'Mailchimp', 'HubSpot', 'Hootsuite', 'Looker Studio']'''

# Regex to find the digital-marketing object
pattern = r"id:\s*'digital-marketing'.*?technologies:\s*\[.*?\]"
# Actually the existing one might not have technologies. Let's just find from id: 'digital-marketing' to the end of its subServices array.
pattern2 = r"id:\s*'digital-marketing'.*?\]\s*\},"

content = re.sub(r"id:\s*'digital-marketing'[\s\S]*?category:\s*'marketing',\s*subServices:\s*\[[\s\S]*?\]", new_dm, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
