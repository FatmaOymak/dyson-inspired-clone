import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-dyson">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Explore our technology
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className={`group relative overflow-hidden bg-muted ${
                index === 0 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-background/80 mb-4">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
