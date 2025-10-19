import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-african.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Users, label: "Clients Served", value: "500+" },
    { icon: Globe, label: "Countries", value: "20+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional team collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange-light mb-8 animate-fade-slide-up">
            <span className="text-sm font-medium">Leading Recruitment Agency in Kenya & Beyond</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-slide-up px-4">
            Find Your Perfect
            <span className="block text-brand-orange">Talent Match</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-slide-up px-4">
            Edenbrook Recruitment Agency connects businesses with exceptional talent across 20+ countries. 
            From headhunting to HR consultancy, we deliver sustainable people management solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 animate-fade-slide-up px-4 w-full max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover-lift w-full sm:w-auto min-h-[48px]"
              onClick={() => scrollToSection("#services")}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto min-h-[48px]"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto animate-fade-slide-up px-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand-orange/20 rounded-full mb-3 sm:mb-4">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-brand-orange" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-orange/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-orange/5 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;