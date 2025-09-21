import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      name: "Incident Footage Retrieval",
      description: "Quick footage extraction and formatting",
      perIncident: "R750 - R1,200",
      retainer: "2-5 incidents/month included",
      retainerExtra: "Additional: R500 each",
      popular: false
    },
    {
      name: "System Health Checks",
      description: "Complete system audits and monitoring",
      perIncident: "R5,000 - R15,000",
      retainer: "Monthly health checks",
      retainerExtra: "Priority issue resolution",
      popular: true
    },
    {
      name: "Remote Access & Support",
      description: "Secure access setup and ongoing support",
      perIncident: "Setup: R2,000 - R4,000",
      retainer: "R3,000 - R5,000/month",
      retainerExtra: "Up to 5 support calls included",
      popular: true
    },
    {
      name: "Staff Training & Manuals",
      description: "Virtual training and digital resources",
      perIncident: "R8,000 - R12,000 per workshop",
      retainer: "Quarterly training sessions",
      retainerExtra: "Digital materials: R1,500 - R3,000",
      popular: false
    },
    {
      name: "Operational Consulting",
      description: "Expert advice and optimization",
      perIncident: "R1,500/hour (2hr min)",
      retainer: "4 hours/month included",
      retainerExtra: "Additional: R1,200/hour",
      popular: false
    },
    {
      name: "Evidence Preparation",
      description: "Legal-ready footage with documentation",
      perIncident: "R750 - R1,500",
      retainer: "Bundled with retrieval",
      retainerExtra: "Chain of custody included",
      popular: false
    },
    {
      name: "Technology Roadmap",
      description: "Future-proofing and upgrade planning",
      perIncident: "R5,000 - R10,000 package",
      retainer: "Annual roadmap updates",
      retainerExtra: "Implementation guidance",
      popular: false
    }
  ];

  const retainerBenefits = [
    "Priority response times",
    "Reduced per-incident costs",
    "Monthly system monitoring",
    "Dedicated support contact",
    "Emergency response included",
    "Quarterly business reviews"
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
            Transparent Pricing
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Choose between per-incident pricing for occasional needs or retainer packages for ongoing support. 
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Options Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="professional-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading">Per-Incident Pricing</CardTitle>
                <CardDescription>
                  Pay only for the services you need, when you need them.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-primary">Pay Per Use</p>
                  <p className="text-muted-foreground">No monthly commitments</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-accent-foreground mr-2" />
                    <span className="text-sm">Flexible service selection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-accent-foreground mr-2" />
                    <span className="text-sm">No monthly fees</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-accent-foreground mr-2" />
                    <span className="text-sm">Standard response times</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-accent-foreground mr-2" />
                    <span className="text-sm">Professional documentation</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="professional-card border-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground font-semibold px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading">Retainer Packages</CardTitle>
                <CardDescription>
                  Ongoing support with priority access and reduced costs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-primary">R5,000 - R15,000</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-2">
                  {retainerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-accent-foreground mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">Start Retainer</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Service Pricing */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Service Pricing Breakdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed pricing for each service, showing both per-incident and retainer options.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <Card key={index} className={`professional-card ${service.popular ? 'border-accent' : ''} animate-scale-in`} style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2">
                            {service.name}
                            {service.popular && (
                              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                                Popular
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary text-sm">Per-Incident Pricing</h4>
                          <p className="text-lg font-semibold">{service.perIncident}</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary text-sm">Retainer Option</h4>
                          <p className="text-lg font-semibold">{service.retainer}</p>
                          <p className="text-sm text-muted-foreground">{service.retainerExtra}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Remote Access Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  One-time configuration fee for secure VPN or DSS cloud login access.
                </p>
                <p className="text-2xl font-bold text-primary">R1,500 - R3,000</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Required for most remote services. Includes security configuration and testing.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Cost Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    Estate size and number of cameras
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    Complexity of incident or request
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    Urgency and response time requirements
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    Additional documentation needs
                  </li>
                </ul>
              </CardContent>
            </Card>
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
            Contact us for a personalized quote or to discuss which option works best for your estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;