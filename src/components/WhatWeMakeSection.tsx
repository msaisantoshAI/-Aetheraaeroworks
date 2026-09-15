import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { ProductDetail } from './ProductModal';

interface WhatWeMakeProps {
  onSelectProduct: (product: ProductDetail) => void;
}

const productsList: ProductDetail[] = [
  {
    id: 'turbine-blades',
    num: '01',
    title: 'TURBINE BLADES',
    subtitle: 'Power & Aero-Engine Applications',
    category: 'PRECISION BLADING SYSTEMS',
    image: '/images/product_turbine_blades_1789038425665.jpg',
    overview: 'Manufacturing of high-precision Steam and Gas turbine blades for power and aero-engine applications. Produced with multi-axis continuous milling, intricate root dovetails, and aerodynamic airfoil surface fidelity.',
    specifications: [
      { label: 'Aerofoil Tolerances', value: '±0.005 mm profile fidelity' },
      { label: 'Machining Standard', value: '5-Axis Simultaneous CNC' },
      { label: 'Root Geometry', value: 'Fir-Tree & Dovetail Broaching' },
      { label: 'Surface Finish', value: 'Ra ≤ 0.2 µm polishing capability' },
    ],
    materials: [
      'Nickel-based Superalloys (Inconel 718, 625)',
      'Titanium Alloys (Ti-6Al-4V, Ti-6246)',
      'Nimonic & Cobalt-Base Superalloys',
      'High-Grade Stainless (17-4PH, 15-5PH)',
    ],
    processes: [
      '5-Axis High-Speed Aerofoil Milling',
      'Electrical Discharge Machining (EDM)',
      'Precision Root Slot Broaching & Grinding',
      'Non-Destructive Testing (FPI & X-Ray)',
    ],
    applications: [
      'Commercial & Defense Aero-Engines',
      'Heavy-Duty Industrial Gas Turbines (IGT)',
      'Supercritical Steam Power Turbines',
      'Auxiliary Power Units (APU)',
    ],
    qualityStandards: [
      '3D Optical Blade Scanning & CMM Metrology',
      'Pursuing AS9100D Aerospace Quality Architecture',
      'Full Heat Batch & Chemical Traceability',
      'Dynamic Frequency & Resonance Testing',
    ],
  },
  {
    id: 'turbine-casings-rotors',
    num: '02',
    title: 'TURBINE CASINGS & ROTORS',
    subtitle: 'Heavy Rotating & Containment Assemblies',
    category: 'HEAVY PRECISION ROTATING MACHINERY',
    image: '/images/turbine_rotor.jpg',
    overview: 'Precision manufacturing of Steam and Gas turbine casings and dynamic turbine rotors. Engineered to withstand extreme thermal cycles, dynamic rotational stresses, and tight aerodynamic clearances.',
    specifications: [
      { label: 'Turning Capacity', value: 'Up to 3-Metre Class VTL' },
      { label: 'Concentricity', value: 'Sub-micron runout accuracy' },
      { label: 'Casing Type', value: 'Horizontally & Axially Split' },
      { label: 'Dynamic Balance', value: 'ISO 1940 Grade G1.0 / G2.5' },
    ],
    materials: [
      'Forged High-Strength Alloy Steels (Cr-Mo-V)',
      'Stainless Steels (Duplex, Super Duplex)',
      'Austenitic High-Temp Steel Castings',
      'Specialized Superalloy Rotor Discs',
    ],
    processes: [
      'Heavy Precision Vertical Turret Lathe (VTL)',
      'Large-Scale Horizontal Boring & Milling',
      'Multi-disc Rotor Shaft Assembly & Machining',
      'Dynamic Balancing & Runout Laser Metrology',
    ],
    applications: [
      'Thermal & Combined Cycle Power Plants',
      'Industrial Gas Turbine Compressors',
      'Marine Propulsion Turbine Sets',
      'Nuclear Secondary Circuit Turbines',
    ],
    qualityStandards: [
      'Full Volumetric Ultrasonic (UT) & MPI Testing',
      'Pursuing AS9100D & ISO 9001:2015 QMS Rigor',
      'Laser Tracker Large-Volume CMM Inspection',
      'Thermal Hydrostatic Pressure Proof Testing',
    ],
  },
  {
    id: 'defence-missile-components',
    num: '03',
    title: 'DEFENCE & MISSILE COMPONENTS',
    subtitle: 'Tactical Hardware & Sub-Assemblies',
    category: 'MISSION-CRITICAL DEFENSE HARDWARE',
    image: '/images/defence_components.jpg',
    overview: 'Our intended manufacturing capabilities include: Control surfaces, Stabiliser fins, Precision structural components, Rocket motors, Missile air frames, Aerospace and defence sub-assemblies, and other high-precision engineering components.',
    specifications: [
      { label: 'Geometric Tolerance', value: 'GD&T to ±0.002 mm' },
      { label: 'Component Class', value: 'Flight Critical Structural & Control' },
      { label: 'Weight Reduction', value: 'Monolithic Thin-Wall Pockets' },
      { label: 'Assembly Level', value: 'Sub-Assemblies with Precision Bushings' },
    ],
    materials: [
      'Aerospace Aluminum (Al 7075-T6, 2024, 6061)',
      'Titanium Alloys (Ti-6Al-4V Grade 5)',
      'High-Strength Maraging & Armor Steels',
      'High-Density Tungsten & Copper Alloys',
    ],
    processes: [
      'High-Speed 5-Axis Thin-Wall Machining',
      'Monolithic Airframe Structural Milling',
      'Precision Boring & Bushing Shrink-Fitting',
      'Surface Passivation & Anodization Integration',
    ],
    applications: [
      'Tactical Missile Fins & Canard Actuation',
      'Airframe Ribs, Spars & Wing Attachment Brackets',
      'Rocket Motor Housings & Satellite Bus Mounts',
      'High-Pressure Actuator Cylinders & Valves',
    ],
    qualityStandards: [
      'Coordinate Measuring Machine (CMM) Validation',
      'Pursuing AS9100D Aerospace Traceability',
      '100% First Article Inspection (FAI / AS9102)',
      'Raw Material Mill Test Certificate (MTC) Provenance',
    ],
  },
];

export const WhatWeMakeSection: FC<WhatWeMakeProps> = ({ onSelectProduct }) => {
  return (
    <div id="what-we-make" className="w-full relative z-10 border-t border-white/15">
      {/* Section Header */}
      <div className="bg-[#090b0e] py-12 sm:py-14 px-4 sm:px-8 lg:px-16 text-center border-b border-white/15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-2.5"
        >
          <div className="text-[11px] sm:text-xs text-slate-300 tracking-[0.25em] uppercase font-bold font-mono">
            OUR CORE CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            WHAT WE MAKE
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            High-precision machining and manufacturing of mission-critical components for Defense, Aerospace, and Power Generation.
          </p>
        </motion.div>
      </div>

      {/* 3 Full-Bleed Capability Blocks */}
      {productsList.map((prod, index) => {
        const isRightAligned = index === 0;

        return (
          <section
            key={prod.id}
            className="relative min-h-[85vh] w-full flex flex-col justify-center text-white border-b border-white/15 overflow-hidden select-none"
          >
            {/* Full-Bleed Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
              />
              {/* High-density gradient on mobile for maximum contrast */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  isRightAligned
                    ? 'from-black/90 via-black/80 sm:from-transparent sm:via-black/45 sm:to-black/90'
                    : 'from-black/95 via-black/80 sm:via-black/45 sm:to-transparent'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/40" />
            </div>

            {/* Overlaid Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-16 sm:py-20">
              <motion.div
                initial={{ opacity: 0, x: isRightAligned ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-2xl space-y-4 ${
                  isRightAligned ? 'lg:ml-auto text-left' : 'lg:mr-auto text-left'
                }`}
              >
                {/* Capability Number & Category */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/30 backdrop-blur-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-white tracking-[0.22em] uppercase font-bold font-mono">
                    CAPABILITY // {prod.num} • {prod.category}
                  </span>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] sm:leading-[0.98] drop-shadow-2xl">
                  {prod.title}
                </h3>

                {/* Subtitle */}
                <div className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wider uppercase font-mono">
                  {prod.subtitle}
                </div>

                {/* Concise Articulation */}
                {prod.id === 'defence-missile-components' ? (
                  <div className="space-y-2 text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md">
                    <p>
                      Our intended manufacturing capabilities include control surfaces, stabiliser fins, precision structural components, rocket motors, missile air frames, aerospace & defence sub-assemblies, and other high-precision engineering components.
                    </p>
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md">
                    {prod.overview}
                  </p>
                )}

                {/* Compact Spec Matrix Badges: Solid dark on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                  {prod.specifications.slice(0, 2).map((s, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 bg-slate-950/95 sm:bg-black/70 border border-white/25 rounded-xs backdrop-blur-xl"
                    >
                      <div className="text-[10px] sm:text-[11px] text-slate-300 uppercase font-semibold">
                        {s.label}
                      </div>
                      <div className="text-xs sm:text-sm text-white font-bold mt-0.5">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-white text-black hover:bg-neutral-200 active:bg-neutral-300 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs transition-all duration-200 shadow-2xl"
                  >
                    EXPLORE SPECS
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
