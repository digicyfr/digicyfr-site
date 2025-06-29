'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-language-dropdown]')) {
        setIsLangOpen(false);
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, []);

  const getCurrentLocale = () => {
    const segments = pathname.split('/');
    const localeFromPath = segments[1];
    return locales.find(l => l.code === localeFromPath)?.code || 'en';
  };

  const locale = getCurrentLocale();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  const currentLocale = locales.find(l => l.code === locale);

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
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
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
            flexShrink: 0
          }}
        >
          <Image 
            src="/images/logo/digicyfr-logo.png" 
            alt="Digicyfr - Digital Solutions"
            width={150}
            height={40}
            style={{
              height: '40px',
              width: 'auto',
              maxWidth: '150px'
            }}
          />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '0.5rem',
            display: isMobile ? 'none' : 'inline'
          }}>
            Digicyfr
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#home" style={navLinkStyle}>Home</a>
          <a href="#services" style={navLinkStyle}>Services</a>
          <a href="#partners" style={navLinkStyle}>Partners</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </div>

        {/* Language Switcher + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative' }} data-language-dropdown>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={langButtonStyle}
            >
              <span style={{ fontSize: '1.1rem' }}>{currentLocale?.flag || '🇺🇸'}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                {(currentLocale?.code || 'en').toUpperCase()}
              </span>
              <ChevronDown size={14} style={{ 
                transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }} />
            </button>

            {isLangOpen && (
              <div style={langDropdownStyle}>
                {locales.map((loc) => (
                  <Link
                    key={loc.code}
                    href={switchLocale(loc.code)}
                    onClick={() => setIsLangOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      textDecoration: 'none',
                      color: '#374151',
                      fontSize: '0.9rem',
                      borderBottom: loc.code === locales[locales.length - 1].code ? 'none' : '1px solid #f3f4f6',
                      backgroundColor: loc.code === locale ? '#f0f9ff' : 'white',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (loc.code !== locale) {
                        (e.target as HTMLElement).style.backgroundColor = '#f9fafb';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (loc.code !== locale) {
                        (e.target as HTMLElement).style.backgroundColor = 'white';
                      }
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{loc.flag}</span>
                    <span style={{ fontWeight: loc.code === locale ? '600' : '400' }}>{loc.name}</span>
                    {loc.code === locale && (
                      <span style={{ marginLeft: 'auto', color: '#3b82f6', fontSize: '1rem' }}>✓</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button - Only shows on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#374151',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#f9fafb';
              (e.target as HTMLElement).style.borderColor = '#d1d5db';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
              (e.target as HTMLElement).style.borderColor = '#e5e7eb';
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
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
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
              🏠 Home
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              🛠️ Services
            </a>
            <a 
              href="#partners" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              🤝 Partners
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              style={mobileLinkStyle}
            >
              📞 Contact
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
  color: '#374151',
  fontWeight: '500' as const,
  padding: '0.5rem 0',
  borderBottom: '2px solid transparent',
  transition: 'all 0.3s',
  cursor: 'pointer'
};

const langButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  border: '2px solid #3b82f6',
  borderRadius: '0.5rem',
  background: 'white',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '600' as const,
  color: '#3b82f6',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  minWidth: '80px',
  justifyContent: 'center' as const,
  transition: 'all 0.2s'
};

const langDropdownStyle = {
  position: 'absolute' as const,
  right: 0,
  top: '100%',
  marginTop: '0.5rem',
  background: 'white',
  border: '2px solid #3b82f6',
  borderRadius: '0.5rem',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  minWidth: '180px',
  zIndex: 1000,
  overflow: 'hidden' as const,
  animation: 'slideDown 0.2s ease-out'
};

const mobileLinkStyle = {
  textDecoration: 'none',
  color: '#374151',
  fontWeight: '500' as const,
  padding: '0.75rem 0',
  borderBottom: '1px solid #f3f4f6',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'color 0.2s'
};