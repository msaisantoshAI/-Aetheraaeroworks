import type { FC } from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section id="why-us" className="relative min-h-[90vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none">
      {/* Full-Bleed Background Image: Rocket Launchpad at Dusk */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/media_1789103249800.jpg"
          alt="Aerospace rocket launch vehicle on launchpad at dusk"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Directional Gradients so Left-Aligned Content is Razor Sharp and Right Side is Visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12]/90 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Left-Aligned Technical Partnership Content (Text-Only - No Cards/Boxes) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/75 border border-white/30 backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs sm:text-sm text-white tracking-[0.25em] uppercase font-bold">
                  TECHNICAL PARTNERSHIP
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
                WHY PARTNER WITH AETHERA?
              </h2>

              <div className="text-xs sm:text-sm text-neutral-200 font-semibold tracking-wider uppercase">
                Your requirement. Our engineering challenge.
              </div>

              <p className="text-sm sm:text-base text-neutral-100 font-normal leading-relaxed drop-shadow-md max-w-2xl">
                Whether you need a single complex prototype, development component, critical replacement part, or production quantities, Aethera Aero Works is equipped and committed to supporting your requirements with precision and speed.
              </p>
            </div>

            {/* 8 Text-Only Technical Partnership Points (Strictly No Cards/Boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3 group text-left"
                >
                  <div className="w-4 h-4 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white transition-colors duration-300">
                    <Check className="w-2.5 h-2.5 text-white group-hover:text-black stroke-[3] transition-colors" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-100 font-normal leading-snug drop-shadow-md group-hover:text-white transition-colors">
                    {adv}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Unobstructed launchpad atmosphere visual) */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>
    </section>
  );
};
