import { useRef, useState, cloneElement, useEffect } from 'react';
import type { ReactElement } from 'react';

interface MagnetProps {
  children: ReactElement;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export function Magnet({ 
  children, 
  padding = 150, 
  strength = 3, 
  activeTransition = "transform 0.3s ease-out", 
  inactiveTransition = "transform 0.6s ease-in-out" 
}: MagnetProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    
    // Check if within padding distance
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = Math.max(width, height) / 2 + padding;

    if (distance < maxDistance) {
      setIsActive(true);
      setPosition({ x: distanceX / strength, y: distanceY / strength });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength, padding]);

  return cloneElement(children as ReactElement<any>, {
    ref,
    style: {
      ...(children as ReactElement<any>).props?.style,
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: isActive ? activeTransition : inactiveTransition,
      willChange: 'transform'
    }
  });
}
