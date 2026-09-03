import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import AllServicesSection from '@/components/sections/AllServicesSection';
import JourneySection from '@/components/sections/JourneySection';
import TechStackSection from '@/components/sections/TechStackSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <AllServicesSection />
      <JourneySection />
      <TechStackSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
