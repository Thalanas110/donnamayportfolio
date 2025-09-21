import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, User, MessageCircle, Phone, Linkedin, Facebook, MessageSquare } from "lucide-react";
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
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
              </div>

              {/* Contact details column */}
              <aside className="pt-2">
                <h3 className="text-xl font-semibold mb-4 text-primary">Other ways to reach me</h3>
                <p className="text-muted-foreground mb-4">Quick links and direct contact information.</p>

                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <Phone size={18} />
                    <a href="sms:+639214129494" aria-label="Send SMS to +63 921 412 9494" className="hover:underline">+63 921 412 9494</a>
                  </li>

                  <li className="flex items-center gap-3">
                    <Mail size={18} />
                    <a href="mailto:mesinadm32@gmail.com" aria-label="Send email to mesinadm32@gmail.com" className="hover:underline">mesinadm32@gmail.com</a>
                  </li>

                  <li className="flex items-center gap-3">
                    <Linkedin size={18} />
                    <a href="https://ph.linkedin.com/in/donna-mesina-314a03354" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                  </li>

                  <li className="flex items-center gap-3">
                    <MessageSquare size={18} />
                    <span>WeChat: your-wechat-id</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4L22 22l-5.1-2.5a8.5 8.5 0 1 1 4.1-8z"></path><path d="M22 22l-2-2"></path></svg>
                    <a href="https://wa.me/639214129494" target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat with +63 921 412 9494" className="hover:underline">WhatsApp</a>
                  </li>

                  <li className="flex items-center gap-3">
                    <Facebook size={18} />
                    <a href="https://www.facebook.com/Dmjmesina" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
                  </li>
                </ul>
              </aside>

            </div>

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