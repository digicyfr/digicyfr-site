'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import '@/styles/components/hero-section.css';

export default function HeroSection() {
  const t = useTranslations('home.hero');
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-slides">
          {/* Slide 1 */}
          <div className={`hero-slide ${activeSlide === 0 ? 'active' : ''}`}>
            <div className="hero-content">
              <h1 className="hero-headline">
                {t('slides.0.title')}
              </h1>
              <p className="hero-subtext">
                {t('slides.0.description')}
              </p>
              <div className="hero-cta-group">
                <a href="#contact" className="hero-btn hero-btn-primary">
                  {t('cta.primary')}
                </a>
                <a href="#services" className="hero-btn hero-btn-secondary">
                  {t('cta.secondary')}
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`hero-slide ${activeSlide === 1 ? 'active' : ''}`}>
            <div className="hero-content">
              <h1 className="hero-headline">
                {t('slides.1.title')}
              </h1>
              <p className="hero-subtext">
                {t('slides.1.description')}
              </p>
              <div className="hero-cta-group">
                <a href="#contact" className="hero-btn hero-btn-primary">
                  {t('cta.primary')}
                </a>
                <a href="#services" className="hero-btn hero-btn-secondary">
                  {t('cta.secondary')}
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className={`hero-slide ${activeSlide === 2 ? 'active' : ''}`}>
            <div className="hero-content">
              <h1 className="hero-headline">
                {t('slides.2.title')}
              </h1>
              <p className="hero-subtext">
                {t('slides.2.description')}
              </p>
              <div className="hero-cta-group">
                <a href="#contact" className="hero-btn hero-btn-primary">
                  {t('cta.primary')}
                </a>
                <a href="#services" className="hero-btn hero-btn-secondary">
                  {t('cta.secondary')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="hero-nav-dots">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`hero-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
