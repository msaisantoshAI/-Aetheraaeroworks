import type { FC } from 'react';
import type { ProductDetail } from './ProductModal';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductDetail) => void;
}

interface ProductCardData extends ProductDetail {
  secondaryImages: { src: string; caption: string }[];
}

const productsData: ProductCardData[] = [
  {
    id: 'turbine-blades',
    num: '01',
    title: 'TURBINE BLADES',
    subtitle: 'Power & Aero-Engine Applications',
    category: 'PRECISION BLADING SYSTEMS',
    image: '/images/product_turbine_blades_1789038425665.jpg',
    secondaryImages: [
      {
        src: '/images/media_1789103249908.jpg',
        caption: 'AERO-PROPULSION INTEGRATION',
      },
      {
        src: '/images/about_precision_part_1789038407420.jpg',
        caption: '5-AXIS DOVETAIL ROOT PROFILES',
      },
    ],
    overview: 'High-precision steam and gas turbine blades for power generation and aero-engine propulsion. Manufactured with 5-axis continuous multi-axis milling, intricate root dovetails, and aerodynamic aerofoil surface profiles.',
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
    secondaryImages: [
      {
        src: '/images/hero_turbine_rotor_1789038389301.jpg',
        caption: 'MULTI-DISC ROTOR SHAFT ASSEMBLY',
      },
      {
        src: '/images/cad_blueprint.jpg',
        caption: 'CAD SECTION & CASING FLANGE',
      },
    ],
    overview: 'Precision-manufactured steam turbine casings, gas turbine casings, and dynamic turbine rotors. Engineered to withstand extreme thermal cycles, dynamic rotational stresses, and tight aerodynamic clearances in demanding energy and propulsion environments.',
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
    title: 'DEFENSE & MISSILE COMPONENTS',
    subtitle: 'Control Surfaces & Tactical Sub-Assemblies',
    category: 'MISSION-CRITICAL DEFENSE HARDWARE',
    image: '/images/defence_components.jpg',
    secondaryImages: [
      {
        src: '/images/media_1789103249792.jpg',
        caption: 'FLIGHT CONTROL ACTUATION',
      },
      {
        src: '/images/media_1789103249798.jpg',
        caption: 'ORBITAL STRUCTURAL HARDWARE',
      },
    ],
    overview: 'Control surfaces, stabiliser fins, precision structural components, rocket motors, missile airframes, and aerospace & defense sub-assemblies. Built to tight dimensional tolerances and validated for extreme flight operating conditions.',
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

export const ProductsSection: FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  return (
    <div id="products" className="w-full bg-black text-white">
      {/* 3 Prominent Large Full-Viewport Cards with Relative Images Inside */}
      {productsData.map((prod, index) => {
        const isRight = index % 2 === 1;

        return (
          <section
            key={prod.id}
            className="relative min-h-[100vh] lg:min-h-[105vh] w-full flex flex-col justify-end overflow-hidden bg-black select-none border-t border-white/15 group"
          >
            {/* Primary Background Image (Brightened for crisp metallic clarity) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
              {isRight ? (
                <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              )}
            </div>

            {/* Content (SpaceX Exact Overlay Card + Relative Images Showcase) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full flex flex-col justify-end">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                {/* Left/Right Text Column */}
                <div
                  className={`lg:col-span-7 ${
                    isRight ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-left'
                  } space-y-6`}
                >
                  {/* Eyebrow */}
                  <div className="text-xs sm:text-sm text-neutral-300 tracking-[0.25em] uppercase font-bold">
                    {prod.num} // {prod.category}
                  </div>

                  {/* Massive Headline */}
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95]">
                    {prod.title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-base sm:text-lg md:text-xl text-neutral-100 font-normal leading-relaxed max-w-2xl">
                    {prod.overview}
                  </p>

                  {/* Key Specifications Grid inside the Card */}
                  <div className="grid grid-cols-2 gap-3 max-w-xl pt-2">
                    {prod.specifications.map((spec, i) => (
                      <div
                        key={i}
                        className="p-3 bg-black/70 border border-white/20 rounded-sm backdrop-blur-md"
                      >
                        <div className="text-xs text-neutral-300 uppercase tracking-wider font-semibold">
                          {spec.label}
                        </div>
                        <div className="text-sm text-white font-bold mt-0.5">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Button without Arrow (High-Contrast CRO) */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-2xl"
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>

                {/* Relative Secondary Images Inside the Card */}
                <div
                  className={`lg:col-span-5 ${
                    isRight ? 'lg:order-1' : 'lg:order-2'
                  } space-y-3`}
                >
                  <div className="text-xs text-neutral-300 uppercase tracking-widest font-bold">
                    RELATED ENGINEERING VIEWS
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {prod.secondaryImages.map((sec, i) => (
                      <div
                        key={i}
                        className="group/img relative rounded-sm overflow-hidden border border-white/25 bg-neutral-950 aspect-[4/3]"
                      >
                        <img
                          src={sec.src}
                          alt={sec.caption}
                          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-semibold bg-black/80 backdrop-blur-md px-2 py-1 rounded-xs border border-white/20 uppercase tracking-wider leading-tight">
                          {sec.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Subtle Technical Readout */}
            <div className="relative z-10 w-full border-t border-white/15 bg-black/85 backdrop-blur-md py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-neutral-300 tracking-[0.18em] uppercase">
                <div className="text-white font-bold">
                  {prod.category} • CERTIFICATION IN PROGRESS
                </div>
                <div>
                  <span className="text-white font-bold">FACILITY: </span>
                  <span>AETHERA HARDWARE PARK, HYDERABAD</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
