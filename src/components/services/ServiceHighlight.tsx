import React from 'react';
import '@/styles/components/services/service-highlight.css';

interface HighlightItem {
  title: string;
  description: string;
}

interface ServiceHighlightProps {
  title: string;
  description?: string;
  items: HighlightItem[];
}

const ServiceHighlight: React.FC<ServiceHighlightProps> = ({ title, description, items }) => {
  return (
    <section className="service-highlight">
      <div className="service-highlight-container">
        <div className="service-highlight-header">
          <h2 className="service-highlight-title">
            {title}
          </h2>
          {description && (
            <p className="service-highlight-description">
              {description}
            </p>
          )}
        </div>

        <div className="service-highlight-grid">
          {items.map((item, index) => (
            <div key={index} className="service-highlight-card">
              <h3 className="service-highlight-card-title">{item.title}</h3>
              <p className="service-highlight-card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
