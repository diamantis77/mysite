/**
 * GPSN Contact Section — Full contact info, map, and form
 * Design: Tactical Obsidian — glass panels, Google Maps embed, form with glow focus
 */
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MapView } from "@/components/Map";

const contactInfo = [
  {
    icon: <MapPin size={18} />,
    label: "Διεύθυνση",
    value: "Φαρσάλων 3, ΤΚ 41222, Λάρισα",
    link: "https://maps.google.com/?q=Φαρσάλων+3,+Λάρισα",
  },
  {
    icon: <Phone size={18} />,
    label: "Τηλέφωνο",
    value: "2410 – 549922",
    link: "tel:+302410549922",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "gpsn.sec@gmail.com",
    link: "mailto:gpsn.sec@gmail.com",
  },
  {
    icon: <Clock size={18} />,
    label: "Διαθεσιμότητα",
    value: "24 ώρες / 7 ημέρες",
    link: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(0,229,255,0.15)",
    color: "#E8F4F8",
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.6rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#8A9BB0",
  };

  return (
    <section
      id="contact"
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
          background: "radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.04) 0%, transparent 60%)",
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
              05 — Επικοινωνία
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
            Επικοινωνήστε
            <br />
            <span style={{ color: "#00E5FF" }}>Μαζί Μας</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info + Map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact Info Cards */}
            <div
              className="reveal-on-scroll"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,229,255,0.1)",
                padding: "1.8rem",
              }}
            >
              <div className="flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 mt-0.5 p-2"
                      style={{
                        background: "rgba(0,229,255,0.08)",
                        color: "#00E5FF",
                        border: "1px solid rgba(0,229,255,0.2)",
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.15em",
                          color: "#8A9BB0",
                          textTransform: "uppercase",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "'Barlow', Arial, sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#E8F4F8",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5FF")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#E8F4F8")}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontFamily: "'Barlow', Arial, sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#E8F4F8",
                          }}
                        >
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div
              className="reveal-on-scroll overflow-hidden"
              style={{
                height: "280px",
                border: "1px solid rgba(0,229,255,0.15)",
                position: "relative",
              }}
            >
              <MapView
                onMapReady={(map: google.maps.Map) => {
                  const geocoder = new google.maps.Geocoder();
                  geocoder.geocode(
                    { address: "Φαρσάλων 3, Λάρισα, Greece" },
                    (results, status) => {
                      if (status === "OK" && results && results[0]) {
                        const location = results[0].geometry.location;
                        map.setCenter(location);
                        map.setZoom(16);
                        new google.maps.Marker({
                          position: location,
                          map,
                          title: "G.P.S.N. – Greek Provider Security Niche",
                          icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 10,
                            fillColor: "#00E5FF",
                            fillOpacity: 1,
                            strokeColor: "#050A0F",
                            strokeWeight: 2,
                          },
                        });
                      }
                    }
                  );
                  // Dark map style
                  map.setOptions({
                    styles: [
                      { elementType: "geometry", stylers: [{ color: "#0A1520" }] },
                      { elementType: "labels.text.stroke", stylers: [{ color: "#050A0F" }] },
                      { elementType: "labels.text.fill", stylers: [{ color: "#8A9BB0" }] },
                      { featureType: "road", elementType: "geometry", stylers: [{ color: "#0F1E2E" }] },
                      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#050A0F" }] },
                      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#1A2535" }] },
                      { featureType: "water", elementType: "geometry", stylers: [{ color: "#050A0F" }] },
                      { featureType: "poi", elementType: "geometry", stylers: [{ color: "#0A1520" }] },
                    ],
                  });
                }}
              />
              {/* Map overlay label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2"
                style={{
                  background: "linear-gradient(to top, rgba(5,10,15,0.9), transparent)",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: "#00E5FF",
                    textTransform: "uppercase",
                  }}
                >
                  ● Φαρσάλων 3, Λάρισα
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 reveal-on-scroll">
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,229,255,0.1)",
                padding: "2.5rem",
              }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#E8F4F8",
                }}
              >
                Στείλτε μας Μήνυμα
              </h3>

              {submitted ? (
                <div
                  className="text-center py-12"
                  style={{
                    border: "1px solid rgba(0,229,255,0.3)",
                    background: "rgba(0,229,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "#00E5FF",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    ✓ Το μήνυμά σας εστάλη!
                  </div>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "'Barlow', Arial, sans-serif",
                      color: "#8A9BB0",
                      fontSize: "0.9rem",
                    }}
                  >
                    Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Ονοματεπώνυμο *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Το ονοματεπώνυμό σας"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
                          e.currentTarget.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Τηλέφωνο *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Τηλέφωνο επικοινωνίας"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
                          e.currentTarget.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Η διεύθυνση email σας"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Υπηρεσία Ενδιαφέροντος</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2300E5FF' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "2.5rem",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <option value="" style={{ background: "#0A1520" }}>Επιλέξτε υπηρεσία...</option>
                      <option value="cctv" style={{ background: "#0A1520" }}>Κλειστά Κυκλώματα CCTV</option>
                      <option value="alarm" style={{ background: "#0A1520" }}>Σύστημα Συναγερμού</option>
                      <option value="guard" style={{ background: "#0A1520" }}>Στατική Φύλαξη</option>
                      <option value="patrol" style={{ background: "#0A1520" }}>Περιπολίες</option>
                      <option value="vip" style={{ background: "#0A1520" }}>Φύλαξη Προσώπων</option>
                      <option value="maritime" style={{ background: "#0A1520" }}>Maritime Security</option>
                      <option value="other" style={{ background: "#0A1520" }}>Άλλο</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Μήνυμα</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Περιγράψτε τις ανάγκες σας..."
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "1rem 2rem",
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
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,229,255,0.4)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    Αποστολή Μηνύματος
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
