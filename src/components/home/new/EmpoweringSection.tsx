'use client';

import { useTranslations } from 'next-intl';
import '@/styles/components/empowering-section.css';

export default function EmpoweringSection() {
  const t = useTranslations('home.empowering');

  return (
    <section className="empowering-section" id="empowering">
      <div className="empowering-container">
        <div className="empowering-content">
          <h2 className="empowering-title">{t('title')}</h2>
          <p className="empowering-description">{t('description')}</p>
          <a href="#contact" className="empowering-btn">
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
