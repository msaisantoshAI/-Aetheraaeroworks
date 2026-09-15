import type { FC } from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full text-white border-t border-white/20 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      {/* Footer Orbital Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/media_1789122802851.webp"
          alt="Earth orbital horizon atmosphere view"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
        />
        {/* Dark Slate Gradients for Impeccable Text Contrast */}
        <div className="absolute inset-0 bg-[#090b0e]/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#090b0e]/95 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-8 sm:pb-10 border-b border-white/15">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo-white.png"
                alt="Aethera Aero Works Logo"
                className="h-6 sm:h-7 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
              <span className="text-base sm:text-lg font-bold tracking-[0.22em] text-white uppercase">
                AETHERA AERO WORKS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 tracking-wide font-normal">
              Precision Engineering for a Stronger Tomorrow
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-xs font-bold text-slate-200 hover:text-white transition-colors border border-white/30 px-5 py-2.5 rounded-xs hover:border-white bg-white/10 active:bg-white/20 backdrop-blur-md"
            aria-label="Back to Top"
          >
            BACK TO TOP
          </button>
        </div>

        {/* Middle Row: Domains, Facility & Official Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10 border-b border-white/15 text-xs">
          {/* Domains */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] sm:text-[11px] text-slate-400 tracking-[0.25em] uppercase font-bold font-mono">
              INDUSTRY DOMAINS
            </div>
            <div className="text-sm text-white tracking-wider font-bold">
              Defence | Aerospace | Power Generation
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Precision manufacturing of flight-critical components, blading systems, large turbine casings, and dynamic rotors.
            </p>
          </div>

          {/* Facility & Contact Address */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] sm:text-[11px] text-slate-400 tracking-[0.25em] uppercase font-bold font-mono">
              FACILITY & CONTACT
            </div>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-100 font-medium">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Hardware Park, Hyderabad, Telangana, India</span>
            </div>
            <p className="text-xs text-slate-300 font-light pl-6">
              ~10 minutes from Rajiv Gandhi International Airport
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-100 font-medium pt-1">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <a
                href="mailto:aetheraaeroworksllp7@gmail.com"
                className="hover:underline font-mono text-slate-100 hover:text-white break-all sm:break-normal"
              >
                aetheraaeroworksllp7@gmail.com
              </a>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] sm:text-[11px] text-slate-400 tracking-[0.25em] uppercase font-bold font-mono">
              DIRECT ACCESS
            </div>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-xs text-slate-300 font-medium">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('what-we-make')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollToSection('facilities')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                Facilities
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                Why Aethera
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-colors uppercase font-semibold"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row: QMS Compliance Note & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} Aethera Aero Works. All Rights Reserved.
          </div>
          <div className="text-xs text-slate-300">
            *Quality Architecture: Pursuing AS9100D and ISO 9001:2015 Standards.
          </div>
        </div>
      </div>
    </footer>
  );
};
