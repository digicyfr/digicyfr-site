import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img src="/vite.svg" alt="Digicyfr Logo" className="h-10 w-auto" />
        </NavLink>
        <button onClick={() => setOpen(!open)} className="text-gray-700 md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`space-x-6 md:flex ${open ? 'block' : 'hidden'}`}>
          <NavLink to="/" className="text-blue-600 font-semibold" onClick={() => setOpen(false)}>
            {t('home')}
          </NavLink>
          <NavLink to="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>
            {t('services')}
          </NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>
            {t('about')}
          </NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>
            {t('contact')}
          </NavLink>
          <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition" onClick={() => setOpen(false)}>
            {t('signIn')}
          </NavLink>
          <select onChange={(e) => changeLang(e.target.value)} value={i18n.language} className="border ml-2 p-1 rounded">
            <option value="en">EN</option>
            <option value="pl">PL</option>
            <option value="de">DE</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
