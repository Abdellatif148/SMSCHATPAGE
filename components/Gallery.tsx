import React, { useEffect, useRef, useState } from 'react';
import { Section } from './ui/Section';

const PhoneFrame: React.FC<{ color?: string, delay?: string }> = ({ color = "bg-brand-blue", delay = "0s" }) => (
  <div 
    className="w-[260px] h-[520px] rounded-[40px] bg-black border-[6px] border-zinc-800 shadow-2xl relative overflow-hidden transform hover:-translate-y-4 transition-transform duration-500 shrink-0 group"
    style={{ animationDelay: delay }}
  >
    {/* Screen Content Placeholder */}
    <div className="absolute inset-0 bg-zinc-900 flex flex-col">
       {/* UI Header */}
       <div className="h-24 bg-zinc-900 border-b border-white/5 p-6 flex flex-col justify-end">
          <div className="h-6 w-32 bg-white/10 rounded-full"></div>
       </div>
       {/* Chat Bubbles */}
       <div className="flex-1 p-4 space-y-4">
          <div className="flex justify-end"><div className={`h-12 w-3/4 rounded-2xl rounded-tr-sm ${color} opacity-80`}></div></div>
          <div className="flex justify-start"><div className="h-10 w-2/3 rounded-2xl rounded-tl-sm bg-zinc-800"></div></div>
          <div className="flex justify-end"><div className={`h-16 w-1/2 rounded-2xl rounded-tr-sm ${color} opacity-80`}></div></div>
          <div className="flex justify-start"><div className="h-8 w-1/3 rounded-2xl rounded-tl-sm bg-zinc-800"></div></div>
       </div>
       {/* Bottom Input */}
       <div className="h-16 bg-zinc-900 border-t border-white/5 mx-4 mb-2 rounded-full mt-auto flex items-center px-4">
          <div className="h-8 w-full bg-zinc-800 rounded-full"></div>
       </div>
    </div>
    {/* Reflection */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
  </div>
);

export const Gallery: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        // Only update if visible or close to visible to save performance
        // We use a broader range to ensure the parallax feels continuous entering/exiting
        if (top < window.innerHeight + 200 && top > -sectionRef.current.offsetHeight - 200) {
           setScrollY(top);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section className="py-24 overflow-hidden">
      <div ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Beautifully Designed</h2>
          <p className="text-white/60">A consistent experience across every screen.</p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex justify-center gap-8 md:gap-16 px-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory items-start">
             {/* Phone 1 - Moves faster (closer) */}
             <div className="snap-center" style={{ transform: `translateY(${scrollY * 0.08}px)`, transition: 'transform 0.1s linear' }}>
                 <PhoneFrame delay="0s" color="bg-blue-600" />
             </div>
             
             {/* Phone 2 - Moves slower (further) + Static Offset */}
             <div className="snap-center pt-8 md:pt-12">
                <div style={{ transform: `translateY(${scrollY * -0.04}px)`, transition: 'transform 0.1s linear' }}>
                   <PhoneFrame delay="0.2s" color="bg-purple-600" />
                </div>
             </div>

             {/* Phone 3 - Moves faster (closer) */}
             <div className="snap-center" style={{ transform: `translateY(${scrollY * 0.08}px)`, transition: 'transform 0.1s linear' }}>
                 <PhoneFrame delay="0.4s" color="bg-indigo-600" />
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};