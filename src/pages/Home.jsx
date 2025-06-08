// src/pages/Home.jsx
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

function Home() {
  const { t } = useTranslation()
  const modules = ['Sales', 'Finance', 'CRM', 'Stock & ERP', 'Services', 'Projects', 'Website', 'E-commerce', 'Marketing']
  const industries = ['Retail', 'Construction', 'Green Energy', 'Health & Pharma', 'Automotive', 'Manufacturing', 'Logistics', 'Laboratories']

  return (
    <div>
      <Helmet>
        <title>Digicyfr - Business Process Solutions</title>
        <meta name="description" content="Digicyfr provides innovative ERP solutions to streamline and optimize business processes with Odoo. Empower your business today!" />
        <meta name="keywords" content="ERP, Odoo, business process solutions, digital transformation, business optimization" />
      </Helmet>
      <Hero />
      <main className="py-20 bg-gray-50">
        <section className="value-prop mb-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t('valueProp')}
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {t('valueDescription')}
            </p>
          </div>
        </section>
        <section className="modules mb-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t('modules')}
            </h3>
            <ServicesGrid items={modules} />
          </div>
        </section>
        <section className="industries mb-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t('industries')}
            </h3>
            <ServicesGrid items={industries} />
          </div>
        </section>
        <section className="solutions mb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t('quickStartTitle')}
            </h3>
            <p className="text-lg leading-relaxed">
              {t('quickStartText')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
