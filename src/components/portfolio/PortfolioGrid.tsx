// src/components/portfolio/PortfolioGrid.tsx - THIS NEEDS PROJECTS PROP
'use client';

import { useTranslations } from 'next-intl';
import { PortfolioProject } from '@/types/portfolio';
import PortfolioCard from './PortfolioCard';
import '@/styles/components/portfolio/grid.css';

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export default function PortfolioGrid({ projects = [] }: PortfolioGridProps) {
  const t = useTranslations('portfolio');

  if (!projects || projects.length === 0) {
    return (
      <section className="portfolio-grid-section">
        <div className="portfolio-grid-container">
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>
              No projects to display
            </h3>
            <p style={{ color: 'var(--muted-foreground)' }}>
              Check back soon for our latest work
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="portfolio-grid-section">
      <div className="portfolio-grid-container">
        <div className="portfolio-grid-header">
          <h2 className="portfolio-grid-title">Our Projects</h2>
          <p className="portfolio-grid-description">
            Explore our portfolio of successful digital projects and satisfied clients.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}