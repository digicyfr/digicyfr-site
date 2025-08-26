'use client';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import '@/styles/components/services-section.css';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      title: t('seo.title'),
      description: t('seo.description'),
      image: "/images/design/seo-dark-concept.jpg",
      features: [
        t('seo.features.0'),
        t('seo.features.1'),
        t('seo.features.2'),
        t('seo.features.3')
      ]
    },
    {
      title: t('googleBusiness.title'),
      description: t('googleBusiness.description'),
      image: "/images/design/google.jpg",
      features: [
        t('googleBusiness.features.0'),
        t('googleBusiness.features.1'),
        t('googleBusiness.features.2'),
        t('googleBusiness.features.3')
      ]
    },
    {
      title: t('webDev.title'),
      description: t('webDev.description'),
      image: "/images/design/webbsite.jpg",
      features: [
        t('webDev.features.0'),
        t('webDev.features.1'),
        t('webDev.features.2'),
        t('webDev.features.3')
      ]
    },
    {
      title: t('erp.title'),
      description: t('erp.description'),
      image: "/images/design/erp-pos-system.jpg",
      features: [
        t('erp.features.0'),
        t('erp.features.1'),
        t('erp.features.2'),
        t('erp.features.3')
      ]
    }
  ];
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-description">
            {t('description')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${index === 3 ? 'erp-card' : ''}`}>
              <div className="service-image-wrapper">
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="service-image"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '0.75rem'
                  }}
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature">
                    <CheckCircle size={16} className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
