import React, { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Nature", href: "#nature" },
    { name: "Culture", href: "#culture" },
    { name: "Food", href: "#gastronomy" },
    { name: "Plan", href: "#plan" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300 ${isScrolled ? "top-2" : "top-4"}`}>
        <nav className={`mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-lg border px-6 backdrop-blur-md transition-all duration-300 ${
          isScrolled 
            ? "border-border/80 bg-surface/80 shadow-lg" 
            : "border-border/40 bg-surface/60"
        }`}>
          
          <a href="#" className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-primary" />
            <span className="font-heading text-xl font-bold text-primary">
              Visit Campeche
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 font-body text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-primary cursor-pointer text-base transition-colors py-2"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button 
            onClick={() => handleNavClick("#plan")}
            className="hidden md:block rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Plan Your Trip
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-24 left-4 right-4 bg-surface rounded-lg border border-border shadow-xl p-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleNavClick("#plan")}
              className="mt-6 w-full rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
