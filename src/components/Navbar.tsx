import { useState, useEffect, type FC } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'what-we-make', 'facilities', 'process', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Real-time Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[60] shadow-[0_0_10px_rgba(255,255,255,0.9)] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090b0e]/95 backdrop-blur-md border-b border-white/15 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#090b0e]/95 via-[#090b0e]/60 to-transparent py-3.5 sm:py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Logo / Left (Refined Proportions) */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Aethera Aero Works Home"
          >
            <img
              src="/images/logo-white.png"
              alt="Aethera Aero Works Logo"
              className="h-6 sm:h-7 w-auto object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] transition-transform duration-300 lg:group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-[0.22em] text-xs sm:text-sm leading-tight">
                AETHERA
              </span>
              <span className="text-neutral-400 tracking-[0.2em] text-[9px] sm:text-[10px] uppercase font-semibold">
                AERO WORKS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'about', label: 'ABOUT' },
              { id: 'what-we-make', label: 'CAPABILITIES' },
              { id: 'facilities', label: 'FACILITIES' },
              { id: 'process', label: 'PROCESS' },
              { id: 'why-us', label: 'WHY AETHERA' },
              { id: 'contact', label: 'CONTACT' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-[0.16em] transition-all duration-200 rounded-xs ${
                  activeSection === item.id
                    ? 'text-white bg-white/15 font-semibold shadow-inner'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action CTA (Clean RFQ Trigger) */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenProjectModal}
              className="relative inline-flex items-center px-4.5 py-2 bg-white text-black hover:bg-neutral-200 border border-white text-xs tracking-[0.18em] font-bold transition-all duration-200 rounded-xs shadow-md"
            >
              <span>REQUEST RFQ</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle (44px min touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 -mr-1.5 text-neutral-200 hover:text-white focus:outline-none focus:ring-1 focus:ring-white/30 rounded-sm"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090b0e] flex flex-col justify-between p-6 pt-20 lg:hidden border-b border-white/15 overflow-y-auto">
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase pb-2 border-b border-white/15 font-bold font-mono">
              NAVIGATION
            </div>
            {[
              { id: 'home', label: 'HOME', desc: 'Precision Engineered for Tomorrow' },
              { id: 'about', label: 'ABOUT', desc: 'Engineering Complexity into Precision' },
              { id: 'what-we-make', label: 'CAPABILITIES', desc: 'Turbine Blading, Casings & Tactical Hardware' },
              { id: 'facilities', label: 'FACILITIES', desc: '3M VTL, 5-Axis CNC & Metrology Lab' },
              { id: 'process', label: 'PROCESS', desc: 'Drawing to Delivered Component' },
              { id: 'why-us', label: 'WHY AETHERA', desc: 'Technical Partnership & Support' },
              { id: 'contact', label: 'CONTACT', desc: 'Direct Engineering Inquiry / RFQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-3 border-b border-white/10 flex items-center justify-between active:bg-white/5 transition-colors"
              >
                <div>
                  <span className="text-lg font-bold tracking-wider text-white">
                    {item.label}
                  </span>
                  <p className="text-xs text-neutral-300 mt-0.5">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="pt-5 border-t border-white/15 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-3.5 bg-white text-black text-center text-xs tracking-[0.2em] font-bold rounded-xs active:bg-neutral-200 transition-colors shadow-lg"
            >
              REQUEST RFQ / SUBMIT DRAWING
            </button>
            <div className="text-[10px] text-neutral-300 flex justify-between font-medium">
              <span>HARDWARE PARK, HYDERABAD</span>
              <span>DEFENSE • AEROSPACE • POWER</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
