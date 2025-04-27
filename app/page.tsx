import { HeroSection } from "@/components/hero-section"
import { FeaturedCreators } from "@/components/featured-creators"
import { SubscriptionPlans } from "@/components/subscription-plans"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <FeaturedCreators />
      <SubscriptionPlans />
    </div>
  )
}
