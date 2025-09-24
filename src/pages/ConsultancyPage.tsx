import { ArrowLeft, MessageSquare, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import consultancyImage from "@/assets/african-consultancy.jpg";

const ConsultancyPage = () => {
  const features = [
    "HR strategy development and implementation",
    "Policy creation and compliance management",
    "Workforce optimization strategies",
    "Performance management systems",
    "Employee engagement programs",
    "Change management consulting"
  ];

  const services = [
    "HR Strategy & Planning",
    "Policy Development", 
    "Compliance Management",
    "Performance Management",
    "Employee Relations",
    "Compensation & Benefits",
    "Organizational Design",
    "Change Management",
    "HR Technology Solutions",
    "Risk Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={consultancyImage} 
            alt="African HR consultant advising clients"
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
              HR
              <span className="block text-brand-orange">Consultancy</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional HR management services that help clients attract, inspire, motivate, 
              manage and reward the right people within the organization.
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
                  Navigate Complex HR Challenges
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Keeping up with HR related issues and their impact on business, whilst managing 
                  the wide range of traditional HR tasks is overwhelming for Human Resource 
                  practitioners in both large and small medium sized companies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are a Human Resource Management company in Kenya providing professional HR 
                  management services that help clients attract, inspire, motivate, manage and 
                  reward the right people within the organization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our primary goal is to understand the needs of our clients and effectively 
                  collaborate with them to tailor HR Management services that meet their unique 
                  workforce management objectives.
                </p>
              </div>

              {/* Core Services */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Core Services</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Our Value Proposition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our HR consultancy services are designed to maximize investment in human capital 
                  whilst enabling clients to focus on their core business. We have a dedicated team 
                  of Human Resource Management Consultants who provide a broad range of solutions 
                  critical for human capital optimization.
                </p>
              </div>

              {/* Consulting Process */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Consulting Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Current State Assessment</h4>
                      <p className="text-muted-foreground">Comprehensive evaluation of your existing HR practices and challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Strategy Development</h4>
                      <p className="text-muted-foreground">Creating tailored HR strategies aligned with business objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Implementation Support</h4>
                      <p className="text-muted-foreground">Hands-on assistance in implementing HR solutions and best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Ongoing Partnership</h4>
                      <p className="text-muted-foreground">Continuous support and optimization of HR processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-brand-orange" />
                    <span>Consultancy Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {services.map((service, index) => (
                      <div key={index} className="text-sm text-muted-foreground py-2 border-b border-border last:border-b-0">
                        {service}
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
                    <span className="text-sm text-muted-foreground">Small and Medium Enterprises (SMEs)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Large corporations and multinationals</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Non-profit organizations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Government agencies</span>
                  </div>
                </CardContent>
              </Card>

              {/* Success Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    <span>Consultancy Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">150+</div>
                    <div className="text-sm text-muted-foreground">Organizations Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">40%</div>
                    <div className="text-sm text-muted-foreground">Average Productivity Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">25%</div>
                    <div className="text-sm text-muted-foreground">Reduction in HR Costs</div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Optimize Your HR Strategy</h3>
                  <p className="text-gray-200 mb-6">
                    Let our experts help you build a world-class HR function that drives business success.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: 0720 517 303
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Mail className="h-4 w-4 mr-2" />
                      Schedule Consultation
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

export default ConsultancyPage;