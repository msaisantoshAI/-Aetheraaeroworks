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
      {/* Full-Bleed Orbital Earth & Spacecraft Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/media_1789123642643.jpg"
          alt="Earth orbital horizon and spacecraft module in space"
          className="w-full h-full object-cover object-center filter brightness-[0.85] sm:brightness-[0.92] contrast-[1.05]"
        />
        {/* Vignette for Impeccable Text Contrast */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/35" />
      </div>

      {/* Center-Aligned Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-16 sm:py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-5 flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-xs bg-slate-950/90 sm:bg-black/60 border border-white/30 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white tracking-[0.22em] uppercase font-bold font-mono">
              LET'S BUILD YOUR NEXT COMPONENT
            </span>
          </div>

          {/* Large Bold Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
            HAVE A CHALLENGING COMPONENT?
          </h2>

          {/* Articulation */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-light leading-relaxed drop-shadow-md max-w-2xl">
            Have a mission-critical component that is difficult to manufacture? Send us your drawing, CAD model, or technical requirement. Our engineering team will review your specifications to develop the optimal precision manufacturing solution.
          </p>

          {/* Action CTA: Request RFQ */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black hover:bg-neutral-200 active:bg-neutral-300 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-xs transition-all duration-200 shadow-2xl"
            >
              REQUEST RFQ / SUBMIT DRAWING
            </button>
          </div>

          {/* Contact Details: Updated Email aetheraaeroworksllp7@gmail.com */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-slate-100 w-full">
            <a
              href="mailto:aetheraaeroworksllp7@gmail.com"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xs bg-slate-950/95 sm:bg-black/70 border border-white/30 backdrop-blur-xl hover:border-white transition-colors"
            >
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span className="font-mono text-xs sm:text-sm">aetheraaeroworksllp7@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xs bg-slate-950/95 sm:bg-black/70 border border-white/30 backdrop-blur-xl">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span>+91 (040) 2930-XXXX</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xs bg-slate-950/95 sm:bg-black/70 border border-white/30 backdrop-blur-xl">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span>Hardware Park, Hyderabad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
