import { CheckCircle, Award, Users, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Leading Expertise",
      description: "One of Kenya's top recruitment agencies with global reach"
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Customized HR strategies for SMEs to multinationals"
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Operating across 20+ countries worldwide"
    }
  ];

  const values = [
    { title: "Integrity", description: "We do the right thing" },
    { title: "Reliability", description: "Consistently deliver quality services" },
    { title: "Progressive", description: "Continuously reinvent ourselves" },
    { title: "Commitment", description: "Positively contributing to all stakeholders" },
    { title: "Excellence", description: "We seek to excel in all that we do" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our journey, values, and commitment to transforming HR solutions 
            for businesses worldwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-navy">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Edenbrook Recruitment Agency Ltd has grown to become a leading provider of HR solutions 
                and outsourcing services for companies of all sizes — from new SMEs to the largest multinationals. 
                Operating from our head offices in Nairobi, we bring sustainable people management strategies 
                to your business through tailor-made HR solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our proven track record in talent optimization, retention, employee motivation and engagement, 
                and employment risk minimization helps companies address complex HR challenges in today's 
                competitive markets.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="p-6 bg-brand-navy/5 rounded-xl border border-brand-navy/10">
                <h4 className="font-semibold text-brand-navy mb-2">Mission Statement</h4>
                <p className="text-muted-foreground">
                  We deliver valuable services to our clients by continuously reinventing ourselves 
                  to align to the changing needs in the market place.
                </p>
              </div>
              <div className="p-6 bg-brand-orange/5 rounded-xl border border-brand-orange/10">
                <h4 className="font-semibold text-brand-navy mb-2">Our Vision</h4>
                <p className="text-muted-foreground">
                  To become a global leader in Human Resource development by consistently delivering 
                  an unmatched customer experience enabled by a progressive culture.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="interactive-card">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-brand-navy mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="interactive-card text-center">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;