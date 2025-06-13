import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Target, Search, Handshake, Wrench, CheckCircle, Mail, Users, Star, Award } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours with next steps.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-anaro-charcoal text-anaro-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-anaro-charcoal/90 backdrop-blur-md border-b border-anaro-charcoal-lighter z-50">
        <div className="container-anaro">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/26559323-0f01-464c-b33d-cb23837b1598.png" 
                alt="Anaro Labs Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-anaro-text-secondary hover:text-anaro-lime transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('approach')} 
                className="text-anaro-text-secondary hover:text-anaro-lime transition-colors font-medium"
              >
                Approach
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-anaro-text-secondary hover:text-anaro-lime transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden anaro-hero-bg">
        <div className="container-anaro section-spacing pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-5xl md:text-7xl font-bold text-anaro-text-primary leading-tight mb-6">
                Drowning in AI{' '}
                <span className="text-anaro-lime">noise?</span>
              </h1>
              
              <div className="anaro-accent-line w-24 mb-8"></div>
              
              <h2 className="text-2xl md:text-3xl text-anaro-text-secondary font-medium mb-8 leading-relaxed">
                Paralyzed by the risk of getting it{' '}
                <span className="text-anaro-lime font-semibold">wrong?</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-xl text-anaro-text-secondary leading-relaxed">
                  You're watching competitors move while you're stuck researching. Small business owners are overwhelmed by endless tools and conflicting advice. Enterprise leaders are paralyzed by brand risk and implementation complexity.
                </p>
                <p className="text-2xl font-semibold text-anaro-text-primary">
                  I help you cut through the chaos and move forward confidently.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-anaro-lime" />
                  <p className="text-lg text-anaro-lime font-semibold">
                    13 years scaling operations at Netflix, GetYourGuide, and Delivery Hero
                  </p>
                </div>
                <p className="text-anaro-text-secondary ml-9">
                  taught me how to separate AI signal from noise - and implement solutions that actually work.
                </p>
              </div>

              <Button 
                onClick={() => scrollToSection('contact')} 
                className="anaro-button-primary lime-glow"
              >
                Cut Through The Noise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="animate-on-scroll hidden lg:block" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-anaro-charcoal-light to-anaro-charcoal-lighter rounded-3xl border border-anaro-lime/20 subtle-float lime-glow"></div>
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-anaro-lime/10 rounded-full subtle-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-anaro-lime/5 rounded-2xl subtle-float" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Services Section */}
      <section id="services" className="section-spacing anaro-section-bg">
        <div className="container-anaro">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-anaro-text-primary mb-6">
              Four Core Services
            </h2>
            <div className="anaro-accent-line w-32 mx-auto mb-6"></div>
            <p className="text-xl text-anaro-text-secondary max-w-3xl mx-auto">
              Practical solutions that separate signal from noise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="animate-on-scroll">
              <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                <div className="w-16 h-16 bg-anaro-lime rounded-2xl flex items-center justify-center mb-6 group-hover:animate-lime-pulse">
                  <Target className="h-8 w-8 text-anaro-charcoal" />
                </div>
                <h3 className="text-2xl font-bold text-anaro-text-primary mb-4">
                  🎯 AI Learning & Adoption
                </h3>
                <p className="text-lg font-semibold text-anaro-lime mb-4">
                  Your team is intimidated and progress feels impossible
                </p>
                <p className="text-anaro-text-secondary leading-relaxed">
                  Cut through the overwhelm with practical AI training. No buzzwords, no theoretical frameworks - just actionable skills that work in your actual business environment.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                <div className="w-16 h-16 bg-anaro-lime rounded-2xl flex items-center justify-center mb-6 group-hover:animate-lime-pulse">
                  <Search className="h-8 w-8 text-anaro-charcoal" />
                </div>
                <h3 className="text-2xl font-bold text-anaro-text-primary mb-4">
                  🔍 AI Solution Advisory
                </h3>
                <p className="text-lg font-semibold text-anaro-lime mb-4">
                  Vendor pitches sound the same and the stakes feel too high
                </p>
                <p className="text-anaro-text-secondary leading-relaxed">
                  Navigate AI vendor selection without the expensive mistakes. Structured evaluation frameworks that account for your specific needs and risk tolerance.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                <div className="w-16 h-16 bg-anaro-lime rounded-2xl flex items-center justify-center mb-6 group-hover:animate-lime-pulse">
                  <Handshake className="h-8 w-8 text-anaro-charcoal" />
                </div>
                <h3 className="text-2xl font-bold text-anaro-text-primary mb-4">
                  🤝 AI-Ready BPO Partnerships
                </h3>
                <p className="text-lg font-semibold text-anaro-lime mb-4">
                  Your outsourcing partners don't understand AI integration
                </p>
                <p className="text-anaro-text-secondary leading-relaxed">
                  Bridge the gap between AI strategy and operational execution. 8+ years managing large-scale vendor relationships brings clarity to complex AI-enabled partnerships.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                <div className="w-16 h-16 bg-anaro-lime rounded-2xl flex items-center justify-center mb-6 group-hover:animate-lime-pulse">
                  <Wrench className="h-8 w-8 text-anaro-charcoal" />
                </div>
                <h3 className="text-2xl font-bold text-anaro-text-primary mb-4">
                  🛠️ Custom AI Solutions
                </h3>
                <p className="text-lg font-semibold text-anaro-lime mb-4">
                  Nothing fits your specific business exactly
                </p>
                <p className="text-anaro-text-secondary leading-relaxed">
                  Sometimes you need something built just for you. From customer service automation to content generation tools - practical solutions tailored to your business reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Approach Works Section */}
      <section id="approach" className="section-spacing">
        <div className="container-anaro">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                Why This Approach Works
              </h2>
              <div className="anaro-accent-line w-32 mx-auto mb-6"></div>
              <p className="text-2xl text-anaro-lime font-semibold">
                "Operations experience meets AI implementation"
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-on-scroll text-center">
                <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-anaro-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Cut through the noise</h3>
                <p className="text-anaro-text-secondary leading-relaxed">
                  13 years in operations means I know what actually works versus what just sounds impressive
                </p>
              </div>

              <div className="animate-on-scroll text-center" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-anaro-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Manage the risk</h3>
                <p className="text-anaro-text-secondary leading-relaxed">
                  I've been part of major AI implementations and understand how to minimize brand and operational risks
                </p>
              </div>

              <div className="animate-on-scroll text-center" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-anaro-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Full-spectrum support</h3>
                <p className="text-anaro-text-secondary leading-relaxed">
                  From overwhelmed small business owner to risk-conscious enterprise leader - guidance that matches where you are
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing anaro-section-bg">
        <div className="container-anaro">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                Ready to move from AI paralysis to progress?
              </h2>
              <div className="anaro-accent-line w-32 mx-auto mb-6"></div>
              <p className="text-xl text-anaro-text-secondary max-w-4xl mx-auto">
                Whether you're drowning in options or worried about implementation risks - let's discuss how to make AI work for your specific situation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <div className="anaro-card p-8">
                  <h3 className="text-2xl font-bold text-anaro-text-primary mb-6">
                    Stop drowning in AI noise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-anaro-lime rounded-full"></div>
                      <span className="text-anaro-text-secondary">Strategy calls available within 48 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-anaro-lime rounded-full"></div>
                      <span className="text-anaro-text-secondary">Risk assessment and mitigation planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-anaro-lime rounded-full"></div>
                      <span className="text-anaro-text-secondary">Custom solutions for unique challenges</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20"
                  />
                  <Textarea
                    placeholder="Describe your AI challenge or paralysis point..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full anaro-button-primary lime-glow"
                  >
                    Break Through The Noise
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-anaro-charcoal border-t border-anaro-charcoal-lighter py-12">
        <div className="container-anaro">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/26559323-0f01-464c-b33d-cb23837b1598.png" 
                alt="Anaro Labs Logo" 
                className="h-6 w-auto"
              />
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-anaro-text-muted hover:text-anaro-lime transition-colors">LinkedIn</a>
              <a href="#" className="text-anaro-text-muted hover:text-anaro-lime transition-colors">Email</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-anaro-charcoal-lighter">
            <p className="text-anaro-text-muted">&copy; 2024 Roman Siepelmeyer. Cutting through AI noise since 2023.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
