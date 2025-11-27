import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ServicesSection from '@/components/home/new/ServicesSection';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: Props) {
  // Extract locale but prefix with underscore to indicate intentionally unused
  const { locale: _locale } = await params;

  return (
    <div className="services-page">
      <Header />
      <main className="main-content" style={{ paddingTop: '80px' }}>
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-gray-600">
                  Comprehensive digital solutions for your business growth
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Digicyfr, we offer a complete range of digital services designed to 
                  help your business thrive in the modern marketplace. From web development 
                  to digital marketing, we have the expertise to take your business to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}