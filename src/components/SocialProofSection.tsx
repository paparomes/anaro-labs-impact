
import React from 'react';

const SocialProofSection = () => {
  return (
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
  );
};

export default SocialProofSection;
