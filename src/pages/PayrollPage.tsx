import { ArrowLeft, Calculator, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import payrollImage from "@/assets/african-payroll.jpg";

const PayrollPage = () => {
  const features = [
    "Complete payroll processing and management",
    "Benefits administration and compliance",
    "Tax compliance and statutory deductions",
    "Staff outsourcing solutions",
    "Cost reduction without sacrificing quality",
    "Comprehensive reporting and analytics"
  ];

  const services = [
    "Payroll Processing",
    "Benefits Administration", 
    "Tax Compliance",
    "Statutory Deductions",
    "Staff Outsourcing",
    "PAYE Management",
    "NSSF Contributions",
    "NHIF Deductions",
    "Gratuity Calculations",
    "Leave Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={payrollImage} 
            alt="African payroll specialist"
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
              Payroll &
              <span className="block text-brand-orange">Outsourcing Services</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Complete staff outsourcing and payroll management solutions designed to reduce 
              HR costs without sacrificing service quality.
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
                  Streamline Your HR Operations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Edenbrook helps your company reduce HR costs without sacrificing service quality. 
                  We work with your company to provide both interim and permanent solutions to your 
                  staffing requirements, offering a range of tailored solutions designed to optimize 
                  your people-management and staffing strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our payroll and outsourcing services enable you to focus on your core business 
                  activities while we handle the complex administrative tasks of employee management, 
                  payroll processing, and compliance requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From small businesses to large corporations, our scalable solutions adapt to your 
                  specific needs, ensuring accuracy, compliance, and cost-effectiveness in all your 
                  HR operations.
                </p>
              </div>

              {/* Core Services */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">What We Offer</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Reduce operational costs by up to 40%</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Ensure 100% compliance with local regulations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Access to advanced payroll technology</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Focus on core business activities</span>
                  </div>
                </div>
              </div>

              {/* Service Process */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Requirements Analysis</h4>
                      <p className="text-muted-foreground">Understanding your payroll and staffing requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">System Setup</h4>
                      <p className="text-muted-foreground">Configuring payroll systems and compliance frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Implementation</h4>
                      <p className="text-muted-foreground">Seamless transition of payroll and staff management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Ongoing Management</h4>
                      <p className="text-muted-foreground">Continuous payroll processing and support</p>
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
                    <Calculator className="h-5 w-5 text-brand-orange" />
                    <span>Payroll Services</span>
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

              {/* Compliance Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Kenya Revenue Authority (KRA) compliance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">National Social Security Fund (NSSF)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">National Hospital Insurance Fund (NHIF)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Employment Act compliance</span>
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
                    <div className="text-3xl font-bold text-brand-orange">5000+</div>
                    <div className="text-sm text-muted-foreground">Employees Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">40%</div>
                    <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">100%</div>
                    <div className="text-sm text-muted-foreground">Compliance Rate</div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Streamline Your Payroll?</h3>
                  <p className="text-gray-200 mb-6">
                    Let us handle your payroll complexity while you focus on growing your business.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: 0720 517 303
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Mail className="h-4 w-4 mr-2" />
                      Request Payroll Quote
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

export default PayrollPage;