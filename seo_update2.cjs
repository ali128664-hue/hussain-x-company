const fs = require('fs');

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

const filepath = 'src/data/servicesData.ts';
let content = fs.readFileSync(filepath, 'utf-8');

// Update IDs carefully
for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    content = content.replace(new RegExp(`id:\\s*'${oldSlug}'`, 'g'), `id: '${newSlug}'`);
    content = content.replace(new RegExp(`serviceId:\\s*'${oldSlug}'`, 'g'), `serviceId: '${newSlug}'`);
}

// Better logic for description string
const cityStr = " We offer these top-tier services across Pakistan, including Lahore, Karachi, Islamabad, and Pakpattan.";

// Split the file by lines to be absolutely safe
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("description: '") && !lines[i].includes("Lahore, Karachi")) {
        let lastQuoteIdx = lines[i].lastIndexOf("'");
        if (lastQuoteIdx !== -1) {
            let before = lines[i].substring(0, lastQuoteIdx);
            let after = lines[i].substring(lastQuoteIdx);
            if (before.endsWith('.')) {
                lines[i] = before + cityStr + after;
            } else {
                lines[i] = before + "." + cityStr + after;
            }
        }
    }
}

content = lines.join('\n');
fs.writeFileSync(filepath, content, 'utf-8');
