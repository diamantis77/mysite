/**
 * GPSN Hero Section — Cinematic full-screen hero
 * Design: Tactical Obsidian — animated surveillance grid, 3D shield, staggered text reveal
 */
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animated surveillance grid on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; pulse: number; speed: number }[] = [];
    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random(),
        y: Math.random(),
        pulse: Math.random() * Math.PI * 2,
        speed: 0.005 + Math.random() * 0.01,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Grid lines
      ctx.strokeStyle = "rgba(0, 229, 255, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Scan line
      const scanY = ((time * 80) % canvas.height);
      const gradient = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      gradient.addColorStop(0, "rgba(0, 229, 255, 0)");
      gradient.addColorStop(0.5, "rgba(0, 229, 255, 0.06)");
      gradient.addColorStop(1, "rgba(0, 229, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 40, canvas.width, 80);

      // Pulsing dots at grid intersections
      dots.forEach((dot) => {
        dot.pulse += dot.speed;
        const alpha = (Math.sin(dot.pulse) + 1) / 2 * 0.5 + 0.1;
        const x = dot.x * canvas.width;
        const y = dot.y * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.fill();
      });

      // Radar circles (right side)
      const cx = canvas.width * 0.72;
      const cy = canvas.height * 0.5;
      for (let r = 1; r <= 4; r++) {
        const radius = (r / 4) * Math.min(canvas.width * 0.3, canvas.height * 0.45);
        const alpha = 0.06 - r * 0.01;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Rotating radar sweep
      const sweepAngle = time * 0.8;
      const sweepRadius = Math.min(canvas.width * 0.3, canvas.height * 0.45);
      // sweep gradient placeholder
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(sweepAngle);
      const lineGrad = ctx.createLinearGradient(0, 0, sweepRadius, 0);
      lineGrad.addColorStop(0, "rgba(0, 229, 255, 0.5)");
      lineGrad.addColorStop(1, "rgba(0, 229, 255, 0)");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(sweepRadius, 0);
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#050A0F" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663503940160/XmEWcbNxKfAXKJPvkaWmLg/gpsn_hero_bg-LomBpZEyoHYdfxytEXKr4g.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
        }}
      />

      {/* Dark gradient overlay — left side darker for text */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background: "linear-gradient(105deg, rgba(5,10,15,0.97) 0%, rgba(5,10,15,0.85) 45%, rgba(5,10,15,0.4) 75%, rgba(5,10,15,0.6) 100%)",
        }}
      />

      {/* Animated canvas grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-2 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-3"
        style={{ background: "linear-gradient(to top, #050A0F, transparent)" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tactical label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div
              className="w-8 h-px"
              style={{ background: "#00E5FF" }}
            />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#00E5FF",
                textTransform: "uppercase",
              }}
            >
              Greek Provider Security Niche — Λάρισα
            </span>
            <span
              className="animate-dot-blink w-1.5 h-1.5 rounded-full"
              style={{ background: "#00E5FF" }}
            />
          </div>

          {/* Main headline */}
          <h1
            className={`mb-4 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Barlow Condensed', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#E8F4F8",
              transitionDelay: "0.2s",
            }}
          >
            Ασφάλεια
            <br />
            <span
              style={{
                color: "#00E5FF",
                textShadow: "0 0 30px rgba(0,229,255,0.5), 0 0 60px rgba(0,229,255,0.2)",
              }}
            >
              Υψηλού
            </span>
            <br />
            Επιπέδου
          </h1>

          {/* Subtitle */}
          <p
            className={`mb-8 max-w-xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              fontFamily: "'Barlow', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#8A9BB0",
              transitionDelay: "0.35s",
            }}
          >
            Η G.P.S.N. χαράζει νέους ορίζοντες στον τομέα υπηρεσιών ασφαλείας,
            παρέχοντας ολοκληρωμένες λύσεις προστασίας — από φύλαξη και CCTV
            έως 24ωρη παρακολούθηση και maritime security.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <button
              onClick={scrollToContact}
              style={{
                padding: "0.9rem 2.2rem",
                fontFamily: "'Barlow Condensed', Arial, sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #00E5FF, #0099BB)",
                color: "#050A0F",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(0,229,255,0.55), 0 8px 25px rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Επικοινωνία
            </button>

            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "0.9rem 2.2rem",
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
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,229,255,0.3), inset 0 0 20px rgba(0,229,255,0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Ζητήστε Προσφορά
            </button>
          </div>

          {/* Stats bar */}
          <div
            className={`flex flex-wrap gap-8 mt-12 pt-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              borderTop: "1px solid rgba(0,229,255,0.1)",
              transitionDelay: "0.65s",
            }}
          >
            {[
              { value: "24/7", label: "Παρακολούθηση" },
              { value: "20+", label: "Χρόνια Εμπειρίας" },
              { value: "100%", label: "Αξιοπιστία" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "#00E5FF",
                    lineHeight: 1,
                    textShadow: "0 0 20px rgba(0,229,255,0.4)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: "#8A9BB0",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: "#8A9BB0" }}
        aria-label="Scroll down"
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" style={{ color: "#00E5FF" }} />
      </button>
    </section>
  );
}
