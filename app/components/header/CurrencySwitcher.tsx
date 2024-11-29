'use client'

import React, { useState } from 'react'

const currencies = [
  { code: 'THB', name: 'Thai baht', flag: '/images/flags/thailand.svg' },
  { code: 'USD', name: 'United States (US) dollar', flag: '/images/flags/united-states.svg' },
  { code: 'GBP', name: 'Pound sterling', flag: '/images/flags/united-kingdom.svg' },
  { code: 'EUR', name: 'Euro', flag: '/images/flags/europe.svg' },
  { code: 'AUD', name: 'Australian dollar', flag: '/images/flags/australia.svg' },
  { code: 'JPY', name: 'Japanese yen', flag: '/images/flags/japan.svg' },
]

const CurrencySwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])

  const handleCurrencyChange = (currency: typeof currencies[0]) => {
    setSelectedCurrency(currency)
    setIsOpen(false)
    // Here you would typically update the currency in your app's state or context
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-white text-black px-2 py-1 rounded"
      >
        <img src={selectedCurrency.flag} alt={selectedCurrency.code} className="w-6 h-4 mr-2" />
        <span>{selectedCurrency.code}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => handleCurrencyChange(currency)}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <img src={currency.flag} alt={currency.code} className="w-6 h-4 mr-2" />
              <span>{currency.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CurrencySwitcher

