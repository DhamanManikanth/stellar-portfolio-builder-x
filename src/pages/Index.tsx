import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import YouTube from '../components/YouTube';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import StarRating from '../components/StarRating';
import Footer from '../components/Footer';
import { Github, Linkedin, Twitter, ArrowUp, Instagram } from 'lucide-react';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

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

    // Custom cursor logic
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.tagName === 'BUTTON' || 
                      target.tagName === 'A' || 
                      target.closest('button') || 
                      target.closest('a') ||
                      target.classList.contains('hover-effect') ||
                      target.closest('.hover-effect');
      
      setIsHovering(!!isButton);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      skillBars.forEach(bar => observer.unobserve(bar));
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className="min-h-screen page-bg">
      {/* Custom cursor - always shown with improved visibility */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`} 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px` 
        }}
      />
      <div 
        className={`custom-cursor-follower ${cursorVisible ? 'active' : ''}`} 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px` 
        }}
      />
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-25"></div>
      <Navbar />
      <Hero />
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <Education />
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <Skills />
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <YouTube />
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <Projects />
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <SocialMedia />
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <StarRating />
      </div>
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <Contact />
      </div>
      
      <Footer />
      
      {/* Fixed Social Bar */}
      <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-px after:h-[100px] after:bg-gradient-to-t after:from-vibrant-red after:to-vibrant-orange/30">
        <a 
          href="https://github.com/DhamanManikanth" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon hover-effect"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.openinapp.co/wf5sr" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon hover-effect"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twtr.openinapp.co/1hm2v" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon hover-effect"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://insta.openinapp.co/f4kag" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon hover-effect"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
      
      {/* Email Side Bar */}
      <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-px after:h-[100px] after:bg-gradient-to-t after:from-vibrant-red after:to-vibrant-orange/30">
        <a 
          href="mailto:dhaman211@gmail.com" 
          className="text-gray-300 hover:text-vibrant-red transition-colors vertical-text tracking-widest hover-effect"
          style={{ writingMode: 'vertical-rl' }}
        >
          dhaman211@gmail.com
        </a>
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 w-10 h-10 rounded-full bg-gradient-to-r from-vibrant-red to-vibrant-orange text-white flex items-center justify-center shadow-glow-red hover:shadow-glow-orange transition-all z-10 hover-effect"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default Index;
