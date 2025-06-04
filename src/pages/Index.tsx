
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, ArrowRight, CheckCircle, Star, Users, TrendingUp, Globe } from 'lucide-react';

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
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
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

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, [end, duration, isVisible]);

    return (
      <span id={`counter-${end}`} className="text-4xl md:text-5xl font-bold font-poppins text-soft-coral">
        {count}{suffix}
      </span>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
      className: "bg-sage-green text-white"
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-warm-white text-charcoal font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-md z-50 border-b border-light-gray">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-poppins font-bold text-xl text-charcoal">
              Anaro Labs
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-medium-gray hover:text-soft-coral transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('results')} className="text-medium-gray hover:text-soft-coral transition-colors">
                Results
              </button>
              <button onClick={() => scrollToSection('about')} className="text-medium-gray hover:text-soft-coral transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-medium-gray hover:text-soft-coral transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage-green/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-lavender/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-peach/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-soft-coral/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
              I help ambitious companies{' '}
              <span className="text-soft-coral">win with AI</span>{' '}
              - without the hype or vendor lock-in
            </h1>
            <p className="text-xl md:text-2xl text-medium-gray mb-8 leading-relaxed">
              Leveraging 10+ years of scaling operations at Netflix, GetYourGuide, and Delivery Hero 
              to make AI actually work for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-soft-coral hover:bg-soft-coral/90 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-lavender text-lavender hover:bg-lavender hover:text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Download AI Guide
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('services')}>
              <ChevronDown className="h-8 w-8 text-medium-gray" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-light-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-sage-green/5 to-transparent transform -skew-y-1"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Three Core Services
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Practical solutions backed by enterprise-scale experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="animate-on-scroll group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-sage-green">
                <div className="w-16 h-16 bg-sage-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-green/20 transition-colors">
                  <Users className="h-8 w-8 text-sage-green" />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-4 text-charcoal">
                  AI Learning Path
                </h3>
                <p className="text-lg font-semibold text-sage-green mb-4">
                  "Making AI Work"
                </p>
                <p className="text-medium-gray leading-relaxed">
                  Transform your workforce from AI-curious to AI-capable with practical, 
                  business-focused training that delivers measurable results.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-lavender">
                <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-lavender/20 transition-colors">
                  <Star className="h-8 w-8 text-lavender" />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-4 text-charcoal">
                  AI Purchasing Advisory
                </h3>
                <p className="text-lg font-semibold text-lavender mb-4">
                  Cut through vendor noise
                </p>
                <p className="text-medium-gray leading-relaxed">
                  Battle-tested evaluation frameworks from enterprise-scale implementations. 
                  Make confident AI investment decisions backed by real experience.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="animate-on-scroll group" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-peach">
                <div className="w-16 h-16 bg-peach/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-peach/20 transition-colors">
                  <Globe className="h-8 w-8 text-peach" />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-4 text-charcoal">
                  BPO Matchmaking
                </h3>
                <p className="text-lg font-semibold text-peach mb-4">
                  Your unfair advantage
                </p>
                <p className="text-medium-gray leading-relaxed">
                  8 years managing 800-1100 FTE across multiple vendors. 
                  Make outsourcing decisions with confidence and insider knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Real outcomes from enterprise-scale implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Netflix */}
            <div className="animate-on-scroll bg-gradient-to-br from-soft-coral/5 to-soft-coral/10 p-8 rounded-2xl">
              <div className="text-center">
                <div className="mb-4">
                  <AnimatedCounter end={40} suffix="%" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2 text-charcoal">Netflix</h3>
                <p className="text-medium-gray">
                  Cost reduction while scaling 800-1100 FTE operations
                </p>
              </div>
            </div>

            {/* GetYourGuide */}
            <div className="animate-on-scroll bg-gradient-to-br from-sage-green/5 to-sage-green/10 p-8 rounded-2xl" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="mb-4">
                  <AnimatedCounter end={85} suffix="%" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2 text-charcoal">GetYourGuide</h3>
                <p className="text-medium-gray">
                  Forecast accuracy in hyper-growth environment
                </p>
              </div>
            </div>

            {/* Scale Achievement */}
            <div className="animate-on-scroll bg-gradient-to-br from-lavender/5 to-lavender/10 p-8 rounded-2xl" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold font-poppins text-soft-coral">50→500+</span>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2 text-charcoal">Scale</h3>
                <p className="text-medium-gray">
                  FTE growth in 6 months at GetYourGuide
                </p>
              </div>
            </div>

            {/* Delivery Hero */}
            <div className="animate-on-scroll bg-gradient-to-br from-peach/5 to-peach/10 p-8 rounded-2xl md:col-span-2">
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold font-poppins text-soft-coral">2x</span>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2 text-charcoal">Delivery Hero</h3>
                <p className="text-medium-gray">
                  Retention improvement, built multilingual operations from scratch
                </p>
              </div>
            </div>

            {/* Global Experience */}
            <div className="animate-on-scroll bg-gradient-to-br from-medium-gray/5 to-medium-gray/10 p-8 rounded-2xl">
              <div className="text-center">
                <div className="mb-4">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2 text-charcoal">Years</h3>
                <p className="text-medium-gray">
                  Enterprise operations experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section id="about" className="py-20 bg-light-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-lavender/5 to-transparent transform skew-y-1"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Why Different
              </h2>
              <p className="text-2xl font-semibold text-soft-coral mb-8">
                "Most consultants theorize. I've lived it."
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-sage-green mt-1 flex-shrink-0" />
                  <p className="text-lg text-medium-gray">
                    <strong className="text-charcoal">Hands-on experience:</strong> Managed 800-1100 FTE operations across Netflix, GetYourGuide, and Delivery Hero
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-sage-green mt-1 flex-shrink-0" />
                  <p className="text-lg text-medium-gray">
                    <strong className="text-charcoal">Vendor-agnostic approach:</strong> Real implementation experience, not theoretical frameworks
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-sage-green mt-1 flex-shrink-0" />
                  <p className="text-lg text-medium-gray">
                    <strong className="text-charcoal">Business outcomes focus:</strong> Technology serves business goals, not the other way around
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll relative" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-soft-coral/20 to-peach/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-sage-green/20 to-lavender/20 rounded-full"></div>
                <div className="relative z-10">
                  <TrendingUp className="h-16 w-16 text-soft-coral mb-6" />
                  <h3 className="text-2xl font-bold font-poppins mb-4 text-charcoal">
                    Enterprise-Scale Impact
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    From startup chaos to enterprise efficiency. I've built, scaled, and optimized 
                    operations that directly impact millions of customers and thousands of employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Additional Services */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Speaking & Advisory
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Available for keynotes, workshops, and strategic advisory beyond core services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-on-scroll bg-light-gray p-6 rounded-xl border-l-4 border-soft-coral">
              <h3 className="font-bold font-poppins text-charcoal mb-2">AI Adoption Strategy</h3>
              <p className="text-medium-gray text-sm">Practical frameworks for enterprise AI implementation</p>
            </div>
            <div className="animate-on-scroll bg-light-gray p-6 rounded-xl border-l-4 border-sage-green" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-bold font-poppins text-charcoal mb-2">BPO Optimization</h3>
              <p className="text-medium-gray text-sm">Maximize outsourcing ROI with proven strategies</p>
            </div>
            <div className="animate-on-scroll bg-light-gray p-6 rounded-xl border-l-4 border-lavender" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold font-poppins text-charcoal mb-2">Scaling Operations</h3>
              <p className="text-medium-gray text-sm">From 50 to 500+ FTE without losing quality</p>
            </div>
            <div className="animate-on-scroll bg-light-gray p-6 rounded-xl border-l-4 border-peach" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-bold font-poppins text-charcoal mb-2">Vendor Evaluation</h3>
              <p className="text-medium-gray text-sm">Battle-tested frameworks for technology decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-charcoal text-warm-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-soft-coral/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-sage-green/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Let's Talk
              </h2>
              <p className="text-xl text-warm-white/80">
                Based in Amsterdam, serving clients globally
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold font-poppins mb-6">Ready to make AI work for your business?</h3>
                <p className="text-warm-white/80 mb-8 leading-relaxed">
                  Whether you're looking to implement AI, optimize operations, or make better vendor decisions, 
                  let's discuss how my experience can help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-soft-coral rounded-full"></div>
                    <span>Strategy calls available within 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sage-green rounded-full"></div>
                    <span>Custom solutions for unique challenges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-lavender rounded-full"></div>
                    <span>Global remote and on-site availability</span>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/60"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/60"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/60"
                  />
                  <Textarea
                    placeholder="Tell me about your AI or operations challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/60 min-h-[120px]"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-soft-coral hover:bg-soft-coral/90 text-white py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-warm-white/60 py-8 border-t border-warm-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-poppins font-bold text-xl text-warm-white mb-4 md:mb-0">
              Anaro Labs
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-soft-coral transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-soft-coral transition-colors">Email</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-warm-white/10">
            <p>&copy; 2024 Anaro Labs. Making AI work for ambitious companies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
