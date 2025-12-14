import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getProductById, getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/home/ProductCard";
import { Check, ChevronRight, Minus, Plus, Truck, RefreshCcw, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"features" | "specs">("features");

  const relatedProducts = getFeaturedProducts().filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container-dyson py-24 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link to="/" className="mt-4 inline-block underline">
            Return to home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container-dyson py-4 border-b border-border">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
          </li>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <li>
            <Link
              to={`/category/${product.category}`}
              className="text-muted-foreground hover:text-foreground capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
          </li>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <li className="font-medium">{product.name}</li>
        </ol>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="container-dyson">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={product.colors[selectedColor].image}
                  alt={product.name}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className="aspect-square bg-muted overflow-hidden border-2 border-transparent hover:border-foreground transition-colors"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium">
                  {product.badge}
                </span>
              )}

              <div>
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-semibold">£{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    £{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium mb-3">
                  Colour: <span className="font-normal">{product.colors[selectedColor].name}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      className={cn(
                        "w-12 h-12 rounded-full border-2 transition-all",
                        selectedColor === i ? "border-foreground scale-110" : "border-border hover:border-muted-foreground"
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="inline-flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button className="w-full dyson-button-primary">
                  Add to basket - £{product.price * quantity}
                </button>
                <button className="w-full dyson-button-secondary">
                  Buy now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Free delivery</p>
                </div>
                <div className="text-center">
                  <RefreshCcw className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">30-day returns</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">2-year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Specs Tabs */}
      <section className="py-12 bg-secondary">
        <div className="container-dyson">
          <div className="flex justify-center gap-8 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("features")}
              className={cn(
                "pb-4 text-lg font-medium transition-colors border-b-2 -mb-px",
                activeTab === "features"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={cn(
                "pb-4 text-lg font-medium transition-colors border-b-2 -mb-px",
                activeTab === "specs"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              Specifications
            </button>
          </div>

          {activeTab === "features" ? (
            <ul className="max-w-2xl mx-auto space-y-4">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="max-w-2xl mx-auto">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key} className="border-b border-border">
                      <td className="py-4 font-medium">{key}</td>
                      <td className="py-4 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container-dyson">
          <h2 className="text-2xl font-semibold mb-8">You may also like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
