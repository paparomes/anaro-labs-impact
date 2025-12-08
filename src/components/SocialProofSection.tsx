import React from 'react';
import dekyiPortrait from '@/assets/dekyi-portrait.jpeg';

// Copy reference: copy/website/social-proof-v1.md
const SocialProofSection = () => {
  return (
    <section className="section-spacing anaro-section-bg">
      <div className="container-anaro">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-anaro-text-primary mb-4">
            What leaders say
          </h2>
          <div className="anaro-accent-line w-32 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="anaro-card p-8 md:p-10 flex flex-col md:flex-row items-stretch gap-8 md:gap-10">
            {/* Portrait + meta */}
            <div className="md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 bg-anaro-charcoal-lighter">
              <img
                  src={dekyiPortrait}
                  alt="Dekyi Borsma portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-anaro-text-primary">Dekyi Borsma</p>
              <p className="text-sm text-anaro-text-secondary">Director of Customer Service EMEA</p>
              <p className="text-sm text-anaro-text-muted mt-1">Netflix</p>
            </div>

            {/* Quote */}
            <div className="md:w-3/5 flex items-center">
              <blockquote className="text-lg md:text-xl text-anaro-text-primary leading-relaxed">
                "He was pivotal in helping our cross functional team in EMEA on the road towards
                understanding the fundamentals of AI and highlighting the broad and various
                opportunities we have to very tactically incorporate AI in our workstreams to
                optimize our output in a variety of ways — going beyond just automation and leaning
                into creative ways to empower our teams and strengthen our impact. Can't recommend
                him highly enough."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
