import React, { useEffect, useRef, useState } from 'react';
import { BaseProps } from '../../types';

export const Section: React.FC<BaseProps & { id?: string }> = ({ children, className = '', id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id}
      ref={ref} 
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        ${className}
      `}
    >
      {children}
    </section>
  );
};
