const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'data', 'servicesData.ts');
let content = fs.readFileSync(filepath, 'utf-8');

const slugMapping = {
    'social-media-marketing': 'social-media-marketing-services',
    'seo-services': 'seo-services-company',
    'ui-ux-design': 'ui-ux-design-services',
    'web-development': 'web-development-company',
    'mobile-apps': 'mobile-app-development',
    'custom-software': 'custom-software-development',
    'ecommerce': 'ecommerce-website-development',
    'digital-marketing': 'digital-marketing-services',
    'branding': 'branding-and-creative-agency',
    'business-automation': 'business-automation-services',
    'ai-automation': 'ai-automation-solutions',
    'cloud-devops': 'cloud-devops-services',
    'cyber-security': 'cyber-security-services',
    'qa-testing': 'software-qa-testing',
    'api-integration': 'api-integration-services',
    'database': 'database-development-services',
    'saas': 'saas-application-development',
    'maintenance': 'website-maintenance-support',
    'wordpress': 'wordpress-development-services',
    'shopify': 'shopify-store-development',
    'ppc': 'ppc-advertising-management',
    'content-marketing': 'content-marketing-services',
    'logo-design': 'professional-logo-design',
    'video-editing': 'professional-video-editing',
    'creative-design': 'creative-design-services'
};

// Update IDs carefully
for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    content = content.replace(new RegExp(`id:\\s*'${oldSlug}'`, 'g'), `id: '${newSlug}'`);
    content = content.replace(new RegExp(`serviceId:\\s*'${oldSlug}'`, 'g'), `serviceId: '${newSlug}'`);
}

// Better logic for description
const cityStr = " We offer these top-tier services across Pakistan, including Lahore, Karachi, Islamabad, and Pakpattan.";

content = content.replace(/(description:\s*')(.+?)(')/g, (match, p1, p2, p3) => {
    // skip if we already added
    if (p2.includes("Lahore, Karachi")) return match;
    // only do it for the main description which is longer usually, or just append properly without breaking \'
    let inner = p2;
    if (inner.endsWith('.')) {
        inner = inner + cityStr;
    } else {
        inner = inner + "." + cityStr;
    }
    return p1 + inner + p3;
});

fs.writeFileSync(filepath, content, 'utf-8');

// Also update the sitemap.xml
let sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    sitemap = sitemap.replace(new RegExp(`/services/${oldSlug}<`, 'g'), `/services/${newSlug}<`);
}
fs.writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log("Updated everything.");
