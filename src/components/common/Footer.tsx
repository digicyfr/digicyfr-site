'use client';
import { useTranslations } from 'next-intl';
import '@/styles/components/footer.css';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">{t('company')}</h3>
            <p className="footer-description">
              {t('description')}
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">SEO Optimization</a>
              <a href="#" className="footer-link">Google Business</a>
              <a href="#" className="footer-link">Web Development</a>
              <a href="#" className="footer-link">ERP Solutions</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Support</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">24/7 Support</a>
              <a href="#" className="footer-link">Documentation</a>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">FAQ</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Company</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Portfolio</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
