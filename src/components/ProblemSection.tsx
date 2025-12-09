import React, { useState, useEffect, useRef } from 'react';
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
      shortLabel: 'Hype gap',
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
      shortLabel: 'Context fatigue',
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
      shortLabel: 'No time',
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
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stickyTriggerRef = useRef<HTMLDivElement>(null);
  const activeProblem = problems.find(p => p.id === activeId)!;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stickyTriggerRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const triggerRect = stickyTriggerRef.current.getBoundingClientRect();
      
      // Only apply sticky behavior on mobile (< 768px)
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Sticky when trigger passes top of viewport and section is still visible
        const shouldBeSticky = triggerRect.top <= 0 && sectionRect.bottom > 150;
        setIsSticky(shouldBeSticky);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="section-spacing py-8 md:py-16">
      <div className="anaro-section-bg">
        <div className="container-anaro py-8 md:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6 md:mb-12 animate-on-scroll">
              <span className="text-anaro-lime text-sm font-semibold tracking-widest uppercase mb-4 block">
                😓 The pain points
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
                Most teams know {' '}
                <span className="text-anaro-lime">AI matters</span>, but they're not getting{' '}
                <span className="underline decoration-anaro-lime decoration-4 underline-offset-4">the most</span> out of it.
              </h2>
            </div>

            {/* Sticky trigger point */}
            <div ref={stickyTriggerRef} className="h-0" />

            {/* Icon Selector Row - Sticky on mobile */}
            <div 
              className={cn(
                "flex justify-center gap-6 md:gap-12 mb-4 md:mb-8 py-2 md:py-4 transition-all duration-300 z-30",
                isSticky && "fixed top-[73px] left-0 right-0 bg-anaro-charcoal/95 backdrop-blur-sm border-b border-anaro-charcoal-lighter shadow-lg"
              )}
              role="tablist"
              aria-label="Problem categories"
            >
              <div className={cn(
                "flex justify-center gap-6 md:gap-12",
                isSticky && "container-anaro"
              )}>
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
                        "flex flex-col items-center gap-2 md:gap-3 transition-all duration-300 cursor-pointer group",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-anaro-lime focus-visible:ring-offset-2 focus-visible:ring-offset-anaro-charcoal rounded-lg p-2"
                      )}
                    >
                      <div 
                        className={cn(
                          "w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300",
                          isActive 
                            ? "bg-anaro-lime scale-110 shadow-lg shadow-anaro-lime/30" 
                            : "bg-anaro-charcoal-lighter border-2 border-anaro-lime/30 opacity-60 group-hover:opacity-80 group-hover:border-anaro-lime/50"
                        )}
                      >
                        <Icon 
                          className={cn(
                            "h-7 w-7 md:h-10 md:w-10 transition-colors duration-300",
                            isActive ? "text-anaro-charcoal" : "text-anaro-lime"
                          )} 
                        />
                      </div>
                      <span 
                        className={cn(
                          "text-xs md:text-base font-medium transition-all duration-300 whitespace-nowrap",
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
            </div>

            {/* Spacer when sticky is active */}
            {isSticky && <div className="h-28 md:h-0" />}

            {/* Content Panel - Apple-inspired typography */}
            <div
              id="problem-content-panel"
              role="tabpanel"
              aria-labelledby={activeId}
              className="animate-on-scroll"
            >
              <div 
                key={activeId}
                className="anaro-card p-8 md:p-12 max-w-4xl mx-auto animate-fade-in"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 text-center tracking-tight">
                  {activeProblem.title}
                </h3>
                {/* 
                  Apple-inspired legibility:
                  - Pure white text for maximum contrast (WCAG AAA)
                  - Generous line-height (1.7) for comfortable reading
                  - Slight letter-spacing for improved tracking
                  - Larger font size (17px+ base)
                  - Ample vertical spacing between items
                  - Font smoothing via CSS
                */}
                <ul 
                  className="space-y-6"
                  style={{
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility'
                  }}
                >
                  {activeProblem.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-4 items-start">
                      <span 
                        className="text-anaro-lime flex-shrink-0 text-xl leading-none mt-1"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <p 
                        className="text-[17px] md:text-[19px] text-white/95 font-normal tracking-[0.01em]"
                        style={{ lineHeight: '1.65' }}
                      >
                        {point}
                      </p>
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
