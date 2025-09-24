import { ArrowLeft, Globe, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import recruitmentImage from "@/assets/african-recruitment.jpg";

const LocalRecruitmentPage = () => {
  const features = [
    "Local and international talent sourcing",
    "Multi-level position recruitment (junior to senior)",
    "Comprehensive CV screening and candidate evaluation",
    "Cost-effective recruitment solutions",
    "Global reach across 20+ countries",
    "Quality assurance and candidate matching"
  ];

  const countries = [
    "Kenya", "Australia", "Qatar", "Kuwait", "Saudi Arabia", "Canada",
    "Philippines", "Indonesia", "Singapore", "UAE", "Jordan", "Sri Lanka",
    "India", "Malaysia", "Oman", "Bahrain", "Poland"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={recruitmentImage} 
            alt="African recruitment professional"
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
              Local & Overseas
              <span className="block text-brand-orange">Recruitment Services</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive recruitment solutions for organizations of all sizes, connecting you with 
              exceptional talent locally in Kenya and internationally across 20+ countries.
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
                  Why Choose Our Recruitment Services?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Recruiting for a single role, whatever the level, can be a costly and time-consuming 
                  process for any organization with no guaranteed success. In a dynamic market environment, 
                  where employers are competing with each other for the most competent talent, this becomes 
                  even more challenging.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Using Edenbrook's recruitment services is invaluable in saving time and financial resources 
                  for any organization. We ensure that you don't meet any candidate unless they satisfy the 
                  criteria for the role you are seeking to fill.
                </p>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Key Features</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Requirements Analysis</h4>
                      <p className="text-muted-foreground">We understand your specific role requirements and company culture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Talent Sourcing</h4>
                      <p className="text-muted-foreground">Global search using our extensive network and databases</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Screening & Assessment</h4>
                      <p className="text-muted-foreground">Thorough evaluation to match your criteria perfectly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Presentation & Support</h4>
                      <p className="text-muted-foreground">Present qualified candidates and support through hiring process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Countries We Serve */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-brand-orange" />
                    <span>Countries We Serve</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {countries.map((country, index) => (
                      <div key={index} className="text-sm text-muted-foreground py-1">
                        {country}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    <span>Service Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">20+</div>
                    <div className="text-sm text-muted-foreground">Countries Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">500+</div>
                    <div className="text-sm text-muted-foreground">Successful Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">95%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Find Your Perfect Candidate?</h3>
                  <p className="text-gray-200 mb-6">
                    Let's discuss your recruitment needs and find the ideal talent for your organization.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: 0720 517 303
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
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

export default LocalRecruitmentPage;