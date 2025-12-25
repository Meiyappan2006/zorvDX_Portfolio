import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Instagram, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    const name = target[0].value;
    const email = target[1].value;
    const message = target[2].value;
    window.location.href = `mailto:zorvdx@gmail.com?subject=Inquiry from ${name}&body=${message} (From: ${email})`;
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl font-black font-heading mb-10 leading-[0.9] tracking-tighter">
              Ready to <br />
              <span className="text-yellow-400">Evolve?</span>
            </h2>
            <p className="text-zinc-500 mb-16 text-lg max-w-md font-light leading-relaxed">
              Drop us a line to discuss your next breakthrough project. We respond within 12 business hours.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800 transition-all group-hover:scale-110 group-hover:border-yellow-400/50">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Electronic Mail</div>
                  <div className="text-2xl font-bold tracking-tight">zorvdx@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800 transition-all group-hover:scale-110 group-hover:border-yellow-400/50">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Direct Line</div>
                  <div className="text-2xl font-bold tracking-tight">7418825507</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800 transition-all group-hover:scale-110 group-hover:border-yellow-400/50">
                  <Instagram size={28} />
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Social Matrix</div>
                  <div className="text-2xl font-bold tracking-tight">@zorvDX</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-12 glass rounded-[3rem] border border-zinc-800/50"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Full Identity</label>
                  <input type="text" placeholder="Elon Musk" className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-yellow-400 transition-all outline-none text-white font-medium" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Contact Email</label>
                  <input type="email" placeholder="elon@x.com" className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-yellow-400 transition-all outline-none text-white font-medium" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Project Mission</label>
                <textarea rows={5} placeholder="Define your vision..." className="w-full bg-zinc-900 border-none rounded-2xl p-5 focus:ring-2 focus:ring-yellow-400 transition-all outline-none resize-none text-white font-medium" required></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Initiate Uplink <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;