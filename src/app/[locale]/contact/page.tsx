'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/components/contact-page.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize EmailJS
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@digicyfr.com';

      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing');
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: companyEmail,
        time: new Date().toLocaleString('en-US', { timeZone: 'Europe/Warsaw' }),
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@digicyfr.com';
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+48 695 016 33';

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">{t('title')}</h1>
          <p className="contact-hero-description">{t('description')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="contact-content-container">
          <div className="contact-content-grid">

            {/* Left Side - Contact Info */}
            <div className="contact-info-card">
              <h2 className="contact-info-title">{t('info.title')}</h2>

              <div className="contact-info-list">
                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={28} />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{t('info.email')}</span>
                    <a href={`mailto:${companyEmail}`} className="contact-info-value">
                      {companyEmail}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={28} />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{t('info.phone')}</span>
                    <a href={`tel:${companyPhone}`} className="contact-info-value">
                      {companyPhone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={28} />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{t('info.location')}</span>
                    <span className="contact-info-value">{t('info.locationValue')}</span>
                  </div>
                </div>

                {/* Service Coverage */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Globe size={28} />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{t('coverage.title')}</span>
                    <span className="contact-info-value">{t('coverage.text')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="contact-form-card">
              <h2 className="contact-form-title">{t('form.send')}</h2>
              <p className="contact-form-helper">{t('form.helper')}</p>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('form.namePlaceholder')}
                    required
                    className="form-input"
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('form.emailPlaceholder')}
                    required
                    className="form-input"
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {t('form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.messagePlaceholder')}
                    required
                    rows={6}
                    className="form-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  {isSubmitting ? t('form.sending') : t('form.send')}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="form-status success">{t('form.success')}</p>
                )}
                {submitStatus === 'error' && (
                  <p className="form-status error">
                    {t('form.error')} {companyEmail}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
