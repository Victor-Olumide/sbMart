import ProductCard from "./ProductCard"

export default function SimilarProductsSection({ products }) {
  if (!products || products.length === 0) return null

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">
          Similar Products
        </h1>

        <div className="flex md:flex-row flex-col justify-center items-center gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              src={product.id}
              name={product.name}
              price={product.amount}
              description={product.productDetails}
            />
          ))}
        </div>
    </div>
    </div>
  )
}