// Fixed src/components/home/ContactSection.tsx

'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Star, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '@/styles/components/contact-section.css';

export default function ContactSection() {
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
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      
      // Log detailed error for debugging
      if (error.text) {
        console.error('Error details:', error.text);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const whyChooseUs = [
    'Better pricing than competitors',
    'Proven track record of success',
    '24/7 technical support',
    'Complete business solutions',
    'Fast project delivery'
  ];

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Ready to boost your business? Contact us for a free consultation
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            
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
                  <div className="contact-label">Phone</div>
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
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Warsaw, Poland</div>
                </div>
              </div>
            </div>

            <div className="service-area">
              <h4 className="service-area-title">Service Coverage</h4>
              <p className="service-area-text">
                🇵🇱 Poland & 🇪🇺 EU Countries
              </p>
            </div>

            <div className="why-choose-us">
              <h4 className="why-choose-title">Why Choose Digicyfr ?</h4>
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
                  ✅ Message sent successfully! We'll contact you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ❌ Failed to send message. Please try again or email us directly at {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
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
                  placeholder="Your full name"
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
                  placeholder="example@digicyfr.com"
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
                  placeholder="Tell us about your project and how we can help boost your business..."
                />
              </div>

              <button type="submit" className="form-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight size={20} />
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