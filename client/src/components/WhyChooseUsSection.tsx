/**
 * GPSN Why Choose Us Section — Trust elements & differentiators
 * Design: Tactical Obsidian — dark background, metallic stats, glass panels
 */
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Χρόνια Εμπειρίας" },
  { value: 500, suffix: "+", label: "Ικανοποιημένοι Πελάτες" },
  { value: 24, suffix: "/7", label: "Παρακολούθηση" },
  { value: 100, suffix: "%", label: "Αξιοπιστία" },
];

const reasons = [
  {
    icon: "◈",
    title: "Εξειδικευμένο Προσωπικό",
    desc: "Εκπαιδευμένοι επαγγελματίες ασφαλείας με πιστοποιήσεις και εμπειρία σε υψηλού κινδύνου περιβάλλοντα.",
  },
  {
    icon: "◈",
    title: "Προσαρμοσμένες Λύσεις",
    desc: "Κάθε πελάτης λαμβάνει εξατομικευμένο σχέδιο ασφαλείας βασισμένο στις ειδικές του ανάγκες και τον προϋπολογισμό του.",
  },
  {
    icon: "◈",
    title: "Τεχνολογία Αιχμής",
    desc: "Χρησιμοποιούμε αποκλειστικά εξοπλισμό από τους κορυφαίους κατασκευαστές παγκοσμίως για μέγιστη αποτελεσματικότητα.",
  },
  {
    icon: "◈",
    title: "Άμεση Ανταπόκριση",
    desc: "Ελεγχόμενες περιπολίες και άμεση επέμβαση σε κάθε συμβάν, 24 ώρες το 24ωρο, 365 ημέρες τον χρόνο.",
  },
  {
    icon: "◈",
    title: "Πλήρης Κάλυψη",
    desc: "Από απλές φυλάξεις έως σύνθετες επιχειρήσεις ασφαλείας, καλύπτουμε κάθε ανάγκη εντός και εκτός Ελλάδος.",
  },
  {
    icon: "◈",
    title: "Εμπιστευτικότητα",
    desc: "Απόλυτη εχεμύθεια και σεβασμός στην ιδιωτικότητα των πελατών μας αποτελούν θεμελιώδεις αρχές της λειτουργίας μας.",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span>{count}</span>
      <span style={{ color: "#00E5FF" }}>{suffix}</span>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#050A0F" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 surveillance-grid"
        style={{ opacity: 0.25 }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 reveal-on-scroll">
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
              04 — Γιατί G.P.S.N.
            </span>
            <div className="w-8 h-px" style={{ background: "#00E5FF" }} />
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
            Γιατί να μας{" "}
            <span style={{ color: "#00E5FF" }}>Επιλέξετε</span>
          </h2>
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 reveal-on-scroll"
          style={{
            background: "rgba(0,229,255,0.1)",
            border: "1px solid rgba(0,229,255,0.1)",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-8 px-4"
              style={{ background: "#050A0F" }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  lineHeight: 1,
                  color: "#E8F4F8",
                  textShadow: "0 0 30px rgba(0,229,255,0.3)",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "#8A9BB0",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal-on-scroll group"
              style={{
                padding: "1.8rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,229,255,0.06)",
                transition: "all 0.3s ease",
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(0,229,255,0.03)";
                el.style.borderColor = "rgba(0,229,255,0.2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(0,229,255,0.06)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="mb-4 text-2xl"
                style={{ color: "#00E5FF" }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#E8F4F8",
                }}
              >
                {reason.title}
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
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
