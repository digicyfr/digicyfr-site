// src/components/portfolio/PortfolioCard.tsx
'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Check } from 'lucide-react';
import { PortfolioProject } from '@/types/portfolio';
import '@/styles/components/portfolio/card.css';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const locale = useLocale();

  const getServiceLabel = (service: string) => {
    switch (service) {
      case 'web': return 'Website';
      case 'seo': return 'SEO';
      case 'google-business': return 'Google Business';
      case 'erp': return 'ERP';
      case 'integration': return 'Integration';
      default: return service;
    }
  };

  const getIndustryLabel = (industry: string) => {
    switch (industry) {
      case 'restaurant': return 'Restaurant';
      case 'retail': return 'Retail';
      case 'service': return 'Service';
      case 'b2b': return 'B2B';
      default: return industry;
    }
  };

  return (
    <article className="portfolio-card">
      {project.featured && (
        <div className="portfolio-card-badge">Featured</div>
      )}
      
      <div className="portfolio-card-image">
        <div className="portfolio-card-image-placeholder">
          {project.clientName}
        </div>
      </div>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{project.clientName}</h3>
        
        <div className="portfolio-card-tags">
          <span className="portfolio-card-tag">
            {getIndustryLabel(project.industry)}
          </span>
          {project.services.map((service) => (
            <span key={service} className="portfolio-card-tag">
              {getServiceLabel(service)}
            </span>
          ))}
        </div>

        <p className="portfolio-card-description">
          {project.shortDescription}
        </p>

        {project.results.length > 0 && (
          <div className="portfolio-card-results">
            {project.results.slice(0, 2).map((result, index) => (
              <div key={index} className="portfolio-card-result">
                {result}
              </div>
            ))}
          </div>
        )}

        <Link 
          href={`/${locale}/portfolio/${project.id}`}
          className="portfolio-card-button"
        >
          View Case Study
          <ArrowRight size={16} style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </article>
  );
}