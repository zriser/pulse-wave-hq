import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const differentiators = [
  {
    icon: Users,
    title: "Customer & Mission-Centric Approach",
    description: "Every solution is tailored to specific mission requirements and operational contexts."
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Combined military and government contracting background with deep domain expertise."
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record", 
    description: "Program management on $2-3M/year firm-fixed-price contracts with consistent delivery."
  },
  {
    icon: Zap,
    title: "Technical Expertise",
    description: "Unique positioning at the intersection of intelligence analysis and automation technology."
  }
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of technical expertise and mission understanding delivers 
            results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 transition-all duration-500 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;