import Header from '@/components/common/Header';
import HeroSection from '@/components/home/new/HeroSection';
import EmpoweringSection from '@/components/home/new/EmpoweringSection';
import ServicesSection from '@/components/home/new/ServicesSection';
import PartnersSection from '@/components/home/new/PartnersSection';
import StatsSection from '@/components/home/new/StatsSection';
import TestimonialSlider from '@/components/home/new/TestimonialSlider';
import ContactSection from '@/components/home/new/ContactSection';
import Footer from '@/components/common/Footer';

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
        <HeroSection />
        <EmpoweringSection />
        <ServicesSection />
        <PartnersSection />
        <StatsSection />
        <TestimonialSlider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
