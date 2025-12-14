import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/home/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find((c) => c.id === id);
  const products = getProductsByCategory(id || "");

  if (!category) {
    return (
      <Layout>
        <div className="container-dyson py-24 text-center">
          <h1 className="text-2xl font-semibold">Category not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center text-background">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 animate-fade-up">
            {category.name}
          </h1>
          <p className="text-lg text-background/80 animate-fade-up stagger-1">
            {category.description}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border sticky top-[105px] bg-background z-40">
        <div className="container-dyson py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {category.subcategories.map((sub) => (
                <button
                  key={sub}
                  className="px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  {sub}
                </button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {products.length} products
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-dyson">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Category;
