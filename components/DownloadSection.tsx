import React, { useState } from 'react';
import { Download, Calendar, FileBox, Tag, ShieldCheck, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { VersionInfo } from '../types';

const latestVersion: VersionInfo = {
  version: "2.1.0",
  build: "2048",
  date: "Oct 24, 2025",
  size: "24.5 MB"
};

export const DownloadSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // In a real app, this would trigger the file download
    console.log("Downloading APK...");
    setIsModalOpen(false);
  };

  return (
    <>
      <Section id="download" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard glowEffect className="text-center p-8 md:p-12 border-brand-electric/30 relative overflow-hidden group">
            
            {/* Decorative Glows inside card */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-electric/20 rounded-full blur-[60px] group-hover:bg-brand-electric/30 transition-all duration-700"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-[60px] group-hover:bg-purple-500/30 transition-all duration-700"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Download the Latest S. Chat APK</h2>
              
              {/* Version Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: 'Version', value: latestVersion.version, icon: <Tag size={16} /> },
                  { label: 'Build', value: latestVersion.build, icon: <ShieldCheck size={16} /> },
                  { label: 'Released', value: latestVersion.date, icon: <Calendar size={16} /> },
                  { label: 'Size', value: latestVersion.size, icon: <FileBox size={16} /> },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
                    <div className="text-brand-electric">{item.icon}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{item.label}</div>
                    <div className="font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Main Action */}
              <div className="flex flex-col items-center gap-6">
                <Button 
                  variant="primary" 
                  isLoading={isModalOpen}
                  className="!rounded-full !px-12 !py-5 text-lg shadow-[0_0_40px_rgba(0,108,255,0.3)] hover:shadow-[0_0_60px_rgba(0,108,255,0.5)]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Download className="mr-2" /> Download APK
                </Button>
                
                <a href="https://github.com/Abdellatif148" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white/60 hover:text-brand-electric transition-colors group/link">
                  View on GitHub 
                  <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Safety Footer */}
              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-2">
                  <ShieldCheck size={12} /> Verified & Signed
                </div>
                <p className="text-xs text-white/40">
                  APK is signed by the developer. <br className="md:hidden" />
                  Contact: <a href="mailto:choukric148@gmail.com" className="hover:text-white transition-colors">choukric148@gmail.com</a>
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <style>{`
            @keyframes modalIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div 
            className="relative z-10 w-full max-w-sm"
            style={{ animation: 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            <GlassCard className="p-8 border-white/20 shadow-2xl flex flex-col items-center text-center bg-brand-black/90">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue shadow-[0_0_20px_rgba(0,175,255,0.2)]">
                <Download size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Install?</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                You are about to download <span className="text-white font-medium">S. Chat v{latestVersion.version}</span>. 
                <br/>This file is safe and verified.
              </p>

              <div className="flex gap-3 w-full">
                <Button 
                  variant="secondary" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 !py-3"
                >
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleDownload} 
                  className="flex-1 !py-3"
                >
                  Download
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      )}
    </>
  );
};