
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
      className: "bg-neon-green text-void-black"
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-void-black text-foreground font-inter overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-electric-blue/20 rounded-full float blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyber-purple/20 rounded-lg float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-neon-green/20 rounded-full float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-plasma-pink/20 morph" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-quantum-orange/20 rounded-full float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-orbitron font-bold text-xl gradient-text">
              ANARO<span className="text-electric-blue">LAB</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-muted-foreground hover:text-electric-blue transition-colors hover:text-glow"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('approach')} 
                className="text-muted-foreground hover:text-neon-green transition-colors hover:text-glow"
              >
                Approach
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-cyber-purple transition-colors hover:text-glow"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 cyber-grid">
        <div className="absolute inset-0 bg-holographic opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 animate-on-scroll">
              <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-8 leading-tight">
                <span className="text-electric-blue">Drowning</span> in AI{' '}
                <span className="text-plasma-pink">noise?</span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold font-space mb-8 leading-tight">
                <span className="text-muted-foreground">Paralyzed by the</span>{' '}
                <span className="text-quantum-orange">risk</span>{' '}
                <span className="text-muted-foreground">of getting it</span>{' '}
                <span className="text-electric-blue">wrong?</span>
              </h2>
            </div>
            
            <div className="glass-strong p-8 rounded-3xl mb-12 animate-on-scroll hologram">
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                You're watching competitors move while you're stuck researching. Small business owners are overwhelmed by endless tools and conflicting advice. Enterprise leaders are paralyzed by brand risk and implementation complexity.
              </p>
              <p className="text-3xl md:text-4xl font-bold gradient-text leading-relaxed">
                I help you cut through the chaos and move forward confidently.
              </p>
            </div>

            <div className="mb-12 animate-on-scroll">
              <p className="text-xl md:text-2xl text-electric-blue font-semibold mb-4 text-glow">
                13 years scaling operations at Netflix, GetYourGuide, and Delivery Hero
              </p>
              <p className="text-lg text-muted-foreground">
                taught me how to separate AI signal from noise - and implement solutions that actually work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-cyber-gradient hover:scale-105 text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 glow-pulse min-w-[250px] hologram"
              >
                Cut Through The Noise
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                className="glass border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-void-black px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 min-w-[250px]"
              >
                See The Signal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Services Section */}
      <section id="services" className="py-20 bg-space-gray/30 relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 gradient-text">
              Four Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical solutions that separate signal from noise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <div className="animate-on-scroll group">
              <div className="glass p-8 rounded-3xl border-l-4 border-neon-green hover:border-electric-blue transition-all duration-300 transform hover:-translate-y-2 hover:glow-pulse">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors float-rotate">
                  <Target className="h-8 w-8 text-neon-green group-hover:text-electric-blue transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-orbitron mb-4 gradient-text">
                  🎯 AI Learning & Adoption
                </h3>
                <p className="text-lg font-semibold text-plasma-pink mb-4">
                  Your team is intimidated and progress feels impossible
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cut through the overwhelm with practical AI training. No buzzwords, no theoretical frameworks - just actionable skills that work in your actual business environment.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.2s' }}>
              <div className="glass p-8 rounded-3xl border-l-4 border-electric-blue hover:border-cyber-purple transition-all duration-300 transform hover:-translate-y-2 hover:glow-pulse">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyber-purple/20 transition-colors float-rotate">
                  <Search className="h-8 w-8 text-electric-blue group-hover:text-cyber-purple transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-orbitron mb-4 gradient-text">
                  🔍 AI Solution Advisory
                </h3>
                <p className="text-lg font-semibold text-plasma-pink mb-4">
                  Vendor pitches sound the same and the stakes feel too high
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Navigate AI vendor selection without the expensive mistakes. Structured evaluation frameworks that account for your specific needs and risk tolerance.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.4s' }}>
              <div className="glass p-8 rounded-3xl border-l-4 border-quantum-orange hover:border-plasma-pink transition-all duration-300 transform hover:-translate-y-2 hover:glow-pulse">
                <div className="w-16 h-16 bg-quantum-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-plasma-pink/20 transition-colors float-rotate">
                  <Handshake className="h-8 w-8 text-quantum-orange group-hover:text-plasma-pink transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-orbitron mb-4 gradient-text">
                  🤝 AI-Ready BPO Partnerships
                </h3>
                <p className="text-lg font-semibold text-plasma-pink mb-4">
                  Your outsourcing partners don't understand AI integration
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bridge the gap between AI strategy and operational execution. 8+ years managing large-scale vendor relationships brings clarity to complex AI-enabled partnerships.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.6s' }}>
              <div className="glass p-8 rounded-3xl border-l-4 border-cyber-purple hover:border-neon-green transition-all duration-300 transform hover:-translate-y-2 hover:glow-pulse">
                <div className="w-16 h-16 bg-cyber-purple/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors float-rotate">
                  <Wrench className="h-8 w-8 text-cyber-purple group-hover:text-neon-green transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-orbitron mb-4 gradient-text">
                  🛠️ Custom AI Solutions
                </h3>
                <p className="text-lg font-semibold text-plasma-pink mb-4">
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
      <section id="approach" className="py-20 bg-void-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 gradient-text">
                Why This Approach Works
              </h2>
              <p className="text-2xl text-electric-blue font-semibold text-glow">
                "Operations experience meets AI implementation"
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="animate-on-scroll glass-strong p-8 rounded-3xl border border-neon-green/20 hologram">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-neon-green mt-1 flex-shrink-0 pulse-glow" />
                  <div>
                    <h3 className="text-xl font-bold font-orbitron mb-3 text-neon-green">Cut through the noise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      13 years in operations means I know what actually works versus what just sounds impressive
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll glass-strong p-8 rounded-3xl border border-electric-blue/20 hologram" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-electric-blue mt-1 flex-shrink-0 pulse-glow" />
                  <div>
                    <h3 className="text-xl font-bold font-orbitron mb-3 text-electric-blue">Manage the risk</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I've been part of major AI implementations and understand how to minimize brand and operational risks
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll glass-strong p-8 rounded-3xl border border-cyber-purple/20 hologram" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-8 w-8 text-cyber-purple mt-1 flex-shrink-0 pulse-glow" />
                  <div>
                    <h3 className="text-xl font-bold font-orbitron mb-3 text-cyber-purple">Full-spectrum support</h3>
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
      <section id="contact" className="py-20 bg-nebula-dark/50 text-foreground relative">
        <div className="absolute inset-0 bg-holographic opacity-20"></div>
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6">
                Ready to move from AI{' '}
                <span className="text-plasma-pink">paralysis</span>{' '}
                to <span className="text-neon-green">progress?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Whether you're drowning in options or worried about implementation risks - let's discuss how to make AI work for your specific situation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <div className="glass-strong p-8 rounded-3xl hologram">
                  <h3 className="text-2xl font-bold font-orbitron mb-6 gradient-text">
                    Stop drowning in AI noise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-neon-green rounded-full pulse-glow"></div>
                      <span>Strategy calls available within 48 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-electric-blue rounded-full pulse-glow"></div>
                      <span>Risk assessment and mitigation planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyber-purple rounded-full pulse-glow"></div>
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
                      className="glass border-electric-blue/30 text-foreground placeholder:text-muted-foreground focus:border-electric-blue focus:ring-electric-blue/20"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass border-electric-blue/30 text-foreground placeholder:text-muted-foreground focus:border-electric-blue focus:ring-electric-blue/20"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="glass border-electric-blue/30 text-foreground placeholder:text-muted-foreground focus:border-electric-blue focus:ring-electric-blue/20"
                  />
                  <Textarea
                    placeholder="Describe your AI challenge or paralysis point..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass border-electric-blue/30 text-foreground placeholder:text-muted-foreground focus:border-electric-blue focus:ring-electric-blue/20 min-h-[120px]"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-cyber-gradient hover:scale-105 text-white py-6 text-xl font-bold rounded-2xl transition-all duration-300 glow-pulse hologram"
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
      <footer className="bg-void-black text-muted-foreground py-8 border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-orbitron font-bold text-xl gradient-text mb-4 md:mb-0">
              ANARO<span className="text-electric-blue">LAB</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-electric-blue transition-colors hover:text-glow">LinkedIn</a>
              <a href="#" className="hover:text-neon-green transition-colors hover:text-glow">Email</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-electric-blue/20">
            <p>&copy; 2024 Roman Siepelmeyer. Cutting through AI noise since 2023.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
