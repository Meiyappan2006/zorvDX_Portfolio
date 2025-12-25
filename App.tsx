import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Works from './components/Works';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import IntroLoader from './components/IntroLoader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-zinc-950' : 'bg-slate-50'} transition-colors duration-500 selection:bg-yellow-400 selection:text-black`}>
      <style>
        {`
          .light-mode {
            --brand-black: #f8fafc;
            background-color: #f8fafc !important;
            color: #0f172a !important;
          }
          .light-mode .text-white { color: #0f172a !important; }
          .light-mode .bg-zinc-950 { background-color: #f1f5f9 !important; }
          .light-mode .bg-zinc-900 { background-color: #e2e8f0 !important; }
          .light-mode .glass { background: rgba(255, 255, 255, 0.8); border-color: rgba(0,0,0,0.1); }
          .light-mode .border-zinc-900 { border-color: #e2e8f0 !important; }
          .light-mode .border-zinc-800 { border-color: #cbd5e1 !important; }
          .light-mode .text-zinc-500 { color: #64748b !important; }
          .light-mode .text-zinc-400 { color: #475569 !important; }
          .light-mode .grid-bg { 
            background-image: 
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          }
        `}
      </style>
      
      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Services />
            <Timeline />
            <Works />
            <Team />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;