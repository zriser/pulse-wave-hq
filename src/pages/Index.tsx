import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import PerformanceSection from '@/components/PerformanceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  console.log("Index component rendering");
  return (
    <div className="min-h-screen">
      <HeroSection />
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
