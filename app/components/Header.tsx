import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Five Star Thailand Tours</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/locations/phi-phi">Phi Phi Tours</Link></li>
            <li><Link href="/locations/james-bond">James Bond Tours</Link></li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

