// src/components/portfolio/PortfolioCTA.tsx
'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import '@/styles/components/portfolio/cta.css';

export default function PortfolioCTA() {
  const t = useTranslations('portfolio');
  const locale = useLocale();

  return (
    <section className="portfolio-cta">
      <div className="portfolio-cta-container">
        <h2 className="portfolio-cta-title">{t('cta.title')}</h2>
        <p className="portfolio-cta-description">{t('cta.description')}</p>
        <Link href={`/${locale}/contact`} className="portfolio-cta-button">
          {t('cta.button')}
        </Link>
      </div>
    </section>
  );
}