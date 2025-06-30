
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import RiskReversalSection from '@/components/RiskReversalSection';
import ConversionSection from '@/components/ConversionSection';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import ProcessTimeline from '@/components/ProcessTimeline';

const Index = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-anaro-charcoal text-anaro-text-primary">
      <Navigation onBookCallClick={() => scrollToSection('conversion')} />
      
      <HeroSection />
      
      <ProblemSection />
      
      <SolutionSection />
      
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
      
      <RiskReversalSection />
      
      <ConversionSection />
      
      <Footer />
    </div>
  );
};

export default Index;
