import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactSection from '@/components/home/ContactSection';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
  // Extract locale but prefix with underscore to indicate intentionally unused
  const { locale: _locale } = await params;
  
  return (
    <div className="contact-page">
      <Header />
      <main className="main-content" style={{ paddingTop: '80px' }}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}