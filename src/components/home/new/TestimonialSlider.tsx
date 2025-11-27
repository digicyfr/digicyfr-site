'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import '@/styles/components/testimonial-slider.css';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  avatar?: string;
}

export default function TestimonialSlider() {
  const t = useTranslations('home.testimonials');

  // Build testimonials array from translations
  const testimonials: Testimonial[] = [
    { id: 1, quote: t('items.0.quote'), name: t('items.0.name') },
    { id: 2, quote: t('items.1.quote'), name: t('items.1.name') },
    { id: 3, quote: t('items.2.quote'), name: t('items.2.name') },
  ];

  // centerIndex tracks which testimonial is in the center (0 = Sarah, 1 = Michael, 2 = Anna)
  const [centerIndex, setCenterIndex] = useState(1); // Start with Michael in center
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalCards = testimonials.length;

  // Get position class for each card based on centerIndex
  const getPositionClass = (cardIndex: number) => {
    const leftIndex = (centerIndex - 1 + totalCards) % totalCards;
    const rightIndex = (centerIndex + 1) % totalCards;

    if (cardIndex === centerIndex) return 'position-center';
    if (cardIndex === leftIndex) return 'position-left';
    if (cardIndex === rightIndex) return 'position-right';
    return '';
  };

  // Get order for CSS flexbox (ensures correct visual order)
  const getOrder = (cardIndex: number) => {
    const leftIndex = (centerIndex - 1 + totalCards) % totalCards;
    const rightIndex = (centerIndex + 1) % totalCards;

    if (cardIndex === leftIndex) return 1;
    if (cardIndex === centerIndex) return 2;
    if (cardIndex === rightIndex) return 3;
    return 4;
  };

  // Click right arrow = next card comes to center (rotate right)
  const nextSlide = useCallback(() => {
    setCenterIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  // Click left arrow = previous card comes to center (rotate left)
  const prevSlide = useCallback(() => {
    setCenterIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Section Header */}
        <div className="testimonial-header">
          <h2 className="testimonial-title">{t('title')}</h2>
        </div>

        {/* Slider Container */}
        <div
          className="testimonial-slider-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Arrow */}
          <button
            className="testimonial-nav-btn testimonial-nav-prev"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Container */}
          <div className="testimonial-cards-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card-wrapper ${getPositionClass(index)}`}
                style={{ order: getOrder(index) }}
              >
                <div className="testimonial-card">
                  {/* Top White Section */}
                  <div className="testimonial-card-top">
                    {/* Avatar */}
                    <div className="testimonial-avatar">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      ) : (
                        <User size={32} strokeWidth={1.5} />
                      )}
                    </div>
                  </div>

                  {/* Bottom Green Section */}
                  <div className="testimonial-card-bottom">
                    {/* Opening Quote */}
                    <span className="testimonial-quote-mark opening">&ldquo;</span>

                    {/* Quote Text */}
                    <p className="testimonial-quote">
                      {testimonial.quote}
                    </p>

                    {/* Closing Quote */}
                    <span className="testimonial-quote-mark closing">&rdquo;</span>

                    {/* Name */}
                    <div className="testimonial-author">
                      <span className="testimonial-name">{testimonial.name}</span>
                      <span className="testimonial-name-underline"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="testimonial-nav-btn testimonial-nav-next"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === centerIndex ? 'active' : ''}`}
              onClick={() => setCenterIndex(index)}
              aria-label={`Show ${testimonials[index].name} testimonial`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
