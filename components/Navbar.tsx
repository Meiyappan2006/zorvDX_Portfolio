import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? (isDarkMode ? 'bg-zinc-950/90' : 'bg-white/90') + ' backdrop-blur-xl border-b border-zinc-900 shadow-2xl' 
      : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <Logo className="w-12 h-12" />
          <span className={`font-black text-2xl tracking-tighter ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
            zorv<span className="text-yellow-400 italic">DX</span>
          </span>
        </motion.a>

        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-black uppercase tracking-[0.3em] ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'} hover:text-yellow-400 transition-colors relative group`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-6 border-l border-zinc-800 pl-8">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all ${isDarkMode ? 'text-yellow-400 bg-zinc-900' : 'text-zinc-900 bg-zinc-100'} hover:scale-110`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="tel:7418825507"
              className="px-8 py-3 bg-yellow-400 text-black font-black rounded-xl text-xs flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_30px_rgba(250,204,21,0.2)]"
            >
              CALL US <Phone size={14} />
            </a>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all ${isDarkMode ? 'text-yellow-400' : 'text-zinc-900'}`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-yellow-400 transition-transform active:scale-90">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className={`lg:hidden ${isDarkMode ? 'bg-zinc-950' : 'bg-white'} border-b border-zinc-900 overflow-hidden`}
          >
            <ul className="p-8 space-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)} 
                    className={`text-5xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'} block hover:text-yellow-400 transition-colors tracking-tighter`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-8 border-t border-zinc-900">
                <a href="tel:7418825507" className="w-full py-6 bg-yellow-400 text-black font-black rounded-3xl flex items-center justify-center gap-3 text-lg shadow-2xl shadow-yellow-400/20">
                  DIAL OPERATOR <Phone size={24} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;