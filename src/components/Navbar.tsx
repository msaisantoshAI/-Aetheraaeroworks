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
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'what-we-make', 'facilities', 'process', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 250;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0c0e12]/95 backdrop-blur-md border-b border-white/15 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0c0e12]/95 via-[#0c0e12]/60 to-transparent py-4.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Brand Logo / Left */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Aethera Aero Works Home"
          >
            <img
              src="/images/logo-white.png"
              alt="Aethera Aero Works Logo"
              className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-[0.25em] text-sm sm:text-base leading-tight">
                AETHERA
              </span>
              <span className="text-neutral-300 tracking-[0.2em] text-[10px] sm:text-[11px] uppercase font-medium">
                AERO WORKS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'about', label: 'ABOUT' },
              { id: 'what-we-make', label: 'WHAT WE MAKE' },
              { id: 'facilities', label: 'FACILITIES' },
              { id: 'process', label: 'PROCESS' },
              { id: 'why-us', label: 'WHY AETHERA' },
              { id: 'contact', label: 'CONTACT' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-[0.18em] transition-all duration-300 rounded-sm ${
                  activeSection === item.id
                    ? 'text-white bg-white/20 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenProjectModal}
              className="group relative inline-flex items-center px-5 py-2.5 bg-white text-black hover:bg-neutral-200 border border-white text-xs tracking-[0.2em] font-bold transition-all duration-300 rounded-sm shadow-md"
            >
              <span>START A PROJECT</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0e12] flex flex-col justify-between p-6 pt-24 lg:hidden border-b border-white/15 overflow-y-auto">
          <div className="space-y-4">
            <div className="text-[11px] tracking-[0.25em] text-neutral-400 uppercase pb-2 border-b border-white/15 font-semibold">
              NAVIGATION
            </div>
            {[
              { id: 'home', label: 'HOME', desc: 'Precision Engineered for Tomorrow' },
              { id: 'about', label: 'ABOUT', desc: 'About Aethera Aero Works' },
              { id: 'what-we-make', label: 'WHAT WE MAKE', desc: 'Our Core Capabilities' },
              { id: 'facilities', label: 'FACILITIES', desc: 'Advanced Machining Centers' },
              { id: 'process', label: 'PROCESS', desc: 'Drawing to Delivered Component' },
              { id: 'why-us', label: 'WHY AETHERA', desc: 'Why Partner with Us' },
              { id: 'contact', label: 'CONTACT', desc: 'Start a Project / RFQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-2.5 border-b border-white/10 flex items-center justify-between group"
              >
                <div>
                  <span className="text-xl font-bold tracking-wider text-white group-hover:text-neutral-200 transition-colors">
                    {item.label}
                  </span>
                  <p className="text-xs text-neutral-300 mt-0.5">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/15 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-3.5 bg-white text-black text-center text-xs tracking-[0.2em] font-bold rounded-sm hover:bg-neutral-200 transition-colors shadow-lg"
            >
              START A PROJECT
            </button>
            <div className="text-[11px] text-neutral-300 flex justify-between font-medium">
              <span>HARDWARE PARK, HYDERABAD</span>
              <span>DEFENSE • AEROSPACE • POWER</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
