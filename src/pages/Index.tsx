
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Target, Search, Handshake, Wrench, CheckCircle, Zap, Shield, TrendingUp, MessageSquare } from 'lucide-react';

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
      className: "bg-progress-green text-white"
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-deep-dark text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-deep-dark/95 backdrop-blur-md z-50 border-b border-soft-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-space font-bold text-xl text-signal-yellow">
              Signal<span className="text-noise-red">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-muted-foreground hover:text-signal-yellow transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('approach')} 
                className="text-muted-foreground hover:text-signal-yellow transition-colors"
              >
                Approach
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-signal-yellow transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 noise-pattern">
        <div className="absolute inset-0 signal-grid opacity-20"></div>
        
        {/* Animated noise elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-noise-red rounded-full animate-noise-static"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-warning-orange rounded-full animate-noise-static"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-noise-red rounded-full animate-noise-static"></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-warning-orange rounded-full animate-noise-static"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 animate-on-scroll">
              <h1 className="text-6xl md:text-7xl font-black font-space mb-6 leading-tight">
                <span className="text-noise-red">Drowning</span> in AI{' '}
                <span className="text-warning-orange">noise?</span>
              </h1>
              <h2 className="text-5xl md:text-6xl font-black font-space mb-8 leading-tight">
                <span className="text-muted-foreground">Paralyzed by the</span>{' '}
                <span className="text-signal-yellow">risk</span>{' '}
                <span className="text-muted-foreground">of getting it</span>{' '}
                <span className="text-noise-red">wrong?</span>
              </h2>
            </div>
            
            <div className="cut-through bg-mid-dark/80 backdrop-blur-sm p-8 rounded-2xl border border-soft-dark mb-8 animate-on-scroll">
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                You're watching competitors move while you're stuck researching. Small business owners are overwhelmed by endless tools and conflicting advice. Enterprise leaders are paralyzed by brand risk and implementation complexity.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-signal-yellow leading-relaxed">
                I help you cut through the chaos and move forward confidently.
              </p>
            </div>

            <div className="mb-8 animate-on-scroll">
              <p className="text-xl md:text-2xl text-focus-blue font-semibold mb-4">
                13 years scaling operations at Netflix, GetYourGuide, and Delivery Hero
              </p>
              <p className="text-lg text-muted-foreground">
                taught me how to separate AI signal from noise - and implement solutions that actually work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-signal-yellow hover:bg-signal-yellow/90 text-deep-dark px-10 py-6 text-xl font-bold rounded-lg transition-all duration-300 hover:scale-105 min-w-[220px] cut-effect"
              >
                Cut Through The Noise
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-focus-blue text-focus-blue hover:bg-focus-blue hover:text-deep-dark px-10 py-6 text-xl font-bold rounded-lg transition-all duration-300 hover:scale-105 min-w-[220px]"
              >
                See The Signal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Services Section */}
      <section id="services" className="py-20 bg-mid-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-signal-yellow/5 to-transparent transform -skew-y-1"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-black font-space mb-6 text-signal-yellow">
              Four Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical solutions that separate signal from noise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="animate-on-scroll group">
              <div className="bg-card p-8 rounded-2xl border-l-4 border-progress-green hover:border-signal-yellow transition-all duration-300 transform hover:-translate-y-2 hover:bg-card/80">
                <div className="w-16 h-16 bg-progress-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signal-yellow/20 transition-colors">
                  <Target className="h-8 w-8 text-progress-green group-hover:text-signal-yellow transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-space mb-4 text-signal-yellow">
                  🎯 AI Learning & Adoption
                </h3>
                <p className="text-lg font-semibold text-noise-red mb-4">
                  Your team is intimidated and progress feels impossible
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cut through the overwhelm with practical AI training. No buzzwords, no theoretical frameworks - just actionable skills that work in your actual business environment.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card p-8 rounded-2xl border-l-4 border-focus-blue hover:border-signal-yellow transition-all duration-300 transform hover:-translate-y-2 hover:bg-card/80">
                <div className="w-16 h-16 bg-focus-blue/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signal-yellow/20 transition-colors">
                  <Search className="h-8 w-8 text-focus-blue group-hover:text-signal-yellow transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-space mb-4 text-signal-yellow">
                  🔍 AI Solution Advisory
                </h3>
                <p className="text-lg font-semibold text-noise-red mb-4">
                  Vendor pitches sound the same and the stakes feel too high
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Navigate AI vendor selection without the expensive mistakes. Structured evaluation frameworks that account for your specific needs and risk tolerance.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.4s' }}>
              <div className="bg-card p-8 rounded-2xl border-l-4 border-warning-orange hover:border-signal-yellow transition-all duration-300 transform hover:-translate-y-2 hover:bg-card/80">
                <div className="w-16 h-16 bg-warning-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signal-yellow/20 transition-colors">
                  <Handshake className="h-8 w-8 text-warning-orange group-hover:text-signal-yellow transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-space mb-4 text-signal-yellow">
                  🤝 AI-Ready BPO Partnerships
                </h3>
                <p className="text-lg font-semibold text-noise-red mb-4">
                  Your outsourcing partners don't understand AI integration
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bridge the gap between AI strategy and operational execution. 8+ years managing large-scale vendor relationships brings clarity to complex AI-enabled partnerships.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.6s' }}>
              <div className="bg-card p-8 rounded-2xl border-l-4 border-noise-red hover:border-signal-yellow transition-all duration-300 transform hover:-translate-y-2 hover:bg-card/80">
                <div className="w-16 h-16 bg-noise-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signal-yellow/20 transition-colors">
                  <Wrench className="h-8 w-8 text-noise-red group-hover:text-signal-yellow transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-space mb-4 text-signal-yellow">
                  🛠️ Custom AI Solutions
                </h3>
                <p className="text-lg font-semibold text-noise-red mb-4">
                  Nothing fits your specific business exactly
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sometimes you need something built just for you. From customer service automation to content generation tools - practical solutions tailored to your business reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Approach Works Section */}
      <section id="approach" className="py-20 bg-deep-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-black font-space mb-6 text-signal-yellow">
                Why This Approach Works
              </h2>
              <p className="text-2xl text-focus-blue font-semibold">
                "Operations experience meets AI implementation"
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="animate-on-scroll bg-gradient-to-br from-progress-green/10 to-progress-green/5 p-8 rounded-2xl border border-progress-green/20">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-progress-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-space mb-3 text-signal-yellow">Cut through the noise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      13 years in operations means I know what actually works versus what just sounds impressive
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll bg-gradient-to-br from-focus-blue/10 to-focus-blue/5 p-8 rounded-2xl border border-focus-blue/20" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-focus-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-space mb-3 text-signal-yellow">Manage the risk</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I've been part of major AI implementations and understand how to minimize brand and operational risks
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll bg-gradient-to-br from-warning-orange/10 to-warning-orange/5 p-8 rounded-2xl border border-warning-orange/20" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-8 w-8 text-warning-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-space mb-3 text-signal-yellow">Full-spectrum support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From overwhelmed small business owner to risk-conscious enterprise leader - guidance that matches where you are
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-mid-dark text-foreground relative overflow-hidden">
        <div className="absolute inset-0 noise-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-black font-space mb-6 text-signal-yellow">
                Ready to move from AI{' '}
                <span className="text-noise-red">paralysis</span>{' '}
                to <span className="text-progress-green">progress?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're drowning in options or worried about implementation risks - let's discuss how to make AI work for your specific situation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-soft-dark">
                  <h3 className="text-2xl font-bold font-space mb-6 text-signal-yellow">
                    Stop drowning in AI noise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-progress-green rounded-full signal-pulse"></div>
                      <span>Strategy calls available within 48 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-focus-blue rounded-full signal-pulse"></div>
                      <span>Risk assessment and mitigation planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-warning-orange rounded-full signal-pulse"></div>
                      <span>Custom solutions for unique challenges</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-deep-dark/50 border-soft-dark text-foreground placeholder:text-muted-foreground focus:border-signal-yellow"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-deep-dark/50 border-soft-dark text-foreground placeholder:text-muted-foreground focus:border-signal-yellow"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-deep-dark/50 border-soft-dark text-foreground placeholder:text-muted-foreground focus:border-signal-yellow"
                  />
                  <Textarea
                    placeholder="Describe your AI challenge or paralysis point..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-deep-dark/50 border-soft-dark text-foreground placeholder:text-muted-foreground focus:border-signal-yellow min-h-[120px]"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-signal-yellow hover:bg-signal-yellow/90 text-deep-dark py-6 text-xl font-bold rounded-lg transition-all duration-300 hover:scale-105 cut-effect"
                  >
                    Break Through The Noise
                    <MessageSquare className="ml-2 h-6 w-6" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-dark text-muted-foreground py-8 border-t border-soft-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-space font-bold text-xl text-signal-yellow mb-4 md:mb-0">
              Signal<span className="text-noise-red">.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-signal-yellow transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-signal-yellow transition-colors">Email</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-soft-dark">
            <p>&copy; 2024 Roman Siepelmeyer. Cutting through AI noise since 2023.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
