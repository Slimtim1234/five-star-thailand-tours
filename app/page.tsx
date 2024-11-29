import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Five Star Thailand Tours</h1>
      <p className="mb-6">Discover the beauty of Thailand with our exclusive tours.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/locations/phi-phi" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition">
          <h2 className="text-2xl font-semibold mb-2">Phi Phi Tours</h2>
          <p>Explore the stunning Phi Phi Islands</p>
        </Link>
        <Link href="/locations/james-bond" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition">
          <h2 className="text-2xl font-semibold mb-2">James Bond Tours</h2>
          <p>Visit the famous James Bond Island</p>
        </Link>
      </div>
    </div>
  )
}

