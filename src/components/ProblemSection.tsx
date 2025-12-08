
import React from 'react';
import { Puzzle, Clock, Mountain } from 'lucide-react';

// Copy reference: copy/website/problem-v1.md
const ProblemSection = () => {
  // Aligned with: copy/website/problem-v1.md
  const problems = [
    {
      icon: Puzzle,
      title: "Early experiences underwhelm vs hype",
      points: [
        'Many have tried LLMs and been underwhelmed vs the "10x" hype.',
        'Early experiments feel incremental, not transformational, so the story doesn\'t match the marketing.',
        'That creates quiet skepticism and a sense that "this is oversold" or "it doesn\'t really change my work yet."'
      ],
      delay: '0s'
    },
    {
      icon: Clock,
      title: "Context-reset fatigue makes serious use feel too costly",
      points: [
        'To do anything meaningful, people have to rebuild context every time.',
        'They re-explain role, domain, constraints, examples, or scroll through messy old threads trying to find it again.',
        'That repeated setup is cognitively tiring and feels like wasted effort, so deeper, ROI-driving workflows never become habit.'
      ],
      delay: '0.1s'
    },
    {
      icon: Mountain,
      title: "No time or space to build intuition with a non-deterministic tool",
      points: [
        'Ops people already run 40–60+ hour weeks in constant execution mode.',
        'Real GenAI skill comes from intuition-building with a non-deterministic tool: trying prompts, comparing outputs, tuning instructions.',
        'That exploration always loses to urgent work, so "trying to keep up" feels stressful rather than empowering.',
        'Self-guided, off-the-shelf training is often gimmicky or generic, so even when teams invest, it rarely changes day-to-day behavior.'
      ],
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
                <span className="text-anaro-lime">AI matters</span>, but they're not getting the most out of it.
              </h2>
              <p className="text-lg text-anaro-text-secondary max-w-3xl mx-auto mb-6">
                Tooling and policy are in place. Even so, adoption often stalls and feels underwhelming vs the '10x' hype.
              </p>
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
                    <ul className="text-anaro-text-secondary leading-relaxed space-y-2 text-left list-disc list-inside">
                      {problem.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
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
