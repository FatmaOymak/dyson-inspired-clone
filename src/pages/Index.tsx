import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoSection } from "@/components/home/PromoSection";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        subtitle="New"
        title="Dyson V15 Detect™"
        description="Reveals invisible dust. Proves deep clean with laser and piezo sensor. Our most powerful, intelligent cordless vacuum."
        ctaText="Shop now"
        ctaLink="/product/v15-detect"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"
        variant="light"
      />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Secondary Hero */}
      <HeroSection
        subtitle="Hair care"
        title="Dyson Supersonic™"
        description="Fast drying, no extreme heat. Engineered for different hair types. Intelligent heat control for shine."
        ctaText="Learn more"
        ctaLink="/product/supersonic"
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop"
        variant="dark"
        reverse
      />

      {/* Promo Section */}
      <PromoSection />
    </Layout>
  );
};

export default Index;
