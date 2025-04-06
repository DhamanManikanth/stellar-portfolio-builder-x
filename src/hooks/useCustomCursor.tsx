import { useState, useEffect } from 'react';

export const useCustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // No longer attaching event listeners
  
  return { cursorPosition, isHovering, cursorVisible };
};
