'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          {/* Logo - Left */}
          <Link href={`/${locale}`} className="header-logo">
            <Image
              src="/images/logodigi.webp"
              alt="Digicyfr"
              width={100} // Reduced from 120
              height={33} // Reduced from 40 (maintaining 3:1 aspect ratio)
              priority
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation - Main Menu */}
          {!isMobile && (
            <div className="nav-links-main">
              <a href="#home" className="nav-link">
                {t('home').toUpperCase()}
              </a>
              <a href="#services" className="nav-link">
                {t('services').toUpperCase()}
              </a>
              <a href="#portfolio" className="nav-link">
                {t('portfolio').toUpperCase()}
              </a>
              <a href="#about" className="nav-link">
                {t('about').toUpperCase()}
              </a>
            </div>
          )}

          {/* Right End - Language Switcher + Theme Toggle + Contact CTA */}
          <div className="header-actions">
            {!isMobile && (
              <>
                <ThemeToggle />
                <LanguageSwitcher />
                <a href="#contact" className="contact-button">
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
            <a
              href="#home"
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('home').toUpperCase()}
            </a>
            <a
              href="#services"
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('services').toUpperCase()}
            </a>
            <a
              href="#portfolio"
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('portfolio').toUpperCase()}
            </a>
            <a
              href="#about"
              onClick={handleMobileLinkClick}
              className="mobile-link"
            >
              {t('about').toUpperCase()}
            </a>
            <a
              href="#contact"
              onClick={handleMobileLinkClick}
              className="mobile-link contact-link"
            >
              {t('contact').toUpperCase()}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}