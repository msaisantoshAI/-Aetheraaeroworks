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
import { StarfieldBackground } from './components/StarfieldBackground';
import { Preloader } from './components/ManufacturingStrip';

export function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

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
        {/* 1. Hero Section (Parallax & Reveal Effects) */}
        <HeroSection />

        {/* 2. About Section (Parallax Specimen & Pillars) */}
        <AboutSection />

        {/* 3. What We Make / Core Capabilities (Sticky Stacking Slider Transitions on Scroll) */}
        <WhatWeMakeSection onSelectProduct={handleSelectProduct} />

        {/* 4. Advanced Machining Facilities (Parallax & Staggered Cards) */}
        <FacilitiesSection />

        {/* 5. Process: From Drawing to Delivered Component (Parallax & Reveal) */}
        <ProcessSection />

        {/* 6. Why Partner With Aethera? (Parallax Launchpad & Bullet Reveals) */}
        <WhyUsSection />

        {/* 7. Contact Section (Parallax Orbital Horizon & Direct Mail Channels) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Tech Dossier Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
      />
    </div>
  );
}

export default App;
