import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-wide">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-primary text-primary-foreground text-sm shadow-glow">
            X
          </span>
          <span className="text-sm sm:text-base">XM3 GLOBAL LLC</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="container flex flex-col py-4 gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn("block py-2 text-sm", isActive ? "text-foreground" : "text-muted-foreground")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
