import Header from "../components/Header"
import CategoriesSection from "../components/CategoriesSection"
import FeaturedProducts from "../components/FeaturedProducts"
import BenefitsSection from "../components/BenefitsSection"
import NewsletterSection from "../components/NewsletterSection"

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Header title="sbMART" description="Your number 1 destination for all your shopping needs!" />
      <CategoriesSection />
      <FeaturedProducts />
      <BenefitsSection />
      <NewsletterSection />
    </div>
  )
}
