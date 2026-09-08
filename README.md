# Hussain X Solutions — Official Web Application

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## 🌟 Overview

**Hussain X Solutions** is a modern, high-performance web platform representing a premier Software House & Digital Growth Agency based in Lahore, Pakistan. 

The application is engineered with an emphasis on speed, cutting-edge micro-interactions, responsive design, and an extensive service ecosystem covering **25 individual digital services** across software engineering, creative design, and performance marketing.

---

## ✨ Key Features

* **⚡ Ultra-Fast SPA Performance:** Powered by Vite 6 + React 18 with instantaneous client-side routing.
* **🎯 25 Dedicated Service Pages:** Comprehensive detail pages with specialized sub-services, technology badges, and customized engagement flows.
* **🧭 Dynamic 5-Category Mega Menu:** Desktop dropdown navigation and animated mobile drawer menu with zero dead links.
* **🖱️ Interactive Dual-Layer Custom Cursor:** Hardware-accelerated trailing orange dot and reactive expanding glow ring with hover/click physics.
* **📜 Complete Legal & Informational Suite:** Full-featured **Privacy Policy**, **Terms of Service**, and **Interactive Sitemap** pages.
* **📱 100% Mobile & Tablet Responsive:** Fluid layouts designed with Tailwind CSS utility classes and mobile-first principles.
* **🎨 Smooth Motion & Micro-Interactions:** Smooth scrolling (Lenis), text reveal animations, border-beam effects, and spotlight cards (Framer Motion).
* **📄 Business Proposal Documentation Included:** Ready-to-pitch master proposal and SOW documentation (`Hussain_X_Solutions_Proposal_Document.md`).

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | React 18, TypeScript, Vite 6 |
| **Styling & UI** | Tailwind CSS, Autoprefixer, PostCSS, Lucide React Icons |
| **Animations & Effects** | Framer Motion, Lenis Smooth Scroll |
| **Routing** | React Router DOM v7 |
| **Architecture** | Component-Driven Architecture, Type-Safe Data Layer |

---

## 📂 Project Structure

```
hussain-x-company/
├── index.html                               # HTML entry point with typography & SEO meta
├── package.json                             # Dependencies and scripts
├── tsconfig.json                            # TypeScript compiler configuration
├── tailwind.config.js                       # Tailwind theme extensions & custom colors
├── vite.config.ts                           # Vite configuration with path aliases (@)
├── Hussain_X_Solutions_Proposal_Document.md # Complete 25-service client proposal guide
└── src/
    ├── main.tsx                             # Application root mount
    ├── App.tsx                              # Central route configuration
    ├── index.css                            # Global CSS, font imports & scrollbar styles
    ├── components/
    │   ├── Navbar.tsx                       # Header with utility bar & 25-link mega menu
    │   ├── Footer.tsx                       # 4-column footer with active routing links
    │   ├── SmoothScrollProvider.tsx         # Lenis smooth scrolling integration
    │   ├── sections/                        # Reusable landing page sections
    │   │   ├── HeroSection.tsx              # Hero with animated dashboard mockup
    │   │   ├── CategoriesSection.tsx        # 5 core service category spotlight cards
    │   │   ├── JourneySection.tsx           # 8-step digital journey roadmap
    │   │   ├── TechStackSection.tsx         # Categorized technology badges
    │   │   ├── IndustriesSection.tsx        # 11 industry verticals matrix
    │   │   ├── AllServicesSection.tsx       # Comprehensive 25-service grid
    │   │   └── CTASection.tsx               # High-conversion consultation banner
    │   └── ui/                              # Atomic UI components (Buttons, Badges, Cards)
    │       ├── CustomCursor.tsx             # Dual-layer animated cursor
    │       ├── ShinyButton.tsx              # Shimmering CTA buttons
    │       ├── SpotlightCard.tsx            # Mouse-following spotlight cards
    │       └── ...
    ├── data/
    │   ├── navigationData.ts                # Navigation menu hierarchy
    │   └── servicesData.ts                  # Single source of truth for all 25 services
    └── pages/
        ├── HomePage.tsx                     # Landing page
        ├── ServicesPage.tsx                 # Full services listing page
        ├── ServiceDetailPage.tsx           # Dynamic single service detail page
        ├── AboutPage.tsx                    # Agency background, mission & credentials
        ├── ContactPage.tsx                  # Office details & interactive contact form
        ├── PrivacyPolicyPage.tsx            # 8-section compliance privacy policy
        ├── TermsOfServicePage.tsx           # 11-section client service agreement terms
        └── SitemapPage.tsx                  # Categorized site directory with direct links
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js (v18 or higher)** and **npm** installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/ali128664-hue/hussain-x-company.git
cd hussain-x-company
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

### 4. Build for Production
To build the application for deployment:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 💼 Service Ecosystem Overview (25 Services)

### 💻 Software Development
1. **Custom Software Development** (`/services/custom-software`)
2. **Web Applications** (`/services/web-development`)
3. **Mobile App Development** (`/services/mobile-apps`)
4. **SaaS Platform Development** (`/services/saas`)
5. **Business Automation** (`/services/business-automation`)

### 🌐 Design & Development
6. **UI/UX Design** (`/services/ui-ux-design`)
7. **Web Development** (`/services/web-development`)
8. **E-Commerce Solutions** (`/services/ecommerce`)
9. **WordPress Development** (`/services/wordpress`)
10. **Shopify Development** (`/services/shopify`)

### ☁️ Technology & Infrastructure
11. **Cloud & DevOps** (`/services/cloud-devops`)
12. **Database Solutions** (`/services/database`)
13. **AI & Automation Solutions** (`/services/ai-automation`)
14. **Cyber Security & Compliance** (`/services/cyber-security`)
15. **Software QA & Testing** (`/services/qa-testing`)
16. **API & System Integration** (`/services/api-integration`)
17. **Maintenance & 24/7 Support** (`/services/maintenance`)

### 📈 Digital Growth & Marketing
18. **Search Engine Optimization (SEO)** (`/services/seo-services`)
19. **Digital Marketing & Growth** (`/services/digital-marketing`)
20. **Social Media Marketing** (`/services/social-media-marketing`)
21. **Pay-Per-Click Advertising (PPC)** (`/services/ppc`)
22. **Content Marketing & Strategy** (`/services/content-marketing`)

### 🎨 Creative & Branding
23. **Brand Strategy & Identity** (`/services/branding`)
24. **Logo Design & Vector Assets** (`/services/logo-design`)
25. **Video Editing & Motion Graphics** (`/services/video-editing`)
26. **Creative Graphic Design** (`/services/creative-design`)

---

## 📞 Contact & Business Inquiries

* **Company:** Hussain X Solutions
* **Location:** Model Town Q Block, Lahore, Pakistan
* **Phone:** [+92 348 0766608](tel:+923480766608)
* **Email:** [info@hussainxsolutions.com](mailto:info@hussainxsolutions.com)
* **WhatsApp:** [+92 348 0766608](https://wa.me/923480766608)

---

## 📄 License & Copyright

© 2026 **Hussain X Solutions**. All rights reserved.
