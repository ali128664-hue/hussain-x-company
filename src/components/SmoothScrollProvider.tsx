import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollContextValue {
  lenis: Lenis | null;
  scrollY: number;
  velocity: number;
  progress: number;
  direction: number;
  scrollTo: (target: string | number | HTMLElement, options?: any) => void;
}

const SmoothScrollContext = createContext<ScrollContextValue>({
  lenis: null,
  scrollY: 0,
  velocity: 0,
  progress: 0,
  direction: 0,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    velocity: 0,
    progress: 0,
    direction: 0,
  });

  const requestRef = useRef<number>();
  
  // Framer motion scroll progress for the top bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2.2, // Very long glide
      easing: (t) => 1 - Math.pow(1 - t, 5), // Quintic Out Easing for intense styled momentum
      smoothWheel: true,
      wheelMultiplier: 1.5, // Amplified wheel input
      touchMultiplier: 2.5,
    });

    setLenis(lenisInstance);

    const onScroll = (e: any) => {
      setScrollState({
        scrollY: e.scroll,
        velocity: e.velocity,
        progress: e.progress,
        direction: e.direction,
      });
    };

    lenisInstance.on('scroll', onScroll);

    const raf = (time: number) => {
      lenisInstance.raf(time);
      requestRef.current = requestAnimationFrame(raf);
    };

    requestRef.current = requestAnimationFrame(raf);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lenisInstance.off('scroll', onScroll);
      lenisInstance.destroy();
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: any) => {
      if (lenis) {
        lenis.scrollTo(target, options);
      }
    },
    [lenis]
  );

  return (
    <SmoothScrollContext.Provider value={{ lenis, ...scrollState, scrollTo }}>
      {/* Cinematic Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ED7A21] via-amber-500 to-[#ED7A21] origin-left z-[9999]"
        style={{ scaleX }}
      />
      {children}
    </SmoothScrollContext.Provider>
  );
};
