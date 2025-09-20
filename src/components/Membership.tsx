import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Individual",
      price: "200",
      period: "year",
      description: "Perfect for hobbyists and individual drone operators",
      features: [
        "Access to training materials",
        "Monthly newsletter",
        "Community forum access",
        "Basic legal support",
        "Event discounts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "500",
      period: "year",
      description: "Ideal for commercial drone operators and small businesses",
      features: [
        "All Individual benefits",
        "Advanced training courses",
        "Business networking events",
        "Priority legal support",
        "Certification programs",
        "Industry reports"
      ],
      popular: true
    },
    {
      name: "Corporate",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations and enterprises",
      features: [
        "All Professional benefits",
        "Custom training programs",
        "Dedicated account manager",
        "Bulk certification discounts",
        "Regulatory consultation",
        "Industry partnership opportunities"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Membership Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the membership that best fits your needs and join our growing community 
            of drone professionals across Croatia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-elevation hover:shadow-glow transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  {plan.price === "Custom" ? (
                    <span className="text-3xl font-bold text-primary">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">HRK/{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Us" : "Join Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;