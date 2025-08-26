'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration and window resize
  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    // Initial check after component mounts
    handleResize();
    
    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    
    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);



  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Logo */}
        <Link 
          href={`/${locale}`} 
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
            padding: '0.25rem',
            transition: 'transform 0.3s ease',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Image 
            src="/logo/digicyfr-logo.png" 
            alt="Digicyfr - Embracing Tomorrow, Transforming Today"
            width={220}
            height={70}
            priority
            style={{
              height: '60px',
              width: 'auto',
              maxWidth: '220px',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#home" style={navLinkStyle}>{t('home')}</a>
          <a href="#services" style={navLinkStyle}>{t('services')}</a>
          <a href="#partners" style={navLinkStyle}>{t('partners')}</a>
          <a href="#contact" style={navLinkStyle}>{t('contact')}</a>
        </div>

        {/* Language Switcher + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageSwitcher />

          {/* Mobile Menu Button - Only shows on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: '1px solid #f0f0f0',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#000000',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#fce4ec';
              (e.target as HTMLElement).style.borderColor = '#f8bbd0';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
              (e.target as HTMLElement).style.borderColor = '#f0f0f0';
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              🏠 {t('home')}
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              🛠️ {t('services')}
            </a>
            <a 
              href="#partners" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              🤝 {t('partners')}
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              📞 {t('contact')}
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  textDecoration: 'none',
  color: '#000000',
  fontWeight: '500' as const,
  padding: '0.5rem 0',
  borderBottom: '2px solid transparent',
  transition: 'all 0.3s',
  cursor: 'pointer'
};


const mobileLinkStyle = {
  textDecoration: 'none',
  color: '#000000',
  fontWeight: '500' as const,
  padding: '0.75rem 0',
  borderBottom: '1px solid #f5f5f5',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'color 0.2s'
};