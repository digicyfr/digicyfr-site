'use client';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import '@/styles/components/management-section.css';

export default function ManagementSection() {
  const t = useTranslations('management');

  const features = [
    {
      image: '/images/design/management/dashboard.jpg',
      title: t('features.dashboard.title'),
      description: t('features.dashboard.description')
    },
    {
      image: '/images/design/management/analytics.jpg',
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      image: '/images/design/management/customers.jpg',
      title: t('features.customers.title'),
      description: t('features.customers.description')
    },
    {
      image: '/images/design/management/automation.jpg',
      title: t('features.automation.title'),
      description: t('features.automation.description')
    }
  ];

  const benefits = [
    t('benefits.0'),
    t('benefits.1'),
    t('benefits.2'),
    t('benefits.3'),
    t('benefits.4'),
    t('benefits.5')
  ];

  return (
    <section id="management" className="management-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">
            {t('subtitle')}
          </p>
        </div>

        <div className="management-content">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image-wrapper">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    width={280}
                    height={180}
                    className="feature-image"
                    style={{
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="benefits-section">
            <div className="benefits-header">
              <h3 className="benefits-title">{t('benefitsTitle')}</h3>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <button 
              className="cta-button primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('cta.primary')}
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('cta.secondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}