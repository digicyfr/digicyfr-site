// src/components/portfolio/PortfolioHero.tsx - UPDATED
'use client';

import { useTranslations } from 'next-intl';
import '@/styles/components/portfolio/hero.css';

export default function PortfolioHero() {
  const t = useTranslations('portfolio.hero');

  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-container">
        <h1 className="portfolio-hero-title">
          {t('title') || 'Our Portfolio'}
        </h1>
        <p className="portfolio-hero-subtitle">
          {t('subtitle') || 'Client Success Stories'}
        </p>
        <p className="portfolio-hero-description">
          {t('description') || 'See how we\'ve helped businesses achieve digital transformation and measurable results.'}
        </p>
      </div>
    </section>
  );
}