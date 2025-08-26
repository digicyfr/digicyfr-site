'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '@/styles/components/animated-banner.css';

export default function AnimatedBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    'Digital Marketing',
    'SEO Services', 
    'Google Ads',
    'Web Designing'
  ];

  return (
    <section className="animated-banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className={`text-section ${isVisible ? 'slide-in' : ''}`}>
            <h1 className="main-heading">
              Grow Your<br />
              Business<br />
              <span className="highlight">With Us</span>
            </h1>
            
            <div className="services-box">
              <h3 className="services-title">Our Services</h3>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li 
                    key={index} 
                    className={`service-item ${isVisible ? 'fade-in' : ''}`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-info-banner">
              <a href="tel:+48695021633" className="phone-link">
                📞 +48 695 021 633
              </a>
              <a href="https://www.digicyfr.com" className="website-link">
                🌐 www.digicyfr.com
              </a>
            </div>
          </div>

          <div className={`image-section ${isVisible ? 'zoom-in' : ''}`}>
            <div className="logo-badge">
              <Image 
                src="/logo/digicyfr-logo.png"
                alt="Digicyfr Logo"
                width={150}
                height={50}
                className="logo-image"
              />
            </div>
            <div className="hero-image-wrapper">
              <Image 
                src="/images/business-woman.jpg"
                alt="Professional business woman with laptop"
                width={500}
                height={600}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>

        <div className={`stats-section ${isVisible ? 'stats-visible' : ''}`}>
          <div className="stat-card stat-card-1">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">8+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card stat-card-2">
            <div className="stat-icon">📍</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Locations</div>
          </div>
          <div className="stat-card stat-card-3">
            <div className="stat-icon">✨</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-card stat-card-4">
            <div className="stat-icon">🔥</div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}