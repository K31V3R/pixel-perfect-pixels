import { useState } from "react";
import { Mail, MapPin, Building2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent. We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[500px] glow-orb animate-float-orb" />
      <div className="container relative z-10 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold animate-fade-up">
            Let's <span className="text-gradient">Talk Business</span>
          </h1>
          <p className="mt-6 text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
            Tell us what you're sourcing. Our team will respond within one business day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "info@xm3global.com" },
              { icon: MapPin, label: "Location", value: "Wyoming, United States" },
              { icon: Building2, label: "Company ID", value: "2026-001878798" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.icon size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={onSubmit}
              className="lg:col-span-3 rounded-2xl border border-border/60 bg-card p-8 space-y-5"
          >
          {/* Esta línea es vital para que Netlify lo reconozca */}
          <input type="hidden" name="form-name" value="contact" />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <Field label="Company" name="company" />
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              />
            </div>
            <button
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <label className="text-sm text-muted-foreground">{label}</label>
    <input
      {...props}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
    />
  </div>
);

export default Contact;
