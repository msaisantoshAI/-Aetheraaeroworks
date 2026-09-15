import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin } from 'lucide-react';

export const AboutSection: FC = () => {
  return (
    <div id="about" className="w-full relative z-10">
      {/* 1. Main About Section (SpaceX Full-Bleed Background Layout - Floating Direct Text) */}
      <section className="relative min-h-[85vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none">
        {/* Background Image: 5-Axis Precision Specimen */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about_precision_part_1789038407420.jpg"
            alt="5-Axis CNC machined aerospace monolithic components"
            className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
          />
          {/* Directional gradient: High-density dark backdrop on mobile for WCAG AAA contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 sm:via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-5 sm:space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/30 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] sm:text-xs text-white tracking-[0.22em] uppercase font-bold font-mono">
                ABOUT AETHERA AERO WORKS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] sm:leading-[0.98] drop-shadow-2xl">
              ENGINEERING COMPLEXITY INTO PRECISION.
            </h2>

            {/* Articulated Body Copy */}
            <div className="space-y-3 text-sm sm:text-base text-slate-100 font-light leading-relaxed drop-shadow-md">
              <p>
                Aethera Aero Works is a dynamic engineering start-up established with a clear vision to serve the Defense, Aerospace and Power Generation sectors through advanced manufacturing, precision machining and engineering capabilities.
              </p>
              <p>
                Located at Hardware Park, Hyderabad, strategically close to the airport, the facility provides excellent connectivity to major industrial, aerospace and defence establishments.
              </p>
              <p>
                With a highly motivated and experienced engineering team and modern manufacturing infrastructure, Aethera Aero Works is being developed as a one-stop precision manufacturing facility for complex and mission-critical components.
              </p>
            </div>

            {/* Location & QMS Badges with Enhanced Mobile Clarity */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 text-xs text-slate-100 font-medium">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/25 backdrop-blur-xl">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Hardware Park, Hyderabad</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/25 backdrop-blur-xl">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Pursuing AS9100D & ISO 9001:2015</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Foundational Pillars Banner: High-Contrast Dark on Mobile, Crisp Minimalist on Desktop */}
      <section className="w-full bg-[#090b0e] sm:bg-white text-white sm:text-black py-10 sm:py-12 border-y border-white/15 sm:border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
          <div className="text-center mb-6">
            <span className="text-[11px] sm:text-xs text-slate-400 sm:text-neutral-500 tracking-[0.28em] uppercase font-bold font-mono">
              FOUNDATIONAL PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            {/* 1. Precision */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1.5 p-4.5 sm:p-5 rounded-xs bg-slate-950 sm:bg-neutral-50 border border-slate-800 sm:border-neutral-200 shadow-sm lg:hover:border-black transition-colors duration-300"
            >
              <div className="text-[10px] font-bold text-slate-400 sm:text-neutral-500 tracking-[0.25em] uppercase font-mono">
                PILLAR // 01
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white sm:text-black uppercase">
                PRECISION
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 sm:text-neutral-600 font-normal sm:font-medium leading-relaxed">
                Micro-tolerances and geometric fidelity verified through advanced 3D CMM metrology inspection.
              </p>
            </motion.div>

            {/* 2. Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1.5 p-4.5 sm:p-5 rounded-xs bg-slate-950 sm:bg-neutral-50 border border-slate-800 sm:border-neutral-200 shadow-sm lg:hover:border-black transition-colors duration-300"
            >
              <div className="text-[10px] font-bold text-slate-400 sm:text-neutral-500 tracking-[0.25em] uppercase font-mono">
                PILLAR // 02
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white sm:text-black uppercase">
                ENGINEERING
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 sm:text-neutral-600 font-normal sm:font-medium leading-relaxed">
                Multi-axis toolpath optimization, DFM consultation, and complex component process engineering.
              </p>
            </motion.div>

            {/* 3. Manufacturing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-1.5 p-4.5 sm:p-5 rounded-xs bg-slate-950 sm:bg-neutral-50 border border-slate-800 sm:border-neutral-200 shadow-sm lg:hover:border-black transition-colors duration-300"
            >
              <div className="text-[10px] font-bold text-slate-400 sm:text-neutral-500 tracking-[0.25em] uppercase font-mono">
                PILLAR // 03
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white sm:text-black uppercase">
                MANUFACTURING
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 sm:text-neutral-600 font-normal sm:font-medium leading-relaxed">
                One-stop precision facility from raw billet to finished, inspected flight and power components.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
