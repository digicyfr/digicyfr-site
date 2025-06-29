'use client';
import { Search, Globe, Smartphone, ShoppingCart, CheckCircle } from 'lucide-react';
import '@/styles/components/services-section.css';

const services = [
  {
    icon: <Search className="service-icon" />,
    title: "SEO-Optimierung",
    description: "Verbessern Sie Ihr Suchmaschinenranking und Ihre Online-Sichtbarkeit mit professionellen SEO-Strategien.",
    features: ["Keyword-Recherche", "On-Page-SEO", "Technisches SEO", "Lokales SEO"]
  },
  {
    icon: <Globe className="service-icon" />,
    title: "Google Business Verwaltung",
    description: "Komplette Einrichtung und Verwaltung Ihres Google Business-Profils für lokale Sichtbarkeit.",
    features: ["Profil-Einrichtung", "Bewertungsmanagement", "Lokale Verzeichnisse", "Kartenoptimierung"]
  },
  {
    icon: <Smartphone className="service-icon" />,
    title: "Webseitenentwicklung",
    description: "Professionelle Webseiten und Online-Shops, die Besucher in Kunden verwandeln.",
    features: ["Responsives Design", "E-Commerce", "CMS-Integration", "Mobile Optimierung"]
  },
  {
    icon: <ShoppingCart className="service-icon" />,
    title: "ERP & Business-Tools",
    description: "Umfassende Unternehmensmanagementsysteme für Vertrieb, Lager und Betrieb.",
    features: ["Vertriebsmanagement", "Lagerkontrolle", "POS-Systeme", "Analytik"]
  }
];

export default function ServicesSectionDe() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Unsere Dienstleistungen</h2>
          <p className="section-description">
            Wir helfen Unternehmen, ihren Umsatz durch umfassende digitale Lösungen zu besseren Preisen zu steigern.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature">
                    <CheckCircle size={16} className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}