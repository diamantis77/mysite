/**
 * GPSN About Section — Upgraded company philosophy
 * Design: Tactical Obsidian — split layout, glass panels, diagonal cut
 */

const pillars = [
  {
    icon: "🛡",
    title: "Αξιοπιστία",
    desc: "Αμετάβλητη δέσμευση στην ποιότητα και την εμπιστοσύνη των πελατών μας.",
  },
  {
    icon: "⚡",
    title: "Τεχνολογία",
    desc: "Συστήματα αιχμής από τους κορυφαίους κατασκευαστές παγκοσμίως.",
  },
  {
    icon: "🌐",
    title: "Εμβέλεια",
    desc: "Υπηρεσίες εντός και εκτός Ελλάδος, συμπεριλαμβανομένης της maritime security.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#070D14" }}
    >
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-16"
        style={{
          background: "#050A0F",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
        }}
      />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(0,229,255,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 reveal-on-scroll">
          <div className="w-8 h-px" style={{ background: "#00E5FF" }} />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#00E5FF",
              textTransform: "uppercase",
            }}
          >
            01 — Η Φιλοσοφία Μας
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="reveal-on-scroll">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Barlow Condensed', Arial, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#E8F4F8",
              }}
            >
              Θωρακίζουμε
              <br />
              <span style={{ color: "#00E5FF" }}>ό,τι αξίζει</span>
              <br />
              να προστατευτεί
            </h2>

            <p
              className="mb-5"
              style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#8A9BB0",
              }}
            >
              Η φιλοσοφία της <strong style={{ color: "#E8F4F8" }}>G.P.S.N.</strong> είναι να παρέχει υψηλού επιπέδου υπηρεσίες ασφαλείας που ανταποκρίνονται στις πραγματικές ανάγκες κάθε πελάτη. Σε μια εποχή έξαρσης της ανασφάλειας και έντονου ανταγωνισμού, η αποτελεσματική προστασία αποτελεί επιχειρηματική αναγκαιότητα.
            </p>

            <p
              style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#8A9BB0",
              }}
            >
              Οι επιχειρήσεις δεν αξιολογούνται μόνο με βάση τις οικονομικές τους επιδόσεις, αλλά και με την ικανότητά τους να <strong style={{ color: "#E8F4F8" }}>θωρακίσουν τα περιουσιακά τους στοιχεία</strong>, να καλλιεργήσουν κλίμα ασφάλειας στο προσωπικό τους και να θεμελιώσουν σχέσεις εμπιστοσύνης με τους πελάτες τους.
            </p>

            {/* Horizontal rule with glow */}
            <div
              className="mt-8 mb-8 h-px w-full"
              style={{
                background: "linear-gradient(90deg, #00E5FF33, transparent)",
              }}
            />

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal-on-scroll glass-panel-hover"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(0,229,255,0.1)",
                    padding: "1.2rem",
                    transitionDelay: `${i * 0.1}s`,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.35)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,229,255,0.04)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.1)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#E8F4F8",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', Arial, sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                      color: "#8A9BB0",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="reveal-on-scroll flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-radar-pulse"
                style={{
                  background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
                  transform: "scale(1.4)",
                }}
              />

              {/* City surveillance image */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(280px, 40vw, 480px)",
                  aspectRatio: "16/10",
                  border: "1px solid rgba(0,229,255,0.2)",
                  boxShadow: "0 0 40px rgba(0,229,255,0.1), 0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503940160/XmEWcbNxKfAXKJPvkaWmLg/gpsn_city_surveillance-BnB8qrjCuRuXdHCxNWHTz8.webp"
                  alt="Surveillance monitoring Larissa"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.85 }}
                />
                {/* Overlay info bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-3"
                  style={{
                    background: "linear-gradient(to top, rgba(5,10,15,0.9), transparent)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: "#00E5FF",
                      textTransform: "uppercase",
                    }}
                  >
                    ● LIVE — Λάρισα, Ελλάδα — 24/7 Monitoring Active
                  </div>
                </div>
              </div>

              {/* Corner brackets */}
              {[
                { top: -8, left: -8, borderTop: "2px solid #00E5FF", borderLeft: "2px solid #00E5FF", width: 20, height: 20 },
                { top: -8, right: -8, borderTop: "2px solid #00E5FF", borderRight: "2px solid #00E5FF", width: 20, height: 20 },
                { bottom: -8, left: -8, borderBottom: "2px solid #00E5FF", borderLeft: "2px solid #00E5FF", width: 20, height: 20 },
                { bottom: -8, right: -8, borderBottom: "2px solid #00E5FF", borderRight: "2px solid #00E5FF", width: 20, height: 20 },
              ].map((style, i) => (
                <div key={i} className="absolute" style={{ ...style, position: "absolute" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
