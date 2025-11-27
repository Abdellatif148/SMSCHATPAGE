import React from 'react';
import { Download, Github } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="z-10 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-sm mb-6">
            <span className="text-brand-blue text-xs font-bold tracking-wider uppercase">v2.0 Now Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            SMSChat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Simple. Secure. Modern.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
            A beautifully designed SMS experience with cloud sync made optional. 
            Privacy-first messaging for the modern web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              variant="primary" 
              icon={<Download className="w-5 h-5" />}
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download APK
            </Button>
            <a href="https://github.com/Abdellatif148" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={<Github className="w-5 h-5" />}>
                View GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side: Phone Mockup */}
        <div className="order-1 md:order-2 flex justify-center relative perspective-1000">
          <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-black rounded-[50px] border-[8px] border-zinc-800 shadow-2xl animate-float overflow-hidden transform rotate-y-[-15deg] rotate-x-[10deg] hover:rotate-0 transition-transform duration-700">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-brand-dark flex flex-col">
              {/* Fake Status Bar */}
              <div className="h-8 w-full flex justify-between items-center px-6 pt-2">
                <div className="text-[10px] text-white font-medium">9:41</div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
              </div>
              
              {/* App UI Header */}
              <div className="mt-4 px-4 pb-4 border-b border-white/5">
                <h2 className="text-2xl font-bold text-white">Messages</h2>
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                    {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="w-14 h-14 rounded-full bg-zinc-800 flex-shrink-0 border-2 border-brand-blue/50"></div>
                    ))}
                </div>
              </div>

              {/* Message List */}
              <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <div className="h-3 w-20 bg-white/30 rounded"></div>
                        <div className="h-2 w-8 bg-white/10 rounded"></div>
                      </div>
                      <div className="h-2 w-32 bg-white/10 rounded"></div>
                    </div>
                  </div>
                ))}
                
                {/* Gradient Overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
              </div>

               {/* Bottom Nav */}
               <div className="h-16 border-t border-white/5 bg-white/5 backdrop-blur-md flex justify-around items-center">
                    <div className="w-6 h-6 bg-brand-blue rounded-full"></div>
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
               </div>
            </div>

            {/* Reflection */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Glow Behind Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-blue/20 blur-[80px] -z-10"></div>
        </div>
      </div>
    </Section>
  );
};
