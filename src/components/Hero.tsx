
import React from 'react';
import { ArrowDown, Github, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 bg-customDark-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-xl font-medium text-customAccent animate-fade-in mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in stagger-1 text-white">
            Dhaman <span className="text-customAccent">Manikanth</span>
          </h1>
          <h3 className="text-xl md:text-2xl text-customText-body font-medium mb-6 animate-fade-in stagger-2">
            Student & Content Creator
          </h3>
          <p className="text-customText-body mb-8 max-w-lg animate-fade-in stagger-3">
            I specialize in creating web applications and sharing my college experiences 
            through my YouTube channel. Currently pursuing my BTech in Computer Science.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in stagger-4">
            <Button onClick={scrollToContact} className="btn-hover-effect bg-customAccent text-customDark-background hover:bg-customAccent/90" size="lg">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="group border-customAccent text-customAccent hover:bg-customAccent/10" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore My Work
              <ArrowDown size={16} className="ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-5 animate-fade-in stagger-5">
            <a 
              href="https://github.com/DhamanManikanth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.openinapp.co/wf5sr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://yt.openinapp.co/28ho8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="YouTube"
            >
              <Youtube size={22} />
            </a>
            <a 
              href="https://insta.openinapp.co/f4kag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a 
              href="https://twtr.openinapp.co/1hm2v" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-customAccent shadow-glow-md animate-scale-in glow-effect">
              <img 
                src="/lovable-uploads/20efa489-98cf-43be-830e-90881261d9f6.png" 
                alt="Dhaman Manikanth" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-customAccent text-customDark-background px-6 py-3 rounded-full shadow-glow-sm animate-fade-in stagger-4">
              <span className="font-medium">Student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
