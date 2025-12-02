import React from 'react';
import '@/styles/components/services/service-features.css';

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title: string;
  features: Feature[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ title, features }) => {
  return (
    <section className="service-features">
      <div className="service-features-container">
        <div className="service-features-header">
          <h2 className="service-features-title">
            {title}
          </h2>
        </div>

        <div className="service-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="service-feature-card">
              <div className="service-feature-number">
                {index + 1}
              </div>
              <h3 className="service-feature-title">{feature.title}</h3>
              <p className="service-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;