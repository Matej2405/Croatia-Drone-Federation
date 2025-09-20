import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drones.jpg";
import { Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Plane className="h-12 w-12 text-white mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Croatian Drone Association
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Connecting drone enthusiasts, professionals, and innovators across Croatia. 
          Join us in shaping the future of aviation technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Become a Member
          </Button>
          <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;