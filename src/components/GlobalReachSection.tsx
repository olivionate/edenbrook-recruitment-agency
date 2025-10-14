import { MapPin, Globe, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import globalReachImage from "@/assets/global-reach.jpg";

const GlobalReachSection = () => {
  const countries = [
    "Kenya", "United Kingdom", "United States", "Australia", "Qatar", "Kuwait",
    "Saudi Arabia", "Canada", "Philippines", "South Africa", "Indonesia",
    "Singapore", "UAE", "Jordan", "Sri Lanka", "India", "Malaysia", "Morocco",
    "Oman", "Bahrain", "Poland"
  ];

  const regions = [
    {
      title: "Africa",
      countries: ["Kenya", "South Africa", "Morocco"],
      icon: MapPin,
      color: "text-green-600"
    },
    {
      title: "Middle East",
      countries: ["Qatar", "Kuwait", "Saudi Arabia", "UAE", "Oman", "Bahrain", "Jordan"],
      icon: Globe,
      color: "text-blue-600"
    },
    {
      title: "Asia Pacific",
      countries: ["Singapore", "Malaysia", "Indonesia", "Philippines", "Sri Lanka", "India"],
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Western Markets",
      countries: ["United Kingdom", "United States", "Canada", "Australia", "Poland"],
      icon: Users,
      color: "text-orange-600"
    }
  ];

  return (
    <section id="global" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">
            Global Reach
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Operating across 20+ countries, we connect businesses with exceptional talent worldwide, 
            bringing international expertise to local markets.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-12 sm:mb-16 rounded-2xl overflow-hidden mx-4">
          <img 
            src={globalReachImage} 
            alt="Global business network"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/50 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-2xl text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Connecting Talent Across Continents
                </h3>
                <p className="text-sm sm:text-base md:text-xl text-gray-200 leading-relaxed">
                  From our headquarters in Nairobi, we've expanded our operations to serve 
                  clients across four continents, adapting to local markets while maintaining 
                  global standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 px-4">
          {regions.map((region, index) => (
            <Card key={index} className="interactive-card">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <region.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${region.color}`} />
                </div>
                <h4 className="font-semibold text-brand-navy mb-2 sm:mb-3 text-sm sm:text-base">{region.title}</h4>
                <div className="space-y-1">
                  {region.countries.slice(0, 3).map((country, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-muted-foreground">{country}</p>
                  ))}
                  {region.countries.length > 3 && (
                    <p className="text-xs sm:text-sm text-brand-orange font-medium">
                      +{region.countries.length - 3} more
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Countries Grid */}
        <div className="text-center px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6 sm:mb-8">Countries We Serve</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="p-2 sm:p-3 bg-secondary rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer hover-lift min-h-[44px] flex items-center justify-center"
              >
                <span className="text-xs sm:text-sm font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-hero rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center mx-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-orange mb-2">20+</div>
              <div className="text-sm sm:text-base md:text-lg">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-orange mb-2">500+</div>
              <div className="text-sm sm:text-base md:text-lg">Global Placements</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-orange mb-2">95%</div>
              <div className="text-sm sm:text-base md:text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;