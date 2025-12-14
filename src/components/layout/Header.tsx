import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top banner */}
      <div className="bg-foreground text-background text-center py-2 text-xs tracking-wide">
        <span>Free delivery on orders over £75. </span>
        <Link to="/offers" className="underline hover:no-underline">
          Shop now
        </Link>
      </div>

      {/* Main header */}
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter">techstore</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="flex items-center gap-1 py-6 text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  {category.name}
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    activeCategory === category.id && "rotate-180"
                  )} />
                </Link>

                {/* Mega Menu */}
                {activeCategory === category.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-background border border-border shadow-xl animate-fade-in p-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold mb-4">{category.name}</h3>
                        <ul className="space-y-3">
                          {category.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link
                                to={`/category/${category.id}?sub=${sub.toLowerCase()}`}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={`/category/${category.id}`}
                          className="inline-block mt-6 text-sm font-medium underline underline-offset-4 hover:no-underline"
                        >
                          View all {category.name.toLowerCase()}
                        </Link>
                      </div>
                      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/support"
              className="py-6 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Support
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/account" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[105px] bg-background z-50 overflow-y-auto animate-fade-in">
          <nav className="container-main py-6">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="block py-3 text-lg font-medium border-b border-border"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/support"
                  className="block py-3 text-lg font-medium border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
