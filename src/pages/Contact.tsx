// File: src/pages/Contact.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NEW: track shadcn Select value so we can submit it
  const [service, setService] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      services: formData.get('services') as string, // now set via hidden input below
      message: formData.get('message') as string,
      hp: formData.get('hp') as string, // honeypot field
    };

    // NEW: guard because shadcn Select isn't a native <select>
    if (!data.services) {
      toast({
        title: "Please select a service",
        description: "Choose the service you're interested in before submitting.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        toast({
          title: "Request Submitted Successfully",
          description: "We'll get back to you within 24 hours with a personalized quote.",
        });
        (e.target as HTMLFormElement).reset();
        setService(""); // reset the Select
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const services = [
    "Incident Footage Retrieval",
    "Staff Training & Manuals",
    "System Health Checks",
    "Operational Consulting",
    "Remote Access & Support",
    "Evidence Preparation",
    "Technology Roadmap",
    "Multiple Services",
    "Not Sure - Need Consultation"
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@nocto.co.za",
      description: "Primary contact for all inquiries"
    },
    {
      icon: MapPin,
      title: "Coverage Area",
      details: "South Africa Remote",
      description: "Serving estates nationwide via remote access"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24-48 Hours",
      description: "Faster for urgent incidents"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
            Get Started Today
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Ready to enhance your estate's CCTV capabilities? Contact us for a consultation 
            and personalized quote for your security needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="professional-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a personalized quote within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          className="professional-input"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Estate/Company *</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          required 
                          className="professional-input"
                          placeholder="Durbanville Estate"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          className="professional-input"
                          placeholder="john@estate.co.za"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          className="professional-input"
                          placeholder="+27 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="services">Service Interested In *</Label>

                      {/* NEW: Controlled shadcn Select */}
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger id="services" className="professional-input">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* NEW: hidden input so FormData includes the selected service */}
                      <input type="hidden" name="services" value={service} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message/Notes *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        required
                        className="professional-input"
                        placeholder="Tell us about your estate's CCTV setup, any specific requirements, or questions you have..."
                      />
                    </div>

                    {/* Honeypot field for spam protection - hidden from users */}
                    <input 
                      type="text" 
                      name="hp" 
                      style={{ display: 'none' }} 
                      tabIndex={-1} 
                      autoComplete="off"
                    />

                    <div className="flex items-start space-x-2">
                      <div className="flex items-center justify-center w-5 h-5 border-2 border-accent rounded bg-accent/20 mt-0.5">
                        <Shield className="h-3 w-3 text-accent-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        All information is treated securely and confidentially. We sign NDAs for all client engagements.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 professional-button"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Get in touch with our team for immediate assistance or to discuss your specific requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="professional-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Benefits */}
              <Card className="professional-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Response within 24 hours with personalized quote
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Free consultation to understand your needs
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Transparent pricing with no hidden costs
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Signed NDA for complete confidentiality
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Urgent Support Needed?
          </h2>
        <p className="text-xl text-muted-foreground mb-8">
            For urgent incident footage retrieval or emergency support, contact us immediately.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Email: info@nocto.co.za
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
