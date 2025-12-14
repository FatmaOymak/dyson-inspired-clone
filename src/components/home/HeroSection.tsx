import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  variant?: "dark" | "light";
  reverse?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  image,
  variant = "light",
  reverse = false,
}: HeroSectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-foreground text-background" : "bg-background text-foreground"}>
      <div className={`container-main py-12 lg:py-0 lg:min-h-[80vh] flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Content */}
          <div className="space-y-6 opacity-0 animate-fade-up">
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
              {title}
            </h1>
            <p className={`text-lg ${isDark ? "text-background/70" : "text-muted-foreground"} max-w-md`}>
              {description}
            </p>
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 text-sm font-medium group"
            >
              <span className="underline underline-offset-4 group-hover:no-underline">{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[80vh] overflow-hidden opacity-0 animate-fade-up stagger-2">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
