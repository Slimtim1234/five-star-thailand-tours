import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    title: 'Krabi 4 Island Tour',
    image: '/images/krabi-4-island-tour.png',
    status: 'Coming Soon',
  },
  {
    title: 'James Bond Island Tour',
    image: '/images/james-bond-island-tour.jpg',
    link: '/book/james-bond-package-a',
    buttonText: 'Book From Phuket',
  },
]

export default function OtherDestinations() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Other Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={destination.image} alt={destination.title} width={800} height={600} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{destination.title}</h3>
                {destination.link ? (
                  <Link href={destination.link} className="bg-yellow-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
                    {destination.buttonText}
                  </Link>
                ) : (
                  <span className="bg-gray-300 text-gray-600 px-6 py-2 rounded-full text-lg font-semibold">
                    {destination.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

