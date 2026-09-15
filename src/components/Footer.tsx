import type { FC } from 'react';

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
    <footer className="relative w-full text-white border-t border-white/20 pt-20 pb-14 overflow-hidden">
      {/* Footer Orbital Atmospheric Background Image (Explicit User Requirement #10) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/media_1789122802851.webp"
          alt="Earth orbital horizon atmosphere view"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
        />
        {/* Dark Slate Gradients for Impeccable Text Contrast */}
        <div className="absolute inset-0 bg-[#0c0e12]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-14 border-b border-white/15">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-white.png"
                alt="aetheraaeroworks Logo"
                className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
              <span className="text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase">
                aetheraaeroworks
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-200 tracking-wide font-normal">
              Precision Engineering for a Stronger Tomorrow
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-xs font-bold text-white hover:text-black hover:bg-white transition-all border border-white/30 px-6 py-3 rounded-xs bg-white/10 backdrop-blur-md"
            aria-label="Back to Top"
          >
            BACK TO TOP
          </button>
        </div>

        {/* Middle Row: Domains, Address & Contact, Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/15 text-xs">
          {/* Domains */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs text-neutral-300 tracking-[0.25em] uppercase font-bold">
              INDUSTRY DOMAINS
            </div>
            <div className="text-sm sm:text-base text-white tracking-wider font-bold">
              Defense | Aerospace | Power Generation | Advanced Manufacturing
            </div>
            <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
              Precision engineering and manufacturing of mission-critical components, blading, turbine casings, and flight sub-assemblies.
            </p>
          </div>

          {/* Address & Contact in Bottom Footer */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs text-neutral-300 tracking-[0.25em] uppercase font-bold">
              FACILITY & INQUIRIES
            </div>
            <p className="text-sm sm:text-base text-white font-bold">
              Hardware Park, Hyderabad, Telangana, India
            </p>
            <p className="text-xs sm:text-sm text-neutral-200 font-normal">
              Approximately 10 minutes from Hyderabad International Airport
            </p>
            <div className="pt-1">
              <a
                href="mailto:aetheraaeroworksllp7@gmail.com"
                className="inline-block text-xs sm:text-sm text-white font-semibold underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                aetheraaeroworksllp7@gmail.com
              </a>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs text-neutral-300 tracking-[0.25em] uppercase font-bold">
              DIRECT ACCESS
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-300 font-medium">
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
                What We Make
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Aethera Aero Works. All Rights Reserved.
          </div>
          <div className="text-center md:text-right text-xs text-neutral-300">
            *Quality Management Systems: Pursuing AS9100D and ISO 9001:2015 Certification (Certification in Progress).
          </div>
        </div>
      </div>
    </footer>
  );
};
