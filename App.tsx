import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DownloadSection } from './components/DownloadSection';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { Gallery } from './components/Gallery';
import { Timeline } from './components/Timeline';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Background } from './components/Background';

function App() {
  return (
    <main className="min-h-screen relative text-white selection:bg-brand-blue selection:text-white">
      <Background />
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <DownloadSection />
        <Features />
        <Security />
        <Gallery />
        <Timeline />
        <About />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;
