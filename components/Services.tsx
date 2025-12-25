import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-400 font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black font-heading"
          >
            Evolutionary Zervices
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = (Icons as any)[service.icon];
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className={`group relative cursor-pointer p-8 rounded-[2rem] transition-all duration-500 border overflow-hidden ${
                  isExpanded 
                  ? 'bg-yellow-400 text-black lg:col-span-2 shadow-[0_0_50px_rgba(250,204,21,0.2)]' 
                  : 'bg-zinc-900 border-zinc-800 text-white hover:border-yellow-400/50'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors ${isExpanded ? 'bg-black text-yellow-400' : 'bg-yellow-400/10 text-yellow-400'}`}>
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h3>
                <p className={`mb-6 leading-relaxed ${isExpanded ? 'text-black/70' : 'text-zinc-500'}`}>
                  {service.description}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-black/10 pt-6 mt-6"
                    >
                      <p className="text-sm font-medium leading-relaxed mb-4">
                        {service.detailedInfo}
                      </p>
                      <div className="flex gap-2">
                         <span className="px-3 py-1 bg-black text-yellow-400 text-[10px] font-black rounded-full uppercase">Professional Grade</span>
                         <span className="px-3 py-1 bg-black/10 text-black text-[10px] font-black rounded-full uppercase">Scalable</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isExpanded && (
                  <div className="mt-8 flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Detail <Icons.ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;