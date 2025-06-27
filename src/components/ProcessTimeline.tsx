
import React from 'react';
import { Video, FileText, Users, TrendingUp } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Video,
      title: '30-Minute Scoping Call',
      description: 'Understand your team\'s current state and specific challenges',
      subtitle: 'No sales pitch - honest assessment of fit'
    },
    {
      icon: FileText,
      title: 'Pre-Workshop Survey',
      description: '1-minute survey per participant to customize content',
      subtitle: 'Baseline measurement for later comparison'
    },
    {
      icon: Users,
      title: 'Customized Workshop Delivery',
      description: 'Hands-on GenAI training focused on your workflows',
      subtitle: 'Interactive sessions with real business scenarios'
    },
    {
      icon: TrendingUp,
      title: 'Impact Measurement',
      description: '3-minute follow-up survey to measure improvement',
      subtitle: 'Concrete ROI documentation for leadership'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-anaro-lime/30 transform translate-x-4 z-0"></div>
              )}
              
              <div className="anaro-card p-6 h-full hover:border-anaro-lime/50 group relative z-10">
                <div className="w-16 h-16 bg-anaro-lime rounded-2xl flex items-center justify-center mb-6 group-hover:animate-lime-pulse">
                  <Icon className="h-8 w-8 text-anaro-charcoal" />
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-anaro-lime text-anaro-charcoal rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-anaro-text-primary">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-anaro-text-secondary leading-relaxed mb-3">
                  {step.description}
                </p>
                
                <p className="text-sm text-anaro-lime font-medium">
                  {step.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-block bg-anaro-charcoal-light p-6 rounded-xl border border-anaro-lime/20">
          <p className="text-lg text-anaro-text-primary font-semibold mb-2">
            Investment Transparency
          </p>
          <p className="text-anaro-text-secondary">
            Companies typically invest <span className="text-anaro-lime font-semibold">$3,000-$20,000</span> per workshop
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
