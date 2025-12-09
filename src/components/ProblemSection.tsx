import React, { useState } from 'react';
import { Puzzle, Clock, Mountain, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Copy reference: copy/website/problem-v1.md
interface Problem {
  id: string;
  icon: LucideIcon;
  shortLabel: string;
  title: string;
  points: string[];
}

const ProblemSection = () => {
  // Aligned with: copy/website/problem-v1.md
  const problems: Problem[] = [
    {
      id: 'hype-gap',
      icon: Puzzle,
      shortLabel: 'Hype Gap',
      title: "Early experiences underwhelm vs hype",
      points: [
        'Many have tried LLMs and been underwhelmed vs the "10x" hype.',
        'Early experiments feel incremental, not transformational, so the story doesn\'t match the marketing.',
        'That creates quiet skepticism and a sense that "this is oversold" or "it doesn\'t really change my work yet."'
      ]
    },
    {
      id: 'context-fatigue',
      icon: Clock,
      shortLabel: 'Context Fatigue',
      title: "Context-reset fatigue makes serious use feel too costly",
      points: [
        'To do anything meaningful, people have to rebuild context every time.',
        'They re-explain role, domain, constraints, examples, or scroll through messy old threads trying to find it again.',
        'That repeated setup is cognitively tiring and feels like wasted effort, so deeper, ROI-driving workflows never become habit.'
      ]
    },
    {
      id: 'no-time',
      icon: Mountain,
      shortLabel: 'No Time',
      title: "No time or space to build intuition with a non-deterministic tool",
      points: [
        'Ops people already run 40–60+ hour weeks in constant execution mode.',
        'Real GenAI skill comes from intuition-building with a non-deterministic tool: trying prompts, comparing outputs, tuning instructions.',
        'That exploration always loses to urgent work, so "trying to keep up" feels stressful rather than empowering.',
        'Self-guided, off-the-shelf training is often gimmicky or generic, so even when teams invest, it rarely changes day-to-day behavior.'
      ]
    }
  ];

  const [activeId, setActiveId] = useState<string>(problems[0].id);
  const activeProblem = problems.find(p => p.id === activeId)!;

  return (
    <section id="problem" className="section-spacing py-16">
      <div className="anaro-section-bg">
        <div className="container-anaro py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                Most teams know {' '}
                <span className="text-anaro-lime">AI matters</span>, but they're not getting the most out of it.
              </h2>
              <p className="text-lg text-anaro-text-secondary max-w-3xl mx-auto mb-6">
                Tooling and policy are in place. Even so, adoption often stalls and feels underwhelming vs the '10x' hype.
              </p>
              <div className="anaro-accent-line w-32 mx-auto"></div>
            </div>

            {/* Icon Selector Row */}
            <div 
              className="flex justify-center gap-6 md:gap-12 mb-8"
              role="tablist"
              aria-label="Problem categories"
            >
              {problems.map((problem) => {
                const isActive = problem.id === activeId;
                const Icon = problem.icon;
                
                return (
                  <button
                    key={problem.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="problem-content-panel"
                    onClick={() => setActiveId(problem.id)}
                    className={cn(
                      "flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer group",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-anaro-lime focus-visible:ring-offset-2 focus-visible:ring-offset-anaro-charcoal rounded-lg p-2"
                    )}
                  >
                    <div 
                      className={cn(
                        "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300",
                        isActive 
                          ? "bg-anaro-lime scale-110 shadow-lg shadow-anaro-lime/30" 
                          : "bg-anaro-charcoal-lighter border-2 border-anaro-lime/30 opacity-60 group-hover:opacity-80 group-hover:border-anaro-lime/50"
                      )}
                    >
                      <Icon 
                        className={cn(
                          "h-8 w-8 md:h-10 md:w-10 transition-colors duration-300",
                          isActive ? "text-anaro-charcoal" : "text-anaro-lime"
                        )} 
                      />
                    </div>
                    <span 
                      className={cn(
                        "text-sm md:text-base font-medium transition-all duration-300",
                        isActive 
                          ? "text-anaro-lime" 
                          : "text-anaro-text-secondary opacity-60 group-hover:opacity-80"
                      )}
                    >
                      {problem.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Content Panel */}
            <div
              id="problem-content-panel"
              role="tabpanel"
              aria-labelledby={activeId}
              className="animate-on-scroll"
            >
              <div 
                key={activeId}
                className="anaro-card p-8 md:p-10 max-w-4xl mx-auto animate-fade-in"
              >
                <h3 className="text-xl md:text-2xl font-bold text-anaro-text-primary mb-6 text-center">
                  {activeProblem.title}
                </h3>
                <ul className="text-anaro-text-secondary leading-relaxed space-y-4 text-left">
                  {activeProblem.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-3">
                      <span className="text-anaro-lime mt-1.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
