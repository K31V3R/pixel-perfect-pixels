import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import electronics from "@/assets/electronics.jpg";
import automotive from "@/assets/automotive.jpg";
import industrial from "@/assets/industrial.jpg";

const divisions = [
  {
    img: electronics,
    title: "Consumer Electronics",
    desc: "Direct sales and distribution of premium mobile accessories, high-fidelity audio gear, and authentic charging solutions for global markets.",
  },
  {
    img: automotive,
    title: "Automotive Parts",
    desc: "Strategic inventory management and commercialization of certified vehicle components and high-performance parts for international distribution.",
  },
  {
    img: industrial,
    title: "Industrial Supplies",
    desc: "Wholesale distribution of industrial-grade equipment and specialized hardware sourced directly from top-tier global manufacturers.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] glow-orb animate-float-orb" />
        <div className="container relative z-10 py-24 md:py-36 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] animate-fade-up">
            High-End Tech Accessories &{" "}
            <span className="text-gradient">Automotive Solutions</span>
          </h1>
          <p
            className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            XM3 Global LLC is a Wyoming-based distribution company (ID: 2026-001878798) dedicated to bridging
            the gap between premium manufacturers and global markets. Led by Engineering expertise, we
            specialize in the sourcing and logistics of genuine Apple ecosystem products and high-performance
            automotive parts for specialized vehicle fleets. Our operations are built on the efficiency of
            Amazon FBA, ensuring reliability and speed in every transaction.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Our Products
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">Our Business Divisions</h2>
          <p className="mt-4 text-muted-foreground">
            Strategic acquisition and commercialization of specialized inventory across global markets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {divisions.map((d, i) => (
            <article
              key={d.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  width={896}
                  height={1184}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
