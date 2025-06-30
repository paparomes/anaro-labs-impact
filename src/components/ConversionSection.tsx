
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Calendar } from 'lucide-react';

const ConversionSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Discovery call request sent!",
      description: "I'll respond within 24 hours to schedule your consultation."
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="conversion" className="section-spacing anaro-section-bg">
      <div className="container-anaro">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
              Ready to turn AI anxiety into{' '}
              <span className="text-anaro-lime">advantage?</span>
            </h2>
            <div className="anaro-accent-line w-32 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-anaro-text-secondary mb-12">
              Book your 30-minute discovery call - no obligation, mutual evaluation
            </p>

            {/* Main CTA */}
            <div className="mb-12">
              <Button 
                onClick={() => window.open('https://calendly.com', '_blank')} 
                className="anaro-button-primary text-xl px-12 py-6 lime-glow hover:scale-[1.02] transform transition-all" 
                size="lg"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Discovery Call
              </Button>
            </div>

            {/* Contact Form as Alternative */}
            <div className="anaro-card p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-anaro-text-primary mb-6">
                Or send me a message directly
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={e => setFormData({ ...formData, name: e.target.value })} 
                    className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" 
                    required 
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={e => setFormData({ ...formData, email: e.target.value })} 
                    className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" 
                    required 
                  />
                </div>
                <Input 
                  placeholder="Company" 
                  value={formData.company} 
                  onChange={e => setFormData({ ...formData, company: e.target.value })} 
                  className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" 
                />
                <Textarea 
                  placeholder="Tell me about your team's AI challenges..." 
                  value={formData.message} 
                  onChange={e => setFormData({ ...formData, message: e.target.value })} 
                  className="min-h-[120px] bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" 
                  required 
                />
                <Button type="submit" className="w-full anaro-button-secondary">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Final trust signal */}
            <p className="text-anaro-text-muted mt-8">
              Join operations leaders from Netflix, GetYourGuide, and other leading companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
