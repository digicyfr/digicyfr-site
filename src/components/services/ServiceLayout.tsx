import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children, title, description }) => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;