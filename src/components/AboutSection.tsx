import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin } from 'lucide-react';

export const AboutSection: FC = () => {
  return (
    <div id="about" className="w-full relative z-10">
      {/* 1. Main About Section (SpaceX Full-Bleed Background Layout - Floating Direct Text) */}
      <section className="relative min-h-[85vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none">
        {/* Background Image: 5-Axis Precision Specimen (Balanced Brightness & Contrast) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about_precision_part_1789038407420.jpg"
            alt="5-Axis CNC machined aerospace monolithic components"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          />
          {/* Directional gradient so text is razor sharp on left while specimen on right remains bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12]/90 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/75 border border-white/30 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs sm:text-sm text-white tracking-[0.25em] uppercase font-bold">
                ABOUT AETHERA AERO WORKS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-2xl">
              ENGINEERING COMPLEXITY INTO PRECISION.
            </h2>

            {/* Articulated Body Copy (Industry standard mobile sizing: 14px-16px) */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-100 font-normal leading-relaxed drop-shadow-md">
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

            {/* Location & QMS Badges with Enhanced Blur */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm text-neutral-100 font-medium">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xs bg-black/75 border border-white/25 backdrop-blur-xl">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Hardware Park, Hyderabad</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xs bg-black/75 border border-white/25 backdrop-blur-xl">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Pursuing AS9100D & ISO 9001:2015</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. White Background Matte Black Text Pillars Banner (Sleek, High Contrast & Compact) */}
      <section className="w-full bg-white text-black py-10 sm:py-14 border-y border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="text-center mb-7">
            <span className="text-xs text-neutral-600 tracking-[0.3em] uppercase font-bold">
              FOUNDATIONAL PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-center md:text-left">
            {/* 1. Precision */}
            <div className="space-y-2 p-5 sm:p-6 rounded-xs bg-neutral-50 border border-neutral-200 shadow-xs hover:border-black transition-colors duration-300">
              <div className="text-[11px] font-bold text-neutral-500 tracking-[0.25em] uppercase">
                PILLAR // 01
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase">
                PRECISION
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                Micro-tolerances and geometric fidelity verified through advanced 3D CMM metrology inspection.
              </p>
            </div>

            {/* 2. Engineering */}
            <div className="space-y-2 p-5 sm:p-6 rounded-xs bg-neutral-50 border border-neutral-200 shadow-xs hover:border-black transition-colors duration-300">
              <div className="text-[11px] font-bold text-neutral-500 tracking-[0.25em] uppercase">
                PILLAR // 02
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase">
                ENGINEERING
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                Multi-axis toolpath optimization, DFM consultation, and complex component process engineering.
              </p>
            </div>

            {/* 3. Manufacturing */}
            <div className="space-y-2 p-5 sm:p-6 rounded-xs bg-neutral-50 border border-neutral-200 shadow-xs hover:border-black transition-colors duration-300">
              <div className="text-[11px] font-bold text-neutral-500 tracking-[0.25em] uppercase">
                PILLAR // 03
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase">
                MANUFACTURING
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                One-stop precision facility from raw billet to finished, inspected flight and power components.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
