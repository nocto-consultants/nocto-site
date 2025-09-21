import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Camera, Cloud, Users, Shield, Headphones, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-surveillance.jpg';
import remoteAccessIcon from '@/assets/remote-access-icon.jpg';
import incidentRetrievalIcon from '@/assets/incident-retrieval-icon.jpg';
import trainingIcon from '@/assets/training-icon.jpg';

const Index = () => {
  const services = [
    {
      icon: incidentRetrievalIcon,
      title: "Incident Footage Retrieval",
      description: "Fast, secure footage extraction ready for legal or insurance use",
      link: "/services"
    },
    {
      icon: trainingIcon,
      title: "Staff Training & Manuals",
      description: "Virtual training and digital resources for your team",
      link: "/services"
    },
    {
      icon: remoteAccessIcon,
      title: "System Health Checks",
      description: "Complete remote audits to ensure optimal performance",
      link: "/services"
    },
    {
      icon: remoteAccessIcon,
      title: "Remote Access & Support",
      description: "Secure remote access setup with ongoing expert support",
      link: "/services"
    }
  ];

  const benefits = [
    {
      icon: Cloud,
      title: "100% Remote",
      description: "No travel required, faster response times, reduced costs"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "24-48 hour turnaround for most requests"
    },
    {
      icon: Shield,
      title: "Secure & Legal",
      description: "Legal and insurance-ready footage with full documentation"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Professional guidance and comprehensive training"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional CCTV control room with multiple surveillance monitors"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-accent text-accent-foreground border-accent mb-6">
                <Star className="h-3 w-3 mr-1" />
                Remote CCTV Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Remote CCTV & DSS Specialists
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Fast, Secure, and Hassle-Free
              </p>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl">
                Incident footage retrieval, staff training, system health checks, and expert remote support — 
                all without leaving your office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 professional-button">
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-white hover:bg-accent hover:text-primary bg-accent/10">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    <span className="text-primary-foreground font-semibold">Trusted by Estate Managers</span>
                  </div>
                  <CardTitle className="text-primary-foreground text-xl">
                    "Nocto helped us resolve a critical incident in under 24 hours"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/80 mb-4">
                    Professional footage retrieval with complete legal documentation, 
                    all handled remotely without any disruption to operations.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-primary-foreground/70">
                    <span>Waterlily Estate</span>
                    <span>•</span>
                    <span>Western Cape</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose Remote CCTV Support?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of surveillance support with our comprehensive remote services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="professional-card text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg font-heading">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional CCTV and DSS support delivered remotely to your estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="professional-card group cursor-pointer animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <Link to={service.link} className="block">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Trusted by Estate Managers Across South Africa
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our remote-first approach has helped numerous estates streamline their CCTV operations, 
                reduce costs, and improve response times for critical incidents.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground" />
                  <span>Signed NDAs for complete confidentiality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground" />
                  <span>Legal and insurance-ready documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground" />
                  <span>24-48 hour response guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-foreground" />
                  <span>Secure encrypted connections</span>
                </div>
              </div>
            </div>
            
            <div className="animate-float">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-foreground fill-current" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Estate Manager Approved</h3>
                  <p className="text-muted-foreground mb-6">
                    "The peace of mind knowing we can get professional CCTV support remotely, 
                    without disrupting operations or waiting for technicians to travel, is invaluable."
                  </p>
                  <p className="font-semibold text-primary">Security Manager, Cape Town Estate</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your CCTV Operations?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join estate managers who trust Nocto for fast, secure, and professional CCTV support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-white hover:bg-accent hover:text-primary bg-accent/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            Free consultation • No long-term contracts • Transparent pricing
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
