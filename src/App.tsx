import { Routes, Route } from 'react-router-dom';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SitemapPage from './pages/SitemapPage';
import LoginPage from './pages/LoginPage';
import ProposalPage from './pages/ProposalPage';
import { CustomCursor } from './components/ui/CustomCursor';

import { ConsultationModalProvider } from './context/ConsultationModalContext';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <ConsultationModalProvider>
      <SmoothScrollProvider>
        <CustomCursor />
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
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
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
          <ConsultationModal />
          <FloatingWhatsApp />
        </div>
      </SmoothScrollProvider>
    </ConsultationModalProvider>
  );
}

export default App;
