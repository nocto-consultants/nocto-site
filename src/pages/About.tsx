import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Users, Clock, Award, CheckCircle, Globe } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Globe,
      title: "100% Remote Operations",
      description: "No travel required, faster response times, and reduced costs for our clients."
    },
    {
      icon: Shield,
      title: "Security & Privacy First",
      description: "Encrypted connections, NDAs, and strict privacy protocols protect your data."
    },
    {
      icon: Clock,
      title: "Fast Response Times",
      description: "24-48 hour turnaround for most requests, with urgent priority options available."
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Specialized in DSS systems, security compliance, and digital evidence workflows."
    }
  ];

  const trustSignals = [
    "Signed NDAs for all client engagements",
    "Encrypted connections and secure data handling",
    "Proven track record with estate management",
    "Legal and insurance-ready documentation",
    "Comprehensive privacy commitment",
    "Professional incident response protocols"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why Choose Nocto?
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We help estates and businesses maximize their CCTV investment without the hassle 
                of on-site visits. Our remote-first approach delivers expert support when you need it.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="animate-slide-up">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    "Nocto helps estates and businesses maximize their CCTV investment without on-site hassle. 
                    We provide fast, secure, and professional surveillance support that works around your schedule."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              The Remote Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our remote-first approach delivers superior results while eliminating the traditional 
              challenges of on-site technical support.
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

      {/* How It Works Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              How Remote Support Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our secure and efficient process ensures your surveillance systems are properly managed 
              without any disruption to your operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Secure Connection</h3>
              <p className="text-muted-foreground">
                We establish encrypted VPN or cloud connections to your DSS system, 
                ensuring complete security and privacy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Expert Analysis</h3>
              <p className="text-muted-foreground">
                Our specialists remotely analyze your systems, retrieve footage, or provide 
                training as needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Receive professionally formatted results, documentation, or training materials 
                within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Trust & Security
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand that security footage is sensitive data. Our comprehensive security 
                measures and professional protocols ensure your information remains protected.
              </p>
              <div className="space-y-4">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-float">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold mb-4">Security Guarantee</h3>
                  <p className="text-muted-foreground mb-6">
                    All client data is handled with bank-level security. We never store footage 
                    and provide detailed audit trails for all access.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Specialized Expertise
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Our team brings deep experience with DSS systems, security compliance, and digital workflows 
            to ensure your surveillance infrastructure operates at peak performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">DSS Systems</h3>
              <p className="text-primary-foreground/80 text-sm">
                Expert knowledge of all major DSS platforms and integration capabilities.
              </p>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Legal Compliance</h3>
              <p className="text-primary-foreground/80 text-sm">
                Ensure footage meets legal and insurance requirements with proper documentation.
              </p>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Digital Workflows</h3>
              <p className="text-primary-foreground/80 text-sm">
                Streamline your security operations with modern digital processes and training.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;