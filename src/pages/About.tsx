import { Boxes, Globe2, Wrench, Check, X } from "lucide-react";

const values = [
  { icon: Boxes, title: "Premium Inventory", desc: "We source and distribute top-tier products across Consumer Electronics, Automotive, and Industrial sectors." },
  { icon: Globe2, title: "Global Logistics", desc: "Strategic supply chain management ensuring efficient international distribution from our Wyoming hub." },
  { icon: Wrench, title: "Engineering Standards", desc: "Our technical background ensures rigorous quality control and authenticity in every item we deliver." },
];

const generic = ["Generic Distribution", "Unverified Sourcing", "Limited Technical Support", "Generic Inventory Quality", "Slow Logistics Response"];
const ours = ["XM3 Global Standards", "Engineering-Verified Sourcing", "24/7 Strategic Logistics", "Certified Product Authenticity", "Custom Sourcing Solutions"];

const About = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[500px] glow-orb animate-float-orb" />
      <div className="container relative z-10 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-semibold animate-fade-up">
          Global Logistics & <span className="text-gradient">Premium Distribution</span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-3xl text-muted-foreground animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          XM3 Global LLC is a Wyoming-based distribution company (ID: 2026-001878798) dedicated to bridging
          the gap between premium manufacturers and global markets. Led by Engineering expertise, we
          specialize in the sourcing and logistics of genuine Apple ecosystem products and high-performance
          automotive parts for specialized vehicle fleets.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Who We Are</h2>
        <p className="mt-4 text-muted-foreground">
          XM3 GLOBAL LLC is a Wyoming-based enterprise specializing in the strategic acquisition and
          international distribution of premium goods.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((v, i) => (
          <div
            key={v.title}
            className="rounded-2xl border border-border/60 bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <v.icon size={22} />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16">
      <div className="rounded-3xl border border-border/60 bg-card p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Legacy of Excellence</h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          Founded on over 20 years of expertise in market analysis and trade, we have built a robust
          operation centered on the acquisition and sale of specialized inventory. We curate a diverse
          portfolio ranging from advanced electronics to automotive parts, maintaining full control over our
          sourcing to guarantee product authenticity and competitive market value.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">What makes us stand out</h2>
        <p className="mt-4 text-muted-foreground">
          Our engineering-driven approach and commitment to quality assurance sets us apart from conventional
          distributors.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="text-lg font-semibold text-muted-foreground">Generic Distribution</h3>
          <ul className="mt-6 space-y-4">
            {generic.map((g) => (
              <li key={g} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-destructive/15 text-destructive">
                  <X size={14} />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/40 bg-card p-8 shadow-glow">
          <h3 className="text-lg font-semibold text-gradient">XM3 Global Standards</h3>
          <ul className="mt-6 space-y-4">
            {ours.map((g) => (
              <li key={g} className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-primary">
                  <Check size={14} />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default About;
