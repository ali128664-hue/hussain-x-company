import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
  blur?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  scale = true,
  blur = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 60, x: 0 };
      case 'down': return { y: -60, x: 0 };
      case 'left': return { x: 60, y: 0 };
      case 'right': return { x: -60, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const initialOffset = getDirectionOffset();
  const initialScale = scale ? 0.85 : 1;
  const initialBlur = blur ? 'blur(12px)' : 'blur(0px)';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: initialScale, filter: initialBlur, ...initialOffset }}
      animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)', x: 0, y: 0 } : { opacity: 0, scale: initialScale, filter: initialBlur, ...initialOffset }}
      transition={{ 
        type: 'spring', 
        stiffness: 70, 
        damping: 15, 
        mass: 0.8,
        restDelta: 0.001,
        delay 
      }}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
