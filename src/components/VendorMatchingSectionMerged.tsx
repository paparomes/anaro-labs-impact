
import React from 'react';
import { Search, FileText, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

// Merged version: A's storytelling + numbered progression with C's compact card grid structure
// UX principles applied:
// - Visual hierarchy: numbered steps guide the eye through the process
// - One card = one idea: each step is a distinct, scannable unit
// - Reduced cognitive load: short descriptions (~100 chars) per card
// - Clear progression: numbers + icons reinforce the sequence
const VendorMatchingSectionMerged = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Vision audit',
      description:
        'Sharpen your help center vision. Pressure-test it against what is realistic in the market.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'RFP framework',
      description:
        'Structured requirements and evaluation criteria that surface real differences between vendors.',
    },
    {
      number: '03',
      icon: Users,
      title: 'Vendor shortlist',
      description:
        'A relevant set of vendors and a decision process with buy-in across teams.',
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-anaro">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-sm uppercase tracking-wide text-anaro-lime mb-4">
              Additional service
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-anaro-text-primary mb-6">
              GenAI help center vendor matching
            </h2>
            <div className="anaro-accent-line w-32 mx-auto"></div>
          </div>

          {/* Context block: concise, sets the scene */}
          <div className="mb-12 animate-on-scroll">
            <div className="anaro-card p-6 md:p-8">
              <p className="text-anaro-text-secondary leading-relaxed mb-4">
                When a company decides to bring GenAI into the help center, the starting point is often a general direction ("we want a chatbot") rather than a fully formed vision. That is normal. Capabilities are evolving quickly, and it is hard to define requirements for something you have not built before.
              </p>
              <p className="text-anaro-text-secondary leading-relaxed">
                The challenge comes when you go to market. There are a lot of vendors, many of them new, and their offerings can be difficult to compare. Features overlap, terminology varies, and it is not always clear which differences matter for your specific context.
              </p>
            </div>
          </div>

          {/* Cards grid with numbered steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll anaro-card p-6 hover:border-anaro-lime/50 transition-colors group relative"
              >
                {/* Large faded number in background for visual pop */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-anaro-lime/10 group-hover:text-anaro-lime/20 transition-colors">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-anaro-lime rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-anaro-charcoal" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-anaro-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-anaro-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome + CTA row */}
          <div className="anaro-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-on-scroll">
            <div className="flex-1">
              <p className="text-anaro-text-secondary">
                <span className="text-anaro-text-primary font-medium">Outcome:</span>{' '}
                A narrower field of vendors that fit your situation, a clearer link between your help center goals and the solution you select, and less time spent sorting through noise.
              </p>
            </div>
            <Button
              onClick={() => window.open('https://calendar.app.google/hnTrn5nVSXjcpMbB8', '_blank')}
              className="anaro-button-primary flex-shrink-0"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Discuss your project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorMatchingSectionMerged;
