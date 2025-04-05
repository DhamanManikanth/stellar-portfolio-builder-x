
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import YouTube from '../components/YouTube';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Github, Linkedin, Twitter, ArrowUp, Instagram } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Initialize skill bars animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const width = progressBar.getAttribute('data-width');
            if (width) {
              progressBar.style.width = width;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => observer.observe(bar));

    return () => {
      skillBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);

  return (
    <div className="min-h-screen page-bg">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <YouTube />
      <Projects />
      <SocialMedia />
      <Contact />
      <Footer />
      
      {/* Fixed Social Bar */}
      <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-px after:h-[100px] after:bg-customText-body/30">
        <a 
          href="https://github.com/DhamanManikanth" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.openinapp.co/wf5sr" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twtr.openinapp.co/1hm2v" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://insta.openinapp.co/f4kag" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
      
      {/* Email Side Bar */}
      <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-px after:h-[100px] after:bg-customText-body/30">
        <a 
          href="mailto:dhaman211@gmail.com" 
          className="text-customText-body hover:text-customAccent transition-colors vertical-text tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          dhaman211@gmail.com
        </a>
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 w-10 h-10 rounded-full bg-customAccent text-customDark-background flex items-center justify-center shadow-glow-sm hover:shadow-glow-md transition-all z-10"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default Index;
