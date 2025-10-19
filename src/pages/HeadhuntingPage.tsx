import { ArrowLeft, Target, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import headhuntingImage from "@/assets/african-headhunting.jpg";

const HeadhuntingPage = () => {
  const features = [
    "C-level executive recruitment (CEO, COO, CFO)",
    "Senior management and director positions",
    "Confidential search processes",
    "Strategic network utilization",
    "Leadership assessment and evaluation",
    "Market intelligence and insights"
  ];

  const positions = [
    "Chief Executive Officer (CEO)",
    "Chief Operating Officer (COO)", 
    "Chief Financial Officer (CFO)",
    "Managing Director",
    "Department Directors",
    "Senior Vice Presidents",
    "Country Managers",
    "Regional Heads"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={headhuntingImage} 
            alt="African executive headhunting"
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
              Executive
              <span className="block text-brand-orange">Headhunting</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Premier headhunting services for C-level executives and senior management positions. 
              We connect you with exceptional leaders who drive organizational success.
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
                  The War for Talent is Real
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A study conducted by McKinsey Co. in 1997 predicted that the most important corporate 
                  resource over the next 20 years would be talent. Today, the war on talent is a big 
                  challenge for every company as the business environment has become more competitive.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Demand for talented professionals has gone higher, and every company is seeking to 
                  attract and retain the same talent pool. Often times, talent search - and specifically 
                  for senior executives - demands going an extra mile.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Most senior level candidates never apply for job openings but will be keen to consider 
                  offers when approached by a reputable headhunting agency like Edenbrook.
                </p>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Expertise</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Methodology</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Strategic Analysis</h4>
                      <p className="text-muted-foreground">Understanding your strategic, financial and operational challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Network Activation</h4>
                      <p className="text-muted-foreground">Leveraging our extensive executive networks and connections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Disciplined Approach</h4>
                      <p className="text-muted-foreground">Applying sound judgment to identify the right executive</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Confidential Process</h4>
                      <p className="text-muted-foreground">Maintaining discretion throughout the search process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Executive Positions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-brand-orange" />
                    <span>Executive Positions We Fill</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {positions.map((position, index) => (
                      <div key={index} className="text-sm text-muted-foreground py-1 border-b border-border last:border-b-0">
                        {position}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    <span>Success Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">98%</div>
                    <div className="text-sm text-muted-foreground">Successful Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">45</div>
                    <div className="text-sm text-muted-foreground">Days Average Search</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">100%</div>
                    <div className="text-sm text-muted-foreground">Confidentiality Maintained</div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Why Choose Edenbrook?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Dedicated team of experienced headhunters</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Strategic networks across industries</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Proven track record with C-level placements</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Find Your Next Executive?</h3>
                  <p className="text-gray-200 mb-6">
                    Let's discuss your executive search requirements confidentially.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:0720517303">
                      <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                        <Phone className="h-4 w-4 mr-2" />
                        Call: 0720 517 303
                      </Button>
                    </a>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                        <Mail className="h-4 w-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </Link>
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

export default HeadhuntingPage;