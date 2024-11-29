import { notFound } from 'next/navigation'
import Link from 'next/link'

// This would typically come from a database
const locations = {
  'phi-phi': {
    name: 'Phi Phi Islands',
    description: 'Discover the beauty of Phi Phi Islands',
    tours: [
      { id: 'phi-phi-a', name: 'Phi Phi Package A' },
      { id: 'phi-phi-b', name: 'Phi Phi Package B' },
    ],
  },
  'james-bond': {
    name: 'James Bond Island',
    description: 'Explore the famous James Bond Island',
    tours: [
      { id: 'james-bond-a', name: 'James Bond Package A' },
      { id: 'james-bond-b', name: 'James Bond Package B' },
    ],
  },
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = locations[params.location as keyof typeof locations]

  if (!location) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{location.name} Tours</h1>
      <p className="mb-6">{location.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {location.tours.map((tour) => (
          <Link key={tour.id} href={`/tours/${tour.id}`} className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition">
            <h2 className="text-2xl font-semibold mb-2">{tour.name}</h2>
            <p>Click to view tour details and book</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

