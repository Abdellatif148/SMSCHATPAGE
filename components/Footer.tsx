import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-12 pb-8 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-brand-blue" />
            </div>
            <span className="font-bold text-white tracking-tight">SMSChat</span>
        </div>

        <div className="text-white/40 text-sm">
            © 2025 SMSChat. Crafted with modern design.
        </div>

        <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms</a>
            <a href="https://github.com/Abdellatif148" className="text-white/40 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
