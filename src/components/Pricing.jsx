import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Half Set / Fill',
    price: '$65',
    description: 'Perfect for a subtle enhancement or maintaining your existing look. A lighter, natural application.',
    features: ['50% lash coverage', 'Takes ~1 hour', 'Ideal every 2-3 weeks']
  },
  {
    name: 'Full Set (Classic/Volume)',
    price: '$130',
    description: 'Our signature service for a bold, standout look. Complete coverage for maximum impact.',
    features: ['100% lash coverage', 'Takes ~2 hours', 'Customized styling'],
    popular: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Investment in <span className="text-accent">Beauty</span></h2>
        <p className="section-subtitle">Transparent pricing for premium, futuristic lash artistry.</p>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <p className="plan-desc">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
