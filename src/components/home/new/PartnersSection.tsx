'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import '@/styles/components/partners-section.css';

const partners = [
  { name: 'Kwiaciarnia Miłość', logo: '/partners/kwiaciarnia-milosc.webp', category: 'Florist Shop' },
  { name: 'Kebab SuperKing', logo: '/partners/kebab-superking.webp', category: 'Restaurant' },
  { name: 'Kebab Gold', logo: '/partners/kebab-gold.webp', category: 'Fast Food' },
  { name: 'Kebab Saad', logo: '/partners/kebab-saad.webp', category: 'Restaurant' },
  { name: 'Art Kebab', logo: '/partners/art-kebab.webp', category: 'Restaurant' },
  { name: 'Kebab Abdullah', logo: '/partners/kebab-abdullah.webp', category: 'Fast Food' },
  { name: 'Kebab Ayman', logo: '/partners/kebabayman.webp', category: 'Restaurant' },
  { name: 'OceanPro', logo: '/partners/oceanpro.webp', category: 'Import Export Services' },
];

export default function PartnersSection() {
  const t = useTranslations('home.partners');

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">{t('title')}</h2>

        <div className="partners-slider-wrapper">
          <div className="partners-slider">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`partner-1-${index}`} className="partner-card">
                <div className="partner-logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="partner-image"
                  />
                </div>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-category">{partner.category}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`partner-2-${index}`} className="partner-card">
                <div className="partner-logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="partner-image"
                  />
                </div>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-category">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
