
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import SocialProofSection from '@/components/SocialProofSection';
import ConversionSection from '@/components/ConversionSection';
import Footer from '@/components/Footer';

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
      
      <SocialProofSection />
      
      <ConversionSection />
      
      <Footer />
    </div>
  );
};

export default Index;
