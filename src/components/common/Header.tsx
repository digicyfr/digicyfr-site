// src/components/common/Header.tsx
'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeToggle from '../ThemeToggle';
import '@/styles/components/header.css';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const mobile = window.innerWidth <= 1024;
        setIsMobile(mobile);
        // Close menu when switching from mobile to desktop
        if (!mobile && isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      // Prevent body scroll when mobile menu is open
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        document.body.style.overflow = 'unset';
      }
    };
  }, [isMenuOpen]);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const closeServicesDropdown = () => {
    setServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  if (!mounted) {
    return null;
  }

  const services = [
    { name: 'SEO Optimization', path: '/services/seo-optimization' },
    { name: 'Google Business Management', path: '/services/google-business-management' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'ERP & Business Tools', path: '/services/erp-business-tools' },
    { name: 'System Integration', path: '/services/system-integration' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          {/* Logo - Left */}
          <Link href={`/${locale}`} className="header-logo">
            <Image
              src="/images/logodigi.webp"
              alt="Digicyfr"
              width={150}
              height={56}
              priority
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation - Main Menu */}
          {!isMobile && (
            <div className="nav-links-main">
              {/* Change from <a href="#home"> to <Link> for Home */}
              <Link href={`/${locale}`} className="nav-link">
                {t('home').toUpperCase()}
              </Link>
              
              {/* Services Dropdown */}
              <div className="services-dropdown-container">
                <button 
                  className="nav-link services-dropdown-trigger"
                  onClick={toggleServicesDropdown}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  {t('services').toUpperCase()}
                  <ChevronDown size={16} />
                </button>
                {servicesOpen && (
                  <div 
                    className="services-dropdown"
                    onMouseLeave={closeServicesDropdown}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/${locale}${service.path}`}
                        className="dropdown-link"
                        onClick={closeServicesDropdown}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Change from <a href="#portfolio"> to <Link> for Portfolio */}
              <Link href={`/${locale}/portfolio`} className="nav-link">
                {t('portfolio').toUpperCase()}
              </Link>
              
              {/* Change from <a href="/about"> to <Link> for About */}
              <Link href={`/${locale}/about`} className="nav-link">
                {t('about').toUpperCase()}
              </Link>

              {/* Blog Link */}
              <Link href={`/${locale}/blog`} className="nav-link">
                {t('blog').toUpperCase()}
              </Link>
            </div>
          )}

          {/* Right End - Language Switcher + Theme Toggle + Contact CTA */}
          <div className="header-actions">
            {!isMobile && (
              <>
                <ThemeToggle />
                <LanguageSwitcher />
                <a href={`/${locale}#contact`} className="contact-button">
                  {t('contact').toUpperCase()}
                </a>
              </>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <>
                <ThemeToggle />
                <LanguageSwitcher />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="mobile-menu-button"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {/* Change from <a href="#home"> to <Link> for Home */}
            <Link
              href={`/${locale}`}
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('home').toUpperCase()}
            </Link>
            
            {/* Mobile Services Submenu */}
            <div className="mobile-services-section">
              <button
                className="mobile-services-header"
                onClick={toggleMobileServices}
              >
                <span>{t('services').toUpperCase()}</span>
                <ChevronDown
                  size={20}
                  className={`mobile-services-icon ${mobileServicesOpen ? 'open' : ''}`}
                />
              </button>
              <div className={`mobile-services-links ${mobileServicesOpen ? 'open' : ''}`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/${locale}${service.path}`}
                    onClick={handleMobileLinkClick}
                    className="mobile-service-link"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Change from <a href="#portfolio"> to <Link> for Portfolio */}
            <Link
              href={`/${locale}/portfolio`}
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('portfolio').toUpperCase()}
            </Link>
            
            {/* Change from <a href="#about"> to <Link> for About */}
            <Link
              href={`/${locale}/about`}
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('about').toUpperCase()}
            </Link>

            {/* Blog Link */}
            <Link
              href={`/${locale}/blog`}
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('blog').toUpperCase()}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}