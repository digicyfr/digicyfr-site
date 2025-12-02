// src/components/portfolio/PortfolioStats.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Users, Target, Globe, Award } from 'lucide-react';
import '@/styles/components/portfolio/stats.css';

interface PortfolioStatsProps {
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export default function PortfolioStats({ stats }: PortfolioStatsProps) {
  const t = useTranslations('portfolio');

  const icons = [<Users key="clients" size={24} />, <Target key="projects" size={24} />, <Globe key="industries" size={24} />, <Award key="satisfaction" size={24} />];

  return (
    <section className="portfolio-stats">
      <div className="portfolio-stats-container">
        <h2 className="portfolio-stats-title">{t('stats.title')}</h2>
        <div className="portfolio-stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="portfolio-stat-card">
              <div className="portfolio-stat-icon">
                {icons[index]}
              </div>
              <div className="portfolio-stat-value">{stat.value}</div>
              <div className="portfolio-stat-label">{stat.label}</div>
              <p className="portfolio-stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}