/**
 * GPSN Security Systems Section — Products & Technology
 * Design: Tactical Obsidian — dark cards with depth layers, premium hover effects
 */

const systems = [
  {
    id: "01",
    title: "Κλειστά Κυκλώματα CCTV",
    subtitle: "Full HD Surveillance",
    desc: "Εγκατάσταση και παρακολούθηση κλειστών κυκλωμάτων υψηλής ανάλυσης FHD. Λύσεις απομακρυσμένης εποπτείας με πρόσβαση από οποιαδήποτε συσκευή, οπουδήποτε.",
    features: ["Full HD / 4K ανάλυση", "Νυχτερινή όραση", "Απομακρυσμένη πρόσβαση", "Αποθήκευση cloud"],
    color: "#00E5FF",
  },
  {
    id: "02",
    title: "Συστήματα Συναγερμού",
    subtitle: "Advanced Alarm Systems",
    desc: "Εγκατάσταση συστημάτων συναγερμού προηγμένης τεχνολογίας για βιομηχανίες, καταστήματα και οικίες. Οικονομικά πακέτα προσαρμοσμένα στις ανάγκες σας.",
    features: ["Αισθητήρες κίνησης", "Θωράκιση περιμέτρου", "Ασύρματα συστήματα", "Δωρεάν μελέτη"],
    color: "#3B82F6",
  },
  {
    id: "03",
    title: "24ωρη Παρακολούθηση",
    subtitle: "Round-the-Clock Monitoring",
    desc: "Συνεχής 24ωρη παρακολούθηση λήψης σημάτων συναγερμού με άμεση επέμβαση. Κέντρο λήψης σημάτων υψηλής τεχνολογίας με εκπαιδευμένο προσωπικό.",
    features: ["24/7 παρακολούθηση", "Άμεση επέμβαση", "Ειδοποίηση σε πραγματικό χρόνο", "Ελεγχόμενες περιπολίες"],
    color: "#00E5FF",
  },
  {
    id: "04",
    title: "Περιμετρική Κάλυψη",
    subtitle: "Perimeter Security",
    desc: "Συστήματα περιμετρικής εξωτερικής κάλυψης για ολοκληρωμένη προστασία εγκαταστάσεων. Ανίχνευση εισβολής πριν αυτή συμβεί.",
    features: ["Εξωτερικοί αισθητήρες", "Φωτισμός ασφαλείας", "Ηλεκτρικές περίφραξεις", "Έλεγχος πρόσβασης"],
    color: "#3B82F6",
  },
];

export default function SecuritySystemsSection() {
  return (
    <section
      id="systems"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#070D14" }}
    >
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "80px",
          background: "#050A0F",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,229,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
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
              03 — Συστήματα Ασφαλείας
            </span>
          </div>

          <h2
            className="reveal-on-scroll"
            style={{
              fontFamily: "'Barlow Condensed', Arial, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#E8F4F8",
            }}
          >
            Τεχνολογία
            <br />
            <span style={{ color: "#00E5FF" }}>Αιχμής</span>
          </h2>

          <p
            className="mt-4 reveal-on-scroll"
            style={{
              fontFamily: "'Barlow', Arial, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#8A9BB0",
            }}
          >
            Συνεργαζόμαστε με τους κορυφαίους κατασκευαστές του κόσμου σε προϊόντα ασφαλείας υψηλής τεχνολογίας, προσφέροντας ολοκληρωμένες λύσεις για κάθε ανάγκη.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((system, i) => (
            <div
              key={system.id}
              className="reveal-on-scroll group relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,229,255,0.08)",
                padding: "2rem",
                transition: "all 0.4s ease",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(0,229,255,0.03)";
                el.style.borderColor = "rgba(0,229,255,0.2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,229,255,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(0,229,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* System number */}
              <div
                className="absolute top-4 right-6"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(0,229,255,0.06)",
                  userSelect: "none",
                }}
              >
                {system.id}
              </div>

              {/* Subtitle */}
              <div
                className="mb-3"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: system.color,
                  textTransform: "uppercase",
                }}
              >
                {system.subtitle}
              </div>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  color: "#E8F4F8",
                  lineHeight: 1.2,
                }}
              >
                {system.title}
              </h3>

              {/* Description */}
              <p
                className="mb-5"
                style={{
                  fontFamily: "'Barlow', Arial, sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "#8A9BB0",
                }}
              >
                {system.desc}
              </p>

              {/* Features list */}
              <div className="grid grid-cols-2 gap-2">
                {system.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: system.color }}
                    />
                    <span
                      style={{
                        fontFamily: "'Barlow', Arial, sans-serif",
                        fontSize: "0.78rem",
                        color: "#8A9BB0",
                      }}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${system.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal-on-scroll">
          <p
            className="mb-6"
            style={{
              fontFamily: "'Barlow', Arial, sans-serif",
              fontSize: "0.95rem",
              color: "#8A9BB0",
            }}
          >
            Δωρεάν μελέτη για την οργάνωση της ασφάλειας του χώρου σας
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "0.9rem 2.5rem",
              fontFamily: "'Barlow Condensed', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#00E5FF",
              border: "1px solid #00E5FF",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,229,255,0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(0,229,255,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Ζητήστε Δωρεάν Μελέτη
          </button>
        </div>
      </div>
    </section>
  );
}
