import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TeachingExperience from "./TeachingExperience";
import TechBackground from "./TechBackground";
import ContactForm from "./ContactForm";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      {/* Overlay for better text readability (kept for extra blur) */}
      <div className="fixed inset-0 bg-background/40 backdrop-blur-sm -z-10" />

      {/* Sticky fog effect at bottom */}
      <div className="sticky-fog" />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TeachingExperience />
        <TechBackground />
        <ContactForm />
      </div>
    </div>
  );
};

export default Portfolio;