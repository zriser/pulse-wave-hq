import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Brain, Shield, Workflow } from 'lucide-react';

const competencies = [
  {
    icon: BarChart3,
    title: "Data Analysis & Manipulation",
    description: "Transform raw data into actionable insights with advanced analytics and visualization techniques."
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Deploy cutting-edge machine learning models to automate analysis and enhance decision-making."
  },
  {
    icon: Shield,
    title: "Cyber & Network Technical Analysis",
    description: "Specialized CNO/SIGDEV capabilities for comprehensive network and cyber intelligence."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations with intelligent automation that reduces manual overhead and increases efficiency."
  }
];

const benefits = [
  "Faster decision cycles",
  "Reduced analyst fatigue", 
  "Scalable automated workflows",
  "Trusted federal mission support"
];

const CompetenciesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Core Competencies */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencies.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-all duration-300 bg-card/60 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-primary">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-3 group-hover:animate-pulse" />
                <p className="font-semibold text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;