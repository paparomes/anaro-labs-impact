
import React from 'react';
import { Puzzle, Clock, Mountain } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Puzzle,
      title: "The knowing-doing gap is real",
      description: "Your teams intellectually understand AI's importance. They've read the articles, watched the demos. But translating that into Monday morning workflows? That's where they get stuck. Knowledge without application is frustrating.",
      delay: '0s'
    },
    {
      icon: Clock,
      title: "The AI FOMO is exhausting",
      description: "Every LinkedIn post, every newsletter, every meeting - someone's talking about AI transformation. The guilt of not keeping up is real. Let's work with their reality, not against it.",
      delay: '0.1s'
    },
    {
      icon: Mountain,
      title: "Pressure without a path drives anxiety",
      description: "Leadership wants AI adoption. Social feeds scream 'adapt or fall behind.' Meanwhile, your teams are quietly using personal ChatGPT accounts because it's easier than navigating corporate tools. Let's clear the fog and create a real path forward.",
      delay: '0.2s'
    }
  ];

  return (
    <section id="problem" className="section-spacing py-16">
      <div className="anaro-section-bg">
        <div className="container-anaro py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                Most teams know {' '}
                <span className="text-anaro-lime">AI matters</span>.
                Here's what's actually holding them back.
              </h2>
              <div className="anaro-accent-line w-32 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div key={index} className="animate-on-scroll text-center" style={{ animationDelay: problem.delay }}>
                  <div className="anaro-card p-8 h-full hover:border-anaro-lime/50 group">
                    <div className="w-20 h-20 bg-anaro-lime rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-lime-pulse">
                      <problem.icon className="h-10 w-10 text-anaro-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold text-anaro-text-primary mb-4">{problem.title}</h3>
                    <p className="text-anaro-text-secondary leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
