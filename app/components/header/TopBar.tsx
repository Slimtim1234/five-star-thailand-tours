import React from 'react'
import Link from 'next/link'
import CurrencySwitcher from './CurrencySwitcher'

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#00af87] text-white py-2 px-4 flex justify-between items-center">
      <Link href="https://www.tripadvisor.com/Attraction_Review-g303908-d26852417-Reviews-Phi_Phi_Island_Private_Boat_Tours_by_Five_Star_Thailand-Ko_Phi_Phi_Don_Ao_Nang_K.html" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center">
        <img src="/images/tripadvisor-icon.png" alt="Tripadvisor Icon" className="w-6 h-6 mr-2" />
        <span className="font-bobbyjonessoft">We're On Tripadvisor</span>
      </Link>
      <CurrencySwitcher />
    </div>
  )
}

export default TopBar

