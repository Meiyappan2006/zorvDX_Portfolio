
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Layers, ChevronRight, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-zinc-950 relative overflow-hidden border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-yellow-400 font-black mb-8 uppercase tracking-[0.4em] text-xs">
              <Zap size={16} className="fill-yellow-400" />
              The zorvDX Genesis
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-10 leading-[1.1] tracking-tighter text-white">
              We Don't Build Apps. <br />
              <span className="text-yellow-400 italic">We Evolve Futures.</span>
            </h2>
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed font-light">
              At zorvDX, we believe software should be an active asset. We are a collective of engineers focused on bridging the gap between high-level AI automation and real-world market dominance.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 p-8 glass rounded-[2rem] border border-yellow-400/10 hover:border-yellow-400/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Layers size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-3 text-white uppercase tracking-tight">The SaaS Evolution</h4>
                  <p className="text-zinc-500 leading-relaxed">
                    Software as a Service (SaaS) is the engine of global scale. We architect multi-tenant ecosystems that allow you to deploy value to millions instantly, with zero friction.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-yellow-400 font-bold mt-4 text-sm group-hover:gap-4 transition-all">
                    Initialize Deployment <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3.5rem] overflow-hidden bg-zinc-900 border-[12px] border-zinc-900 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="zorvDX Tech Stack"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out"
              />
              <div className="absolute inset-0 bg-yellow-400/10 mix-blend-color group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Animated Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-8 rounded-3xl shadow-[0_0_50px_rgba(250,204,21,0.15)] border border-yellow-400/20 backdrop-blur-2xl max-w-[220px]"
            >
              <div className="text-yellow-400 font-black text-4xl mb-2 tracking-tighter">99.9%</div>
              <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-tight">Uptime reliability for our SaaS ecosystems</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
