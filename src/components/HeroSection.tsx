import { useEffect, useState, type FC } from 'react';
import { motion } from 'framer-motion';

export const HeroSection: FC = () => {
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
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0c0e12] select-none text-center"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.12}px) scale(${1 + scrollY * 0.0001})`,
          }}
        >
          <img
            src="/images/media_1789122403065.jpg"
            alt="Aerospace commercial and defense flight aircraft at sunset"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08]"
          />
        </motion.div>

        {/* Cinematic WCAG High-Contrast Gradients & Scrims */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/60 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0c0e12]" />
      </div>

      {/* Main Hero Content (Centered Landing Layout) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-24 sm:py-32 w-full flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-xs bg-black/80 border border-white/30 backdrop-blur-2xl shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs sm:text-sm text-white tracking-[0.25em] uppercase font-bold">
              aetheraaeroworks
            </span>
          </motion.div>

          {/* Large Headline (Centered, High WCAG Contrast & Hierarchy) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05] sm:leading-[1.02] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            <span className="block text-white">PRECISION ENGINEERED</span>
            <span className="block text-neutral-100">FOR TOMORROW.</span>
          </motion.h1>

          {/* Articulated Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="text-sm sm:text-base md:text-lg text-neutral-100 font-normal leading-relaxed mb-9 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Advanced Precision Machining and Manufacturing for Defense, Aerospace & Power Generation.
          </motion.p>

          {/* Buttons (Removed 'Start a Project' button, Optimized Mobile Touch Targets) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('what-we-make')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 py-3.5 bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              EXPLORE CAPABILITIES
            </button>

            <button
              onClick={() => scrollToSection('facilities')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 py-3.5 bg-black/70 hover:bg-white hover:text-black text-white border border-white/40 hover:border-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 backdrop-blur-xl shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              VIEW FACILITIES
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
