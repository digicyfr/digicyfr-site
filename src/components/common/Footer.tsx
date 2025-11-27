'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import '@/styles/components/footer.css';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@digicyfr.com';
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+48 695 016 33';

  const quickLinks = [
    { label: nav('home'), href: `/${locale}` },
    { label: nav('about'), href: `/${locale}/about` },
    { label: nav('services'), href: `/${locale}/services` },
    { label: nav('portfolio'), href: `/${locale}/portfolio` },
    { label: nav('contact'), href: `/${locale}/contact` },
  ];

  const services = [
    'SEO Optimization',
    'Web Development',
    'Google Business',
    'ERP Solutions',
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-company">
            <Link href={`/${locale}`} className="footer-logo">
              <Image
                src="/images/design/logodigi.png"
                alt="Digicyfr"
                width={150}
                height={40}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-description">{t('description')}</p>

            {/* Social Links */}
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">{t('quickLinks')}</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={`/${locale}/services`} className="footer-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">{t('contactInfo')}</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <Mail size={16} />
                <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
              </li>
              <li className="contact-item">
                <Phone size={16} />
                <a href={`tel:${companyPhone.replace(/\s/g, '')}`}>{companyPhone}</a>
              </li>
              <li className="contact-item">
                <MapPin size={16} />
                <span>Warsaw, Poland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {t('company')}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href={`/${locale}`}>Privacy Policy</Link>
            <Link href={`/${locale}`}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
