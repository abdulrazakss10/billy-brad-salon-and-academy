'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollReveal({ 
  children, 
  direction = 'up', // 'up', 'left', 'right', 'none'
  className = '',
  delay = 0,
  threshold = 0.1
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            // Once visible, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  const baseClass = direction === 'up' 
    ? 'reveal' 
    : direction === 'left' 
      ? 'reveal-left' 
      : direction === 'right' 
        ? 'reveal-right' 
        : '';

  return (
    <div ref={ref} className={cn(baseClass, className)}>
      {children}
    </div>
  );
}
