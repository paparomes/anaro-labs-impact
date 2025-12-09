import React, { useState } from 'react';
import { Compass, Users, UserCheck, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Solution {
  id: number;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  areas: { heading: string; detail: string }[];
}

const SolutionSection = () => {
  const [activeId, setActiveId] = useState(0);

  const solutions: Solution[] = [
    {
      id: 0,
      icon: Compass,
      label: "Strategic advisory",
      title: "Strategic advisory on GenAI adoption",
      description: "Comprehensive guidance on embedding AI behaviours across your entire organisation.",
      areas: [
        {
          heading: "Hiring",
          detail: "Incorporate AI behaviours and skills into job descriptions and assessments"
        },
        {
          heading: "Onboarding",
          detail: "Elevate current onboarding with AI booster training and mandatory base-level training"
        },
        {
          heading: "Performance",
          detail: "Incorporate AI into impact profiles and performance frameworks"
        },
        {
          heading: "Department transformations",
          detail: "Partner with People teams on change management, leadership support, org design, and upskilling"
        },
        {
          heading: "Adoption",
          detail: "Training, workshops, and resources on mindset, practical skills, prompting, workflows, and coaching"
        }
      ]
    },
    {
      id: 1,
      icon: Users,
      label: "Group workshops",
      title: "Team-specific group workshops",
      description: "Tailored sessions for business operations teams that move the needle on adoption.",
      areas: [
        {
          heading: "Tailored content",
          detail: "Designed specifically for your team's tools, workflows, and pain points"
        },
        {
          heading: "Target teams",
          detail: "FP&A, Customer Service, Business Operations, and other operational functions"
        },
        {
          heading: "Engaging format",
          detail: "Interactive workshops that drive real behavioural change, not just awareness"
        },
        {
          heading: "Measurable impact",
          detail: "Pre and post assessment to track genuine adoption improvement"
        }
      ]
    },
    {
      id: 2,
      icon: UserCheck,
      label: "1:1 collaboration",
      title: "1:1 project-based collaboration",
      description: "Deep-dive coaching focused on your specific use case—where the real value is.",
      areas: [
        {
          heading: "Specific use cases",
          detail: "Focus on a concrete project or business need for your role"
        },
        {
          heading: "Multi-session format",
          detail: "Build, experiment, and optimise solutions over several sessions"
        },
        {
          heading: "Coaching approach",
          detail: "Work together to solve your individual pain point with AI"
        },
        {
          heading: "Lasting results",
          detail: "Walk away with workflows you'll actually use, not generic knowledge"
        }
      ]
    }
  ];

  const activeSolution = solutions.find(s => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="section-spacing bg-anaro-charcoal-light/30">
      <div className="container-anaro">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <span className="text-anaro-lime text-sm font-semibold tracking-widest uppercase mb-4 block">
              🌟 The Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Three ways to{' '}
              <span className="text-anaro-lime">accelerate adoption</span>
            </h2>
            <div className="anaro-accent-line w-32 mx-auto"></div>
          </div>

          {/* Icon Selector Row - Compact circular style like ProblemSection */}
          <div 
            className="flex justify-center gap-6 md:gap-12 mb-8 py-4"
            role="tablist"
            aria-label="Solution approaches"
          >
            {solutions.map((solution) => {
              const isActive = solution.id === activeId;
              const Icon = solution.icon;
              
              return (
                <button
                  key={solution.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(solution.id)}
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
                    {solution.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div 
            key={activeId}
            className="anaro-card p-8 md:p-12 max-w-4xl mx-auto animate-fade-in"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center tracking-tight">
              {activeSolution.title}
            </h3>
            <p className="text-anaro-text-muted text-center mb-8 text-lg">
              {activeSolution.description}
            </p>
            
            <ul 
              className="space-y-5"
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility'
              }}
            >
              {activeSolution.areas.map((area, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span 
                    className="text-anaro-lime flex-shrink-0 text-xl leading-none mt-1"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <div>
                    <span className="text-anaro-lime font-semibold text-[17px] md:text-[18px]">
                      {area.heading}:
                    </span>{' '}
                    <span 
                      className="text-[17px] md:text-[19px] text-white/95 font-normal tracking-[0.01em]"
                      style={{ lineHeight: '1.65' }}
                    >
                      {area.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
