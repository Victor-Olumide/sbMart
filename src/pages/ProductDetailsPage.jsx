import { useState } from 'react'
import products from '../assets/data.js'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo.jsx'
import SimilarProductsSection from '../components/SimilarProductsSection.jsx'
import ProductNotFound from '../components/ProductNotFound.jsx'

export default function ProductDetailPage() {
  const { name } = useParams()

  const productsDetail = products.find(
    (product) => product.name.toLowerCase().trim().replace(/\s+/g, '-') === name
  )

  const [similarProducts] = useState(() => {
    if (!productsDetail) return []
    return products
      .filter(p => p.id !== productsDetail.id && p.category === productsDetail.category)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
  })

  if (!productsDetail) {
    return <ProductNotFound />
  }

  return (
    <div className="min-h-screen bg-white">
      <ProductInfo product={productsDetail} />
      <SimilarProductsSection products={similarProducts} />
    </div>
  )
}
