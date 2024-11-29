import Image from 'next/image'
import Link from 'next/link'

const tours = [
  {
    title: 'Phi Phi Island Tour',
    image: '/images/phi-phi-island-tour.jpg',
    links: [
      { text: 'From Krabi', href: '/book/krabi-package-a' },
      { text: 'From Phuket', href: '/book/phuket-package-a' },
    ],
  },
  {
    title: 'James Bond Island Tours',
    image: '/images/james-bond-island-tour.jpg',
    links: [
      { text: 'From Krabi', href: '/book/krabi-package-b' },
      { text: 'From Phuket', href: '/book/phuket-package-b' },
    ],
  },
  {
    title: 'Similan Island Tours',
    image: '/images/similan-island-tour.jpg',
    links: [
      { text: 'From Phuket', href: '/book/phuket-package-c' },
    ],
  },
]

export default function PopularTours() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations: Private Thailand Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={tour.image} alt={tour.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {tour.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href} className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition duration-300">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

