import { useRef, type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

interface StackingCardProps {
  product: ProductDetail;
  index: number;
  total: number;
  onSelect: (p: ProductDetail) => void;
}

const StackingCapabilityCard: FC<StackingCardProps> = ({ product, index, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isRightAligned = index === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 mb-12 sm:mb-20 w-full"
      style={{
        zIndex: index + 10,
      }}
    >
      <div className="relative min-h-[78vh] sm:min-h-[82vh] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-[#090b0e] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-center select-none">
        {/* Parallax Background Layer within Card */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="relative w-full h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
            />
          </motion.div>

          {/* Gradients */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isRightAligned
                ? 'from-black/95 via-black/85 sm:from-transparent sm:via-black/45 sm:to-black/95'
                : 'from-black/95 via-black/85 sm:via-black/45 sm:to-transparent'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/40" />
        </div>

        {/* Card Content Overlay */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 w-full py-12 sm:py-16">
          <div
            className={`max-w-2xl space-y-4 ${
              isRightAligned ? 'lg:ml-auto text-left' : 'lg:mr-auto text-left'
            }`}
          >
            {/* Capability Tag with Reveal */}
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
                  CAPABILITY // {product.num} • {product.category}
                </span>
              </motion.div>
            </div>

            {/* Title with Scroll-on-Reveal */}
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.05] sm:leading-[0.98] drop-shadow-2xl"
              >
                {product.title}
              </motion.h3>
            </div>

            {/* Subtitle */}
            <div className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wider uppercase font-mono">
              {product.subtitle}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md">
              {product.overview}
            </p>

            {/* Compact Spec Matrix Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {product.specifications.slice(0, 2).map((s, idx) => (
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

            {/* Liquid Fill Explore Specs Button */}
            <div className="pt-2">
              <button
                onClick={() => onSelect(product)}
                className="liquid-btn liquid-btn-white inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs shadow-2xl"
              >
                <span>EXPLORE SPECS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhatWeMakeSection: FC<WhatWeMakeProps> = ({ onSelectProduct }) => {
  return (
    <div id="what-we-make" className="w-full relative z-10 border-t border-white/15 bg-[#0c0e12]">
      {/* Section Header */}
      <div className="bg-[#090b0e] py-12 sm:py-16 px-4 sm:px-8 lg:px-16 text-center border-b border-white/15">
        <div className="max-w-4xl mx-auto space-y-2.5">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs text-slate-300 tracking-[0.25em] uppercase font-bold font-mono"
            >
              OUR CORE CAPABILITIES
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
            >
              WHAT WE MAKE
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            High-precision machining and manufacturing of mission-critical components for Defense, Aerospace, and Power Generation.
          </motion.p>
        </div>
      </div>

      {/* Sticky Stacking Cards Slider Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {productsList.map((prod, idx) => (
          <StackingCapabilityCard
            key={prod.id}
            product={prod}
            index={idx}
            total={productsList.length}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </div>
  );
};
