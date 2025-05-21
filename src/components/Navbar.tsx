
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme/theme-toggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "What is ForenLock?", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Domain", href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Documents", href: "#documents" },
  { label: "Presentations", href: "#presentations" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white dark:bg-navy-950 shadow-md dark:shadow-navy-900/50 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-navy-800 dark:text-navy-100 font-playfair text-xl font-bold">
            ForenLock©
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm px-3 py-2 text-navy-700 dark:text-navy-200 hover:text-navy-950 dark:hover:text-white hover:bg-navy-50 dark:hover:bg-navy-800 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle className="ml-2" />
          </nav>

          {/* Mobile Menu and Theme Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-navy-800 dark:text-navy-100 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col bg-white dark:bg-navy-900 border-t mt-2 dark:border-navy-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-navy-700 dark:text-navy-200 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
