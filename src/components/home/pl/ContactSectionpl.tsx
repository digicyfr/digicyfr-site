'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Star, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '@/styles/components/contact-section.css';

export default function ContactSectionPl() {
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
        time: new Date().toLocaleString('pl-PL', {
          timeZone: 'Europe/Warsaw',
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
    'Lepsze ceny niż u konkurencji',
    'Udokumentowane sukcesy',
    'Wsparcie techniczne 24/7',
    'Kompleksowe rozwiązania biznesowe',
    'Szybka realizacja projektów'
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skontaktuj się z nami</h2>
          <p className="section-description">
            Gotowy, aby rozwinąć swój biznes? Skontaktuj się z nami po bezpłatną konsultację
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Informacje kontaktowe</h3>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">Email</div>
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
                  <div className="contact-label">Lokalizacja</div>
                  <div className="contact-value">Warszawa, Polska</div>
                </div>
              </div>
            </div>

            <div className="service-area">
              <h4 className="service-area-title">Obszar działania</h4>
              <p className="service-area-text">
                🇵🇱 Polska & 🇪🇺 Kraje UE
              </p>
            </div>

            <div className="why-choose-us">
              <h4 className="why-choose-title">Dlaczego Digicyfr?</h4>
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
                  ✅ Wiadomość została wysłana! Skontaktujemy się wkrótce.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ❌ Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Imię i nazwisko *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder="Twoje imię i nazwisko"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder="przyklad@digicyfr.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Wiadomość *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  disabled={isLoading}
                  placeholder="Opisz swój projekt i jak możemy pomóc rozwinąć Twój biznes..."
                />
              </div>

              <button type="submit" className="form-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij wiadomość <ArrowRight size={20} />
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