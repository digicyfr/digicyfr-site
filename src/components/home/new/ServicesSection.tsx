'use client';

import React from 'react';
import { Search, MapPin, Globe, Database, Cog } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import '@/styles/components/services-section.css';

interface ServiceConfig {
  icon: React.ReactNode;
  key: string;
  path: string;
}

const serviceConfigs: ServiceConfig[] = [
  { icon: <Search />, key: 'seo', path: 'seo-optimization' },
  { icon: <MapPin />, key: 'googleBusiness', path: 'google-business-management' },
  { icon: <Globe />, key: 'webDev', path: 'website-development' },
  { icon: <Database />, key: 'erp', path: 'erp-business-tools' },
  { icon: <Cog />, key: 'systemIntegration', path: 'system-integration' },
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Section Title */}
        <h2 className="services-title">
          {t('title')}
        </h2>

        {/* Main Content Wrapper */}
        <div className="services-content-wrapper">

          {/* Background Image Container */}
          <div className="services-image-container">
            <Image
              src="/images/design/banner1.jpg"
              alt="Our Services"
              width={1400}
              height={500}
              className="services-background-image"
              priority
            />
          </div>

          {/* Floating Cards Wrapper */}
          <div className="services-cards-wrapper">

            {/* Card Grid - First 3 cards */}
            <div className="services-grid-top">
              {serviceConfigs.slice(0, 3).map((service, index) => (
                <div key={index} className="service-card">
                  {/* Floating Black Icon */}
                  <div className="service-icon-container">
                    {service.icon}
                  </div>

                  {/* Card Content Wrapper */}
                  <div className="service-card-content">
                    {/* Card Title */}
                    <h3 className="service-title">
                      {t(`${service.key}.title`)}
                    </h3>

                    {/* Card Description */}
                    <p className="service-description">
                      {t(`${service.key}.description`)}
                    </p>

                    {/* Features List */}
                    <ul className="service-features">
                      {[0, 1, 2, 3].map((idx) => (
                        <li key={idx}>{t(`${service.key}.features.${idx}`)}</li>
                      ))}
                    </ul>

                    {/* More Link */}
                    <Link 
                      href={`/${locale}/services/${service.path}`}
                      className="service-more-button"
                    >
                      {t('more')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Grid - Last 2 cards (centered) */}
            <div className="services-grid-bottom-wrapper">
              <div className="services-grid-bottom">
                {serviceConfigs.slice(3, 5).map((service, index) => (
                  <div key={index + 3} className="service-card">
                    {/* Floating Black Icon */}
                    <div className="service-icon-container">
                      {service.icon}
                    </div>

                    {/* Card Content Wrapper */}
                    <div className="service-card-content">
                      {/* Card Title */}
                      <h3 className="service-title">
                        {t(`${service.key}.title`)}
                      </h3>

                      {/* Card Description */}
                      <p className="service-description">
                        {t(`${service.key}.description`)}
                      </p>

                      {/* Features List */}
                      <ul className="service-features">
                        {[0, 1, 2, 3].map((idx) => (
                          <li key={idx}>{t(`${service.key}.features.${idx}`)}</li>
                        ))}
                      </ul>

                      {/* More Link */}
                      <Link 
                        href={`/${locale}/services/${service.path}`}
                        className="service-more-button"
                      >
                        {t('more')}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}