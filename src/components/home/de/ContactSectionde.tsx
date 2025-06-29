'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Star, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '@/styles/components/contact-section.css';

export default function ContactSectionDe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
        time: new Date().toLocaleString('de-DE', {
          timeZone: 'Europe/Berlin',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );
      
      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      if (error.text) {
        console.error('Error details:', error.text);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const whyChooseUs = [
    'Bessere Preise als die Konkurrenz',
    'Nachweisliche Erfolge',
    '24/7 technischer Support',
    'Umfassende Geschäftslösungen',
    'Schnelle Projektabwicklung'
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kontaktieren Sie uns</h2>
          <p className="section-description">
            Bereit, Ihr Unternehmen zu stärken? Kontaktieren Sie uns für eine kostenlose Beratung
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Kontaktinformationen</h3>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">E-Mail</div>
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
                  <div className="contact-label">Telefon</div>
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
                  <div className="contact-label">Standort</div>
                  <div className="contact-value">Warschau, Polen</div>
                </div>
              </div>
            </div>

            <div className="service-area">
              <h4 className="service-area-title">Servicegebiet</h4>
              <p className="service-area-text">
                🇵🇱 Polen & 🇪🇺 EU-Länder
              </p>
            </div>

            <div className="why-choose-us">
              <h4 className="why-choose-title">Warum Digicyfr?</h4>
              <div className="why-choose-list">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="why-choose-item">
                    <Star size={16} className="why-choose-star" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Status Messages */}
              {status === 'success' && (
                <div className="form-status success">
                  ✅ Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ❌ Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">E-Mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder="beispiel@digicyfr.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nachricht *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  disabled={isLoading}
                  placeholder="Beschreiben Sie Ihr Projekt und wie wir Ihr Unternehmen unterstützen können..."
                />
              </div>

              <button type="submit" className="form-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Senden...
                  </>
                ) : (
                  <>
                    Nachricht senden <ArrowRight size={20} />
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