
import React from 'react';

// Copy reference: copy/website/hero-v1.md
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="anaro-hero-bg absolute inset-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto">
        <div className="animate-on-scroll py-2 md:py-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-anaro-text-primary leading-tight cinematic-text mb-2">
            AI training tailored to {' '}
            <span className="text-anaro-lime">your needs</span>
          </h1>
          
          <div className="anaro-accent-line w-32 mx-auto mb-2"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-anaro-text-secondary font-medium max-w-4xl mx-auto leading-relaxed mb-2">
            I help business operations teams get the very best out of GenAI
          </h2>

          {/* Photo with natural fade using CSS mask - no bottom margin */}
          <div className="relative w-full mb-0">
            <div className="w-full flex justify-center">
              <img 
                src="/lovable-uploads/a1b486e7-9dd3-4277-800c-8d99c2949985.png" 
                alt="Roman Siepelmeyer" 
                className="w-full h-auto object-cover" 
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
