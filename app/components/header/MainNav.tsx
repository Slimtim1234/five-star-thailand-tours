import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MainNav: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/five-star-thailand-tour-logo.png" 
            alt="Five Star Thailand Tours" 
            width={100} 
            height={100}
          />
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-700 hover:text-yellow-500">Home</Link></li>
          <li><Link href="/phi-phi-island-tours" className="text-gray-700 hover:text-yellow-500">Phi Phi Island Tours</Link></li>
          <li><Link href="/james-bond-tours" className="text-gray-700 hover:text-yellow-500">James Bond Tours</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link></li>
        </ul>
        <a href="https://wa.me/66925550789" className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full">
          <Image 
            src="/whatsapp-icon.png" 
            alt="WhatsApp" 
            width={24} 
            height={24} 
            className="mr-2"
          />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  )
}

export default MainNav

