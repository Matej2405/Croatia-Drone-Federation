import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Promoting safe and responsible drone operations across Croatia with comprehensive training and guidelines."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of drone enthusiasts, professionals, and businesses throughout the country."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Fostering technological advancement and supporting cutting-edge drone applications in various industries."
    },
    {
      icon: Globe,
      title: "Advocacy",
      description: "Representing the interests of the Croatian drone community in regulatory discussions and policy making."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Association
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Croatian Drone Association is the leading organization dedicated to advancing 
            the drone industry in Croatia through education, advocacy, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elevation hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-sky mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;