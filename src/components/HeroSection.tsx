import { useEffect, useState, type FC } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenProjectModal: () => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onOpenProjectModal }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.00015})`,
          }}
        >
          <img
            src="/images/media_1789122403065.jpg"
            alt="Aethera Aerospace commercial airliner and fighter aircraft at sunset"
            className="w-full h-full object-cover object-center filter brightness-[0.88] sm:brightness-[0.92] contrast-[1.05]"
          />
        </motion.div>

        {/* High-Contrast Directional Gradients for WCAG AAA Compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 sm:via-black/40 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-24 sm:py-32 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Animated Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 mb-4 px-3 sm:px-3.5 py-1.5 rounded-xs bg-slate-950/90 sm:bg-black/70 border border-white/30 backdrop-blur-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] sm:text-xs text-slate-100 tracking-[0.22em] uppercase font-bold font-mono">
              AETHERA AERO WORKS
            </span>
          </motion.div>

          {/* Large Headline with Animated Word Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] sm:leading-[0.96] mb-5 drop-shadow-2xl"
          >
            <span className="block text-white">PRECISION</span>
            <span className="block text-white">ENGINEERED</span>
            <span className="block text-slate-200">FOR TOMORROW.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-md"
          >
            Advanced Precision Engineering & Manufacturing for Defense, Aerospace & Power Generation.
          </motion.p>

          {/* Buttons: Replaced Start a Project with Request RFQ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollToSection('what-we-make')}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-white text-black hover:bg-neutral-200 active:bg-neutral-300 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs transition-all duration-200 shadow-xl"
            >
              EXPLORE CAPABILITIES
            </button>

            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-slate-950/90 sm:bg-black/70 hover:bg-white hover:text-black active:bg-white active:text-black text-white border border-white/40 hover:border-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs transition-all duration-200 backdrop-blur-xl shadow-lg"
            >
              REQUEST RFQ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
