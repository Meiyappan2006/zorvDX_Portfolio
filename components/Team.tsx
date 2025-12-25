import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black font-heading mb-4">The Visionaries</h2>
          <p className="text-zinc-500 font-light max-w-lg mx-auto">A collective of engineers and designers pushing the boundaries of SaaS and AI.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 mx-auto w-56 h-56">
                <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-[15deg] group-hover:rotate-0 shadow-[0_0_40px_rgba(250,204,21,0.2)]"></div>
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                {/* Social Float */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-xl">
                    <Linkedin size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-xl">
                    <Twitter size={16} />
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-1">{member.name}</h3>
              <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;