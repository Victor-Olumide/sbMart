import ProductCard from "./ProductCard"
import products from "../assets/data.js"

export default function FeaturedProducts() {
  const featured = products.slice(0, 3)

  return (
    <section className="py-16 px-6 md:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {featured.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            description={item.productDetails}
            price={item.amount}
            src={item.id}
          />
        ))}
      </div>
    </section>
  )
}
