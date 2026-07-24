import CategoryCard from "./CategoryCard"

export default function CategoriesSection() {
  const categories = ["Electronics", "Furniture", "Fashion", "Books"]

  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat} name={cat} />
        ))}
      </div>
    </section>
  )
}
