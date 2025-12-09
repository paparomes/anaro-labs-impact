
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SocialProofSection from '@/components/SocialProofSection';
import VendorMatchingSection from '@/components/VendorMatchingSection';
import VendorMatchingSectionB from '@/components/VendorMatchingSectionB';
import VendorMatchingSectionC from '@/components/VendorMatchingSectionC';
import VendorMatchingSectionMerged from '@/components/VendorMatchingSectionMerged';
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
      
      <SocialProofSection />
      
      {/* Version A: Stacked numbered steps */}
      <div className="border-t-4 border-anaro-lime/50">
        <p className="text-center text-anaro-lime py-4 text-sm uppercase tracking-wide">Version A: Stacked numbered steps</p>
        <VendorMatchingSection />
      </div>
      
      {/* Version B: Two-column with sidebar */}
      <div className="border-t-4 border-anaro-lime/50">
        <p className="text-center text-anaro-lime py-4 text-sm uppercase tracking-wide">Version B: Two-column with sidebar</p>
        <VendorMatchingSectionB />
      </div>
      
      {/* Version C: Compact card grid */}
      <div className="border-t-4 border-anaro-lime/50">
        <p className="text-center text-anaro-lime py-4 text-sm uppercase tracking-wide">Version C: Compact card grid</p>
        <VendorMatchingSectionC />
      </div>
      
      {/* Version D: Merged - A's storytelling + C's structure */}
      <div className="border-t-4 border-anaro-lime/50">
        <p className="text-center text-anaro-lime py-4 text-sm uppercase tracking-wide">Version D: Merged (A's storytelling + C's structure)</p>
        <VendorMatchingSectionMerged />
      </div>
      
      <ConversionSection />
      
      <Footer />
    </div>
  );
};

export default Index;
