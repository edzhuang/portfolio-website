import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reset mobile menu when screen is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu when screen width is larger than md breakpoint (768px in Tailwind default)
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Close mobile menu when a navigation link is clicked
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`flex justify-center w-full`}>
      <header
        className={`flex flex-col max-w-[1032px] w-full px-6 py-3 bg-secondary/70 backdrop-blur-md shadow-lg border border-gridline transition-all duration-300 ${
          mobileMenuOpen ? "rounded-lg" : "rounded-3xl"
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          <Link
            href=""
            className="text-body-md hover:text-muted-foreground transition-colors"
          >
            Eddie Zhuang
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link
              href="#about"
              className="text-body-sm hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-body-sm hover:text-muted-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-body-sm hover:text-muted-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-body-sm hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden w-full transition-all duration-300 overflow-hidden ${
            mobileMenuOpen
              ? "max-h-60 opacity-100 mt-4"
              : "max-h-0 opacity-0 pointer-events-none mt-0"
          }`}
        >
          <nav className="flex flex-col space-y-5">
            <Link
              href="#about"
              className="text-body-sm hover:text-muted-foreground transition-colors py-1"
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-body-sm hover:text-muted-foreground transition-colors py-1"
              onClick={handleNavClick}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-body-sm hover:text-muted-foreground transition-colors py-1"
              onClick={handleNavClick}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-body-sm hover:text-muted-foreground transition-colors py-1"
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
