import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cpu, Layers, Mail } from 'lucide-react';

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
}

export const ProductModal: FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto bg-black/90 backdrop-blur-2xl">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-white/20 rounded-xs shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/15 bg-black shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="text-white text-xs sm:text-sm font-bold tracking-widest font-mono">
                SPECIFICATION // {product.num}
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-xs text-neutral-300 uppercase tracking-wider hidden sm:inline font-semibold">
                {product.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xs text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-7">
            {/* Top Grid: Image + Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 relative rounded-xs overflow-hidden border border-white/15 bg-black aspect-[16/10]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/90 px-3 py-1 border border-white/20 text-[11px] text-white font-semibold font-mono">
                  PRECISION MANUFACTURED SPECIMEN
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3.5">
                <div className="text-[11px] text-slate-400 tracking-[0.22em] font-bold font-mono">
                  {product.num} // PRODUCT DOSSIER
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
                  {product.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {product.overview}
                </p>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="p-2.5 sm:p-3 rounded-xs bg-black border border-white/15">
                      <div className="text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                        {spec.label}
                      </div>
                      <div className="text-xs sm:text-sm text-white font-bold mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Detail Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-5 border-t border-white/15">
              {/* Materials */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white uppercase tracking-wider font-bold">
                  <Layers className="w-4 h-4 text-white" />
                  <span>Approved Materials</span>
                </div>
                <ul className="space-y-1.5">
                  {product.materials.map((mat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Manufacturing Capabilities */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white uppercase tracking-wider font-bold">
                  <Cpu className="w-4 h-4 text-white" />
                  <span>Process Operations</span>
                </div>
                <ul className="space-y-1.5">
                  {product.processes.map((proc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality & Validation */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white uppercase tracking-wider font-bold">
                  <Shield className="w-4 h-4 text-white" />
                  <span>Quality Rigor</span>
                </div>
                <ul className="space-y-1.5">
                  {product.qualityStandards.map((std, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-t border-white/15 bg-black flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Inquiries:</span>
              <a
                href="mailto:aetheraaeroworksllp7@gmail.com"
                className="text-white hover:underline font-mono"
              >
                aetheraaeroworksllp7@gmail.com
              </a>
            </div>
            <button
              onClick={onClose}
              className="liquid-btn liquid-btn-white w-full sm:w-auto px-7 py-2.5 text-xs font-bold tracking-[0.18em] uppercase rounded-xs"
            >
              <span>CLOSE</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
