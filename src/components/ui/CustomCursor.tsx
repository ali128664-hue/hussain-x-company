import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  // --- Dot (snappy, follows mouse exactly) ---
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // --- Ring (smooth, slightly lagged) ---
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const springRing = { damping: 22, stiffness: 180, mass: 0.5 };
  const smoothX = useSpring(ringX, springRing);
  const smoothY = useSpring(ringY, springRing);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Touch devices — hide cursor
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const clickable =
        el.closest('a') ||
        el.closest('button') ||
        el.closest('[role="button"]') ||
        window.getComputedStyle(el).cursor === 'pointer';
      setIsHovering(!!clickable);
    };

    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [isVisible]);

  // Hide on touch screens
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* ── Outer ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-[#ED7A21]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width:  isClicking ? 28 : isHovering ? 48 : 36,
          height: isClicking ? 28 : isHovering ? 48 : 36,
          backgroundColor: isHovering
            ? 'rgba(237,122,33,0.12)'
            : 'rgba(237,122,33,0)',
          boxShadow: isHovering
            ? '0 0 18px 4px rgba(237,122,33,0.35)'
            : '0 0 0px 0px rgba(237,122,33,0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      />

      {/* ── Inner dot ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-[#ED7A21]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width:  isClicking ? 5 : isHovering ? 6 : 8,
          height: isClicking ? 5 : isHovering ? 6 : 8,
          boxShadow: isHovering
            ? '0 0 8px 2px rgba(237,122,33,0.7)'
            : '0 0 0px 0px rgba(237,122,33,0)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 700, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
