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

let htaccess = `<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# 301 Redirects for SEO
`;

for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    if (oldSlug !== newSlug) {
        htaccess += `RewriteRule ^services/${oldSlug}/?$ /services/${newSlug} [R=301,L]\n`;
    }
}

htaccess += `

# React Router SPA catch-all
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
`;

fs.writeFileSync('public/.htaccess', htaccess, 'utf-8');
if(fs.existsSync('vercel.json')) fs.unlinkSync('vercel.json');
