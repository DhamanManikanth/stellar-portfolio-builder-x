
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-customDark-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-customAccent text-customAccent">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">Contact <span>Me</span></h2>
          <p className="text-customText-body max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="md:col-span-2 animate-fade-in">
            <Card className="custom-card border-none shadow-glow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center mr-4 flex-shrink-0 border border-customAccent/20">
                      <Mail size={20} className="text-customAccent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Email</h4>
                      <a href="mailto:dhaman211@gmail.com" className="text-customText-body hover:text-customAccent transition-colors">
                        dhaman211@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center mr-4 flex-shrink-0 border border-customAccent/20">
                      <MapPin size={20} className="text-customAccent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Location</h4>
                      <p className="text-customText-body">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-bold text-lg mb-4 text-white">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.openinapp.co/wf5sr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center social-icon border border-customAccent/20"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://github.com/DhamanManikanth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center social-icon border border-customAccent/20"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="https://twtr.openinapp.co/1hm2v"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center social-icon border border-customAccent/20"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="https://yt.openinapp.co/28ho8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center social-icon border border-customAccent/20"
                      aria-label="YouTube"
                    >
                      <Youtube size={18} />
                    </a>
                    <a 
                      href="https://insta.openinapp.co/f4kag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-customDark-background flex items-center justify-center social-icon border border-customAccent/20"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 animate-fade-in stagger-1">
            <Card className="custom-card border-none shadow-glow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="custom-input bg-customDark-background border-customAccent/50 focus:border-customAccent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="custom-input bg-customDark-background border-customAccent/50 focus:border-customAccent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="custom-input bg-customDark-background border-customAccent/50 focus:border-customAccent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="custom-input bg-customDark-background border-customAccent/50 focus:border-customAccent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-customAccent text-customDark-background hover:bg-customAccent/90 shadow-glow-sm hover:shadow-glow-md"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <span className="animate-spin mr-2">
                          <Loader2 size={18} />
                        </span>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
