import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export function CursorSpotlight() {
  const [isVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: fine)').matches;
    }
    return false;
  });
  
  // Motion values for tracking cursor position
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  // Smooth springs for buttery trailing effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Template to continuously update the background gradient
  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.04), transparent 40%)`;

  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10"
      style={{ background }}
      aria-hidden="true"
    />
  );
}
