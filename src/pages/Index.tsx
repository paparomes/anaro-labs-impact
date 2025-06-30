import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, ArrowDown, Puzzle, Clock, Mountain, Video, Users, TrendingUp, CheckCircle, Calendar, Shield, Network, Target } from 'lucide-react';
import ROICalculator from '@/components/ROICalculator';
import ProcessTimeline from '@/components/ProcessTimeline';

const Index = () => {
  const {
    toast
  } = useToast();
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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
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
  return <div className="min-h-screen bg-anaro-charcoal text-anaro-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-anaro-charcoal/95 backdrop-blur-md border-b border-anaro-charcoal-lighter z-50">
        <div className="container-anaro">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/26559323-0f01-464c-b33d-cb23837b1598.png" alt="Roman Siepelmeyer Logo" className="h-8 w-auto" />
            </div>
            <Button onClick={() => scrollToSection('conversion')} className="anaro-button-primary" size="sm">
              Book Discovery Call
            </Button>
          </div>
        </div>
      </nav>

      {/* Section 1: Hook (Above the Fold) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background */}
        <div className="anaro-hero-bg absolute inset-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-8 max-w-6xl mx-auto">
          <div className="space-y-8 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-anaro-text-primary leading-tight cinematic-text">
              AI training tailored to {' '}
              <span className="text-anaro-lime">your needs</span>
            </h1>
            
            <div className="anaro-accent-line w-32 mx-auto"></div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-anaro-text-secondary font-medium max-w-4xl mx-auto leading-relaxed">I help business operations teams get the very best out of GenAI</h2>

            {/* Photo with natural fade using CSS mask - increased size by 1.35x */}
            <div className="relative mx-auto mt-12" style={{ maxWidth: '27rem' }}>
              <img 
                src="/lovable-uploads/a1b486e7-9dd3-4277-800c-8d99c2949985.png" 
                alt="Roman Siepelmeyer" 
                className="w-full h-auto rounded-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem Agitation */}
      <section id="problem" className="section-spacing">
        <div className="anaro-section-bg">
          <div className="container-anaro">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                  Address the three main barriers holding{' '}
                  <span className="text-anaro-lime">adoption back</span>
                </h2>
                <div className="anaro-accent-line w-32 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="animate-on-scroll text-center">
                  <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                    <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-lime-pulse">
                      <Puzzle className="h-10 w-10 text-anaro-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Most AI training is not built for purpose</h3>
                    <p className="text-anaro-text-secondary leading-relaxed">Scientific papers, software development, GenAI gimmicks... Your teams need an unlock, not more noise</p>
                  </div>
                </div>

                <div className="animate-on-scroll text-center" style={{
                animationDelay: '0.1s'
              }}>
                  <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                    <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-lime-pulse">
                      <Clock className="h-10 w-10 text-anaro-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold text-anaro-text-primary mb-4">GenAI is a tool, not their core function </h3>
                    <p className="text-anaro-text-secondary leading-relaxed">Help your teams do what they do best - executing on their functional expertise. Invest into a program that enhances their abilities</p>
                  </div>
                </div>

                <div className="animate-on-scroll text-center" style={{
                animationDelay: '0.2s'
              }}>
                  <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                    <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-lime-pulse">
                      <Mountain className="h-10 w-10 text-anaro-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Pressure without a path drives anxiety</h3>
                    <p className="text-anaro-text-secondary leading-relaxed">Give your teams agency through tangible behaviour change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution Positioning */}
      <section className="section-spacing">
        <div className="container-anaro">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                Your team's expertise +{' '}
                <span className="text-anaro-lime">My GenAI guidance</span>{' '}
                = Measurable results
              </h2>
              <div className="anaro-accent-line w-32 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-on-scroll">
                <div className="anaro-card p-8 h-full hover:border-anaro-lime/50">
                  <h3 className="text-xl font-bold text-anaro-lime mb-4">Business ops background</h3>
                  <p className="text-lg text-anaro-text-primary mb-4 font-medium">
                    "I've spent 13 years in operational roles - I understand your team's reality"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    Former operations lead at GetYourGuide, Delivery, Teleperformance
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll" style={{
              animationDelay: '0.1s'
            }}>
                <div className="anaro-card p-8 h-full hover:border-anaro-lime/50">
                  <h3 className="text-xl font-bold text-anaro-lime mb-4">GenAI Expertise</h3>
                  <p className="text-lg text-anaro-text-primary mb-4 font-medium">
                    "I focus on workflow integration, not generic training"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    Specialized in sustainable behavior change for technical adoption
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll" style={{
              animationDelay: '0.2s'
            }}>
                <div className="anaro-card p-8 h-full hover:border-anaro-lime/50">
                  <h3 className="text-xl font-bold text-anaro-lime mb-4">Proven Method</h3>
                  <p className="text-lg text-anaro-text-primary mb-4 font-medium">
                    "Workshop-based approach with pre/post measurement"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    Because what gets measured gets improved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Social Proof */}
      <section className="section-spacing anaro-section-bg">
        <div className="container-anaro">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-anaro-text-primary mb-12">
              The workshop used and loved by teams at{' '}
              <span className="text-anaro-lime">Netflix</span>
            </h2>

            {/* Netflix testimonial */}
            <div className="bg-anaro-charcoal-light p-8 md:p-12 rounded-3xl border border-anaro-lime/20 mb-12">
              <div className="text-6xl md:text-8xl text-anaro-lime mb-6 font-bold">Netflix</div>
              <blockquote className="text-xl md:text-2xl text-anaro-text-primary italic mb-6">
                "Roman's workshop transformed how our operations team approaches GenAI - from anxiety to everyday advantage"
              </blockquote>
            </div>

            {/* Additional company logos */}
            <div className="mb-8">
              <p className="text-anaro-text-secondary mb-6">Trusted by operations teams at leading companies</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-anaro-text-muted">GetYourGuide</div>
                <div className="text-2xl font-bold text-anaro-text-muted">Delivery</div>
                <div className="text-2xl font-bold text-anaro-text-muted">Teleperformance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive ROI Calculator */}
      <section className="section-spacing">
        <div className="container-anaro">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
              Calculate your team's{' '}
              <span className="text-anaro-lime">productivity opportunity</span>
            </h2>
            <div className="anaro-accent-line w-32 mx-auto mb-6"></div>
            <p className="text-xl text-anaro-text-secondary">
              See the potential ROI of AI fluency training for your operations team
            </p>
          </div>

          <div className="animate-on-scroll">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Section 6: Process Transparency */}
      <section className="section-spacing anaro-section-bg">
        <div className="container-anaro">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
              How we transform AI anxiety into{' '}
              <span className="text-anaro-lime">advantage</span>
            </h2>
            <div className="anaro-accent-line w-32 mx-auto"></div>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Section 7: Risk Reversal */}
      <section className="section-spacing">
        <div className="container-anaro">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                No pressure, <span className="text-anaro-lime">mutual evaluation</span>
              </h2>
              <div className="anaro-accent-line w-32 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-on-scroll">
                <div className="anaro-card p-8 h-full text-center hover:border-anaro-lime/50">
                  <Shield className="h-12 w-12 text-anaro-lime mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Honest Assessment</h3>
                  <p className="text-anaro-text-secondary mb-4">
                    "I'll tell you if this isn't right for your team"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    Better to know upfront than waste everyone's time
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll" style={{
              animationDelay: '0.1s'
            }}>
                <div className="anaro-card p-8 h-full text-center hover:border-anaro-lime/50">
                  <Network className="h-12 w-12 text-anaro-lime mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Network Referral</h3>
                  <p className="text-anaro-text-secondary mb-4">
                    "If I'm not the right fit, I'll connect you with someone who is"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    My network includes specialists in every business function
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll" style={{
              animationDelay: '0.2s'
            }}>
                <div className="anaro-card p-8 h-full text-center hover:border-anaro-lime/50">
                  <Target className="h-12 w-12 text-anaro-lime mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-anaro-text-primary mb-4">Qualified Prospects Only</h3>
                  <p className="text-anaro-text-secondary mb-4">
                    "Discovery calls are for teams ready to invest in change"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    Investment range: $3,000 - $20,000 (we'll discuss if it fits)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Conversion (Calendly Integration) */}
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
                <Button onClick={() => window.open('https://calendly.com', '_blank')} className="anaro-button-primary text-xl px-12 py-6 lime-glow hover:scale-[1.02] transform transition-all" size="lg">
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
                    <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" required />
                    <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" required />
                  </div>
                  <Input placeholder="Company" value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="h-12 bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" />
                  <Textarea placeholder="Tell me about your team's AI challenges..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="min-h-[120px] bg-anaro-charcoal-light border-anaro-charcoal-lighter text-anaro-text-primary placeholder:text-anaro-text-muted focus:border-anaro-lime focus:ring-anaro-lime/20" required />
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

      {/* Footer */}
      <footer className="bg-anaro-charcoal border-t border-anaro-charcoal-lighter py-12">
        <div className="container-anaro">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/lovable-uploads/26559323-0f01-464c-b33d-cb23837b1598.png" alt="Roman Siepelmeyer Logo" className="h-6 w-auto" />
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-anaro-text-muted hover:text-anaro-lime transition-colors">LinkedIn</a>
              <a href="#" className="text-anaro-text-muted hover:text-anaro-lime transition-colors">Email</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-anaro-charcoal-lighter">
            <p className="text-anaro-text-muted">&copy; 2024 Roman Siepelmeyer. Transforming AI anxiety into advantage.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
