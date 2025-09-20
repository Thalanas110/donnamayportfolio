import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeaching = () => {
    document.getElementById('teaching')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-2xl p-8 md:p-12 hero-glow smooth-transition hover:scale-105">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 border-2 border-primary/30">
              <GraduationCap size={64} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Teaching with Purpose
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            ESL & Early Childhood Educator
          </p>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nurturing young minds and empowering English learners with a unique blend of 
            educational expertise and technical insight. Born-again Christian dedicated to 
            making learning joyful and meaningful.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" size="lg" className="hero-glow" onClick={scrollToContact}>
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card border-primary/30 hover:bg-primary/10"
              onClick={scrollToTeaching}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              My Teaching Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;