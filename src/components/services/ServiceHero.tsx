import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import '@/styles/components/services/service-hero.css';

interface ServiceHeroProps {
  title: string;
  description: string;
  serviceDescription: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, serviceDescription }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const handleConsultation = () => {
    router.push(`/${locale}/contact`);
  };

  return (
    <section className="service-hero">
      <div className="service-hero-container">
        <h1 className="service-hero-title">
          {title}
        </h1>
        <p className="service-hero-subtitle">
          {description}
        </p>
        <p className="service-hero-description">
          {serviceDescription}
        </p>

        <div className="service-hero-buttons">
          <Button size="lg" className="px-8 service-hero-cta-btn" onClick={handleConsultation}>
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;