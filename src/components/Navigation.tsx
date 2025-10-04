import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import edenbookLogo from "@/assets/edenbrook-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItemsBefore = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
  ];

  const navItemsAfter = [
    { name: "Global Reach", href: "#global" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceItems = [
    { name: "Local & Overseas Recruitment", href: "/services/local-recruitment" },
    { name: "Executive Headhunting", href: "/services/headhunting" },
    { name: "Training & Capacity Building", href: "/services/training" },
    { name: "HR Consultancy", href: "/services/consultancy" },
    { name: "Expatriate Services", href: "/services/expatriate" },
    { name: "Payroll & Outsourcing", href: "/services/payroll" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={edenbookLogo} alt="Edenbrook Recruitment" className="h-48 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItemsBefore.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-brand-orange transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-brand-orange transition-colors duration-300 font-medium">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border shadow-lg z-50">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href}
                      className="text-foreground hover:text-brand-orange hover:bg-secondary transition-colors duration-300 cursor-pointer"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItemsAfter.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-brand-orange transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>0720 517 303</span>
            </div>
            <Button 
              variant="default" 
              className="bg-brand-orange hover:bg-brand-orange-dark text-white"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItemsBefore.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-brand-orange transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Services Menu */}
              <div className="py-2">
                <p className="text-foreground font-medium mb-2">Services</p>
                <div className="pl-4 space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-muted-foreground hover:text-brand-orange transition-colors duration-300 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navItemsAfter.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-brand-orange transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="h-4 w-4" />
                  <span>0720 517 303</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Mail className="h-4 w-4" />
                  <span>info@edenbrook.co.ke</span>
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;