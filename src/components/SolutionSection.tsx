import React, { useState } from 'react';
import { Compass, Users, UserCheck } from 'lucide-react';

const SolutionSection = () => {
  const [activeId, setActiveId] = useState(0);

  const solutions = [
    {
      id: 0,
      icon: Compass,
      label: "Strategic Advisory",
      title: "Strategic Advisory on GenAI Adoption",
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
          heading: "Department Transformations",
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
      label: "Group Workshops",
      title: "Team-Specific Group Workshops",
      description: "Tailored sessions for business operations teams that move the needle on adoption.",
      areas: [
        {
          heading: "Tailored Content",
          detail: "Designed specifically for your team's tools, workflows, and pain points"
        },
        {
          heading: "Target Teams",
          detail: "FP&A, Customer Service, Business Operations, and other operational functions"
        },
        {
          heading: "Engaging Format",
          detail: "Interactive workshops that drive real behavioural change, not just awareness"
        },
        {
          heading: "Measurable Impact",
          detail: "Pre and post assessment to track genuine adoption improvement"
        }
      ]
    },
    {
      id: 2,
      icon: UserCheck,
      label: "1:1 Collaboration",
      title: "1:1 Project-Based Collaboration",
      description: "Deep-dive coaching focused on your specific use case—where the real value is.",
      areas: [
        {
          heading: "Specific Use Cases",
          detail: "Focus on a concrete project or business need for your role"
        },
        {
          heading: "Multi-Session Format",
          detail: "Build, experiment, and optimise solutions over several sessions"
        },
        {
          heading: "Coaching Approach",
          detail: "Work together to solve your individual pain point with AI"
        },
        {
          heading: "Lasting Results",
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

          {/* Solution Tabs */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-12">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              const isActive = solution.id === activeId;
              
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveId(solution.id)}
                  className={`
                    group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300
                    ${isActive 
                      ? 'bg-anaro-lime text-anaro-charcoal shadow-lg shadow-anaro-lime/20' 
                      : 'bg-anaro-charcoal-light border border-anaro-lime/20 text-white hover:border-anaro-lime/50'
                    }
                  `}
                  aria-pressed={isActive}
                >
                  <IconComponent 
                    size={24} 
                    className={isActive ? 'text-anaro-charcoal' : 'text-anaro-lime'}
                  />
                  <span className="font-semibold text-lg">{solution.label}</span>
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
