
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 grid-bg z-0 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-yellow-400/10 blur-[150px] rounded-full animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[30rem] h-[30rem] bg-yellow-400/5 blur-[120px] rounded-full animate-blob [animation-delay:2s] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-400/20 text-yellow-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10"
          >
            <Sparkles size={14} className="animate-pulse fill-yellow-400" />
            Digital Evolution Engine
          </motion.div>
          
          <h1 className="text-7xl lg:text-[9rem] font-black font-heading leading-[0.85] tracking-tighter mb-10 text-gradient uppercase">
            EVOLVE. <br />
            IMPROVE. <br />
            <span className="text-yellow-400 italic">EARN.</span>
          </h1>
          
          <p className="text-xl text-zinc-500 mb-12 max-w-lg leading-relaxed font-light">
            We architect high-performance SaaS ecosystems and AI workflows. Built for companies that refuse to stagnate.
          </p>

          <div className="p-8 glass rounded-[2.5rem] border-l-8 border-yellow-400 mb-12 shadow-2xl">
             <h4 className="text-white font-black mb-3 flex items-center gap-2 uppercase tracking-widest text-sm">
               The SaaS Paradigm <ChevronRight size={16} className="text-yellow-400" />
             </h4>
             <p className="text-zinc-500 text-sm italic font-medium leading-relaxed">
               Modern business is defined by scale. We build agile software solutions that grow with you, deployed instantly across the global network.
             </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-10 py-5 bg-yellow-400 hover:bg-white text-black font-black rounded-2xl shadow-[0_0_50px_rgba(250,204,21,0.3)] flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              LAUNCH PROJECT <ArrowRight size={20} />
            </a>
            <a 
              href="#timeline" 
              onClick={(e) => handleScrollTo(e, 'timeline')}
              className="px-10 py-5 glass text-white font-black rounded-2xl flex items-center gap-3 hover:bg-zinc-800 transition-all border border-white/5"
            >
              WATCH PROCESS <Play size={18} className="fill-white" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="relative hidden lg:block perspective-1000"
        >
          <div className="relative z-10 w-full aspect-square rounded-[4rem] bg-zinc-900 p-2 border border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover rounded-[3.8rem] transition-transform duration-[20s] group-hover:scale-125 ease-linear opacity-60"
              alt="zorvDX Digital Abstract"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
               <div>
                  <div className="text-yellow-400 font-black text-6xl tracking-tighter mb-2">50+</div>
                  <div className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">Live Deployments</div>
               </div>
               <div className="text-right">
                  <div className="w-16 h-16 rounded-full border-4 border-yellow-400/20 flex items-center justify-center mb-4 ml-auto">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 animate-pulse" />
                  </div>
                  <div className="text-white font-black text-2xl tracking-tighter uppercase italic">Phase 03 Active</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">SYS.OVR_DRIVE</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
