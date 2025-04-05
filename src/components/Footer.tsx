
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Dhaman Manikanth</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
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
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#education" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Education</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#youtube" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">YouTube</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Hyderabad, Telangana, India</li>
              <li>
                <a href="mailto:dhaman211@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  dhaman211@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Dhaman Manikanth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
