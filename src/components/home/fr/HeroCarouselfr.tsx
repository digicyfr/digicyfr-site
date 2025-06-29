'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import '@/styles/components/hero-carousel.css';

const slides = [
  {
    title: "Boostez vos ventes en ligne",
    subtitle: "SEO professionnel & marketing digital",
    description: "Nous aidons les entreprises à augmenter leurs ventes grâce à une optimisation stratégique en ligne et une présence digitale.",
    image: "🚀",
    gradient: "gradient-blue-purple"
  },
  {
    title: "Solutions d'entreprise complètes",
    subtitle: "ERP, POS & gestion des stocks",
    description: "Mettez en place des systèmes en ligne complets pour la gestion des ventes, des stocks et de l'entreprise.",
    image: "💼",
    gradient: "gradient-green-blue"
  },
  {
    title: "Développement web professionnel",
    subtitle: "Sites web personnalisés & boutiques en ligne",
    description: "Créez des sites web puissants et des boutiques e-commerce qui transforment les visiteurs en clients.",
    image: "🌐",
    gradient: "gradient-purple-pink"
  }
];

export default function HeroCarouselFr() {
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
              Commencer <ArrowRight size={20} />
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