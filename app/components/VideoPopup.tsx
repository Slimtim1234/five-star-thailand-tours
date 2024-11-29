'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative h-96">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/phi-phi-island-adventure-tours.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white rounded-full p-4 text-yellow-500 hover:text-yellow-600 transition duration-300"
          >
            <Play size={48} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              &times;
            </button>
            <video
              src="/videos/phi-phi-island-tour.mp4"
              controls
              autoPlay
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}

