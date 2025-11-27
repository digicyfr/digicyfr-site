import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
// import ContactSection from '@/components/home/ContactSection'; // TODO: Update path or recreate component

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
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-center text-gray-600">Contact section coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}