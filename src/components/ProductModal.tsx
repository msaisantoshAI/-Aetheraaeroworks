import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cpu, Layers } from 'lucide-react';

export interface ProductDetail {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  overview: string;
  specifications: { label: string; value: string }[];
  materials: string[];
  processes: string[];
  applications: string[];
  qualityStandards: string[];
}

interface ProductModalProps {
  product: ProductDetail | null;
  onClose: () => void;
  onStartProject: (productTitle?: string) => void;
}

export const ProductModal: FC<ProductModalProps> = ({ product, onClose, onStartProject }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/90 backdrop-blur-2xl">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-white/20 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/15 bg-black">
            <div className="flex items-center gap-3">
              <span className="text-white text-xs sm:text-sm font-bold tracking-widest">
                SPECIFICATION // {product.num}
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-xs text-neutral-300 uppercase tracking-wider hidden sm:inline font-semibold">
                {product.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Top Grid: Image + Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative rounded-sm overflow-hidden border border-white/15 bg-black aspect-[16/10]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/90 px-3.5 py-1.5 border border-white/20 text-xs text-white font-semibold">
                  PRECISION MANUFACTURED SPECIMEN
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs text-neutral-300 tracking-[0.25em] font-bold">
                  {product.num} // PRODUCT DOSSIER
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  {product.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                  {product.overview}
                </p>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="p-3 rounded-sm bg-black border border-white/15">
                      <div className="text-xs text-neutral-300 uppercase tracking-wider font-semibold">
                        {spec.label}
                      </div>
                      <div className="text-sm text-white font-bold mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Detail Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/15">
              {/* Materials */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white uppercase tracking-wider font-bold">
                  <Layers className="w-4 h-4 text-white" />
                  <span>Approved Materials</span>
                </div>
                <ul className="space-y-2">
                  {product.materials.map((mat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Manufacturing Capabilities */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white uppercase tracking-wider font-bold">
                  <Cpu className="w-4 h-4 text-white" />
                  <span>Process Operations</span>
                </div>
                <ul className="space-y-2">
                  {product.processes.map((proc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality & Validation */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white uppercase tracking-wider font-bold">
                  <Shield className="w-4 h-4 text-white" />
                  <span>Quality Rigor</span>
                </div>
                <ul className="space-y-2">
                  {product.qualityStandards.map((std, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Action Bar (No Arrows on Buttons) */}
          <div className="px-6 py-4 border-t border-white/15 bg-black flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-300 font-medium">
              CUSTOM GEOMETRIES & MISSION REQUIREMENTS SUPPORTED
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-3 border border-white/30 text-white text-xs sm:text-sm font-bold hover:bg-white/10 transition-colors"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  onClose();
                  onStartProject(product.title);
                }}
                className="flex-1 sm:flex-none px-7 py-3 bg-white text-black text-xs sm:text-sm font-bold hover:bg-neutral-200 transition-colors shadow-lg"
              >
                REQUEST RFQ / SUBMIT DRAWING
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
