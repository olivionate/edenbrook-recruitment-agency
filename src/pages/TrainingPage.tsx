import { ArrowLeft, GraduationCap, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import trainingImage from "@/assets/african-training.jpg";

const TrainingPage = () => {
  const features = [
    "Highly customized training programs",
    "Experiential learning methodologies",
    "Adult learning principles",
    "Performance-driven outcomes",
    "Interactive workshops and seminars",
    "Post-training support and follow-up"
  ];

  const courses = [
    "Performance Management",
    "Leadership Fundamentals", 
    "Customer Service Excellence",
    "Stress Management",
    "Communication Skills",
    "Interpersonal Skills",
    "Presentation Skills",
    "Business Etiquette",
    "Change Management",
    "Team Building"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={trainingImage} 
            alt="African corporate training session"
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
              Training &
              <span className="block text-brand-orange">Capacity Building</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Customized training programs designed to drive employee productivity and create 
              lasting organizational transformation through experiential learning.
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
                  The Human Element in Business
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While technological breakthroughs have changed the way business is conducted, 
                  it is still the human element that completes business deals. Our training programs 
                  are designed to drive employee productivity by creating positive impact in people 
                  and empowering them to give their best.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We don't just tell people what they need to do to change, rather we help them 
                  realize the need for them to change from inside. This ensures lasting transformation 
                  that sustains productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Research in the past two decades has confirmed a strong link between training and 
                  increased employee productivity. Training enables human capital to reach the highest 
                  level for profit maximization and sustained business growth.
                </p>
              </div>

              {/* Approach */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Training Approach</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Our Training Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "You can't teach adults" - This principle anchors all our programs. Our experienced 
                  trainers approach training in a purely experiential way, allowing participants to 
                  discover their own solutions to their challenges. We use different training methodologies 
                  based on each client's unique business and team dynamics.
                </p>
              </div>

              {/* Training Process */}
              <div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Needs Assessment</h4>
                      <p className="text-muted-foreground">Understanding your unique business challenges and team dynamics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Custom Design</h4>
                      <p className="text-muted-foreground">Designing training programs tailored to your specific objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Experiential Delivery</h4>
                      <p className="text-muted-foreground">Interactive sessions that promote self-discovery and lasting change</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Follow-up Support</h4>
                      <p className="text-muted-foreground">Ongoing support to ensure implementation and sustained results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Training Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-brand-orange" />
                    <span>Training Courses Available</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {courses.map((course, index) => (
                      <div key={index} className="text-sm text-muted-foreground py-2 border-b border-border last:border-b-0">
                        {course}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Training Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    <span>Training Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">85%</div>
                    <div className="text-sm text-muted-foreground">Performance Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">200+</div>
                    <div className="text-sm text-muted-foreground">Organizations Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">95%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Methods */}
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Training Delivery Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">In-person workshops and seminars</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Virtual training sessions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Blended learning approaches</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">On-site customized programs</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Transform Your Team Today</h3>
                  <p className="text-gray-200 mb-6">
                    Design a customized training program that drives real performance improvement.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: 0720 517 303
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-brand-navy">
                      <Mail className="h-4 w-4 mr-2" />
                      Request Training Proposal
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

export default TrainingPage;