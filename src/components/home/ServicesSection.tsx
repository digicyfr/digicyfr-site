'use client';
import { Search, Globe, Smartphone, ShoppingCart, CheckCircle } from 'lucide-react';
import '@/styles/components/services-section.css';

const services = [
  {
    icon: <Search className="service-icon" />,
    title: "SEO Optimization",
    description: "Improve your search rankings and online visibility with professional SEO strategies.",
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Local SEO"]
  },
  {
    icon: <Globe className="service-icon" />,
    title: "Google Business Management",
    description: "Complete Google Business profile setup and management for local visibility.",
    features: ["Profile Setup", "Review Management", "Local Listings", "Map Optimization"]
  },
  {
    icon: <Smartphone className="service-icon" />,
    title: "Website Development",
    description: "Professional websites and online stores that convert visitors to customers.",
    features: ["Responsive Design", "E-commerce", "CMS Integration", "Mobile Optimization"]
  },
  {
    icon: <ShoppingCart className="service-icon" />,
    title: "ERP & Business Tools",
    description: "Complete business management systems for sales, inventory, and operations.",
    features: ["Sales Management", "Inventory Control", "POS Systems", "Analytics"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            We help companies increase sales through comprehensive digital solutions at better prices
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
