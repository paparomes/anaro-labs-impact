
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(15);
  const [salaryRange, setSalaryRange] = useState('60-80k');
  const [currentUsage, setCurrentUsage] = useState('none');
  const [results, setResults] = useState({
    annualPayroll: 0,
    productivityValue: 0,
    investmentRange: '',
    roiMonths: '2-3'
  });

  const salaryRanges = {
    '50-60k': 55000,
    '60-80k': 70000,
    '80-100k': 90000,
    '100k+': 120000
  };

  useEffect(() => {
    const avgSalary = salaryRanges[salaryRange as keyof typeof salaryRanges];
    const annualPayroll = teamSize * avgSalary;
    const productivityValue = annualPayroll * 0.05; // 5% improvement
    
    // Investment calculation based on team size
    let investmentLow = teamSize * 200;
    let investmentHigh = teamSize * 400;
    
    setResults({
      annualPayroll,
      productivityValue,
      investmentRange: `$${investmentLow.toLocaleString()} - $${investmentHigh.toLocaleString()}`,
      roiMonths: productivityValue > (investmentHigh * 4) ? '1-2' : '2-3'
    });
  }, [teamSize, salaryRange]);

  return (
    <div className="anaro-card p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-16 bg-anaro-lime rounded-2xl flex items-center justify-center">
          <Calculator className="h-8 w-8 text-anaro-charcoal" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-anaro-text-primary font-semibold mb-4">
              Team Size: {teamSize} people
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-3 bg-anaro-charcoal-light rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #deff9a 0%, #deff9a ${((teamSize - 5) / 45) * 100}%, #2d2d2d ${((teamSize - 5) / 45) * 100}%, #2d2d2d 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-anaro-text-muted mt-2">
              <span>5</span>
              <span>50</span>
            </div>
          </div>

          <div>
            <label className="block text-anaro-text-primary font-semibold mb-4">
              Average Salary Range
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(salaryRanges).map((range) => (
                <button
                  key={range}
                  onClick={() => setSalaryRange(range)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    salaryRange === range
                      ? 'bg-anaro-lime text-anaro-charcoal'
                      : 'bg-anaro-charcoal-light text-anaro-text-secondary hover:bg-anaro-charcoal-lighter'
                  }`}
                >
                  ${range}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-anaro-text-primary font-semibold mb-4">
              Current AI Usage
            </label>
            <div className="space-y-2">
              {[
                { value: 'none', label: 'None' },
                { value: 'basic', label: 'Basic' },
                { value: 'some', label: 'Some tools' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setCurrentUsage(option.value)}
                  className={`w-full p-3 rounded-lg text-left font-medium transition-all ${
                    currentUsage === option.value
                      ? 'bg-anaro-lime text-anaro-charcoal'
                      : 'bg-anaro-charcoal-light text-anaro-text-secondary hover:bg-anaro-charcoal-lighter'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Display */}
        <div className="space-y-6">
          <div className="bg-anaro-charcoal-light p-6 rounded-xl border border-anaro-lime/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-anaro-lime mr-2" />
              <h4 className="text-xl font-bold text-anaro-text-primary">Your Opportunity</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-anaro-charcoal-lighter">
                <span className="text-anaro-text-secondary">Annual Team Payroll:</span>
                <span className="text-anaro-text-primary font-semibold">
                  ${results.annualPayroll.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-anaro-charcoal-lighter">
                <span className="text-anaro-text-secondary">5% Productivity Value:</span>
                <span className="text-anaro-lime font-bold text-lg">
                  ${results.productivityValue.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-anaro-charcoal-lighter">
                <span className="text-anaro-text-secondary">Workshop Investment:</span>
                <span className="text-anaro-text-primary font-semibold">
                  {results.investmentRange}
                </span>
              </div>
              
              <div className="bg-anaro-lime/10 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-anaro-text-primary font-semibold">ROI Timeline:</span>
                  <span className="text-anaro-lime font-bold">
                    {results.roiMonths} months
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-anaro-text-muted italic">
            *Results based on documented productivity improvements from similar teams
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
