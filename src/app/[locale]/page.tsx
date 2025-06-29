import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// HeroCarousel imports
import HeroCarousel from '@/components/home/HeroCarousel';
import HeroCarouselFr from '@/components/home/fr/HeroCarouselfr';
import HeroCarouselDe from '@/components/home/de/HeroCarouselde';
import HeroCarouselPl from '@/components/home/pl/HeroCarouselpl';

// ServicesSection imports
import ServicesSection from '@/components/home/ServicesSection';
import ServicesSectionFr from '@/components/home/fr/ServicesSectionfr';
import ServicesSectionDe from '@/components/home/de/ServicesSectionde';
import ServicesSectionPl from '@/components/home/pl/ServicesSectionpl';

// PartnersSection imports
import PartnersSection from '@/components/home/PartnersSection';
import PartnersSectionFr from '@/components/home/fr/PartnersSectionfr';
import PartnersSectionDe from '@/components/home/de/PartnersSectionde';
import PartnersSectionPl from '@/components/home/pl/PartnersSectionpl';

// ContactSection imports
import ContactSection from '@/components/home/ContactSection';
import ContactSectionFr from '@/components/home/fr/ContactSectionfr';
import ContactSectionDe from '@/components/home/de/ContactSectionde';
import ContactSectionPl from '@/components/home/pl/ContactSectionpl';

import '@/styles/components/homepage.css';

<<<<<<< HEAD
interface Props {
=======
const heroCarousels: Record<string, React.ComponentType> = {
  en: HeroCarousel,
  fr: HeroCarouselFr,
  de: HeroCarouselDe,
  pl: HeroCarouselPl,
};

const servicesSections: Record<string, React.ComponentType> = {
  en: ServicesSection,
  fr: ServicesSectionFr,
  de: ServicesSectionDe,
  pl: ServicesSectionPl,
};

const partnersSections: Record<string, React.ComponentType> = {
  en: PartnersSection,
  fr: PartnersSectionFr,
  de: PartnersSectionDe,
  pl: PartnersSectionPl,
};

const contactSections: Record<string, React.ComponentType> = {
  en: ContactSection,
  fr: ContactSectionFr,
  de: ContactSectionDe,
  pl: ContactSectionPl,
};

export default async function HomePage({
  params
}: {
>>>>>>> fd65794198a02fcae1bf6b565d1bc9475f572bc5
  params: Promise<{ locale: string }>;
}

<<<<<<< HEAD
export default async function HomePage({ params }: Props) {
  // Extract locale but prefix with underscore to indicate intentionally unused
  const { locale: _locale } = await params;
  
=======
  // Fallback to 'en' if locale not found
  const Hero = heroCarousels[locale] || HeroCarousel;
  const Services = servicesSections[locale] || ServicesSection;
  const Partners = partnersSections[locale] || PartnersSection;
  const Contact = contactSections[locale] || ContactSection;

>>>>>>> fd65794198a02fcae1bf6b565d1bc9475f572bc5
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <Hero />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}