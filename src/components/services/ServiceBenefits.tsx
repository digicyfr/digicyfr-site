import React from 'react';
import { CheckCircle } from 'lucide-react';
import '@/styles/components/services/service-benefits.css';

interface ServiceBenefitsProps {
  title: string;
  benefits: string[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ title, benefits }) => {
  return (
    <section className="service-benefits">
      <div className="service-benefits-container">
        <div className="service-benefits-header">
          <h2 className="service-benefits-title">
            {title}
          </h2>
        </div>

        <div className="service-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="service-benefit-item">
              <CheckCircle className="service-benefit-icon" size={24} />
              <span className="service-benefit-text">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;