import React, { useState, useEffect } from 'react';
import { MessageCircle, Download, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'py-4 bg-brand-black/50 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-electric to-blue-700 flex items-center justify-center shadow-lg shadow-brand-electric/20 group-hover:shadow-brand-electric/40 transition-all">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">S. Chat</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Security', 'About'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-white/70 hover:text-white hover:text-glow transition-colors"
            >
              {item}
            </button>
          ))}
          <Button 
            variant="primary" 
            className="!py-2 !px-6"
            onClick={() => scrollToSection('download')}
          >
            Download
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {['Features', 'Security', 'About'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-lg font-medium text-white/80 py-2"
            >
              {item}
            </button>
          ))}
          <Button onClick={() => scrollToSection('download')} className="w-full">
            Download App
          </Button>
        </div>
      )}
    </nav>
  );
};
