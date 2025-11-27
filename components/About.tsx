import React from 'react';
import { Github, Mail, Code } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <GlassCard className="text-center p-12 relative overflow-hidden">
            {/* Background Image Effect */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brand-blue to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <Code className="text-white w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Built by Abdellatif Choukri</h2>
                <p className="text-white/60 mb-8">Full-stack developer passionate about privacy and modern UI.</p>
                
                <div className="flex justify-center gap-6">
                    <a href="mailto:choukric148@gmail.com" className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <span className="text-xs text-white/50 group-hover:text-white transition-colors">Email</span>
                    </a>
                    <a href="https://github.com/Abdellatif148" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                            <Github size={20} />
                        </div>
                        <span className="text-xs text-white/50 group-hover:text-white transition-colors">GitHub</span>
                    </a>
                </div>
            </div>
        </GlassCard>
      </div>
    </Section>
  );
};
