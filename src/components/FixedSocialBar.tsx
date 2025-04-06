
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const FixedSocialBar = () => {
  return (
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
  );
};

export default FixedSocialBar;
