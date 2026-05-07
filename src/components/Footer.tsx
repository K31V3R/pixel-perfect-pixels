import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-background/60">
    <div className="container py-12 grid gap-10 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-3 font-bold">
          <img src="/favicon.ico" alt="Logo" className="h-8 w-auto object-contain" />
          <span>XM3 GLOBAL LLC</span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
          Wyoming-based distribution company bridging premium manufacturers and global markets.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Navigation</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground">Home</Link></li>
          <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
          <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>ID: 2026-001878798</li>
          <li>Wyoming, USA</li>
          <li><a href="mailto:contact@xm3global.com" className="hover:text-foreground transition-colors">contact@xm3global.com</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} XM3 Global LLC. All rights reserved.
    </div>
  </footer>
);
