import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Vacuum Cleaners", href: "/category/vacuum-cleaners" },
    { name: "Hair care", href: "/category/hair-care" },
    { name: "Air treatment", href: "/category/air-treatment" },
    { name: "Headphones", href: "/category/headphones" },
    { name: "Lighting", href: "/category/lighting" },
    { name: "Deals", href: "/deals" },
    { name: "Renewed", href: "/renewed" },
  ],
  support: [
    { name: "Contact us", href: "/support/contact" },
    { name: "Track your order", href: "/support/track" },
    { name: "Machine support", href: "/support/machine" },
    { name: "Flexible payment options", href: "/support/payment" },
    { name: "Report a security vulnerability", href: "/support/security" },
  ],
  account: [
    { name: "My Account", href: "/account" },
    { name: "Machine Registration", href: "/account/register" },
    { name: "Delivery information", href: "/support/delivery" },
  ],
  business: [
    { name: "Technology for business", href: "/business" },
    { name: "Vacuum cleaners for business", href: "/business/vacuum" },
    { name: "Hair care for business", href: "/business/hair-care" },
    { name: "Air treatment for business", href: "/business/air-treatment" },
    { name: "Lighting for business", href: "/business/lighting" },
    { name: "Hand dryers for business", href: "/business/hand-dryers" },
    { name: "Sustainability for business", href: "/business/sustainability" },
    { name: "Hygienic hand drying", href: "/business/hygienic" },
    { name: "For Architects and designers", href: "/business/architects" },
  ],
  about: [
    { name: "Stores", href: "/stores" },
    { name: "Careers", href: "/careers" },
    { name: "Media", href: "/media" },
    { name: "Company information", href: "/company" },
    { name: "Foundation", href: "/foundation" },
    { name: "Journey towards sustainability", href: "/sustainability" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Student Beans", href: "/students" },
    { name: "Unidays", href: "/unidays" },
  ],
  legal: [
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms and conditions", href: "/terms" },
    { name: "Terms of website use", href: "/website-terms" },
    { name: "Delivery Details", href: "/delivery" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Your right to cancel", href: "/cancel" },
    { name: "Consumer rights", href: "/consumer-rights" },
  ],
  legalSecondary: [
    { name: "Modern Slavery Act Statement", href: "/modern-slavery" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Accessibility Statement", href: "/accessibility" },
    { name: "2024 UK Gender Pay Gap", href: "/gender-pay-gap" },
    { name: "Corporate governance", href: "/governance" },
    { name: "Date notice", href: "/date-notice" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[hsl(0_0%_8%)] text-[hsl(0_0%_85%)]">
      {/* Main footer links */}
      <div className="container-main py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {/* Products Column */}
          <div>
            <h4 className="text-[hsl(0_0%_98%)] font-medium mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-[hsl(0_0%_98%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-[hsl(0_0%_98%)] font-medium mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-[hsl(0_0%_98%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-[hsl(0_0%_98%)] font-medium mt-8 mb-6">Account</h4>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-[hsl(0_0%_98%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business Column */}
          <div>
            <h4 className="text-[hsl(0_0%_98%)] font-medium mb-6">For business</h4>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-[hsl(0_0%_98%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-[hsl(0_0%_98%)] font-medium mb-6">About Us</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-[hsl(0_0%_98%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal links section */}
      <div className="border-t border-[hsl(0_0%_20%)]">
        <div className="container-main py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-1 text-xs text-[hsl(0_0%_60%)]">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link to={link.href} className="hover:text-[hsl(0_0%_98%)] transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span className="mx-2">|</span>}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-2 text-sm text-[hsl(0_0%_98%)] hover:underline">
              <span className="w-5 h-4 bg-[url('https://flagcdn.com/w20/gb.png')] bg-cover bg-center rounded-sm" />
              United Kingdom
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-1 mt-4 text-xs text-[hsl(0_0%_60%)]">
            {footerLinks.legalSecondary.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link to={link.href} className="hover:text-[hsl(0_0%_98%)] transition-colors">
                  {link.name}
                </Link>
                {index < footerLinks.legalSecondary.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer and copyright */}
      <div className="border-t border-[hsl(0_0%_20%)]">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <p className="text-xs text-[hsl(0_0%_50%)] max-w-4xl leading-relaxed">
              **PayPal Credit and PayPal Pay in 3 are trading names of PayPal UK Ltd, 5 Fleet Place, London, United Kingdom, EC4M 7RD. PayPal Credit: Terms and conditions apply. Credit subject to status, UK residents only. PayPal Pay in 3: PayPal Pay in 3 is not regulated by the Financial Conduct Authority.
            </p>
            <p className="text-sm text-[hsl(0_0%_60%)] whitespace-nowrap">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
