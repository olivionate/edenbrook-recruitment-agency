import { 
  Users, 
  Search, 
  GraduationCap, 
  MessageSquare, 
  Globe, 
  Briefcase,
  ArrowRight,
  Star 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import recruitmentImage from "@/assets/african-recruitment.jpg";
import headhuntingImage from "@/assets/african-headhunting.jpg";
import trainingImage from "@/assets/african-training.jpg";
import consultancyImage from "@/assets/african-consultancy.jpg";

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const services = [
    {
      icon: Users,
      title: "Local & Overseas Recruitment",
      description: "Comprehensive recruitment services for organizations of all sizes, both locally in Kenya and internationally across 20+ countries.",
      features: ["Global talent sourcing", "Multi-level recruitment", "CV screening & selection", "Cost-effective solutions"],
      image: recruitmentImage,
      highlight: "Popular"
    },
    {
      icon: Search,
      title: "Executive Headhunting",
      description: "Specialized talent acquisition for senior executives including CEOs, COOs, CFOs, and Directors using strategic networks.",
      features: ["C-level recruitment", "Strategic network access", "Confidential searches", "Leadership assessment"],
      image: headhuntingImage,
      highlight: "Premium"
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "Customized training programs designed to drive employee productivity and create lasting organizational transformation.",
      features: ["Performance management", "Leadership development", "Customer service training", "Team building programs"],
      image: trainingImage,
      highlight: "Growth"
    },
    {
      icon: MessageSquare,
      title: "HR Consultancy",
      description: "Professional HR management services to optimize human capital while enabling clients to focus on core business.",
      features: ["HR strategy development", "Policy creation", "Compliance management", "Workforce optimization"],
      image: consultancyImage,
      highlight: "Strategic"
    },
    {
      icon: Globe,
      title: "Expatriate Services",
      description: "Comprehensive relocation support for international assignments, reducing anxiety for companies and their assignees.",
      features: ["Visa assistance", "Cultural integration", "Housing support", "Family relocation"],
      image: recruitmentImage,
      highlight: "Global"
    },
    {
      icon: Briefcase,
      title: "Payroll & Outsourcing",
      description: "Complete staff outsourcing and payroll management solutions to reduce HR costs without sacrificing service quality.",
      features: ["Payroll processing", "Benefits administration", "Compliance management", "Cost reduction"],
      image: consultancyImage,
      highlight: "Efficient"
    }
  ];

  const getHighlightColor = (highlight: string) => {
    const colors = {
      Popular: "bg-green-500",
      Premium: "bg-purple-500",
      Growth: "bg-blue-500",
      Strategic: "bg-brand-orange",
      Global: "bg-indigo-500",
      Efficient: "bg-teal-500"
    };
    return colors[highlight as keyof typeof colors] || "bg-brand-orange";
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive HR solutions designed to optimize your people-management strategies 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${getHighlightColor(service.highlight)} text-white text-sm font-medium rounded-full`}>
                    {service.highlight}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-brand-navy">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-brand-orange flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your HR Strategy?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our tailored solutions can help your organization achieve its goals.
          </p>
          <Button 
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 text-lg font-semibold rounded-xl"
            onClick={scrollToContact}
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;