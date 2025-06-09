'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import '@/styles/components/hero-carousel.css';

const slides = [
  {
    title: "Boost Your Online Sales",
    subtitle: "Professional SEO & Digital Marketing",
    description: "We help companies increase sales through strategic online optimization and digital presence.",
    image: "🚀",
    gradient: "gradient-blue-purple"
  },
  {
    title: "Complete Business Solutions",
    subtitle: "ERP, POS & Inventory Management",
    description: "Setup complete online systems for sales, inventory, and business management.",
    image: "💼",
    gradient: "gradient-green-blue"
  },
  {
    title: "Professional Web Development",
    subtitle: "Custom Websites & Online Stores",
    description: "Create powerful websites and e-commerce stores that convert visitors to customers.",
    image: "🌐",
    gradient: "gradient-purple-pink"
  }
];

export default function HeroCarousel() {
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
              Get Started <ArrowRight size={20} />
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
