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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Global Reach
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Operating across 20+ countries, we connect businesses with exceptional talent worldwide, 
            bringing international expertise to local markets.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <img 
            src={globalReachImage} 
            alt="Global business network"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Connecting Talent Across Continents
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  From our headquarters in Nairobi, we've expanded our operations to serve 
                  clients across four continents, adapting to local markets while maintaining 
                  global standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <Card key={index} className="interactive-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <region.icon className={`h-8 w-8 ${region.color}`} />
                </div>
                <h4 className="font-semibold text-brand-navy mb-3">{region.title}</h4>
                <div className="space-y-1">
                  {region.countries.slice(0, 3).map((country, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{country}</p>
                  ))}
                  {region.countries.length > 3 && (
                    <p className="text-sm text-brand-orange font-medium">
                      +{region.countries.length - 3} more
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Countries Grid */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-navy mb-8">Countries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="p-3 bg-secondary rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer hover-lift"
              >
                <span className="text-sm font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">20+</div>
              <div className="text-lg">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">500+</div>
              <div className="text-lg">Global Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">95%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;