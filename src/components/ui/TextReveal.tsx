import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)',
      scale: 0.8,
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
      className={cn('', className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0.25em', display: 'inline-block' }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
