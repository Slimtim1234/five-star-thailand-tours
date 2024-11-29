import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, InstagramIcon as Tiktok, Youtube, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Details */}
          <div>
            <Image
              src="/five-star-thailand-tour-logo.png"
              alt="Five Star Thailand Tours"
              width={200}
              height={74}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <p className="mb-2">
              <a href="https://api.whatsapp.com/send?phone=66925550789" className="hover:text-yellow-500">
                +66 (0) 92 555 0789
              </a>
            </p>
            <p className="mb-2">WhatsApp ✔ | Line ✔ | Telegram ✔</p>
            <p className="mb-2">
              <a href="mailto:hello@fivestarthailandtours.com" className="hover:text-yellow-500">
                hello@fivestarthailandtours.com
              </a>
            </p>
            <p className="mb-2">
              <a href="https://www.tiktok.com/@fivestarthailandtours" className="hover:text-yellow-500">TikTok</a> |{' '}
              <a href="https://www.instagram.com/phiphiislandtour/" className="hover:text-yellow-500">Instagram</a> |{' '}
              <a href="https://facebook.com/fivestarthailandtours/" className="hover:text-yellow-500">Facebook</a>
            </p>
            <p className="mt-4 text-sm">
              <strong>Visit by appointment only. Bookings must be made in advance.</strong>
            </p>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Main Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-yellow-500">Home Page</Link></li>
              <li><Link href="/destinations/tours-from-phuket" className="hover:text-yellow-500">Phi Phi Tours Starting In Phuket</Link></li>
              <li><Link href="/destinations/tours-from-phi-phi" className="hover:text-yellow-500">Phi Phi Tours Starting In Phi Phi</Link></li>
              <li><Link href="/destinations/tours-from-krabi" className="hover:text-yellow-500">Phi Phi Tours Start In Krabi</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
              <li><Link href="/about-us" className="hover:text-yellow-500">About Us</Link></li>
              <li><Link href="/photo-album" className="hover:text-yellow-500">Photo Gallery 📸</Link></li>
              <li><Link href="/questions-and-answers" className="hover:text-yellow-500">Frequent Asked Questions</Link></li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More Info</h4>
            <ul className="space-y-2">
              <li><a href="https://g.page/r/CfYJ06zWjZsdEBM/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Read Google Reviews</a></li>
              <li><a href="https://www.tripadvisor.com/Attraction_Review-g303908-d26852417-Reviews-Five_Star_Thailand_Phi_Phi_Island_Tour-Ko_Phi_Phi_Don_Ao_Nang_Krabi_Town_Krabi_P.html" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Read TripAdvisor Reviews</a></li>
              <li><Link href="/reviews-page" className="hover:text-yellow-500">Write a Review (Guests)</Link></li>
              <li><Link href="/phi-phi-islands-weather" className="hover:text-yellow-500">Phi Phi Weather & Sea Conditions</Link></li>
              <li><Link href="/jobs" className="hover:text-yellow-500">Careers And Vacancies 📢</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Most Popular Services</h4>
            <p className="font-semibold">Private Phi Phi Tours: From Phuket</p>
            <ul className="mb-4 space-y-1">
              <li><Link href="/book/phuket-package-a" className="hover:text-yellow-500">Package A: Private Longtail Boat Tour</Link></li>
              <li><Link href="/book/phuket-package-b" className="hover:text-yellow-500">Package B: Private Speedboat Tour</Link></li>
              <li><Link href="/book/phuket-package-b-xl" className="hover:text-yellow-500">Package B-XL: Large Group</Link></li>
            </ul>
            <p className="font-semibold">Private Boat Tours: From Krabi</p>
            <ul className="space-y-1">
              <li><Link href="/book/krabi-package-a" className="hover:text-yellow-500">Package A: Private Longtail Boat Tour</Link></li>
              <li><Link href="/book/krabi-package-b" className="hover:text-yellow-500">Package B: Private Speedboat Tour</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 Five Star Thailand Tours. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/fivestarthailandtours" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/phiphiislandtour/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@fivestarthailandtours" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Tiktok size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCZI9rw9tAyVLQlnVX1ncIwg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Youtube size={24} />
              </a>
              <a href="mailto:hello@fivestarthailandtours.com" className="text-gray-400 hover:text-yellow-500">
                <Mail size={24} />
              </a>
              <a href="tel:66925550789" className="text-gray-400 hover:text-yellow-500">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

