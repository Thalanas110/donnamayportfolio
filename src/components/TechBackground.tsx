import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Clock, Lightbulb, ArrowRight } from "lucide-react";

const TechBackground = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Tech Background
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Past Developer Experience */}
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-semibold">The Developer Days</h3>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  ~14 Years Ago
                </span>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Back in the day, I was deeply involved in software development, working with 
                  various technologies and building web applications. Those were exciting times 
                  of debugging late into the night and the satisfaction of solving complex problems.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Technologies I Mastered</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SQL Databases</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">Web Development</Badge>
                    <Badge variant="outline">Backend Systems</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-accent">Core Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Problem Solving</Badge>
                    <Badge variant="secondary">Logic & Reasoning</Badge>
                    <Badge variant="secondary">Project Management</Badge>
                    <Badge variant="secondary">Attention to Detail</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current State & Transition */}
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <ArrowRight className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-semibold">From Code to Classroom</h3>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Current Skills
                </span>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  While I've shifted my focus entirely to education, I still retain basic HTML knowledge. 
                  The technical skills have evolved into educational tools, helping me create 
                  structured learning experiences and think systematically about child development.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Current Tech Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Basic HTML</Badge>
                    <Badge variant="outline">Digital Literacy</Badge>
                    <Badge variant="outline">Educational Technology</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-accent">How Tech Background Helps Teaching</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Lightbulb className="mr-2 h-4 w-4 mt-1 text-accent" />
                      <span>Structured approach to lesson planning</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="mr-2 h-4 w-4 mt-1 text-accent" />
                      <span>Breaking complex concepts into simple steps</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="mr-2 h-4 w-4 mt-1 text-accent" />
                      <span>Problem-solving mindset for learning challenges</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="mr-2 h-4 w-4 mt-1 text-accent" />
                      <span>Patience and persistence in teaching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Transition Story */}
        <Card className="glass-card border-primary/20 mt-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Code className="text-primary mr-3" size={32} />
              <h3 className="text-2xl font-semibold">The Career Transition</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The transition from software development to education wasn't just a career change—it was a calling. 
              While coding taught me to think logically and solve problems systematically, teaching allows me to 
              apply these same principles to nurture young minds. The debugging mindset now helps me identify 
              learning gaps, and the patience required for coding translates beautifully to working with children 
              who are just beginning their educational journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechBackground;