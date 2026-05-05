import { Link } from "react-router-dom";
import electronics from "@/assets/electronics.jpg";
import automotive from "@/assets/automotive.jpg";
import industrial from "@/assets/industrial.jpg";

const products = [
  {
    img: electronics,
    title: "Premium Consumer Electronics",
    desc: "Specializing in original Apple accessories, high-performance computing hardware, and advanced audio systems. We ensure 100% authenticity and global warranty standards for every unit.",
  },
  {
    img: automotive,
    title: "Certified Automotive Components",
    desc: "Distribution of high-quality engine parts, electronics, and specialized components for leading vehicle brands. Our focus is on reliability, performance, and rigorous quality control.",
  },
  {
    img: industrial,
    title: "Specialized Industrial Supplies",
    desc: "Wholesale solutions for industrial hardware, specialized tools, and high-performance machinery parts. Designed to meet the demands of large-scale operations and technical projects.",
  },
];

const Products = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[500px] glow-orb animate-float-orb" />
      <div className="container relative z-10 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold animate-fade-up">
          Global <span className="text-gradient">Product Solutions</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-muted-foreground animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Reliable distribution and strategic sourcing of premium electronics, automotive components, and
          industrial supplies for international markets.
        </p>
      </div>
    </section>

    <section className="container pb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <article
          key={p.title}
          className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {p.title}
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="container pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10 md:p-16 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] glow-orb opacity-60" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold">Looking for a Specific Product?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Our global sourcing network allows us to find exactly what your business needs. Contact our sales
            team for a personalized quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Products;
