// src/components/portfolio/PortfolioIndustries.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Coffee, ShoppingBag, Wrench, Building } from 'lucide-react';
import '@/styles/components/portfolio/industries.css';

interface IndustryData {
  [key: string]: {
    count: number;
    description: string;
  };
}

interface PortfolioIndustriesProps {
  industries: IndustryData;
}

export default function PortfolioIndustries({ industries }: PortfolioIndustriesProps) {
  const t = useTranslations('portfolio');

  const industryIcons: Record<string, React.ReactNode> = {
    restaurant: <Coffee size={24} />,
    retail: <ShoppingBag size={24} />,
    service: <Wrench size={24} />,
    b2b: <Building size={24} />
  };

  const industryLabels: Record<string, string> = {
    restaurant: t('filter.industries.restaurant') || 'Restaurant & Food',
    retail: t('filter.industries.retail') || 'Retail & E-commerce',
    service: t('filter.industries.service') || 'Service Businesses',
    b2b: t('filter.industries.b2b') || 'Import/Export & B2B'
  };

  return (
    <section className="portfolio-industries">
      <div className="portfolio-industries-container">
        <h2 className="portfolio-industries-title">
          {t('industries.title') || 'Industries We Serve'}
        </h2>
        <div className="portfolio-industries-grid">
          {Object.entries(industries).map(([key, data]) => (
            <div key={key} className="portfolio-industry-card">
              <div className="portfolio-industry-icon">
                {industryIcons[key]}
              </div>
              <h3 className="portfolio-industry-name">{industryLabels[key]}</h3>
              <div className="portfolio-industry-count">{data.count} Projects</div>
              <p className="portfolio-industry-description">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}