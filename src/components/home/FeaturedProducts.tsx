import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container-dyson">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Featured products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
