import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import { CustomCursor } from './components/ui/CustomCursor';
import { ConsultationModalProvider } from './context/ConsultationModalContext';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Code-split other pages so mobile home page load is ultra-fast
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProposalPage = lazy(() => import('./pages/ProposalPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      const isWww = host === 'www.hussainxsolution.com' || host.startsWith('www.');
      const isHttp = window.location.protocol === 'http:' && !host.includes('localhost') && !host.includes('127.0.0.1');
      if (isWww || isHttp) {
        const canonicalHost = host.replace(/^www\./, '');
        window.location.replace(`https://${canonicalHost}${window.location.pathname}${window.location.search}${window.location.hash}`);
      }
    }
  }, []);

  return (
    <ConsultationModalProvider>
      <SmoothScrollProvider>
        <CustomCursor />
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Suspense fallback={<div className="min-h-screen bg-[#FFFFFF]" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/proposal" element={<ProposalPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <ConsultationModal />
          <FloatingWhatsApp />
        </div>
      </SmoothScrollProvider>
    </ConsultationModalProvider>
  );
}

export default App;
