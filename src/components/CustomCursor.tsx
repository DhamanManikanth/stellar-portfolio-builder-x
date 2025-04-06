import React from 'react';

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
      {/* We'll remove the custom cursor since we're going back to normal cursor */}
    </>
  );
};

export default CustomCursor;
