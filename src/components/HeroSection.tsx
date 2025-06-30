
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="anaro-hero-bg absolute inset-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 animate-on-scroll py-8 md:py-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-anaro-text-primary leading-tight cinematic-text">
            AI training tailored to {' '}
            <span className="text-anaro-lime">your needs</span>
          </h1>
          
          <div className="anaro-accent-line w-32 mx-auto"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-anaro-text-secondary font-medium max-w-4xl mx-auto leading-relaxed">
            I help business operations teams get the very best out of GenAI
          </h2>

          {/* Photo with natural fade using CSS mask - responsive padding */}
          <div className="relative w-full md:px-[10%]">
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
