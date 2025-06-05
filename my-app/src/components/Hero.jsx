import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="hero min-h-screen flex items-center pt-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent animate-fade-in">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('heroSubtitle')}
        </p>
        <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg inline-block transition" style={{ animationDelay: '0.4s' }}>
          {t('exploreServices')}
        </Link>
      </div>
    </section>
  )
}

export default Hero
