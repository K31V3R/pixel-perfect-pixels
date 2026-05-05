import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => (
  <div className="relative min-h-screen flex flex-col starfield">
    <Navbar />
    <main className="flex-1 pt-16">
      <Outlet />
    </main>
    <Footer />
  </div>
);
