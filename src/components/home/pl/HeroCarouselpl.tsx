'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import '@/styles/components/hero-carousel.css';

const slides = [
  {
    title: "Zwiększ swoją sprzedaż online",
    subtitle: "Profesjonalne SEO i marketing cyfrowy",
    description: "Pomagamy firmom zwiększać sprzedaż poprzez strategiczną optymalizację online i obecność w internecie.",
    image: "🚀",
    gradient: "gradient-blue-purple"
  },
  {
    title: "Kompleksowe rozwiązania biznesowe",
    subtitle: "ERP, POS i zarządzanie magazynem",
    description: "Wdrażamy kompletne systemy online do sprzedaży, magazynu i zarządzania firmą.",
    image: "💼",
    gradient: "gradient-green-blue"
  },
  {
    title: "Profesjonalne tworzenie stron",
    subtitle: "Dedykowane strony i sklepy internetowe",
    description: "Tworzymy nowoczesne strony i sklepy e-commerce, które zamieniają odwiedzających w klientów.",
    image: "🌐",
    gradient: "gradient-purple-pink"
  }
];

export default function HeroCarouselPl() {
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
              Zacznij teraz <ArrowRight size={20} />
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