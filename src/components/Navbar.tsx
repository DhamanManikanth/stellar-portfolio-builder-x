
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">Portfolio</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('education')} className="font-medium hover:text-primary transition-colors">Education</button>
          <button onClick={() => scrollToSection('skills')} className="font-medium hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('youtube')} className="font-medium hover:text-primary transition-colors">YouTube</button>
          <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-primary transition-colors">Projects</button>
          <Button onClick={() => scrollToSection('contact')} variant="default" size="sm">Contact Me</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 dark:text-gray-200" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-all duration-300 ease-in-out transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full",
        "md:hidden flex flex-col pt-24 px-8"
      )}>
        <div className="flex flex-col space-y-6">
          <button onClick={() => scrollToSection('home')} className="py-2 text-lg font-medium hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('education')} className="py-2 text-lg font-medium hover:text-primary transition-colors">Education</button>
          <button onClick={() => scrollToSection('skills')} className="py-2 text-lg font-medium hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('youtube')} className="py-2 text-lg font-medium hover:text-primary transition-colors">YouTube</button>
          <button onClick={() => scrollToSection('projects')} className="py-2 text-lg font-medium hover:text-primary transition-colors">Projects</button>
          <Button onClick={() => scrollToSection('contact')} variant="default" size="default" className="mt-4">Contact Me</Button>
        </div>
        
        <div className="mt-auto mb-12 flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
