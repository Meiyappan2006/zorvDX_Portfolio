import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: 'circInOut' } }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-zinc-950"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "backOut" }}
          className="mb-8 flex justify-center"
        >
          <Logo className="w-32 h-32" />
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
            className="text-6xl font-black font-heading text-white text-center tracking-tighter"
          >
            zorv<span className="text-yellow-400 italic">DX</span>
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: "circInOut" }}
          className="h-1 bg-yellow-400 mt-4 origin-left shadow-[0_0_15px_#facc15]"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-zinc-600 text-center text-[10px] font-black uppercase tracking-[0.5em] mt-6"
        >
          Initializing Evolution Engine
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroLoader;