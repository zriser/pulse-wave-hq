import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Target, Shield } from 'lucide-react';

const metrics = [
  {
    icon: Clock,
    metric: "100%",
    label: "On-Time Delivery",
    description: "Consistent project completion within agreed timelines"
  },
  {
    icon: Target,
    metric: "$2-3M",
    label: "Annual Contract Value",
    description: "Successfully managed firm-fixed-price contracts"
  },
  {
    icon: TrendingUp,
    metric: "50%",
    label: "Efficiency Improvement",
    description: "Average reduction in manual analysis time"
  },
  {
    icon: Shield,
    metric: "Zero",
    label: "Security Incidents",
    description: "Maintained perfect security compliance record"
  }
];

const caseStudy = {
  title: "CNO/SIGDEV Analysis Acceleration",
  challenge: "Defense customer needed to process 10x more signal intelligence data with existing analyst capacity.",
  solution: "Deployed automated ML pipeline with human-in-the-loop validation, reducing manual processing by 60%.",
  outcome: "Enabled real-time threat identification and reduced analyst workload while maintaining 99.5% accuracy."
};

const PerformanceSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Proven Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks to our commitment to excellence and mission success.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, index) => (
            <Card key={index} className="text-center pulse-glow border-primary/20 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit mx-auto">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="font-semibold text-foreground mb-2">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study */}
        <Card className="border-primary/30 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center gradient-text">
              Case Study: {caseStudy.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Challenge</h4>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Solution</h4>
                <p className="text-muted-foreground">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Outcome</h4>
                <p className="text-muted-foreground">{caseStudy.outcome}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceSection;