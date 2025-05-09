import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

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

  const renderNavLinks = (isMobile: boolean) => {
    return navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={
          isMobile
            ? "text-heading-md hover:text-muted-foreground"
            : "text-body-sm hover:text-muted-foreground"
        }
        onClick={isMobile ? handleNavClick : undefined}
      >
        {item.label}
      </Link>
    ));
  };

  return (
    <div className="fixed z-10 left-0 right-0 top-6 flex justify-center w-full px-6">
      <header
        className={`container mx-auto py-3 bg-secondary/70 backdrop-blur-md shadow-lg border border-gridline ${
          mobileMenuOpen
            ? "h-[calc(100dvh-3rem)] rounded-lg"
            : "h-[51px] rounded-[26px]"
        } transition-[border-radius,height] duration-300 ease-in-out`}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-between">
            <Link href="" className="text-body-md hover:text-muted-foreground">
              Eddie Zhuang
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              {renderNavLinks(false)}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
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

          {/* Mobile Menu Container with CSS transition */}
          {mobileMenuOpen && (
            <div className="md:hidden overflow-hidden ease-in-out">
              <nav className="flex flex-col gap-6 mt-6">
                {renderNavLinks(true)}
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
