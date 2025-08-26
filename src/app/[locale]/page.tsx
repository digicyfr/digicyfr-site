import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import ServicesSection from '@/components/home/ServicesSection';
import ManagementSection from '@/components/home/ManagementSection';
import PartnersSection from '@/components/home/PartnersSection';
import ContactSection from '@/components/home/ContactSection';
import '@/styles/components/homepage.css';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  // Extract locale but prefix with underscore to indicate intentionally unused
  const { locale: _locale } = await params;
  
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <HeroCarousel />
        <ServicesSection />
        <ManagementSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
