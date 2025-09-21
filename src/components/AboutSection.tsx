import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Users, Quote, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/picture.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
          About Me
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 text-accent">
          Who exactly am I in the eyes of the world and to God?
        </h3>
        
        {/* Main About Card */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="glass-card border-primary/20 smooth-transition hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/30">
                  <img 
                    src={profilePhoto} 
                    alt="Donna May J. Mesina - ESL Teacher and Early Childhood Educator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Donna May J. Mesina</h3>
                <p className="text-lg text-accent font-medium mb-4">
                  ESL Teacher, Early Childhood Educator, Former Software Developer
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p><Calendar className="inline mr-2 h-4 w-4" />Born March 2, 1981</p>
                  <p><Heart className="inline mr-2 h-4 w-4" />Born-again Christian</p>
                  <p><Users className="inline mr-2 h-4 w-4" />Single</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Personal Mission */}
            <Card className="glass-card border-primary/20 smooth-transition hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">My Heart for Teaching</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I believe every child deserves a compassionate teacher who sees their potential 
                  and helps them flourish both academically and personally. My journey from 
                  software development to education has given me unique insights into how 
                  children learn and grow.
                </p>
                
                {/* Favorite Bible Verse */}
                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <Quote className="text-primary mb-3" size={24} />
                  <blockquote className="text-lg italic text-foreground/90 mb-3">
                    "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth!"
                  </blockquote>
                  <cite className="text-primary font-medium">— Psalm 46:10</cite>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card border-primary/20 smooth-transition hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Sparkles className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Personal Interests</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-3 text-accent">Hobbies & Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Reading</Badge>
                      <Badge variant="secondary">Gardening</Badge>
                      <Badge variant="secondary">Sharing God's word</Badge>
                      <Badge variant="secondary">Teaching</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-accent">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Child Psychology</Badge>
                      <Badge variant="secondary">Language Learning</Badge>
                      <Badge variant="secondary">Art & Crafts</Badge>
                      <Badge variant="secondary">Music</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;