import { Button } from '@/components/ui/button';
import WaveformBackground from './WaveformBackground';
import heroImage from '@/assets/hero-waveforms.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Animated Waveform */}
      <WaveformBackground className="opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-float">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-shadow-glow">
            <span className="gradient-text">Pulse Wave</span> Tech
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-4 font-semibold">
            Intelligence Delivered in Real Time
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We synthesize complex data into clear, actionable intelligence using AI-enhanced automation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="btn-pulse text-lg px-8 py-6 font-semibold"
            >
              Request a Briefing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 w-full">
        <div className="wave-divider" />
      </div>
    </section>
  );
};

export default HeroSection;