
import React from 'react';

const SectionDivider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      {children}
    </div>
  );
};

export default SectionDivider;
