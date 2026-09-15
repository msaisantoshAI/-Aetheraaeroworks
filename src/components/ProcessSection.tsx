import { useRef, type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
      id="process"
      className="relative min-h-[90vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none"
    >
      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="relative w-full h-full will-change-transform"
        >
          <img
            src="/images/media_1789103250031.jpg"
            alt="Engineers sketching blueprints and reviewing precision CAD components"
            className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
          />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 sm:from-transparent sm:via-black/40 sm:to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/35" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Blueprint visual on desktop) */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Right Column: Connected Pipeline Workflow Layout */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {/* Header Block with Reveal */}
            <div className="space-y-2.5 sm:space-y-3">
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
                    END-TO-END WORKFLOW
                  </span>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl"
                >
                  FROM DRAWING TO DELIVERED COMPONENT
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md max-w-2xl"
              >
                We support customers through the complete manufacturing cycle. Our engineering team works closely with customers to understand component requirements, manufacturing challenges, quality expectations, and delivery schedules.
              </motion.p>
            </div>

            {/* Step Pipeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group relative p-3.5 sm:p-4 rounded-xs bg-slate-950/95 sm:bg-black/70 backdrop-blur-xl border border-slate-800/90 sm:border-white/20 lg:hover:border-white lg:hover:bg-black/90 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Tracker Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase px-2 py-0.5 rounded-xs bg-white/10 border border-white/15 font-mono">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono group-hover:text-white transition-colors">
                        0{idx + 1}/06
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white mb-1.5 group-hover:text-white transition-colors">
                      {item.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Micro Progress Bar on Card Bottom */}
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400 font-medium font-mono">
                    <span className="tracking-wider uppercase">FLOW MILESTONE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
