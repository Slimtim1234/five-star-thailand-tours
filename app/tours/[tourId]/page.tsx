import { notFound } from 'next/navigation'

// This would typically come from a database
const tours = {
  'phi-phi-a': {
    name: 'Phi Phi Package A',
    description: 'A wonderful tour of Phi Phi Islands',
    price: 1000,
  },
  'phi-phi-b': {
    name: 'Phi Phi Package B',
    description: 'An extended tour of Phi Phi Islands',
    price: 1500,
  },
  'james-bond-a': {
    name: 'James Bond Package A',
    description: 'Visit the iconic James Bond Island',
    price: 1200,
  },
  'james-bond-b': {
    name: 'James Bond Package B',
    description: 'Explore James Bond Island and surrounding areas',
    price: 1800,
  },
}

export default function TourPage({ params }: { params: { tourId: string } }) {
  const tour = tours[params.tourId as keyof typeof tours]

  if (!tour) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{tour.name}</h1>
      <p className="mb-6">{tour.description}</p>
      <p className="text-2xl font-semibold mb-6">Price: ${tour.price}</p>
      <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
        Book Now
      </button>
    </div>
  )
}

