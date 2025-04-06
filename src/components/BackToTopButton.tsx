
import React from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 w-10 h-10 rounded-full bg-gradient-to-r from-vibrant-red to-vibrant-orange text-white flex items-center justify-center shadow-glow-red hover:shadow-glow-orange transition-all z-10 hover-effect"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTopButton;
