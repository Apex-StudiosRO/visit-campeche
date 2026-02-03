import React from "react";
import { Instagram, Twitter, Github, Linkedin, Globe, Building2, Heart, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-heading text-2xl font-bold text-background">
                Visit Campeche
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Discover the magic of Mexico's best-kept secret. From ancient Mayan 
              ruins to colorful colonial streets, Campeche offers an authentic 
              experience unlike any other destination.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/mateicc.09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary/80 rounded-sm flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/iampandaro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary/80 rounded-sm flex items-center justify-center transition-colors"
                aria-label="View our GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/matei-cucu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary/80 rounded-sm flex items-center justify-center transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-background">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Campeche", href: "#about" },
                { name: "History & Heritage", href: "#history" },
                { name: "Nature & Beaches", href: "#nature" },
                { name: "Culture & Traditions", href: "#culture" },
                { name: "Local Gastronomy", href: "#gastronomy" },
                { name: "Plan Your Visit", href: "#plan" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-background">
              External Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Personal Website
                </a>
              </li>
              <li>
                <a
                  href="https://yourcompany.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Building2 className="w-4 h-4" />
                  Company Website
                </a>
              </li>
              <li>
                <a
                  href="https://visitmexico.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Visit Mexico (Official)
                </a>
              </li>
              <li>
                <a
                  href="https://reactbits.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Heart className="w-4 h-4" />
                  React Bits Components
                </a>
              </li>
            </ul>
          </div>

          {/* About This Project */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-background">
              About This Project
            </h4>
            <div className="bg-background/5 rounded-lg p-5 border border-background/10">
              <p className="text-background/70 text-sm leading-relaxed mb-4">
                This website was created as a personal project for an English class, 
                showcasing web development skills while celebrating the beautiful 
                state of Campeche, Mexico.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-sm">
                  React
                </span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-sm">
                  TypeScript
                </span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-primary/20 rounded-lg p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-heading text-xl text-background mb-2">
              Stay Updated
            </h4>
            <p className="text-background/70 text-sm mb-6">
              Subscribe to receive travel tips, local insights, and updates about Campeche.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-sm bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary/50 text-sm"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} Visit Campeche. Made with{" "}
              <Heart className="w-4 h-4 inline text-destructive" /> for an English class project.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
