import type { FC } from 'react';
import { motion } from 'framer-motion';

const facilitiesList = [
  {
    title: 'CNC Vertical Turning Lathe',
    capacity: '3 Metre Class',
    desc: 'Heavy-duty precision vertical turning for large-diameter turbine casings, flanged assemblies, and disc rotors.',
  },
  {
    title: 'CNC Horizontal Lathe',
    capacity: 'Approx. 1,500 mm Dia × 5 Metre Length',
    subBadge: 'With Grinding Attachment',
    desc: 'Equipped with precision grinding attachment for long-shaft turbine rotors and high-precision cylindrical parts.',
  },
  {
    title: '5-Axis CNC Machining Centre',
    capacity: 'Approximately 650 mm Capacity',
    desc: 'Continuous multi-axis simultaneous contouring for complex turbine aerofoils, impellers, and monolithic brackets.',
  },
  {
    title: '4-Axis & 3-Axis CNC Machining Centres',
    capacity: 'Up to Approx. 2 Metre X-Axis Travel',
    desc: 'High-speed structural milling for aerospace frames, missile ribs, and large prismatic sub-assemblies.',
  },
  {
    title: '3D CMM for Precision Inspection',
    capacity: 'Sub-Micron Metrology Lab',
    desc: 'Volumetric geometric dimensioning & tolerancing (GD&T) verification with complete inspection reports.',
  },
  {
    title: 'Welding Facilities',
    capacity: 'TIG, MIG & Argon Arc Welding',
    desc: 'High-integrity aerospace and defense fabrication with inert-gas shielded specialized alloy welding.',
  },
  {
    title: '10-Ton Overhead Crane',
    capacity: 'Heavy Material Handling',
    desc: 'Integrated overhead material handling for safe positioning and transfer of heavy forgings and raw billets.',
  },
  {
    title: 'Manufacturing Facility',
    capacity: 'Approximately 15,000 Sq. Ft.',
    desc: 'Dedicated precision engineering shop floor located strategically at Hardware Park, Hyderabad.',
  },
];

export const FacilitiesSection: FC = () => {
  return (
    <section id="facilities" className="relative min-h-[90vh] w-full flex flex-col justify-center text-white border-t border-white/15 overflow-hidden select-none">
      {/* Full-Bleed Background Machining Center Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/cnc_5axis_machining_1789024600590.jpg"
          alt="5-Axis CNC machining facility and advanced equipment"
          className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
        />
        {/* Subtle Vignette for High Image Visibility and Crisp Contrast */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-16 sm:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/30 backdrop-blur-xl mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white tracking-[0.22em] uppercase font-bold font-mono">
              MANUFACTURING INFRASTRUCTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2.5 drop-shadow-2xl">
            ADVANCED MACHINING FACILITIES
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed">
            Equipped with heavy-duty vertical & horizontal turning, multi-axis simultaneous milling, sub-micron CMM metrology, and inert welding facilities at Hardware Park, Hyderabad.
          </p>
        </motion.div>

        {/* 8 Equipment Cards: Solid Dark on Mobile, Hover Transition on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {facilitiesList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-4.5 sm:p-5 rounded-xs bg-slate-950/95 sm:bg-black/70 backdrop-blur-xl border border-slate-800/90 sm:border-white/20 lg:hover:border-white lg:hover:bg-black/90 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 tracking-wider uppercase font-semibold font-mono mb-2 group-hover:text-white transition-colors">
                  <span>FACILITY // 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-all" />
                </div>

                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <div className="inline-block px-2.5 py-1 rounded-xs bg-white/10 border border-white/25 text-[11px] sm:text-xs text-slate-100 font-bold">
                    {item.capacity}
                  </div>
                  {item.subBadge && (
                    <div className="inline-block px-2 py-1 rounded-xs bg-white/15 border border-white/30 text-[10px] text-white font-semibold">
                      {item.subBadge}
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-medium font-mono">
                <span>ACTIVE SPECIFICATION</span>
                <span className="tracking-widest uppercase text-slate-300">ONLINE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
