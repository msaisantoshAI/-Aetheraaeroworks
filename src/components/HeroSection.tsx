import { useRef, type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
      className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full h-full will-change-transform"
        >
          <img
            src="/images/media_1789122403065.jpg"
            alt="Aethera Aerospace commercial airliner and fighter aircraft at sunset"
            className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
          />
        </motion.div>

        {/* High-Contrast Gradients for WCAG AAA Compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 sm:via-black/40 to-transparent" />
      </div>

      {/* Main Parallax Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-20 sm:py-28 lg:py-32 w-full flex flex-col justify-center will-change-transform"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="overflow-hidden mb-3 sm:mb-4">
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xs bg-slate-950/95 sm:bg-black/70 border border-white/30 backdrop-blur-xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs text-slate-100 tracking-[0.2em] uppercase font-bold font-mono">
                AETHERA AERO WORKS
              </span>
            </motion.div>
          </div>

          {/* Large Headline with Line-by-Line Text Scroll Reveal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] sm:leading-[0.96] mb-4 sm:mb-5 drop-shadow-2xl">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                PRECISION
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                ENGINEERED
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="block text-slate-200"
              >
                FOR TOMORROW.
              </motion.span>
            </div>
          </h1>

          {/* Subtext Reveal */}
          <div className="overflow-hidden mb-6 sm:mb-8 max-w-xl">
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-base md:text-lg text-slate-100 font-light leading-relaxed drop-shadow-md"
            >
              Advanced Precision Engineering & Manufacturing for Defense, Aerospace & Power Generation.
            </motion.p>
          </div>

          {/* Liquid Fill Buttons (Responsive Full-Width on Mobile, Inline on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollToSection('what-we-make')}
              className="liquid-btn liquid-btn-white w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs shadow-xl"
            >
              <span>EXPLORE CAPABILITIES</span>
            </button>

            <button
              onClick={() => scrollToSection('facilities')}
              className="liquid-btn liquid-btn-dark w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs shadow-lg"
            >
              <span>VIEW INFRASTRUCTURE</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
