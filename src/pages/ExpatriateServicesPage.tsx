import { ArrowLeft, Globe, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import expatriateImage from "@/assets/african-expatriate.jpg";

const ExpatriateServicesPage = () => {
  const features = [
    "Visa assistance and documentation support",
    "Cultural integration and orientation programs",
    "Housing and accommodation services",
    "Family relocation support",
    "Local area orientation and settling-in services",
    "Ongoing support throughout assignment"
  ];

  const supportAreas = [
    "Visa & Work Permit Processing",
    "Housing & Accommodation", 
    "School Search for Children",
    "Banking & Financial Setup",
    "Healthcare & Insurance",
    "Cultural Orientation",
    "Spouse/Partner Support",
    "Local Registration",
    "Departure Services",
    "Emergency Support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={expatriateImage} 
            alt="African expatriate services coordinator"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expatriate Services &
              <span className="block text-brand-orange">Relocation Support</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive relocation support for international assignments, reducing anxiety 
              and ensuring smooth transitions for expatriates and their families.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Service Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">
                  Making Global Transitions Seamless
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Re-locating abroad and leaving one's home country, temporary or on a permanent 
                  assignment, is in most cases a challenge – culturally as well as in terms of logistics. 
                  Quite often, International companies seconding manpower to the region do not have 
                  fully fledged office functions in the seconding countries.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This need not be a challenge – We offer bespoke expat services and solutions designed 
                  to reduce the anxiety for our International clients, their assignees and their families 
                  – to ensure that they have an enjoyable experience when settling into their new environment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To make the integration into the new country easier, our expat support services offer 
                  a holistic but personalized assistance and a wide range of support solutions for expats 
                  moving to other countries around the world, away from their countries of origin.
                </p>
              </div>

              {/* Core Services */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Support Services</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Why Choose Edenbrook?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expatriate services are designed for international companies and individuals who 
                  need reliable, comprehensive support during their relocation process. We understand 
                  the unique challenges of cross-cultural transitions and provide personalized solutions 
                  to ensure a smooth integration experience.
                </p>
              </div>

              {/* Service Process */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Service Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Pre-Departure Planning</h4>
                      <p className="text-muted-foreground">Comprehensive briefing and documentation preparation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Arrival Support</h4>
                      <p className="text-muted-foreground">Airport pickup, temporary accommodation, and immediate orientation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Settlement Services</h4>
                      <p className="text-muted-foreground">Housing, banking, healthcare, and school enrollment assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Ongoing Support</h4>
                      <p className="text-muted-foreground">Continuous assistance throughout the assignment period</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Support Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-brand-orange" />
                    <span>Support Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {supportAreas.map((area, index) => (
                      <div key={index} className="text-sm text-muted-foreground py-2 border-b border-border last:border-b-0">
                        {area}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Client Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Who We Serve</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Multinational corporations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">International organizations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Individual expatriates</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Diplomatic missions</span>
                  </div>
                </CardContent>
              </Card>

              {/* Service Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    <span>Service Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">300+</div>
                    <div className="text-sm text-muted-foreground">Expatriates Assisted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">15</div>
                    <div className="text-sm text-muted-foreground">Countries Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">98%</div>
                    <div className="text-sm text-muted-foreground">Successful Relocations</div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Planning an International Move?</h3>
                  <p className="text-gray-200 mb-6">
                    Let us make your relocation smooth and stress-free with our comprehensive support services.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: 0720 517 303
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Mail className="h-4 w-4 mr-2" />
                      Request Relocation Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpatriateServicesPage;