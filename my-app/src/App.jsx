import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const Placeholder = lazy(() => import('./pages/Placeholder'))

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/login" element={<Placeholder title="Sign In" />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
