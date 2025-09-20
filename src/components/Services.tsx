import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Award, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Training & Certification",
      description: "Comprehensive drone pilot training programs and official certification courses approved by Croatian aviation authorities.",
      features: ["Remote Pilot License (RPL)", "Commercial Operations", "Safety Protocols", "Regulation Updates"]
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access to the latest information, guides, and best practices for drone operations in Croatian airspace.",
      features: ["Technical Documentation", "Legal Guidelines", "Best Practices", "Industry News"]
    },
    {
      icon: Award,
      title: "Professional Network",
      description: "Connect with industry professionals, potential clients, and collaborative partners across Croatia.",
      features: ["Business Networking", "Job Opportunities", "Project Partnerships", "Mentorship Programs"]
    },
    {
      icon: MessageSquare,
      title: "Advocacy & Support",
      description: "Representing the Croatian drone community in regulatory discussions and providing member support.",
      features: ["Regulatory Advocacy", "Legal Support", "Industry Representation", "Member Services"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support for drone professionals and enthusiasts 
            at every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-elevation hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;