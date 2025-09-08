'use client';
import { Search, Globe, Smartphone, ShoppingCart, CheckCircle, Link } from 'lucide-react';
import '@/styles/components/services-section.css';

const services = [
  {
    icon: <Search className="service-icon" />,
    title: "Optimisation SEO",
    description: "Améliorez votre classement dans les moteurs de recherche et votre visibilité en ligne grâce à des stratégies SEO professionnelles.",
    features: ["Recherche de mots-clés", "SEO sur la page", "SEO technique", "SEO local"]
  },
  {
    icon: <Globe className="service-icon" />,
    title: "Gestion Google Business",
    description: "Configuration et gestion complètes du profil Google Business pour une visibilité locale optimale.",
    features: ["Configuration du profil", "Gestion des avis", "Annuaires locaux", "Optimisation sur Maps"]
  },
  {
    icon: <Smartphone className="service-icon" />,
    title: "Développement de sites web",
    description: "Sites web professionnels et boutiques en ligne qui convertissent les visiteurs en clients.",
    features: ["Design responsive", "E-commerce", "Intégration CMS", "Optimisation mobile"]
  },
  {
    icon: <ShoppingCart className="service-icon" />,
    title: "ERP & Outils d'entreprise",
    description: "Systèmes complets de gestion d'entreprise pour les ventes, l'inventaire et les opérations.",
    features: ["Gestion des ventes", "Contrôle des stocks", "Systèmes POS", "Analytique"]
  },
  {
    icon: <Link className="service-icon" />,
    title: "Intégration Système",
    description: "Intégration transparente POS et plateformes de livraison. Connectez-vous avec Glovo, Pyszne, UberEats, Bolt Food et Wolt via nos modules Odoo.",
    features: ["Intégration Système POS", "Connectivité Plateformes de Livraison", "Développement Modules Odoo", "Solutions API Personnalisées"]
  }
];

export default function ServicesSectionFr() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-description">
            Nous aidons les entreprises à augmenter leurs ventes grâce à des solutions digitales complètes à de meilleurs prix.
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