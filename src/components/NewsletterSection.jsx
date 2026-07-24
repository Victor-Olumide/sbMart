export default function NewsletterSection() {
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-400 mb-8 max-w-lg mx-auto">
        Subscribe to our newsletter for exclusive deals and new arrivals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f47c31]"
        />
        <button className="bg-[#f47c31] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e36b28] transition-colors">
          Subscribe
        </button>
      </div>
    </section>
  )
}
