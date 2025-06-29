import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function PortfolioPage({ params }: Props) {
  // Extract locale but prefix with underscore to indicate intentionally unused
  const { locale: _locale } = await params;

  return (
    <div className="portfolio-page">
      <Header />
      <main className="min-h-screen bg-gray-50 py-16" style={{ paddingTop: '80px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-600">
                Discover our latest projects and success stories
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to our portfolio section. Here you can explore the various projects 
                we've completed for our clients, showcasing our expertise in digital marketing, 
                web development, and business solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each project represents our commitment to delivering high-quality results 
                that help businesses grow and succeed in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}