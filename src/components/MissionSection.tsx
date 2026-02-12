import { Card, CardContent } from '@/components/ui/card';

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Our Mission
        </h2>
        <Card className="pulse-glow border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground">
              Pulse Wave Tech empowers government and defense customers with actionable intelligence 
              through advanced data analysis, AI/ML, and automated workflows. We bridge the gap 
              between complex data and clear decision-making, enabling faster response times and 
              more effective mission outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionSection;