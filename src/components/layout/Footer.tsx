import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Vacuum cleaners", href: "/category/vacuum-cleaners" },
    { name: "Hair care", href: "/category/hair-care" },
    { name: "Air treatment", href: "/category/air-treatment" },
    { name: "Lighting", href: "/category/lighting" },
  ],
  support: [
    { name: "Contact us", href: "/support/contact" },
    { name: "Guides & tips", href: "/support/guides" },
    { name: "Product registration", href: "/support/register" },
    { name: "Repairs", href: "/support/repairs" },
  ],
  about: [
    { name: "About Dyson", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "James Dyson Foundation", href: "/foundation" },
  ],
  legal: [
    { name: "Terms & conditions", href: "/terms" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "Cookie policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[hsl(0_0%_8%)] text-[hsl(0_0%_98%)]">
      {/* Newsletter section */}
      <div className="border-b border-background/20">
        <div className="container-dyson py-12">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold mb-2">Subscribe for exclusive offers</h3>
            <p className="text-background/70 mb-4 text-sm">
              Sign up and be the first to know about exclusive offers, new products and more.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/50 focus:outline-none focus:border-background"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container-dyson py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-background/20">
          <span className="text-sm text-background/70">Follow us</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background/70 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-background/70 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-background/70 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-background/70 transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold tracking-tighter">dyson</span>
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Dyson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
