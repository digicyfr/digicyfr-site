import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X, ArrowRight, CheckCircle, Users, TrendingUp, Globe, ShoppingCart, BarChart3, Zap, Star, MapPin, Phone, Mail } from 'lucide-react';
import { AnimatedCounter } from './homeUtils';
import './HomePage.css';
import homeTranslations from './homeTranslations';

// Load translations for this page
const useHomeTranslation = () => {
  const { i18n } = useTranslation();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = homeTranslations[i18n.language] || homeTranslations.en;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return { t, changeLanguage: i18n.changeLanguage, language: i18n.language };
};

const HomePage = () => {
  const { t, changeLanguage, language } = useHomeTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('services.ads.title'),
      description: t('services.ads.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('services.erp.title'),
      description: t('services.erp.description'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <div className="logo-icon">
                <span className="logo-text">D</span>
              </div>
              <span className="company-name">Digicyfr</span>
            </div>

            <div className="nav-links-desktop">
              <a href="#home" className="nav-link active">{t('nav.home')}</a>
              <a href="#services" className="nav-link">{t('nav.services')}</a>
              <a href="#about" className="nav-link">{t('nav.about')}</a>
              <a href="#contact" className="nav-link">{t('nav.contact')}</a>
              
              <select 
                value={language} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-selector"
              >
                <option value="en">EN</option>
                <option value="pl">PL</option>
                <option value="de">DE</option>
              </select>

              <button className="cta-button-nav">
                {t('nav.getStarted')}
              </button>
            </div>

            <button 
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#home" className="mobile-nav-link">{t('nav.home')}</a>
              <a href="#services" className="mobile-nav-link">{t('nav.services')}</a>
              <a href="#about" className="mobile-nav-link">{t('nav.about')}</a>
              <a href="#contact" className="mobile-nav-link">{t('nav.contact')}</a>
              <select 
                value={language} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="mobile-language-selector"
              >
                <option value="en">English</option>
                <option value="pl">Polski</option>
                <option value="de">Deutsch</option>
              </select>
              <button className="mobile-cta-button">
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className={`hero-content ${isVisible.home ? 'animate-in' : ''}`}>
              <div className="hero-badge">
                <Star className="w-4 h-4 mr-2" />
                {t('hero.badge')}
              </div>
              
              <h1 className="hero-title">
                {t('hero.title')}{' '}
                <span className="hero-title-highlight">
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              
              <p className="hero-subtitle">
                {t('hero.subtitle')}
              </p>
              
              <div className="hero-buttons">
                <button className="hero-cta-primary">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="hero-cta-secondary">
                  {t('hero.ctaSecondary')}
                </button>
              </div>
            </div>
            
            <div className={`hero-stats ${isVisible.home ? 'animate-in-delayed' : ''}`}>
              <div className="stats-card">
                <div className="stats-background"></div>
                <div className="stats-content">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number blue">
                        <AnimatedCounter end={200} suffix="+" />
                      </div>
                      <div className="stat-label">{t('stats.clients')}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number green">
                        <AnimatedCounter end={150} suffix="%" />
                      </div>
                      <div className="stat-label">{t('stats.growth')}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number purple">
                        <AnimatedCounter end={500} suffix="+" />
                      </div>
                      <div className="stat-label">{t('stats.projects')}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number orange">24/7</div>
                      <div className="stat-label">{t('stats.support')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <div className={`services-header ${isVisible.services ? 'animate-in' : ''}`}>
            <h2 className="services-title">{t('services.title')}</h2>
            <p className="services-subtitle">{t('services.subtitle')}</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${isVisible.services ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`service-icon ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="industries-section">
        <div className="industries-container">
          <div className={`industries-header ${isVisible.industries ? 'animate-in' : ''}`}>
            <h2 className="industries-title">{t('industries.title')}</h2>
            <p className="industries-subtitle">{t('industries.subtitle')}</p>
          </div>
          
          <div className="industries-grid">
            {[
              { key: 'retail', emoji: '🛍️' },
              { key: 'food', emoji: '🍕' },
              { key: 'health', emoji: '💊' },
              { key: 'automotive', emoji: '🚗' },
              { key: 'manufacturing', emoji: '🏭' },
              { key: 'construction', emoji: '🏗️' }
            ].map((industry, index) => (
              <div 
                key={industry.key}
                className={`industry-card ${isVisible.industries ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="industry-emoji">{industry.emoji}</div>
                <h3 className="industry-name">{t(`industries.${industry.key}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Section */}
      <section id="erp" className="erp-section">
        <div className="erp-container">
          <div className={`erp-header ${isVisible.erp ? 'animate-in' : ''}`}>
            <h2 className="erp-title">{t('erp.title')}</h2>
            <p className="erp-subtitle">{t('erp.subtitle')}</p>
          </div>
          
          <div className="erp-content">
            <div className={`erp-modules ${isVisible.erp ? 'animate-in-delayed' : ''}`}>
              <h3 className="erp-section-title">{t('erp.modules')}</h3>
              <div className="erp-list">
                {t('erp.modulesList').map((module, index) => (
                  <div key={index} className="erp-item">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="erp-item-text">{module}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`erp-benefits ${isVisible.erp ? 'animate-in-delayed-more' : ''}`}>
              <h3 className="erp-section-title">{t('erp.benefits')}</h3>
              <div className="erp-list">
                {t('erp.benefitsList').map((benefit, index) => (
                  <div key={index} className="erp-item">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="erp-item-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta-section">
        <div className="cta-container">
          <div className={`cta-content ${isVisible.cta ? 'animate-in' : ''}`}>
            <h2 className="cta-title">{t('cta.title')}</h2>
            <p className="cta-subtitle">{t('cta.subtitle')}</p>
            <button className="cta-button">
              {t('cta.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <span className="footer-logo-text">D</span>
                </div>
                <span className="footer-company-name">Digicyfr</span>
              </div>
              <p className="footer-description">{t('footer.description')}</p>
              <div className="footer-location">
                <MapPin className="w-4 h-4" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
            
            <div className="footer-services">
              <h4 className="footer-section-title">Services</h4>
              <div className="footer-links">
                <div className="footer-link">SEO Optimization</div>
                <div className="footer-link">Google Ads</div>
                <div className="footer-link">E-commerce</div>
                <div className="footer-link">ERP Solutions</div>
              </div>
            </div>
            
            <div className="footer-contact">
              <h4 className="footer-section-title">Contact</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <Phone className="w-4 h-4" />
                  <span>+48 123 456 789</span>
                </div>
                <div className="footer-contact-item">
                  <Mail className="w-4 h-4" />
                  <span>hello@digicyfr.com</span>
                </div>
                <div className="footer-social">
                  <div className="social-icon">f</div>
                  <div className="social-icon">in</div>
                  <div className="social-icon">@</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Digicyfr. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;