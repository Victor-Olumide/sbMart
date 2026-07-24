import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6 px-4">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700">Product Not Found</h2>
      <p className="text-gray-500 text-center max-w-md">
        The product you are looking for does not exist or may have been removed.
      </p>
      <Link
        to="/products"
        className="flex items-center gap-2 bg-[#f47c31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e36b28] transition-colors mt-4"
      >
        <FaArrowLeft /> Back to Products
      </Link>
    </div>
  )
}
