import { useRef, type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.04, 1.1]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative min-h-[85vh] w-full flex flex-col justify-center items-center text-white border-t border-white/20 overflow-hidden select-none"
    >
      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="relative w-full h-full will-change-transform"
        >
          <img
            src="/images/media_1789123642643.jpg"
            alt="Earth orbital horizon and spacecraft module in space"
            className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
          />
        </motion.div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/35" />
      </div>

      {/* Center-Aligned Content with Parallax & Reveals */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-12 sm:py-20 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-4 sm:space-y-5 flex flex-col items-center">
          {/* Eyebrow */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-1 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/30 backdrop-blur-xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs text-white tracking-[0.2em] uppercase font-bold font-mono">
                LET'S BUILD YOUR NEXT COMPONENT
              </span>
            </motion.div>
          </div>

          {/* Large Bold Headline with Reveal */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl"
            >
              HAVE A CHALLENGING COMPONENT?
            </motion.h2>
          </div>

          {/* Articulation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md max-w-2xl px-2"
          >
            Have a mission-critical component that is difficult to manufacture? Connect with our engineering desk. Our engineering team will review your drawings, tolerances, and specifications to develop the optimal precision manufacturing process.
          </motion.p>

          {/* Responsive Contact Channels with Liquid Hover Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 text-xs text-slate-100 w-full max-w-lg sm:max-w-none"
          >
            <a
              href="mailto:aetheraaeroworksllp7@gmail.com"
              className="liquid-btn liquid-btn-dark flex items-center justify-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xs w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span className="font-mono text-xs sm:text-sm font-semibold break-all sm:break-normal">
                aetheraaeroworksllp7@gmail.com
              </span>
            </a>

            <div className="flex items-center justify-center gap-2 px-4 sm:px-4.5 py-3 sm:py-3.5 rounded-xs bg-slate-950/95 sm:bg-black/70 border border-white/30 backdrop-blur-xl w-full sm:w-auto">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span className="text-xs sm:text-sm font-medium">+91 (040) 2930-XXXX</span>
            </div>

            <div className="flex items-center justify-center gap-2 px-4 sm:px-4.5 py-3 sm:py-3.5 rounded-xs bg-slate-950/95 sm:bg-black/70 border border-white/30 backdrop-blur-xl w-full sm:w-auto">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Hardware Park, Hyderabad</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
