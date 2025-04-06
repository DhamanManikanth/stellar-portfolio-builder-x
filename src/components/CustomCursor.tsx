
import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorPosition: { x: number, y: number };
  isHovering: boolean;
  cursorVisible: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ 
  cursorPosition, 
  isHovering, 
  cursorVisible 
}) => {
  return (
    <>
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
    </>
  );
};

export default CustomCursor;
