import { Link } from "react-router-dom";
import { ArrowRight, Truck, RefreshCcw, Headphones, Award } from "lucide-react";

const promoItems = [
  {
    icon: Truck,
    title: "Free delivery",
    description: "On orders over £75",
  },
  {
    icon: RefreshCcw,
    title: "30-day returns",
    description: "Free returns within 30 days",
  },
  {
    icon: Headphones,
    title: "Expert support",
    description: "Speak to a Dyson expert",
  },
  {
    icon: Award,
    title: "2-year warranty",
    description: "Parts and labour guarantee",
  },
];

export function PromoSection() {
  return (
    <>
      {/* Features bar */}
      <section className="py-8 border-y border-border">
        <div className="container-dyson">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {promoItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <item.icon className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-dyson text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Exclusive member offers
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Register your products and get exclusive access to offers, tips and rewards.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
          >
            Create account
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
