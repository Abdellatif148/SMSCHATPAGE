import React from 'react';
import { Lock, Shield, Server, Trash2 } from 'lucide-react';
import { Section } from './ui/Section';

export const Security: React.FC = () => {
  return (
    <Section id="security" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-blue/5 skew-y-3 transform origin-bottom-right pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
              <Shield size={16} />
              <span>Privacy First Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-glow">
              Your Data. <br />
              Your Rules.
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We believe communication should be private by default. SMSChat stores messages locally on your device using military-grade AES encryption. Cloud features are strictly opt-in.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Lock className="text-brand-blue" />, title: "AES-256 Encryption", desc: "Local database encryption." },
                { icon: <Server className="text-green-400" />, title: "Local First", desc: "Works perfectly offline." },
                { icon: <Shield className="text-purple-400" />, title: "Optional Backup", desc: "You control the cloud." },
                { icon: <Trash2 className="text-red-400" />, title: "Total Erasure", desc: "Delete everything anytime." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
             {/* Abstract Cyber/Security Visual */}
             <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 border border-brand-blue/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 rounded-3xl bg-brand-blue/10 backdrop-blur-xl border border-brand-blue/40 flex items-center justify-center shadow-[0_0_50px_rgba(0,175,255,0.2)]">
                   <Lock size={48} className="text-brand-blue" />
                 </div>
               </div>
               
               {/* Floating Badges */}
               <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-white shadow-xl animate-float" style={{animationDelay: '1s'}}>
                 🔒 End-to-End Encrypted
               </div>
               <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-white shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                 🛡️ No Tracking
               </div>
             </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
