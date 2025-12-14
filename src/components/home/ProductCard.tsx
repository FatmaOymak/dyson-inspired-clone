import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <article className="space-y-4">
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-semibold group-hover:underline underline-offset-4">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-semibold">£{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                £{product.originalPrice}
              </span>
            )}
          </div>

          {/* Color options */}
          {product.colors.length > 1 && (
            <div className="flex gap-2 pt-2">
              {product.colors.map((color) => (
                <span
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
