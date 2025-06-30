
import React from 'react';

const SolutionSection = () => {
  const solutions = [
    {
      title: "Business ops background",
      quote: "I've spent 13 years in operational roles - I understand your team's reality",
      detail: "Former operations lead at GetYourGuide, Delivery, Teleperformance",
      delay: '0s'
    },
    {
      title: "GenAI Expertise",
      quote: "I focus on workflow integration, not generic training",
      detail: "Specialized in sustainable behavior change for technical adoption",
      delay: '0.1s'
    },
    {
      title: "Proven Method",
      quote: "Workshop-based approach with pre/post measurement",
      detail: "Because what gets measured gets improved",
      delay: '0.2s'
    }
  ];

  return (
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
            {solutions.map((solution, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: solution.delay }}>
                <div className="anaro-card p-8 h-full hover:border-anaro-lime/50">
                  <h3 className="text-xl font-bold text-anaro-lime mb-4">{solution.title}</h3>
                  <p className="text-lg text-anaro-text-primary mb-4 font-medium">
                    "{solution.quote}"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    {solution.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
