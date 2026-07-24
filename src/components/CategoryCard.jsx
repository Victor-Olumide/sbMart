import { FaLaptop, FaChair, FaTshirt, FaBook } from 'react-icons/fa'

const iconMap = {
  Electronics: <FaLaptop />,
  Furniture: <FaChair />,
  Fashion: <FaTshirt />,
  Books: <FaBook />,
}

const colorMap = {
  Electronics: "bg-blue-500",
  Furniture: "bg-green-500",
  Fashion: "bg-pink-500",
  Books: "bg-purple-500",
}

export default function CategoryCard({ name }) {
  return (
    <a
      href="/products"
      className="flex flex-col items-center gap-4 p-8 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
    >
      <div
        className={`text-white text-3xl p-5 rounded-full ${colorMap[name] || "bg-gray-500"} group-hover:scale-110 transition-transform`}
      >
        {iconMap[name] || <FaLaptop />}
      </div>
      <span className="font-semibold text-lg">{name}</span>
    </a>
  )
}
