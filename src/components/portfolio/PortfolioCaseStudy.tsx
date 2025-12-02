// src/components/portfolio/PortfolioCaseStudy.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Target, Zap, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';
import { PortfolioProject } from '@/types/portfolio';
import '@/styles/components/portfolio/case-study.css';

interface PortfolioCaseStudyProps {
  project: PortfolioProject;
}

export default function PortfolioCaseStudy({ project }: PortfolioCaseStudyProps) {
  const t = useTranslations('portfolio');

  if (!project.featured || !project.challenge || !project.solution) {
    return null;
  }

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'restaurant': return '🍽️';
      case 'retail': return '🛍️';
      case 'service': return '⚙️';
      case 'b2b': return '🏢';
      default: return '📊';
    }
  };

  return (
    <article className="portfolio-case-study">
      <div className="portfolio-case-study-header">
        <div className="portfolio-case-study-client">
          <div className="portfolio-case-study-logo">
            {project.clientName.charAt(0)}
          </div>
          <div className="portfolio-case-study-client-info">
            <h3>{project.clientName}</h3>
            <div className="portfolio-case-study-industry">
              {getIndustryIcon(project.industry)} {project.industry.toUpperCase()}
            </div>
          </div>
        </div>
        <p>{project.shortDescription}</p>
      </div>

      <div className="portfolio-case-study-content">
        <div>
          <div className="portfolio-case-study-section">
            <h4 className="portfolio-case-study-section-title">
              <Target size={20} />
              {t('caseStudy.challenge')}
            </h4>
            <p className="portfolio-case-study-section-content">
              {project.challenge}
            </p>
          </div>

          <div className="portfolio-case-study-section">
            <h4 className="portfolio-case-study-section-title">
              <Zap size={20} />
              {t('caseStudy.solution')}
            </h4>
            <p className="portfolio-case-study-section-content">
              {project.solution}
            </p>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="portfolio-case-study-section">
              <h4 className="portfolio-case-study-section-title">
                {t('caseStudy.technologies')}
              </h4>
              <div className="portfolio-case-study-section-content">
                {project.technologies.join(', ')}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="portfolio-case-study-section">
            <h4 className="portfolio-case-study-section-title">
              <TrendingUp size={20} />
              {t('caseStudy.results')}
            </h4>
            {project.metrics && project.metrics.length > 0 ? (
              <div className="portfolio-case-study-results-grid">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="portfolio-case-study-result">
                    <div className="portfolio-case-study-result-value">
                      {metric.value}
                    </div>
                    <div className="portfolio-case-study-result-label">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="portfolio-case-study-section-content">
                <ul style={{ paddingLeft: '20px' }}>
                  {project.results.map((result, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                      <CheckCircle size={16} style={{ marginRight: '8px', color: 'var(--primary)' }} />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {project.testimonial && (
            <div className="portfolio-case-study-testimonial">
              <p className="portfolio-case-study-testimonial-text">
                {project.testimonial.quote}
              </p>
              <div className="portfolio-case-study-testimonial-author">
                — {project.testimonial.author}
                {project.testimonial.position && `, ${project.testimonial.position}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}