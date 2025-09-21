import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Heart } from "lucide-react";

const TeachingExperience = () => {
  return (
    <section id="teaching" className="py-20 px-6 bg-gradient-to-r from-card/30 to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Teaching Experience
        </h2>
        
        {/* Teaching Specializations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="glass-card border-primary/20 smooth-transition hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ESL Instruction</h3>
              <p className="text-muted-foreground mb-4">
                Helping non-native speakers develop English language skills through 
                interactive and culturally sensitive teaching methods.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Conversational English</Badge>
                <Badge variant="secondary">Grammar</Badge>
                <Badge variant="secondary">Cultural Integration</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 smooth-transition hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Star size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kindergarten</h3>
              <p className="text-muted-foreground mb-4">
                Creating foundational learning experiences that spark curiosity 
                and build essential academic and social skills.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Early Literacy</Badge>
                <Badge variant="secondary">Social Skills</Badge>
                <Badge variant="secondary">Play-Based Learning</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 smooth-transition hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Heart size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prison Ministry</h3>
              <p className="text-muted-foreground mb-4">
                Teaching the Gospel inside the prision, while also providing
                a supportive environment for prisoners.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Child Development</Badge>
                <Badge variant="secondary">Safety & Care</Badge>
                <Badge variant="secondary">Family Support</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">
            Work Experience
          </h3>
          
          <div className="space-y-6">
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-primary">ESL Teacher</h4>
                  <span className="text-muted-foreground">2018 - Present</span>
                </div>
                <p className="text-accent font-medium mb-2">51Talk Corp.</p>
                <p className="text-muted-foreground mb-4">
                  Teaching English as a Second Language to diverse groups of students,
                  mostly Chinese, ranging from young learners to adults, using online platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Curriculum Development</Badge>
                  <Badge variant="outline">Student Assessment</Badge>
                  <Badge variant="outline">Cross-cultural Communication</Badge>
                </div>
              </CardContent>
            </Card>
            {/* Lagyan mo ng ibang work experience mo 'to*/}
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-primary">Massage Therapist</h4>
                  <span className="text-muted-foreground">2015-2017</span>
                </div>
                <p className="text-accent font-medium mb-2">Timelessn Spa</p>
                <p className="text-muted-foreground mb-4">
                  Provided therapeutic massage services to clients, focusing on relaxation and stress relief.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Relaxation Techniques</Badge>
                  <Badge variant="outline">Stress Relief</Badge>
                  <Badge variant="outline">Client Care</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-primary">Daycare Assistant</h4>
                  <span className="text-muted-foreground">no date - no date</span>
                </div>
                <p className="text-accent font-medium mb-2">Sunshine Daycare Center</p>
                <p className="text-muted-foreground mb-4">
                  Provided care and educational support for toddlers and preschoolers, 
                  assisting with daily activities and developmental milestones.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Child Care</Badge>
                  <Badge variant="outline">Safety Protocols</Badge>
                  <Badge variant="outline">Developmental Support</Badge>
                </div>
                <p className="text-sm text-muted-foreground/70 mt-3 italic">
                  * Placeholder content - please update with actual work experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Educational Background */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">
            Educational Background
          </h3>
          
          <div className="space-y-6">
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-primary">Bachelor of Early Childhood Education</h4>
                  <span className="text-muted-foreground">2023-2027</span>
                </div>
                <p className="text-accent font-medium mb-2">Gordon College - College of Education, Arts, and Sciences</p>
                <p className="text-muted-foreground mb-4">
                  Specialized in teaching kids, mainly Kindergarten and Daycare. Coursework included child psychology,
                  curriculum design, and educational technology.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TESOL Methodology</Badge>
                  <Badge variant="outline">Child Psychology</Badge>
                  <Badge variant="outline">Research Methods</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-primary">Associate in Computing Technology</h4>
                  <span className="text-muted-foreground">2010-2012</span>
                </div>
                <p className="text-accent font-medium mb-2">Central Luzon College of Science & Technology</p>
                <p className="text-muted-foreground mb-4">
                  Foundation in programming, database management, and software development 
                  that later informed analytical approach to education.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Programming</Badge>
                  <Badge variant="outline">Database Systems</Badge>
                  <Badge variant="outline">Software Engineering</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingExperience;