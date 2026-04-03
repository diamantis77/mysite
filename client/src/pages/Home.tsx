/**
 * GPSN Home Page — "Tactical Obsidian" Design System
 * All sections assembled in order: Nav → Hero → About → Services → Systems → Why Us → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SecuritySystemsSection from "@/components/SecuritySystemsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#050A0F", color: "#E8F4F8" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SecuritySystemsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
