import { HeroSection } from "@/components/hero-section";
import { DiscoverySection } from "@/components/discovery-section";
import { MenuSection } from "@/components/menu-section";
import { FeaturesSection } from "@/components/features-section";
import { PromoSection } from "@/components/promo-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <DiscoverySection />
      <MenuSection />
      <FeaturesSection />
      <PromoSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
