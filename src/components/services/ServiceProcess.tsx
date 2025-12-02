import React from 'react';
import '@/styles/components/services/service-process.css';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  steps: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ title, steps }) => {
  return (
    <section className="service-process">
      <div className="service-process-container">
        <div className="service-process-header">
          <h2 className="service-process-title">
            {title}
          </h2>
        </div>

        <div className="service-process-timeline">
          <div className="service-process-steps">
            {steps.map((step, index) => (
              <div key={index} className="service-process-step">
                <div className="service-process-number">
                  {step.step}
                </div>

                <div className="service-process-content">
                  <h3 className="service-process-step-title">
                    {step.title}
                  </h3>
                  <p className="service-process-step-description">
                    {step.description}
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

export default ServiceProcess;