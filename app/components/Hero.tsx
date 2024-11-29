import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/phi-phi-island-tour.jpg"
        alt="Phi Phi Island Tour"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
        <p className="text-sm font-bold uppercase mb-4">Local Guides, Authentic Experiences®</p>
        <h1 className="text-5xl font-bold mb-4">PRIVATE PHI PHI ISLAND TOUR</h1>
        <p className="text-xl mb-8">Better Tours, Perfected Through Experience.</p>
        <div className="space-x-4">
          <Link href="/book/phi-phi-package-a" className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Book A Private Boat From Phi Phi
          </Link>
          <Link href="/book/phuket-package-a" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-500 transition duration-300">
            Book A Private Boat From Phuket
          </Link>
        </div>
        <p className="absolute bottom-4 left-4 text-sm">Maya Bay, Phi Phi Island Tour, Krabi.</p>
      </div>
    </div>
  )
}

