import React from 'react';
import { MessageSquare, Zap, Cloud, Smartphone, Lock, Image } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section } from './ui/Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'core',
    title: 'Core SMS',
    description: 'A fast, reliable, and minimal SMS system designed to replace your default app.',
    icon: <MessageSquare className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 'smart',
    title: 'Smart Messaging',
    description: 'Swipe replies, media viewer, voice notes, and smart categorization.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'cloud',
    title: 'Cloud Sync',
    description: 'Optional encrypted multi-device sync powered by Supabase. Access from anywhere.',
    icon: <Cloud className="w-8 h-8 text-purple-400" />
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Everything you need in a modern messaging app, without the bloat.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GlassCard key={feature.id} hoverEffect className="flex flex-col items-start gap-4 p-8">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
