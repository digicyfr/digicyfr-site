// src/pages/Placeholder.jsx
import { Helmet } from 'react-helmet'

function Placeholder({ title }) {
  return (
    <div className="container mx-auto py-20 text-center">
      <Helmet>
        <title>{title} - Digicyfr</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>Content coming soon.</p>
    </div>
  )
}

export default Placeholder
