import type { FC } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: '01',
    name: 'Engineering Review',
    desc: 'Deep CAD/CAM model analysis, design for manufacturability (DFM), alloy selection, and GD&T tolerance verification.',
  },
  {
    step: '02',
    name: 'Process Planning',
    desc: 'Toolpath generation, fixture engineering, multi-axis simulation, cutting parameter optimization, and routing.',
  },
  {
    step: '03',
    name: 'CNC Machining',
    desc: 'High-precision 5-axis milling, vertical turning up to 3m class, horizontal turning, and high-tolerance pocketing.',
  },
  {
    step: '04',
    name: 'Welding / Fabrication',
    desc: 'Certified TIG, MIG and Argon Arc welding, precision structural assembly, and thermal stress relief.',
  },
  {
    step: '05',
    name: 'Inspection',
    desc: '3D CMM coordinate metrology, non-destructive testing (NDT), First Article Inspection (FAI), and full provenance reports.',
  },
  {
    step: '06',
    name: 'Final Component',
    desc: 'Surface passivation, dynamic balancing, secure packaging, and on-schedule delivery to mission-critical programs.',
  },
];

export const ProcessSection: FC = () => {
  return (
    <section id="process" className="relative min-h-[95vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none">
      {/* Full-Bleed Background Image: Engineers Sketching & Reviewing CAD Blueprints */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/media_1789103250031.jpg"
          alt="Engineers sketching blueprints and reviewing precision CAD components"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Directional Gradient: Left is completely clear for the blueprints visual, Right has contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12]/90 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Unobstructed view of engineers sketching blueprints) */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Right Column: New Connected Pipeline Workflow Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/75 border border-white/30 backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs sm:text-sm text-white tracking-[0.25em] uppercase font-bold">
                  END-TO-END WORKFLOW
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
                FROM DRAWING TO DELIVERED COMPONENT
              </h2>

              <p className="text-sm sm:text-base text-neutral-100 font-normal leading-relaxed drop-shadow-md max-w-2xl">
                We support customers through the complete manufacturing cycle. Our engineering team works closely with customers to understand component requirements, manufacturing challenges, quality expectations, and delivery schedules.
              </p>
            </div>

            {/* Connected Step Pipeline Track */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group relative p-4 sm:p-5 rounded-xs bg-black/75 backdrop-blur-xl border border-white/25 hover:border-white hover:bg-black/90 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Tracker Header */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold text-neutral-300 group-hover:text-white transition-colors tracking-widest uppercase px-2.5 py-0.5 rounded-xs bg-white/10 border border-white/20">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-xs text-neutral-300 font-mono group-hover:text-white transition-colors">
                        0{idx + 1}/06
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white mb-1.5 group-hover:text-white transition-colors">
                      {item.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Micro Progress Bar on Card Bottom */}
                  <div className="mt-4 pt-2.5 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-xs text-neutral-300 font-medium">
                    <span className="tracking-wider uppercase">FLOW MILESTONE</span>
                    <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
