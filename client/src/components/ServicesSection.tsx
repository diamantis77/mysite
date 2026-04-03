/**
 * GPSN Services Section — Premium service cards with icons
 * Design: Tactical Obsidian — asymmetric grid, cyan border-left accent, hover depth
 */

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Παροχή Συμβουλών Ασφαλείας",
    desc: "Εξειδικευμένη αξιολόγηση κινδύνων και στρατηγικός σχεδιασμός ασφαλείας προσαρμοσμένος στις ανάγκες κάθε επιχείρησης.",
    tag: "Advisory",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Στατικές Φυλάξεις",
    desc: "Επαγγελματικές φυλάξεις βιομηχανιών, οικιών, καταστημάτων, συνεδρίων, ημερίδων και εκδηλώσεων.",
    tag: "Static Guard",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Εκπαίδευση Προσωπικού",
    desc: "Ολοκληρωμένα προγράμματα εκπαίδευσης σε θέματα ασφαλείας, πρόληψης κινδύνων και διαχείρισης κρίσεων.",
    tag: "Training",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
      </svg>
    ),
    title: "Συνοδείες & Φυλάξεις Προσώπων",
    desc: "Διακριτική και αποτελεσματική προστασία προσώπων εντός και εκτός Ελλάδος, με εξειδικευμένο προσωπικό.",
    tag: "VIP Protection",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Μεταφορά & Αερομεταφορά",
    desc: "Ασφαλής μεταφορά και αερομεταφορά προσώπων με υψηλά πρότυπα ασφαλείας και εμπιστευτικότητας.",
    tag: "Transport",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Maritime Security",
    desc: "Εξειδικευμένες υπηρεσίες ναυτικής ασφαλείας για εμπορικά πλοία και ιδιωτικά σκάφη σε διεθνή ύδατα.",
    tag: "Maritime",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#050A0F" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663503940160/XmEWcbNxKfAXKJPvkaWmLg/gpsn_services_bg-E7VUqibKx33KSzSjDH74dD.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #050A0F 0%, rgba(5,10,15,0.85) 50%, #050A0F 100%)",
        }}
      />

      {/* Surveillance grid */}
      <div
        className="absolute inset-0 surveillance-grid"
        style={{ opacity: 0.4 }}
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
              02 — Υπηρεσίες
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
            Ποιοτικές Υπηρεσίες
            <br />
            <span style={{ color: "#00E5FF" }}>Εξυπηρέτησης</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal-on-scroll group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,229,255,0.08)",
                borderLeft: "3px solid #00E5FF",
                padding: "1.8rem",
                transition: "all 0.35s ease",
                transitionDelay: `${i * 0.07}s`,
                boxShadow: "-4px 0 20px rgba(0,229,255,0.08)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(0,229,255,0.04)";
                el.style.borderColor = "rgba(0,229,255,0.25)";
                el.style.borderLeftColor = "#00E5FF";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "-4px 0 30px rgba(0,229,255,0.2), 0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(0,229,255,0.08)";
                el.style.borderLeftColor = "#00E5FF";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "-4px 0 20px rgba(0,229,255,0.08)";
              }}
            >
              {/* Tag */}
              <div
                className="inline-block mb-4 px-2 py-0.5"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#00E5FF",
                  border: "1px solid rgba(0,229,255,0.3)",
                  background: "rgba(0,229,255,0.05)",
                }}
              >
                {service.tag}
              </div>

              {/* Icon */}
              <div
                className="mb-4"
                style={{ color: "#00E5FF" }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#E8F4F8",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Barlow', Arial, sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "#8A9BB0",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
