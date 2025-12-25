import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Search, Plus, ArrowUpRight, Cpu, Layers, Target, ShieldCheck } from 'lucide-react';

const Works: React.FC = () => {
  return (
    <section id="works" className="py-40 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-400 font-black uppercase tracking-[0.5em] text-xs mb-6 block">Our Matrix</span>
            <h2 className="text-7xl font-black font-heading tracking-tighter uppercase leading-none text-white">
              MASTER<span className="text-yellow-400 italic">PIECES</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed"
          >
            Crafting digital legacies through performance engineering. Every project is a testament to evolution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative rounded-[3rem] overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/50 transition-all duration-700 shadow-2xl"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                
                {/* Enhanced Immersive Elaboration Overlay */}
                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 lg:p-10 flex flex-col justify-between text-white backdrop-blur-md overflow-hidden">
                  <div className="space-y-4 lg:space-y-6 overflow-y-auto custom-scrollbar pr-2 h-full">
                    <div className="flex justify-between items-start border-b border-yellow-400/20 pb-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-400">System Spec // 0{idx + 1}</span>
                       <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="text-yellow-400"
                       >
                         <Cpu size={20} />
                       </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-2xl lg:text-3xl font-black mb-3 tracking-tighter uppercase text-yellow-400 italic">Evolution Core</h4>
                      <p className="text-lg font-medium leading-relaxed tracking-tight text-zinc-300">
                        {project.description}
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                       <div className="p-3 lg:p-4 rounded-2xl bg-white/5 border border-white/10">
                          <Layers size={14} className="text-yellow-400 mb-2" />
                          <div className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Architecture</div>
                          <div className="text-xs font-bold text-white">Cloud Ecosystem</div>
                       </div>
                       <div className="p-3 lg:p-4 rounded-2xl bg-white/5 border border-white/10">
                          <ShieldCheck size={14} className="text-yellow-400 mb-2" />
                          <div className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Validation</div>
                          <div className="text-xs font-bold text-white">Verified Build</div>
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-[10px] font-black rounded-full uppercase border border-yellow-400/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-white/10">
                      <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-500 italic">Analyzed by zorvDX Core</span>
                      <Plus size={20} className="text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md">
                <div>
                  <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">{project.category}</span>
                  <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-white uppercase">{project.title}</h3>
                </div>
                <motion.div 
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300"
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;