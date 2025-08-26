'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';
import '@/styles/components/contact-section.css';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
    // Initialize EmailJS after component mounts
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Create form data object with proper field names for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
        time: new Date().toLocaleString('en-US', {
          timeZone: 'Europe/Warsaw',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Use emailjs.send instead of sendForm for better control
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );
      
      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      
      // Log detailed error for debugging
      if (error && typeof error === 'object' && 'text' in error) {
        console.error('Error details:', (error as { text: string }).text);
      }
    } finally {
      setIsLoading(false);
    }
  };


  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-description">
            {t('description')}
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">{t('info.title')}</h3>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">{t('info.email')}</div>
                  <div className="contact-value">
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">{t('info.phone')}</div>
                  <div className="contact-value">
                    {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">{t('info.location')}</div>
                  <div className="contact-value">{t('info.locationValue')}</div>
                </div>
              </div>
            </div>

            <div className="service-area">
              <h4 className="service-area-title">{t('coverage.title')}</h4>
              <p className="service-area-text">
                {t('coverage.text')}
              </p>
            </div>

          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Status Messages */}
              {status === 'success' && (
                <div className="form-status success">
                  ✅ {t('form.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ❌ {t('form.error')} {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">{t('form.name')} *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder={t('form.namePlaceholder')}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('form.email')} *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('form.message')} *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  disabled={isLoading}
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              <button type="submit" className="form-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    {t('form.sending')}
                  </>
                ) : (
                  <>
                    {t('form.send')} <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}