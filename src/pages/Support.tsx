import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Search, MessageCircle, Phone, Mail, FileText, Wrench, Package, HelpCircle } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live chat",
    description: "Chat with a Dyson expert",
    link: "/support/chat",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "0800 298 0298",
    link: "tel:08002980298",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Get a response within 24 hours",
    link: "/support/email",
  },
];

const helpTopics = [
  {
    icon: FileText,
    title: "Guides & tips",
    description: "Get the most from your machine",
    link: "/support/guides",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description: "Book a repair or service",
    link: "/support/repairs",
  },
  {
    icon: Package,
    title: "Order support",
    description: "Track orders and returns",
    link: "/support/orders",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find quick answers",
    link: "/support/faq",
  },
];

const Support = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-dyson text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 animate-fade-up">
            How can we help?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up stagger-1">
            Get support for your Dyson machine
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative animate-fade-up stagger-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-background border border-border focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container-dyson">
          <h2 className="text-2xl font-semibold mb-8 text-center">Contact us</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportOptions.map((option) => (
              <Link
                key={option.title}
                to={option.link}
                className="p-8 border border-border hover:border-foreground transition-colors text-center group"
              >
                <option.icon className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16 bg-muted">
        <div className="container-dyson">
          <h2 className="text-2xl font-semibold mb-8 text-center">Browse by topic</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpTopics.map((topic) => (
              <Link
                key={topic.title}
                to={topic.link}
                className="p-6 bg-background hover:shadow-lg transition-shadow"
              >
                <topic.icon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Register Product */}
      <section className="py-16">
        <div className="container-dyson">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Register your machine</h2>
            <p className="text-muted-foreground mb-8">
              Activate your warranty and get access to exclusive owner benefits.
            </p>
            <Link to="/register" className="dyson-button-primary">
              Register now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
