'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Star, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '@/styles/components/contact-section.css';

export default function ContactSectionFr() {
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
        time: new Date().toLocaleString('fr-FR', {
          timeZone: 'Europe/Paris',
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
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      if (error && typeof error === 'object' && 'text' in error) {
        console.error('Error details:', (error as { text: string }).text);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const whyChooseUs = [
    'Des prix plus avantageux que la concurrence',
    'Un historique de succès prouvé',
    'Support technique 24/7',
    'Solutions d\'entreprise complètes',
    'Livraison rapide des projets'
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-description">
            Prêt à booster votre entreprise ? Contactez-nous pour une consultation gratuite
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Informations de contact</h3>
            
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
                  <div className="contact-label">Téléphone</div>
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
                  <div className="contact-label">Localisation</div>
                  <div className="contact-value">Varsovie, Pologne</div>
                </div>
              </div>
            </div>

            <div className="service-area">
              <h4 className="service-area-title">Zone de service</h4>
              <p className="service-area-text">
                🇵🇱 Pologne & 🇪🇺 Pays de l'UE
              </p>
            </div>

            <div className="why-choose-us">
              <h4 className="why-choose-title">Pourquoi choisir Digicyfr ?</h4>
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
                  ✅ Message envoyé avec succès ! Nous vous contacterons bientôt.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ❌ Échec de l'envoi du message. Veuillez réessayer ou envoyez-nous un email directement à {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Nom *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  disabled={isLoading}
                  placeholder="Votre nom complet"
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
                  placeholder="exemple@digicyfr.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  disabled={isLoading}
                  placeholder="Parlez-nous de votre projet et comment nous pouvons aider à booster votre entreprise..."
                />
              </div>

              <button type="submit" className="form-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Envoi...
                  </>
                ) : (
                  <>
                    Envoyer le message <ArrowRight size={20} />
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