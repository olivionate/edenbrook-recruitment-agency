import { Phone, Mail, MapPin, Clock, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["0720 517 303", "0721 658 788"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@edenbrook.co.ke"],
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Physical Address",
      details: [
        "4th Floor, Ruprani House, Room 414",
        "Mokhtar Daddah Street, Nairobi",
        "P.O. Box 2097 – 00621 Nairobi"
      ],
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      color: "text-purple-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your HR strategy? Contact us today for a consultation 
            and discover how we can help your business achieve its goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company Ltd" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254 700 000 000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="recruitment">Local & Overseas Recruitment</option>
                    <option value="headhunting">Executive Headhunting</option>
                    <option value="training">Training & Capacity Building</option>
                    <option value="consultancy">HR Consultancy</option>
                    <option value="expatriate">Expatriate Services</option>
                    <option value="payroll">Payroll & Outsourcing</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your HR needs and how we can help..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white py-3"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="interactive-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional CTA */}
            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-200 mb-6">
                  Schedule a free consultation to discuss your HR requirements and discover 
                  how we can transform your people management strategy.
                </p>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy"
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Website Information */}
        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4">
                <Globe className="h-6 w-6 text-brand-orange" />
                <span className="text-lg font-medium text-brand-navy">www.edenbrook.co.ke</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;