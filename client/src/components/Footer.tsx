/**
 * GPSN Footer — Minimal premium footer
 * Design: Tactical Obsidian — dark, clean, with subtle cyan accents
 */

const footerLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Φιλοσοφία", href: "#about" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Συστήματα", href: "#systems" },
  { label: "Επικοινωνία", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#030608",
        borderTop: "1px solid rgba(0,229,255,0.08)",
      }}
    >
      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503940160/XmEWcbNxKfAXKJPvkaWmLg/gpsn_logo_original_d1337389.png"
                alt="G.P.S.N. Logo"
                className="h-10 w-auto"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,229,255,0.3))" }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    letterSpacing: "0.08em",
                    color: "#E8F4F8",
                    textTransform: "uppercase",
                  }}
                >
                  G.P.S.N.
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.08em",
                    color: "#00E5FF",
                  }}
                >
                  Greek Provider Security Niche
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#8A9BB0",
                maxWidth: "280px",
              }}
            >
              Παρέχουμε υψηλού επιπέδου υπηρεσίες ασφαλείας στη Λάρισα και σε ολόκληρη την Ελλάδα.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="mb-5"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#00E5FF",
                textTransform: "uppercase",
              }}
            >
              Πλοήγηση
            </div>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    fontFamily: "'Barlow', Arial, sans-serif",
                    fontSize: "0.875rem",
                    color: "#8A9BB0",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="mb-5"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#00E5FF",
                textTransform: "uppercase",
              }}
            >
              Επικοινωνία
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "#8A9BB0",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  Διεύθυνση
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', Arial, sans-serif",
                    fontSize: "0.875rem",
                    color: "#E8F4F8",
                  }}
                >
                  Φαρσάλων 3, ΤΚ 41222, Λάρισα
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "#8A9BB0",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  Τηλέφωνο
                </div>
                <a
                  href="tel:+302410549922"
                  style={{
                    fontFamily: "'Barlow', Arial, sans-serif",
                    fontSize: "0.875rem",
                    color: "#E8F4F8",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#E8F4F8")}
                >
                  2410 – 549922
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "#8A9BB0",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:gpsn.sec@gmail.com"
                  style={{
                    fontFamily: "'Barlow', Arial, sans-serif",
                    fontSize: "0.875rem",
                    color: "#E8F4F8",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#E8F4F8")}
                >
                  gpsn.sec@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(0,229,255,0.06)" }}
      >
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "#8A9BB0",
                textTransform: "uppercase",
              }}
            >
              © {new Date().getFullYear()} G.P.S.N. – Greek Provider Security Niche. Όλα τα δικαιώματα διατηρούνται.
            </div>
            <div className="flex items-center gap-2">
              <span
                className="animate-dot-blink w-1.5 h-1.5 rounded-full"
                style={{ background: "#00E5FF", display: "inline-block" }}
              />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  color: "#00E5FF",
                  textTransform: "uppercase",
                }}
              >
                24/7 Active Monitoring
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
