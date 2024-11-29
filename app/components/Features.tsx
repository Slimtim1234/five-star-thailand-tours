import { Compass, Calendar, Star } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Real Local Tours',
    description: "We're passionate about Phi Phi Islands, and so are our local tour guides. We pair guests with our knowledgeable and fun-loving Thai Guides so you'll be guaranteed an unforgettable experience in the Phi Phi Islands."
  },
  {
    icon: Calendar,
    title: 'Your Own Boat',
    description: "All our tours are private, which means you'll have a boat to yourself along with our crew. This allows us to tailor the day to the preferences of our guests, and more importantly we create routes to beat the crowds where possible!"
  },
  {
    icon: Star,
    title: 'Easily Book Online',
    description: "Easily book your Phi Phi Island Tour with a 20% deposit. We're online to respond to your Whatsapp and Email within 60 minutes (9-6 BKK Time). Our Phi Phi Island Tour is refundable up to 24 Hours Before Departure."
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

