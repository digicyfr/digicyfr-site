// Fixed src/components/common/Header.tsx

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

  // Get current locale from URL path
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
        {/* Logo - REPLACE TEXT WITH IMAGE */}
        <Link 
          href={`/${locale}`} 
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <img 
            src="/logo/digicyfr-logo.png" 
            alt="Digicyfr - Digital Solutions"
            style={{
              height: '65px',
              width: 'auto',
              maxWidth: '150px'
            }}
          />
          {/* Fallback text if image doesn't load */}
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '0.5rem',
            display: 'none' // Show only if image fails
          }}>
            Digicyfr
          </span>
        </Link>
        
        {/* Desktop Navigation - FIXED SPACING */}
        <div style={{ 
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          <a 
            href="#home" 
            style={{ 
              textDecoration: 'none', 
              color: '#374151', 
              fontWeight: '500',
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderBottomColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            Home
          </a>
          <a 
            href="#services" 
            style={{ 
              textDecoration: 'none', 
              color: '#374151', 
              fontWeight: '500',
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderBottomColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            Services
          </a>
          <a 
            href="#partners" 
            style={{ 
              textDecoration: 'none', 
              color: '#374151', 
              fontWeight: '500',
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderBottomColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            Partners
          </a>
          <a 
            href="#contact" 
            style={{ 
              textDecoration: 'none', 
              color: '#374151', 
              fontWeight: '500',
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderBottomColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            Contact
          </a>
        </div>

        {/* Right Side: Language + Mobile Menu */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          flexShrink: 0 
        }}>
          
          {/* Language Switcher */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                border: '2px solid #3b82f6',
                borderRadius: '0.5rem',
                background: 'white',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#3b82f6',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                minWidth: '80px',
                justifyContent: 'center'
              }}
            >
              <span className="dropdown-flag">{currentLocale?.flag || '🇺🇸'}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                {(currentLocale?.code || 'en').toUpperCase()}
              </span>
              <ChevronDown size={14} style={{ 
                transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }} />
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: '100%',
                marginTop: '0.5rem',
                background: 'white',
                border: '2px solid #3b82f6',
                borderRadius: '0.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                minWidth: '180px',
                zIndex: 1000,
                overflow: 'hidden'
              }}>
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
                      transition: 'background-color 0.2s',
                      backgroundColor: loc.code === locale ? '#f0f9ff' : 'white'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = loc.code === locale ? '#f0f9ff' : 'white'}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#374151'
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - IMPROVED */}
      {isMenuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: '#374151', 
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid #f3f4f6'
              }}
            >
              🏠 Home
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: '#374151', 
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid #f3f4f6'
              }}
            >
              🛠️ Services
            </a>
            <a 
              href="#partners" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: '#374151', 
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid #f3f4f6'
              }}
            >
              🤝 Partners
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: '#374151', 
                fontWeight: '500',
                padding: '0.75rem 0'
              }}
            >
              📞 Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}