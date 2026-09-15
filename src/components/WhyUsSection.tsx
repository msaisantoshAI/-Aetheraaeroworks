import { useRef, type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const advantages = [
  'Large and complex component machining',
  'High-precision CNC manufacturing',
  'Complex 3D-profile machining',
  'Precision inspection with 3D CMM',
  'Engineering and manufacturing support',
  'Defense, Aerospace & Power-sector focus',
  'Responsive customer support',
  'Strategic location at Hardware Park, Hyderabad',
];

export const WhyUsSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.05, 1.14]);

  return (
    <section
      ref={containerRef}
      id="why-us"
      className="relative min-h-[90vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none"
    >
      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="relative w-full h-full"
        >
          <img
            src="/images/media_1789103249800.jpg"
            alt="Aerospace rocket launch vehicle on launchpad at dusk"
            className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
          />
        </motion.div>
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 sm:via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/35" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Left-Aligned Technical Partnership Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/30 backdrop-blur-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-white tracking-[0.22em] uppercase font-bold font-mono">
                    TECHNICAL PARTNERSHIP
                  </span>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl"
                >
                  WHY PARTNER WITH AETHERA?
                </motion.h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wider uppercase font-mono">
                Your requirement. Our engineering challenge.
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md max-w-2xl"
              >
                Whether you need a single complex prototype, development component, critical replacement part, or production quantities, Aethera Aero Works is equipped and committed to supporting your requirements with precision and speed.
              </motion.p>
            </div>

            {/* 8 Text-Only Technical Partnership Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-3.5 pt-2">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="flex items-start gap-3 text-left"
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-white/15 border border-white/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-100 font-normal leading-snug drop-shadow-md">
                    {adv}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (Atmospheric visual) */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>
    </section>
  );
};
