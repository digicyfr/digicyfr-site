'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Smile, MapPin, CheckCircle, Headphones } from 'lucide-react';
import { useTranslations } from 'next-intl';
import '@/styles/components/stats-section.css';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  isNumber: boolean;
  target: number;
}

export default function StatsSection() {
  const t = useTranslations('home.stats');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Stat[] = [
    {
      icon: <Smile strokeWidth={1.5} />,
      value: '10+',
      label: t('happyClients'),
      isNumber: true,
      target: 10,
    },
    {
      icon: <MapPin strokeWidth={1.5} />,
      value: '50+',
      label: t('locations'),
      isNumber: true,
      target: 50,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: '100%',
      label: t('successRate'),
      isNumber: true,
      target: 100,
    },
    {
      icon: <Headphones strokeWidth={1.5} />,
      value: '24/7',
      label: t('support'),
      isNumber: false,
      target: 0,
    },
  ];

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      {/* Polygonal Background */}
      <div className="stats-bg-overlay"></div>

      <div className="stats-container">
        {/* Header */}
        <div className="stats-header">
          <h2 className="stats-title">{t('title')}</h2>
          <p className="stats-subtitle">{t('subtitle')}</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-value">
                {isVisible ? (
                  <CountUp
                    target={stat.target}
                    suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                    isNumber={stat.isNumber}
                    displayValue={stat.value}
                  />
                ) : (
                  '0'
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CountUp animation component
interface CountUpProps {
  target: number;
  suffix: string;
  isNumber: boolean;
  displayValue: string;
}

function CountUp({ target, suffix, isNumber, displayValue }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isNumber) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isNumber]);

  if (!isNumber) {
    return <span>{displayValue}</span>;
  }

  return <span>{count}{suffix}</span>;
}
