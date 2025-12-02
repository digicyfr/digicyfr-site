// src/app/[locale]/portfolio/page.tsx - FIXED
'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { 
  PortfolioHero, 
  PortfolioGrid, 
  PortfolioCaseStudies,
  PortfolioStats,
  PortfolioIndustries,
  PortfolioCTA 
} from '@/components/portfolio';
import { portfolioProjects, industryStats, portfolioStats } from '@/data/portfolio'; // Import data

export default function PortfolioPage() {
  const t = useTranslations();

  return (
    <div className="portfolio-page">
      <Header />
      <main className="main-content">
        <PortfolioHero />
        
        {/* Only show ONE of these: */}
        {/* OPTION 1: Show PortfolioGrid with all projects */}
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* OR OPTION 2: Show PortfolioCaseStudies with featured projects only */}
        {/* <PortfolioCaseStudies /> */}
        
        <PortfolioStats stats={portfolioStats} />
        <PortfolioIndustries industries={industryStats} />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  );
}