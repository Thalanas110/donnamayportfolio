import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, User, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Let's Connect
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for a dedicated educator, want to discuss teaching opportunities, 
            or simply want to connect, I'd love to hear from you. Together, we can make a difference 
            in children's lives.
          </p>
        </div>

        <Card className="glass-card border-primary/20">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User size={16} />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="glass-card border-primary/30 bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={16} />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass-card border-primary/30 bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="glass-card border-primary/30 bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your inquiry, teaching opportunity, or how we can connect..."
                  rows={6}
                  required
                  className="glass-card border-primary/30 bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full hero-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-primary/20 text-center">
              <p className="text-muted-foreground">
                Prefer a different way to connect? Feel free to reach out through your preferred method.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;