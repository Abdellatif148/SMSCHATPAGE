import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Cloud, Lock, LogIn, Globe } from 'lucide-react';
import { Section } from './ui/Section';

const steps = [
  { icon: <Smartphone />, title: "Local SMS", desc: "Messages stored on device" },
  { icon: <LogIn />, title: "Enable Sync", desc: "Optional Sign In" },
  { icon: <Lock />, title: "Encryption", desc: "AES-256 before upload" },
  { icon: <Cloud />, title: "Supabase", desc: "Secure Cloud Storage" },
  { icon: <Globe />, title: "Any Device", desc: "Access from web/tablet" },
];

export const Timeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="py-24 bg-brand-black/50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How Cloud Sync Works</h2>
          <p className="text-white/50 mt-2">Secure, encrypted, and completely optional.</p>
        </div>

        <div className="relative">
          {/* Connector Line Container */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0">
            {/* Base track */}
            <div className={`absolute inset-0 bg-white/5 rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            
            {/* Animated drawing line */}
            <div 
              className={`h-full bg-gradient-to-r from-transparent via-brand-electric to-transparent absolute top-0 left-0 transition-all duration-[1500ms] ease-out`}
              style={{
                width: isVisible ? '100%' : '0%',
                opacity: isVisible ? 1 : 0
              }}
            ></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center group transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${index * 200 + 300}ms`
                }}
              >
                <div className={`w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-brand-electric mb-4 transition-all duration-300 bg-brand-black border border-white/10 relative z-10 ${isVisible ? 'animate-pulse-glow' : ''}`}>
                  {step.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-white/50 max-w-[100px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};