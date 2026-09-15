import { useRef, type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transformations
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full h-full"
        >
          <img
            src="/images/media_1789122403065.jpg"
            alt="Aethera Aerospace commercial airliner and fighter aircraft at sunset"
            className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
          />
        </motion.div>

        {/* High-Contrast Directional Gradients for WCAG AAA Compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 sm:via-black/40 to-transparent" />
      </div>

      {/* Main Parallax Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-24 sm:py-32 w-full flex flex-col justify-center"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Badge with Reveal */}
          <div className="overflow-hidden mb-4">
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-xs bg-slate-950/90 sm:bg-black/70 border border-white/30 backdrop-blur-xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] sm:text-xs text-slate-100 tracking-[0.22em] uppercase font-bold font-mono">
                AETHERA AERO WORKS
              </span>
            </motion.div>
          </div>

          {/* Large Headline with Line-by-Line Text Scroll Reveal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] sm:leading-[0.96] mb-5 drop-shadow-2xl">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                PRECISION
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                ENGINEERED
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-slate-200"
              >
                FOR TOMORROW.
              </motion.span>
            </div>
          </h1>

          {/* Subtext Reveal */}
          <div className="overflow-hidden mb-8 max-w-xl">
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed drop-shadow-md"
            >
              Advanced Precision Engineering & Manufacturing for Defense, Aerospace & Power Generation.
            </motion.p>
          </div>

          {/* Liquid Fill Buttons (RFQ removed, clean exploration CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <button
              onClick={() => scrollToSection('what-we-make')}
              className="liquid-btn liquid-btn-white inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs shadow-xl"
            >
              <span>EXPLORE CAPABILITIES</span>
            </button>

            <button
              onClick={() => scrollToSection('facilities')}
              className="liquid-btn liquid-btn-dark inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs shadow-lg"
            >
              <span>VIEW INFRASTRUCTURE</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
