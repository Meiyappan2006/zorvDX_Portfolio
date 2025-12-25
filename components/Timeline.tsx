import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-32 relative bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-5xl font-black font-heading">Our Delivery Pipeline</h2>
          <p className="text-zinc-500 mt-4">Accelerated development without compromise.</p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="zigzag-path hidden md:block" />

          <div className="space-y-32">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className="p-10 rounded-[2.5rem] glass border border-zinc-800/50 hover:border-yellow-400/30 transition-all duration-500">
                    <span className="text-yellow-400 font-black text-5xl mb-6 block drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">{item.week}</span>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg font-light">{item.description}</p>
                  </div>
                </div>

                {/* Center Pulse */}
                <div className="z-10 w-12 h-12 rounded-full bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.5)] border-8 border-zinc-950 shrink-0 hidden md:block" />

                {/* Empty Side for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;