
import React from 'react';
import { Shield, Network, Target } from 'lucide-react';

const RiskReversalSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Honest assessment",
      description: "I'll tell you if this isn't right for your team",
      detail: "Better to know upfront than waste everyone's time",
      delay: '0s'
    },
    {
      icon: Network,
      title: "Network referral",
      description: "If I'm not the right fit, I'll connect you with someone who is",
      detail: "My network includes specialists in every business function",
      delay: '0.1s'
    },
    {
      icon: Target,
      title: "Qualified prospects only",
      description: "Discovery calls are for teams ready to invest in change",
      detail: "Investment range: $3,000 - $20,000 (we'll discuss if it fits)",
      delay: '0.2s'
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-anaro">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-anaro-text-primary mb-6">
              No pressure, <span className="text-anaro-lime">mutual evaluation</span>
            </h2>
            <div className="anaro-accent-line w-32 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: guarantee.delay }}>
                <div className="anaro-card p-8 h-full text-center hover:border-anaro-lime/50">
                  <guarantee.icon className="h-12 w-12 text-anaro-lime mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-anaro-text-primary mb-4">{guarantee.title}</h3>
                  <p className="text-anaro-text-secondary mb-4">
                    "{guarantee.description}"
                  </p>
                  <p className="text-sm text-anaro-text-muted">
                    {guarantee.detail}
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

export default RiskReversalSection;
