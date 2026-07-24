import { useState, useEffect } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

const images = [
  '/colorful-shopping-bags.jpg',
  '/bags-space.jpg'
]

export default function Header({ title, description }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${img}')`,
            opacity: idx === currentIndex ? 1 : 0
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[#f47c31]/40" />
      <div className="relative  text-2xl z-10 w-full h-full flex flex-col items-center justify-center text-white p-6 md:px-24">
        <h1 className="text-6xl font-bold mb-1 flex flex-row gap-4">
          {title} <FaCartArrowDown />
        </h1>
        <p>{description}</p>
      </div>
</div>
  )
}
