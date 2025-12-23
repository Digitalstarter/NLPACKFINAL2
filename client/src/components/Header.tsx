import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/assortiment", label: "Assortiment" },
    { path: "/diensten", label: "Diensten" },
    { path: "/over-ons", label: "Over Ons" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50 shadow-lg backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <motion.img 
              src={logoImg} 
              alt="NL Pack Logo" 
              className="h-14 w-auto object-contain"
              data-testid="img-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location === item.path ? "secondary" : "ghost"}
                className={location === item.path ? "text-blue-900 font-semibold" : "text-blue-700 hover:text-blue-900"}
              >
                <Link
                  href={item.path}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-blue-700 hover:text-blue-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-sky-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <nav className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location === item.path ? "secondary" : "ghost"}
                className={location === item.path ? "w-full justify-start text-blue-900 font-semibold" : "w-full justify-start text-blue-700 hover:text-blue-900"}
              >
                <Link
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
