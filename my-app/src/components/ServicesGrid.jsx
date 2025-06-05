function ServicesGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item} className="service-card p-6 text-center bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
          {item}
        </div>
      ))}
    </div>
  )
}

export default ServicesGrid
