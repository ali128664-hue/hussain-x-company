import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Very snappy, high-stiffness spring for zero-lag feel
  const springConfig = { damping: 25, stiffness: 600, mass: 0.1 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [hoverState, setHoverState] = useState<'default' | 'hover'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
        
      setHoverState(isClickable ? 'hover' : 'default');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const isHovering = hoverState === 'hover';

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] flex items-center justify-center mix-blend-difference bg-white overflow-hidden"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: isHovering ? '100px' : '20px',
        height: isHovering ? '100px' : '20px',
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ 
        width: { type: 'spring', damping: 20, stiffness: 300 },
        height: { type: 'spring', damping: 20, stiffness: 300 }
      }}
    >
      <motion.span
        initial={false}
        animate={{ 
          opacity: isHovering ? 1 : 0, 
          scale: isHovering ? 1 : 0,
          y: isHovering ? 0 : 20
        }}
        transition={{ duration: 0.2 }}
        className="text-black text-[11px] font-extrabold tracking-[0.25em] mix-blend-normal absolute whitespace-nowrap"
      >
        EXPLORE
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
