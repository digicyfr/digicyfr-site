import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="py-8 border-t border-gray-800 text-center text-gray-400">
      <p>{t('footer')}</p>
    </footer>
  )
}

export default Footer
