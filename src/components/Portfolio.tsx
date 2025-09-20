import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TeachingExperience from "./TeachingExperience";
import TechBackground from "./TechBackground";
import ContactForm from "./ContactForm";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-background/40 backdrop-blur-sm -z-10" />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TeachingExperience />
        <TechBackground />
        <ContactForm />

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-muted-foreground">
          <p>&copy; 2024 Donna May J. Mesina • All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;