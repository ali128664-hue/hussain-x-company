import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: string;
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  schema,
}) => {
  useEffect(() => {
    // 1. Dynamic Page Title
    const fullTitle = title.includes('HUSSAIN X') ? title : `${title} | HUSSAIN X SOLUTION`;
    document.title = fullTitle;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Dynamic Canonical URL (Fixes the issue where all pages pointed to homepage)
    const normalizedPath = canonicalPath
      ? (canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`)
      : (window.location.pathname === '/' ? '' : window.location.pathname);
    const canonicalUrl = `https://www.hussainxsolution.com${normalizedPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Meta Tags
    const updateMeta = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('og:title', fullTitle);
    updateMeta('og:description', description);
    updateMeta('og:url', canonicalUrl);
    updateMeta('og:type', type);
    updateMeta('og:site_name', 'HUSSAIN X SOLUTION');

    // 5. JSON-LD Structured Data Schema
    let scriptSchema = document.getElementById('page-json-ld');
    if (schema) {
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'page-json-ld';
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    } else if (scriptSchema) {
      scriptSchema.remove();
    }
  }, [title, description, canonicalPath, type, schema]);

  return null;
};

export default SEOHead;
