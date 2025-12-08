
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const ConversionSection = () => {
  return (
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
              Book your 30-minute discovery call
            </p>

            {/* Main CTA */}
            <div className="mb-8">
              <Button 
                onClick={() => window.open('https://calendar.app.google/hnTrn5nVSXjcpMbB8', '_blank')} 
                className="anaro-button-primary text-xl px-12 py-6 lime-glow hover:scale-[1.02] transform transition-all" 
                size="lg"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Discovery Call
              </Button>
            </div>

            {/* Simple email alternative */}
            <p className="text-anaro-text-secondary mb-4">
              Prefer email? Reach out at{' '}
              <a
                href="mailto:roman@anarolabs.com"
                className="underline text-anaro-lime hover:text-anaro-lime/80"
              >
                roman@anarolabs.com
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
