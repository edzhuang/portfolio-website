import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavItems } from "@/lib/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
    return mainNavItems.map((item) => (
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
    <header
      className={`fixed z-50 top-4 md:top-6 left-1/2 -translate-x-1/2 transition-[top] duration-300 container flex flex-col py-2 bg-muted/70 backdrop-blur-md border ${
        mobileMenuOpen
          ? "h-[calc(100dvh-2rem)] rounded-lg"
          : "h-[52px] rounded-[26px]"
      } transition-[border-radius,height] duration-300 ease-in-out overflow-hidden`}
      style={{ width: "min(100dvw - 2rem, 1080px)" }}
    >
      {/* Main Row */}
      <div className="flex h-[34px] items-center justify-between flex-shrink-0">
        <Link href="" className="text-body-md hover:text-muted-foreground">
          Eddie Zhuang
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          {renderNavLinks(false)}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Container with CSS transition */}
      <div
        className={`md:hidden flex-1 flex flex-col overflow-y-auto transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 mt-6">{renderNavLinks(true)}</nav>
      </div>
    </header>
  );
}
