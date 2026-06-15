import { motion, useReducedMotion, type Variants } from 'framer-motion';

export function MeshGradientBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for the organic movement
  const blob1Variants: Variants = {
    animate: {
      x: ['0%', '10%', '-5%', '0%'],
      y: ['0%', '-10%', '5%', '0%'],
      transition: {
        duration: 15,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
    static: { x: '0%', y: '0%' },
  };

  const blob2Variants: Variants = {
    animate: {
      x: ['0%', '-15%', '5%', '0%'],
      y: ['0%', '10%', '-10%', '0%'],
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
    static: { x: '0%', y: '0%' },
  };

  const blob3Variants: Variants = {
    animate: {
      x: ['0%', '5%', '-15%', '0%'],
      y: ['0%', '15%', '-5%', '0%'],
      transition: {
        duration: 18,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
    static: { x: '0%', y: '0%' },
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#0C0C0C]">
      {/* Deep blue accent */}
      <motion.div
        variants={blob1Variants}
        animate={shouldReduceMotion ? 'static' : 'animate'}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1A365D] opacity-40 blur-[100px] md:blur-[140px]"
      />
      {/* Cyan/teal accent */}
      <motion.div
        variants={blob2Variants}
        animate={shouldReduceMotion ? 'static' : 'animate'}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#0E7490] opacity-30 blur-[100px] md:blur-[140px]"
      />
      {/* Subtle purple accent */}
      <motion.div
        variants={blob3Variants}
        animate={shouldReduceMotion ? 'static' : 'animate'}
        className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#4C1D95] opacity-20 blur-[100px] md:blur-[140px]"
      />
      {/* Extra dark overlay to ensure readability and premium feel */}
      <div className="absolute inset-0 bg-[#0C0C0C]/60 z-10" />
    </div>
  );
}
