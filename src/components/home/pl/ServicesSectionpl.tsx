'use client';
import { Search, Globe, Smartphone, ShoppingCart, CheckCircle, Link } from 'lucide-react';
import '@/styles/components/services-section.css';

const services = [
  {
    icon: <Search className="service-icon" />,
    title: "Optymalizacja SEO",
    description: "Popraw swoją pozycję w wyszukiwarkach i widoczność online dzięki profesjonalnym strategiom SEO.",
    features: ["Badanie słów kluczowych", "SEO na stronie", "SEO techniczne", "SEO lokalne"]
  },
  {
    icon: <Globe className="service-icon" />,
    title: "Zarządzanie Google Business",
    description: "Kompleksowa konfiguracja i zarządzanie profilem Google Business dla lokalnej widoczności.",
    features: ["Konfiguracja profilu", "Zarządzanie opiniami", "Lokalne katalogi", "Optymalizacja na Mapach"]
  },
  {
    icon: <Smartphone className="service-icon" />,
    title: "Tworzenie stron internetowych",
    description: "Profesjonalne strony internetowe i sklepy online, które zamieniają odwiedzających w klientów.",
    features: ["Responsywny design", "E-commerce", "Integracja CMS", "Optymalizacja mobilna"]
  },
  {
    icon: <ShoppingCart className="service-icon" />,
    title: "ERP i narzędzia biznesowe",
    description: "Kompleksowe systemy zarządzania firmą dla sprzedaży, magazynu i operacji.",
    features: ["Zarządzanie sprzedażą", "Kontrola magazynu", "Systemy POS", "Analityka"]
  },
  {
    icon: <Link className="service-icon" />,
    title: "Integracja Systemów",
    description: "Bezproblemowa integracja POS i platform dostaw. Połącz się z Glovo, Pyszne, UberEats, Bolt Food i Wolt przez nasze moduły Odoo.",
    features: ["Integracja Systemu POS", "Połączenie z Platformami Dostaw", "Rozwój Modułów Odoo", "Niestandardowe Rozwiązania API"]
  }
];

export default function ServicesSectionPl() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nasze usługi</h2>
          <p className="section-description">
            Pomagamy firmom zwiększać sprzedaż dzięki kompleksowym rozwiązaniom cyfrowym w lepszych cenach.
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