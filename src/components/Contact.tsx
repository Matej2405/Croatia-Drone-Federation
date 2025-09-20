import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "info@croatiandrones.hr",
      link: "mailto:info@croatiandrones.hr"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+385 1 234 5678",
      link: "tel:+38512345678"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "Ilica 1, 10000 Zagreb, Croatia",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      detail: "Mon-Fri: 9:00 - 17:00",
      link: null
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-sky">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to join the Croatian drone community? Contact us today to learn more 
            about membership, training programs, or any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-white/80">{info.detail}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="heroSecondary" 
                  size="lg" 
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;