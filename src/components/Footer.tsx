
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vibrant-red to-vibrant-orange"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Dhaman Manikanth</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Student and Web Developer specializing in front-end technologies
              and sharing college experiences through YouTube videos.
            </p>
            <div className="flex space-x-4">
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
                href="https://yt.openinapp.co/28ho8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="YouTube"
              >
                <Youtube size={20} />
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
              <a 
                href="mailto:dhaman211@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white gradient-border inline-block pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-vibrant-red transition-colors">Home</a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-vibrant-red transition-colors">Education</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-vibrant-red transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-vibrant-red transition-colors">Projects</a>
              </li>
              <li>
                <a href="#youtube" className="text-gray-300 hover:text-vibrant-red transition-colors">YouTube</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-vibrant-red transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white gradient-border inline-block pb-2">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Hyderabad, Telangana, India</li>
              <li>
                <a href="mailto:dhaman211@gmail.com" className="text-gray-300 hover:text-vibrant-red transition-colors">
                  dhaman211@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Dhaman Manikanth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
