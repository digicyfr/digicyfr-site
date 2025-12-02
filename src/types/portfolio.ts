// src/types/portfolio.ts
export type PortfolioIndustry = 'restaurant' | 'retail' | 'service' | 'b2b';
export type PortfolioService = 'web' | 'seo' | 'google-business' | 'erp' | 'integration';

export interface PortfolioProject {
  id: string;
  clientName: string;
  clientLogo?: string;
  industry: PortfolioIndustry;
  services: PortfolioService[];
  shortDescription: string;
  results: string[];
  technologies?: string[];
  featured: boolean;
  challenge?: string;
  solution?: string;
  testimonial?: {
    quote: string;
    author: string;
    position?: string;
  };
  metrics?: Array<{
    value: string;
    label: string;
  }>;
}

