import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onOpenProjectModal: () => void;
}

export const ContactSection: FC<ContactSectionProps> = ({ onOpenProjectModal }) => {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center text-white border-t border-white/20 overflow-hidden select-none"
    >
      {/* 1. Full-Bleed Orbital Earth & Spacecraft Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/media_1789123642643.jpg"
          alt="Earth orbital horizon and spacecraft module in space"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Subtle Radial Vignette for Impeccable Text Contrast */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12]/95 via-transparent to-black/30" />
      </div>

      {/* 2. Center-Aligned Floating Content (Direct Text - No Clunky Box Container) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 sm:py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-5 flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-xs bg-black/60 border border-white/25 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs text-white tracking-[0.25em] uppercase font-bold">
              LET'S BUILD YOUR NEXT COMPONENT
            </span>
          </div>

          {/* Large Bold Headline (Refined Scale) */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
            HAVE A CHALLENGING COMPONENT?
          </h2>

          {/* Crisp, Concise Articulation */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-200 font-light leading-relaxed drop-shadow-md max-w-2xl">
            Have a mission-critical component that is difficult to manufacture? Send us your drawing, CAD model, or technical requirement. Our engineering team will review your specifications to develop the optimal precision manufacturing solution.
          </p>

          {/* Action CTAs (Center Aligned) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 shadow-2xl"
            >
              START A PROJECT
            </button>

            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-black/60 hover:bg-white hover:text-black text-white border border-white/40 hover:border-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 backdrop-blur-xl shadow-lg"
            >
              REQUEST RFQ
            </button>
          </div>

          {/* Minimalist Contact Channels in High-Blur Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-200 w-full">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xs bg-black/60 border border-white/20 backdrop-blur-xl">
              <Mail className="w-4 h-4 text-white" />
              <span>rfq@aetheraaero.com</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xs bg-black/60 border border-white/20 backdrop-blur-xl">
              <Phone className="w-4 h-4 text-white" />
              <span>+91 (040) 2930-XXXX</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xs bg-black/60 border border-white/20 backdrop-blur-xl">
              <MapPin className="w-4 h-4 text-white" />
              <span>Hardware Park, Hyderabad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
