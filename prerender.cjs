const fs = require('fs');
const path = require('path');

// 1. Read dist/index.html
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Please run "npm run build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(templatePath, 'utf-8');

// 2. Load services data using TypeScript
const ts = require('typescript');
const servicesFile = path.join(__dirname, 'src', 'data', 'servicesData.ts');
const tsCode = fs.readFileSync(servicesFile, 'utf-8');
const jsCode = ts.transpileModule(tsCode, { 
  compilerOptions: { module: ts.ModuleKind.CommonJS } 
}).outputText;

const moduleObj = { exports: {} };
const fn = new Function('exports', 'require', 'module', jsCode);
fn(moduleObj.exports, require, moduleObj);
const services = moduleObj.exports.services;

if (!services || services.length === 0) {
  console.error('Failed to parse services from servicesData.ts');
  process.exit(1);
}

const BASE_URL = 'https://www.hussainxsolution.com';

function generatePageHtml({ title, description, canonical, contentHtml, schemaJson }) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
  );

  // Replace Open Graph title & description & url
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${BASE_URL}${canonical}" />`
  );

  // Replace Twitter title & description
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${BASE_URL}${canonical}" />`
  );

  // Add Breadcrumb Schema if provided
  if (schemaJson) {
    const schemaTag = `\n    <script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n    </script>\n`;
    html = html.replace('</head>', `${schemaTag}</head>`);
  }

  // Pre-render content inside <div id="root">
  if (contentHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${contentHtml}</div>`);
  }

  return html;
}

function saveRoute(routePath, html) {
  const cleanPath = routePath.replace(/^\//, '');
  const targetDir = path.join(distDir, cleanPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  console.log(`✓ Pre-rendered: /${cleanPath}`);
}

console.log('Starting SEO Pre-rendering for Googlebot & Crawlers...\n');

// 1. Static Pages
// About
saveRoute('/about', generatePageHtml({
  title: 'About Us | Leading Software House & Tech Agency in Lahore | HUSSAIN X SOLUTION',
  description: 'Learn about HUSSAIN X SOLUTION, a premier software development and digital growth agency in Model Town Lahore, delivering high-performance tech solutions worldwide.',
  canonical: '/about',
  contentHtml: `
    <header style="padding: 40px 20px; text-align: center;">
      <p style="color: #FF6A00; font-weight: bold; text-transform: uppercase;">Who We Are</p>
      <h1>About HUSSAIN X SOLUTION</h1>
      <p>HUSSAIN X SOLUTION is a premium Software House and Digital Growth Agency based in Model Town Q Block, Lahore, Pakistan. We deliver innovative software, stunning designs, and result-driven marketing strategies to help modern businesses scale.</p>
    </header>
  `,
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About HUSSAIN X SOLUTION",
    "url": `${BASE_URL}/about`,
    "description": "Leading digital technology and software company based in Lahore, Pakistan."
  }
}));

// Contact
saveRoute('/contact', generatePageHtml({
  title: 'Contact Us | Hire Developers & Get Free Consultation | HUSSAIN X SOLUTION',
  description: 'Get in touch with HUSSAIN X SOLUTION. Contact our Lahore office or message our WhatsApp (+92 348 0766608) for a free digital consultation and project quotation.',
  canonical: '/contact',
  contentHtml: `
    <header style="padding: 40px 20px; text-align: center;">
      <p style="color: #FF6A00; font-weight: bold; text-transform: uppercase;">Connect With Us</p>
      <h1>Contact HUSSAIN X SOLUTION</h1>
      <p>Have a project in mind? We'd love to hear about it. Reach out for custom software, web apps, mobile apps, or digital marketing.</p>
      <div>
        <p><strong>WhatsApp / Phone:</strong> +92 348 0766608</p>
        <p><strong>Email:</strong> info@hussainxsolution.com</p>
        <p><strong>Office:</strong> Model Town Q Block, Lahore, Pakistan</p>
      </div>
    </header>
  `,
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact HUSSAIN X SOLUTION",
    "url": `${BASE_URL}/contact`,
    "description": "Contact HUSSAIN X SOLUTION for custom software, web, and marketing inquiries."
  }
}));

// Services Hub
saveRoute('/services', generatePageHtml({
  title: 'All Digital & Software Services (25+ Specializations) | HUSSAIN X SOLUTION',
  description: 'Explore 25+ cutting-edge technology and digital marketing services from HUSSAIN X SOLUTION — custom software, mobile apps, UI/UX, SEO, and brand growth.',
  canonical: '/services',
  contentHtml: `
    <header style="padding: 40px 20px; text-align: center;">
      <p style="color: #FF6A00; font-weight: bold; text-transform: uppercase;">Our Expertise</p>
      <h1>All Digital & Software Development Services</h1>
      <p>From custom software and mobile apps to digital marketing and creative branding — we are your all-in-one digital partner.</p>
      <ul>
        ${services.map(s => `<li><a href="/services/${s.id}"><strong>${s.title}</strong></a>: ${s.tagline}</li>`).join('')}
      </ul>
    </header>
  `
}));

// Privacy Policy
saveRoute('/privacy-policy', generatePageHtml({
  title: 'Privacy Policy | HUSSAIN X SOLUTION',
  description: 'Review the Privacy Policy of HUSSAIN X SOLUTION. Learn how we handle, store, and protect your information responsibly.',
  canonical: '/privacy-policy',
  contentHtml: '<h1>Privacy Policy - HUSSAIN X SOLUTION</h1><p>Our commitment to user privacy and data protection.</p>'
}));

// Terms of Service
saveRoute('/terms-of-service', generatePageHtml({
  title: 'Terms of Service | HUSSAIN X SOLUTION',
  description: 'Read the official Terms of Service of HUSSAIN X SOLUTION governing our digital, software development, and design services.',
  canonical: '/terms-of-service',
  contentHtml: '<h1>Terms of Service - HUSSAIN X SOLUTION</h1><p>Terms governing our digital solutions and professional services.</p>'
}));

// Sitemap
saveRoute('/sitemap', generatePageHtml({
  title: 'HTML Sitemap | All Services & Directory | HUSSAIN X SOLUTION',
  description: 'Browse the complete directory of services, pages, and legal resources on HUSSAIN X SOLUTION.',
  canonical: '/sitemap',
  contentHtml: `
    <h1>Website Sitemap - HUSSAIN X SOLUTION</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
      ${services.map(s => `<li><a href="/services/${s.id}">${s.title}</a></li>`).join('')}
    </ul>
  `
}));

// 2. All 25 Service Detail Pages
services.forEach(service => {
  const serviceCanonical = `/services/${service.id}`;
  const subServicesListHtml = service.subServices && service.subServices.length > 0
    ? `
      <h2>Key Capabilities & Features of ${service.title}</h2>
      <ul>
        ${service.subServices.map(sub => `<li><strong>${sub.name}:</strong> ${sub.description}</li>`).join('')}
      </ul>
    `
    : '';

  const techHtml = service.technologies && service.technologies.length > 0
    ? `
      <h3>Technologies & Tools We Use</h3>
      <p>${service.technologies.join(', ')}</p>
    `
    : '';

  const contentHtml = `
    <article style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <a href="/services">Services</a> &gt; <span>${service.title}</span>
      </nav>
      <header>
        <span style="color: #FF6A00; font-weight: bold;">Service #${service.number}</span>
        <h1>${service.title} in Pakistan & Globally</h1>
        <p style="font-size: 1.2rem; font-weight: 500; color: #5C504A;">${service.tagline}</p>
      </header>
      <section>
        <p>${service.description}</p>
        ${subServicesListHtml}
        ${techHtml}
      </section>
      <footer style="margin-top: 40px; padding: 20px; border-top: 1px solid #E5DED9;">
        <h3>Ready to get started with ${service.title}?</h3>
        <p>Contact <strong>HUSSAIN X SOLUTION</strong> today for a free consultation and project quote.</p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/923480766608">+92 348 0766608</a> | <strong>Email:</strong> <a href="mailto:info@hussainxsolution.com">info@hussainxsolution.com</a></p>
      </footer>
    </article>
  `;

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} - HUSSAIN X SOLUTION`,
    "serviceType": service.title,
    "provider": {
      "@type": "ProfessionalService",
      "name": "HUSSAIN X SOLUTION",
      "url": BASE_URL,
      "telephone": "+923480766608",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Model Town Q Block",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Lahore" },
      { "@type": "City", "name": "Karachi" },
      { "@type": "City", "name": "Islamabad" },
      { "@type": "Country", "name": "Pakistan" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "description": service.description,
    "url": `${BASE_URL}${serviceCanonical}`
  };

  saveRoute(serviceCanonical, generatePageHtml({
    title: `${service.title} Services | HUSSAIN X SOLUTION`,
    description: service.description.length > 155 ? service.description.slice(0, 155) + '...' : service.description,
    canonical: serviceCanonical,
    contentHtml,
    schemaJson
  }));
});

console.log(`\n🎉 Successfully pre-rendered all ${services.length + 6} static routes into /dist!`);
console.log('Googlebot and search crawlers will now receive complete, crawlable HTML with 200 OK for every single URL.');
