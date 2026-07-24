import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const benefits = [
  {
    icon: <FaTruck className="text-3xl" />,
    title: "Fast Delivery",
    desc: "Free delivery on orders above N50,000",
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: "24/7 Support",
    desc: "Round the clock customer service",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Secure Payment",
    desc: "100% secure checkout process",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 px-6 md:px-24 bg-[#f47c31] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose sb MART?</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="text-white bg-white/20 p-5 rounded-full">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold">{benefit.title}</h3>
            <p className="text-white/80">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
