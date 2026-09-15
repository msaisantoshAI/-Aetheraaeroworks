import { useState, useEffect, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#080a0e] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Background Ambient Grid & Glow */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          {/* Centered Logo with Animated Orbital Ring */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Spinning Holographic Orbital Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute w-32 h-32 rounded-full border border-white/20 border-t-white/90 border-r-white/40"
            />
            
            {/* Second Reverse Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-40 h-40 rounded-full border border-dashed border-white/10"
            />

            {/* Aethera Logo */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-20 h-20 flex items-center justify-center"
            >
              <img
                src="/images/logo-white.png"
                alt="Aethera Aero Works Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              />
            </motion.div>
          </div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6 space-y-1"
          >
            <div className="text-sm font-bold tracking-[0.3em] text-white uppercase">
              AETHERA AERO WORKS
            </div>
            <div className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-mono">
              PRECISION ENGINEERING & ADVANCED MANUFACTURING
            </div>
          </motion.div>

          {/* Progress Bar & Telemetry */}
          <div className="w-full max-w-xs space-y-2.5">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="tracking-wider text-neutral-300">HARDWARE PARK, HYDERABAD</span>
              <span className="text-white font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
