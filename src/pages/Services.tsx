import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Camera, Cloud, Users, Shield, Headphones, FileText, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Incident Footage Retrieval",
      description: "Quickly pull footage from any DSS camera, format it digitally (USB, cloud, MP4), and make it ready for insurance, legal, or internal use — all handled remotely.",
      pricing: "R750 - R1,200 per incident",
      features: ["Remote handling", "Multiple formats", "Legal-ready output", "Fast turnaround"]
    },
    {
      icon: Shield,
      title: "System Health Checks",
      description: "Remote audits to ensure cameras are recording, storage is healthy, backups are working, and no blind spots exist.",
      pricing: "R5,000 - R15,000 based on size",
      features: ["Full system audit", "Recording verification", "Storage health check", "Blind spot analysis"]
    },
    {
      icon: Headphones,
      title: "Remote Access & Support",
      description: "Setup secure remote access for managers and provide 'call-me' support for urgent incidents, all handled online.",
      pricing: "Setup: R2,000 - R4,000, Retainer: R3,000 - R5,000/month",
      features: ["Secure remote access", "Urgent support calls", "24/7 availability", "Expert guidance"]
    },
    {
      icon: Users,
      title: "Staff Training & Digital Manuals",
      description: "Virtual hands-on training for estate staff on DSS basics with clear digital manuals and cheat sheets for everyday operations.",
      pricing: "R8,000 - R12,000 per workshop",
      features: ["Up to 10 staff members", "Digital resources", "Virtual guidance", "Ongoing support"]
    },
    {
      icon: Cloud,
      title: "Operational Consulting",
      description: "Virtual advice on camera placement, retention policies, and integration with access control or number-plate recognition.",
      pricing: "R1,500/hour or R5,000 - R8,000 package",
      features: ["Camera optimization", "Policy development", "Integration advice", "Full estate review"]
    },
    {
      icon: FileText,
      title: "Evidence Preparation",
      description: "Prepare footage with timestamp verification and chain-of-custody documentation for legal or insurance purposes.",
      pricing: "R750 - R1,500 per incident",
      features: ["Timestamp verification", "Chain of custody", "Legal documentation", "Insurance ready"]
    },
    {
      icon: TrendingUp,
      title: "Technology Roadmap",
      description: "Remote advisory on system upgrades, AI analytics, cloud storage options, and future-proofing your surveillance infrastructure.",
      pricing: "R1,500/hour or R5,000 - R10,000 package",
      features: ["Upgrade planning", "AI integration", "Cloud storage", "Future-proofing"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
            Professional CCTV Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-slide-up">
            Comprehensive remote CCTV and DSS support services delivered securely without on-site visits. 
            Expert support when you need it, where you need it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">100% Remote</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Fast Response</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Legal Ready</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Expert Support</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="professional-card h-full animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="font-semibold text-primary text-sm mb-2">Pricing</p>
                    <p className="text-secondary-foreground">{service.pricing}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">How does remote CCTV support work?</h3>
              <p className="text-muted-foreground">
                We securely connect to your DSS system via VPN or cloud access, allowing us to retrieve footage, 
                check system health, and provide support without physical presence on your estate.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Is my footage secure during remote access?</h3>
              <p className="text-muted-foreground">
                Absolutely. We use encrypted connections, sign NDAs, and follow strict privacy protocols. 
                Your footage never leaves your system - we only view and extract what's needed.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">How quickly can you retrieve incident footage?</h3>
              <p className="text-muted-foreground">
                Most incident footage retrieval is completed within 24-48 hours, depending on complexity 
                and the amount of footage required. Urgent requests can be prioritized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for a consultation and see how our remote CCTV services can benefit your estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;