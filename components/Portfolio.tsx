
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Changed WORKS to PROJECTS as it is the correct exported member from constants.tsx
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio-alt" className="py-32 bg-teal-50/20 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black mb-6">Masterpieces</h2>
            <p className="text-slate-500 text-lg">
              A curated selection of our most impactful deployments across AI, SaaS, and Digital Identity.
            </p>
          </div>
          <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center gap-2">
            View Case Studies <Plus size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Fixed: Changed WORKS to PROJECTS and updated map variable to project */}
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 shadow-xl border border-teal-50 dark:border-slate-800"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Advanced Hover Overlay */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 p-12 flex flex-col justify-between text-white translate-y-full group-hover:translate-y-0">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] mb-4 block">Project Detail</span>
                    <p className="text-xl font-medium leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {/* Fixed: Dynamically rendering tags from the project object */}
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-md">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-10 flex items-center justify-between">
                <div>
                  <span className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-black">{project.title}</h3>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-teal-500 group-hover:text-white transition-all shadow-inner">
                  <ExternalLink size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
