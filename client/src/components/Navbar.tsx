/**
 * GPSN Navbar — Glass morphism sticky header
 * Design: Tactical Obsidian — glass blur, cyan accent, Barlow Condensed
 */
import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Φιλοσοφία", href: "#about" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Συστήματα", href: "#systems" },
  { label: "Επικοινωνία", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5, 10, 15, 0.92)"
          : "rgba(5, 10, 15, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 229, 255, 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503940160/XmEWcbNxKfAXKJPvkaWmLg/gpsn_logo_original_d1337389.png"
                alt="G.P.S.N. Logo"
                className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]"
              />
            </div>
            <div className="hidden sm:block">
              <div
                className="font-display text-lg leading-none"
                style={{ color: "#E8F4F8", fontFamily: "'Barlow Condensed', Arial, sans-serif", fontWeight: 800, letterSpacing: "0.08em" }}
              >
                G.P.S.N.
              </div>
              <div
                className="text-xs leading-none mt-0.5"
                style={{ color: "#00E5FF", fontFamily: "'Space Mono', monospace", letterSpacing: "0.05em" }}
              >
                Greek Provider Security Niche
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative px-4 py-2 text-sm font-medium group transition-colors duration-200"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8A9BB0",
                  fontSize: "0.8rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: "#00E5FF" }}
                />
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:block btn-primary-gpsn text-sm"
              style={{
                padding: "0.6rem 1.4rem",
                fontFamily: "'Barlow Condensed', Arial, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #00E5FF, #0099BB)",
                color: "#050A0F",
                border: "none",
                transition: "all 0.3s ease",
                fontSize: "0.8rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(0,229,255,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Επικοινωνία
            </a>

            <button
              className="md:hidden p-2 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "#00E5FF" }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(5, 10, 15, 0.98)",
            borderColor: "rgba(0, 229, 255, 0.15)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="py-3 px-4 text-sm border-l-2 transition-all duration-200"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8A9BB0",
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00E5FF";
                  (e.currentTarget as HTMLElement).style.borderColor = "#00E5FF";
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,229,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#8A9BB0";
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="mt-3 py-3 text-center font-bold text-sm"
              style={{
                fontFamily: "'Barlow Condensed', Arial, sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #00E5FF, #0099BB)",
                color: "#050A0F",
              }}
            >
              Επικοινωνία
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
