import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhatWeMakeSection } from './components/WhatWeMakeSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal, type ProductDetail } from './components/ProductModal';
import { ProjectModal } from './components/ProjectModal';
import { StarfieldBackground } from './components/StarfieldBackground';
import { Preloader } from './components/ManufacturingStrip';

export function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState<boolean>(false);
  const [projectInitialFocus, setProjectInitialFocus] = useState<string | undefined>(undefined);

  const handleOpenProjectModal = (focusProduct?: string) => {
    setProjectInitialFocus(focusProduct);
    setProjectModalOpen(true);
  };

  const handleSelectProduct = (product: ProductDetail) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#e2e8f0] flex flex-col selection:bg-white selection:text-black relative">
      {/* Cinematic Animated Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Animated Subtle Starfield Night Sky */}
      <StarfieldBackground />

      {/* Top Fixed Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section (PRECISION ENGINEERED FOR TOMORROW) */}
        <HeroSection />

        {/* 2. About Section (ENGINEERING COMPLEXITY INTO PRECISION) */}
        <AboutSection />

        {/* 3. What We Make / Core Capabilities (TURBINE BLADES, CASINGS & ROTORS, DEFENSE COMPONENTS) */}
        <WhatWeMakeSection onSelectProduct={handleSelectProduct} />

        {/* 4. Advanced Machining Facilities */}
        <FacilitiesSection />

        {/* 5. Process: From Drawing to Delivered Component */}
        <ProcessSection />

        {/* 6. Why Partner With Aethera? */}
        <WhyUsSection />

        {/* 7. Contact Section (LET'S BUILD YOUR NEXT COMPONENT) */}
        <ContactSection onOpenProjectModal={() => handleOpenProjectModal()} />
      </main>

      {/* 9. Footer (Address in bottom footer only) */}
      <Footer />

      {/* Interactive Product Tech Dossier Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onStartProject={(title) => handleOpenProjectModal(title)}
      />

      {/* Interactive Project Intake & CAD Transmission Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        initialProductFocus={projectInitialFocus}
      />
    </div>
  );
}

export default App;
