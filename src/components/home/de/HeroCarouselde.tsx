'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import '@/styles/components/hero-carousel.css';

const slides = [
  {
    title: "Steigern Sie Ihren Online-Umsatz",
    subtitle: "Professionelles SEO & Digitales Marketing",
    description: "Wir helfen Unternehmen, den Umsatz durch strategische Online-Optimierung und digitale Präsenz zu steigern.",
    image: "🚀",
    gradient: "gradient-blue-purple"
  },
  {
    title: "Komplette Geschäftslösungen",
    subtitle: "ERP, POS & Lagerverwaltung",
    description: "Wir implementieren komplette Online-Systeme für Vertrieb, Lager und Unternehmensmanagement.",
    image: "💼",
    gradient: "gradient-green-blue"
  },
  {
    title: "Professionelle Webentwicklung",
    subtitle: "Individuelle Websites & Online-Shops",
    description: "Wir erstellen leistungsstarke Websites und E-Commerce-Shops, die Besucher zu Kunden machen.",
    image: "🌐",
    gradient: "gradient-purple-pink"
  }
];

export default function HeroCarouselDe() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${slide.gradient} ${currentSlide === index ? 'active' : ''}`}
        >
          <div className="hero-content">
            <div className="hero-image">{slide.image}</div>
            <h1 className="hero-title">{slide.title}</h1>
            <h2 className="hero-subtitle">{slide.subtitle}</h2>
            <p className="hero-description">{slide.description}</p>
            <button onClick={handleContactClick} className="hero-cta">
              Jetzt starten <ArrowRight size={20} />
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="carousel-btn carousel-btn-prev"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="carousel-btn carousel-btn-next"
      >
        <ChevronRight size={24} />
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}