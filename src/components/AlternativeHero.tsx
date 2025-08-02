import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import WaveformBackground from './WaveformBackground';
import heroImage from '@/assets/hero-waveforms.jpg';

const AlternativeHero = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || '');
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    setTheme(document.documentElement.getAttribute('data-theme') || '');
    
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getThemeSpecificContent = () => {
    switch (theme) {
      case 'minimal':
        return {
          title: 'PulseWave Tech',
          subtitle: 'Precision Intelligence Solutions',
          description: 'Clean, efficient data analysis with purposeful AI automation for mission-critical operations.',
          primaryCTA: 'Schedule Consultation',
          secondaryCTA: 'View Capabilities'
        };
      case 'corporate':
        return {
          title: 'PulseWave Technologies',
          subtitle: 'Enterprise Intelligence Solutions',
          description: 'Proven expertise in government contracting with scalable AI solutions that deliver measurable results.',
          primaryCTA: 'Request Proposal',
          secondaryCTA: 'Our Experience'
        };
      case 'matrix':
        return {
          title: '> PulseWave_Tech',
          subtitle: 'ACCESSING_INTELLIGENCE_MATRIX...',
          description: 'Penetrating data streams // Extracting actionable intel // Mission parameters: CLASSIFIED',
          primaryCTA: 'INITIATE_CONTACT',
          secondaryCTA: 'ACCESS_LOGS'
        };
      default:
        return {
          title: 'PulseWave Tech',
          subtitle: 'Intelligence Delivered in Real Time',
          description: 'We synthesize complex data into clear, actionable intelligence using AI-enhanced automation',
          primaryCTA: 'Request a Briefing',
          secondaryCTA: 'Learn More'
        };
    }
  };

  const content = getThemeSpecificContent();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Hidden in minimal theme */}
      {theme !== 'minimal' && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}
      
      {/* Theme-specific gradient overlays */}
      <div className={`absolute inset-0 ${
        theme === 'minimal' 
          ? 'bg-gradient-to-br from-background to-secondary' 
          : theme === 'corporate'
          ? 'bg-gradient-to-br from-background via-background/95 to-secondary/50'
          : 'bg-gradient-to-br from-background via-background/95 to-background/80'
      }`} />
      
      {/* Animated Waveform */}
      <WaveformBackground className={`${
        theme === 'minimal' ? 'opacity-20' : 
        theme === 'matrix' ? 'opacity-60' : 'opacity-40'
      }`} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-float">
          <h1 className={`${
            theme === 'minimal' ? 'text-5xl md:text-6xl' :
            theme === 'matrix' ? 'text-5xl md:text-6xl font-mono' :
            'text-6xl md:text-7xl'
          } font-bold mb-6 text-shadow-glow`}>
            <span className="gradient-text">{content.title}</span>
          </h1>
          
          <p className={`${
            theme === 'minimal' ? 'text-lg md:text-xl' :
            theme === 'matrix' ? 'text-lg md:text-xl font-mono' :
            'text-xl md:text-2xl'
          } text-primary mb-4 font-semibold`}>
            {content.subtitle}
          </p>
          
          <p className={`${
            theme === 'minimal' ? 'text-base md:text-lg' :
            theme === 'matrix' ? 'text-base md:text-lg font-mono' :
            'text-lg md:text-xl'
          } text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed`}>
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className={`btn-pulse text-lg px-8 py-6 font-semibold ${
                theme === 'matrix' ? 'font-mono' : ''
              }`}
            >
              {content.primaryCTA}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className={`text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground ${
                theme === 'matrix' ? 'font-mono' : ''
              }`}
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {content.secondaryCTA}
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

export default AlternativeHero;