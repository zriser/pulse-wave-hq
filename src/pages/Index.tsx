import AlternativeHero from '@/components/AlternativeHero';
import MissionSection from '@/components/MissionSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import PerformanceSection from '@/components/PerformanceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeSelector from '@/components/ThemeSelector';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeSelector />
      <AlternativeHero />
      <MissionSection />
      <CompetenciesSection />
      <DifferentiatorsSection />
      <PerformanceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
