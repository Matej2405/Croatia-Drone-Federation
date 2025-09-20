import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Plane className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Croatian Drone Association</h3>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Leading the way in drone technology, safety, and innovation across Croatia. 
              Join our community of professionals and enthusiasts.
            </p>
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Croatian Drone Association. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#membership" className="text-background/80 hover:text-background transition-colors">Membership</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>Ilica 1, Zagreb</li>
              <li>+385 1 234 5678</li>
              <li>info@croatiandrones.hr</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;