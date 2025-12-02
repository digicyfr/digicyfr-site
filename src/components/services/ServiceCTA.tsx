import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import '@/styles/components/services/service-cta.css';

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title,
  description,
  primaryButtonText = "Get Started"
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const handleGetStarted = () => {
    router.push(`/${locale}/contact`);
  };

  return (
    <section className="service-cta">
      <div className="service-cta-container">
        <h2 className="service-cta-title">
          {title}
        </h2>
        <p className="service-cta-description">
          {description}
        </p>

        <div className="service-cta-buttons">
          <button className="service-cta-button-primary" onClick={handleGetStarted}>
            {primaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;