import re
import os

filepath = r"c:\Users\DELL\Documents\antigravity\bold-curie\hussain-x-company\src\data\servicesData.ts"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

slug_mapping = {
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
}

# Update IDs
for old, new in slug_mapping.items():
    # Update id: 'old' to id: 'new'
    content = re.sub(rf"id:\s*'{old}'", f"id: '{new}'", content)
    # Update serviceId: 'old' to serviceId: 'new'
    content = re.sub(rf"serviceId:\s*'{old}'", f"serviceId: '{new}'", content)

# Inject SEO cities into descriptions
# We look for "description: '...'," and append the cities before the closing quote.
city_str = " We proudly offer our services across Pakistan, including Lahore, Islamabad, Karachi, and Pakpattan."

def repl_desc(match):
    desc = match.group(1)
    if "Lahore, Islamabad" not in desc:
        if desc.endswith('.'):
            desc = desc + city_str
        else:
            desc = desc + "." + city_str
    return f"description: '{desc}',"

content = re.sub(r"description:\s*'([^']*)',", repl_desc, content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated servicesData.ts")

# Generate _redirects for Netlify / Cloudflare
redirects_content = ""
for old, new in slug_mapping.items():
    if old != new:
        redirects_content += f"/services/{old} /services/{new} 301\n"

with open(r"c:\Users\DELL\Documents\antigravity\bold-curie\hussain-x-company\public\_redirects", "w", encoding="utf-8") as f:
    f.write(redirects_content)
print("Generated _redirects")

# Generate vercel.json for Vercel
import json
vercel_json = {
    "redirects": []
}
for old, new in slug_mapping.items():
    if old != new:
        vercel_json["redirects"].append({
            "source": f"/services/{old}",
            "destination": f"/services/{new}",
            "permanent": True
        })

# Check if vercel.json already exists
vercel_path = r"c:\Users\DELL\Documents\antigravity\bold-curie\hussain-x-company\vercel.json"
if os.path.exists(vercel_path):
    with open(vercel_path, "r", encoding="utf-8") as f:
        existing = json.load(f)
    if "redirects" not in existing:
        existing["redirects"] = []
    existing["redirects"].extend(vercel_json["redirects"])
    vercel_json = existing

with open(vercel_path, "w", encoding="utf-8") as f:
    json.dump(vercel_json, f, indent=2)

print("Generated vercel.json")
