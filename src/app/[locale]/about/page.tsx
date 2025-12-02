// Updated: src/app/[locale]/about/page.tsx

'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  CheckCircle, 
  DollarSign, 
  Lightbulb, 
  Handshake, 
  Eye,
  Search,
  MapPin,
  Database,
  Cog,
  Code,
  Server,
  BarChart,
  Zap,
  Calendar,
  Rocket,
  TrendingUp
} from 'lucide-react';

// Import Header and Footer
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// Import CSS
import '@/styles/components/about/hero.css';
import '@/styles/components/about/story.css';
import '@/styles/components/about/metrics.css';
import '@/styles/components/about/values.css';
import '@/styles/components/about/advantages.css';
import '@/styles/components/about/process.css';
import '@/styles/components/about/tech-grid.css';
import '@/styles/components/about/cta.css';
import '@/styles/components/about/page.css';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  // Icons for metrics
  const metricIcons = [
    <Users key="clients" size={24} />,
    <Target key="projects" size={24} />,
    <Globe key="coverage" size={24} />,
    <Award key="expertise" size={24} />
  ];

  // Icons for values
  const valueIcons = [
    <CheckCircle key="results" size={28} />,
    <DollarSign key="affordability" size={28} />,
    <Lightbulb key="innovation" size={28} />,
    <Handshake key="partnership" size={28} />,
    <Eye key="transparency" size={28} />
  ];

  // Icons for advantages
  const advantageIcons = [
    <Search key="industry" size={20} />,
    <Database key="comprehensive" size={20} />,
    <DollarSign key="pricing" size={20} />,
    <Target key="results" size={20} />,
    <Handshake key="partnership" size={20} />,
    <Code key="technology" size={20} />,
    <MapPin key="local" size={20} />
  ];

  // Technology stack data
  const technologies = [
    { name: 'React', className: 'react' },
    { name: 'Next.js', className: 'nextjs' },
    { name: 'Odoo ERP', className: 'odoo' },
    { name: 'WordPress', className: 'wordpress' },
    { name: 'WooCommerce', className: 'woocommerce' },
    { name: 'Shopify', className: 'shopify' },
    { name: 'Google Cloud', className: 'google-cloud' },
    { name: 'AWS', className: 'aws' }
  ];

  return (
    <>
      {/* Header Component */}
      <Header />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">{t('hero.title')}</h1>
              <p className="about-hero-subtitle">{t('hero.subtitle')}</p>
              <p className="about-hero-description">{t('hero.description')}</p>
            </div>
            <div className="about-hero-image">
              {/* This would be an actual image - using placeholder for now */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                opacity: 0.1
              }} />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="about-what-we-do">
          <div className="about-story-container">
            <h2 className="about-story-title">{t('whatWeDo.title')}</h2>
            <p className="about-story-description" style={{ textAlign: 'center' }}>
              {t('whatWeDo.description')}
            </p>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="about-metrics">
          <div className="about-metrics-container">
            <h2 className="about-metrics-title">{t('metrics.title')}</h2>
            <div className="about-metrics-grid">
              {[
                { key: 'clients', descKey: 'clientsDesc' },
                { key: 'projects', descKey: 'projectsDesc' },
                { key: 'coverage', descKey: 'coverageDesc' },
                { key: 'expertise', descKey: 'expertiseDesc' }
              ].map((metric, index) => (
                <div key={metric.key} className="about-metric-card">
                  <div className="about-metric-icon">
                    {metricIcons[index]}
                  </div>
                  <div className="about-metric-value">
                    {t(`metrics.${metric.key}`)}
                  </div>
                  <div className="about-metric-label">
                    {t(`metrics.${metric.key}`).split(' ')[0]}
                  </div>
                  <p className="about-metric-description">
                    {t(`metrics.${metric.descKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-story-container">
            <h2 className="about-story-title">{t('story.title')}</h2>
            <div className="about-story-content">
              <p className="about-story-description">
                {t('story.description')}
              </p>
            </div>
            <div className="about-story-mission-vision">
              <div className="about-story-card">
                <h3 className="about-story-card-title">{t('story.mission.title')}</h3>
                <p className="about-story-card-text">{t('story.mission.text')}</p>
              </div>
              <div className="about-story-card">
                <h3 className="about-story-card-title">{t('story.vision.title')}</h3>
                <p className="about-story-card-text">{t('story.vision.text')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-values-container">
            <h2 className="about-values-title">{t('values.title')}</h2>
            <div className="about-values-grid">
              {['results', 'affordability', 'innovation', 'partnership', 'transparency'].map((value, index) => (
                <div key={value} className="about-value-card">
                  <div className="about-value-icon">
                    {valueIcons[index]}
                  </div>
                  <h3 className="about-value-title">
                    {t(`values.${value}.title`)}
                  </h3>
                  <p className="about-value-description">
                    {t(`values.${value}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="about-advantages">
          <div className="about-advantages-container">
            <h2 className="about-advantages-title">{t('advantages.title')}</h2>
            <div className="about-advantages-grid">
              {[
                'industry',
                'comprehensive', 
                'pricing',
                'results',
                'partnership',
                'technology',
                'local'
              ].map((advantage, index) => (
                <div key={advantage} className="about-advantage-card">
                  <div className="about-advantage-header">
                    <div className="about-advantage-icon">
                      {advantageIcons[index]}
                    </div>
                    <h3 className="about-advantage-card-title">
                      {t(`advantages.${advantage}.title`)}
                    </h3>
                  </div>
                  <p className="about-advantage-description">
                    {t(`advantages.${advantage}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="about-process">
          <div className="about-process-container">
            <h2 className="about-process-title">{t('process.title')}</h2>
            <div className="about-process-timeline">
              {['step1', 'step2', 'step3', 'step4'].map((step, index) => (
                <div key={step} className="about-process-step">
                  <div className="about-process-step-number">
                    {index + 1}
                  </div>
                  <div className="about-process-step-content">
                    <h3 className="about-process-step-title">
                      {t(`process.${step}.title`)}
                    </h3>
                    <p className="about-process-step-description">
                      {t(`process.${step}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="about-tech">
          <div className="about-tech-container">
            <div className="about-tech-header">
              <h2 className="about-tech-title">{t('technology.title')}</h2>
              <p className="about-tech-description">
                {t('technology.description')}
              </p>
            </div>
            <div className="about-tech-grid">
              {technologies.map((tech) => (
                <div key={tech.name} className="about-tech-item">
                  <div className={`about-tech-logo ${tech.className}`}>
                    {/* Placeholder for logo - would use actual images */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--muted)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>
                      {tech.name.charAt(0)}
                    </div>
                  </div>
                  <p className="about-tech-name">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-cta-container">
            <h2 className="about-cta-title">{t('cta.title')}</h2>
            <p className="about-cta-description">{t('cta.description')}</p>
            <Link href={`/${locale}/contact`} className="about-cta-button">
              {t('cta.button')}
            </Link>
          </div>
        </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
}