
import React from 'react';

const EmailSidebar = () => {
  return (
    <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-px after:h-[100px] after:bg-gradient-to-t after:from-vibrant-red after:to-vibrant-orange/30">
      <a 
        href="mailto:dhaman211@gmail.com" 
        className="text-gray-300 hover:text-vibrant-red transition-colors vertical-text tracking-widest hover-effect"
        style={{ writingMode: 'vertical-rl' }}
      >
        dhaman211@gmail.com
      </a>
    </div>
  );
};

export default EmailSidebar;
