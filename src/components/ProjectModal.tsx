import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle2, Shield } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductFocus?: string;
}

export const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, initialProductFocus }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: initialProductFocus || 'Aerospace & Flight Systems',
    quantity: 'Prototype / First Article Inspection',
    tolerance: 'Tight (< ±0.005mm)',
    ndaRequired: true,
    fileAttached: false,
    fileName: '',
    message: '',
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        fileAttached: true,
        fileName: e.target.files[0].name,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-neutral-950 border border-white/20 rounded-sm shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/15 bg-black">
            <div className="flex items-center gap-3">
              <span className="text-white text-xs sm:text-sm font-bold tracking-widest">
                PROJECT INTAKE // CAD & RFQ SUBMISSION
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                    REQUIREMENTS TRANSMITTED
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-200 max-w-md mx-auto">
                    Your CAD model and engineering parameters have been submitted to the Aethera Engineering Desk at Hardware Park, Hyderabad.
                  </p>
                  <div className="p-3 bg-black rounded border border-white/20 text-xs sm:text-sm text-white font-bold max-w-xs mx-auto mt-4">
                    REF ID: AERO-2026-8942
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3.5 bg-white text-black text-xs sm:text-sm font-bold tracking-wider hover:bg-neutral-200 transition-colors rounded-sm shadow-md"
                  >
                    RETURN TO OVERVIEW
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    TRANSMIT ENGINEERING RFQ & DRAWINGS
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200">
                    Submit component drawings (STEP, IGES, DXF, PDF) for manufacturability review and formal quotation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-300 uppercase tracking-wider mb-1.5 font-bold">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-white/25 px-3.5 py-2.5 text-xs sm:text-sm text-white rounded-sm focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-300 uppercase tracking-wider mb-1.5 font-bold">
                      Official Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="engineer@defense-org.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-white/25 px-3.5 py-2.5 text-xs sm:text-sm text-white rounded-sm focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-300 uppercase tracking-wider mb-1.5 font-bold">
                      Organization / Program
                    </label>
                    <input
                      type="text"
                      placeholder="Aerospace OEM / Power Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-black border border-white/25 px-3.5 py-2.5 text-xs sm:text-sm text-white rounded-sm focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-300 uppercase tracking-wider mb-1.5 font-bold">
                      Sector Application
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-black border border-white/25 px-3.5 py-2.5 text-xs sm:text-sm text-white rounded-sm focus:border-white focus:outline-none"
                    >
                      <option value="Defense & Tactical Hardware">Defense & Tactical Hardware</option>
                      <option value="Aerospace & Propulsion">Aerospace & Propulsion</option>
                      <option value="Power Generation & Turbines">Power Generation & Turbines</option>
                      <option value="Precision 5-Axis Machining">Precision 5-Axis Machining</option>
                    </select>
                  </div>
                </div>

                {/* CAD File Upload Area */}
                <div>
                  <label className="block text-xs text-neutral-300 uppercase tracking-wider mb-1.5 font-bold">
                    CAD Drawing / Model Attachment (Optional)
                  </label>
                  <label className="flex flex-col items-center justify-center p-5 border border-dashed border-white/30 rounded-sm bg-black hover:border-white cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept=".step,.stp,.iges,.igs,.dxf,.pdf,.dwg,.zip"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <UploadCloud className="w-7 h-7 text-neutral-300 group-hover:text-white transition-colors mb-2" />
                    <span className="text-xs sm:text-sm text-white font-medium">
                      {formData.fileName || 'Click to select STEP, IGES, DXF, or PDF'}
                    </span>
                    <span className="text-xs text-neutral-400 mt-1">
                      Max file size: 50MB • Protected by bilateral NDA protocol
                    </span>
                  </label>
                </div>

                {/* Technical notes */}
                <div>
                  <label className="block text-xs text-neutral-300 uppercase tracking-wider mb-1.5 font-bold">
                    Technical Specifications / Material & Tolerance Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on alloy type (e.g. Inconel 718, Ti-6Al-4V), batch quantities, and specific inspection requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-white/25 p-3.5 text-xs sm:text-sm text-white rounded-sm focus:border-white focus:outline-none"
                  />
                </div>

                {/* Mutual NDA Checkbox */}
                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="ndaCheck"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="w-4 h-4 rounded border-white/40 text-white focus:ring-0 bg-black"
                  />
                  <label htmlFor="ndaCheck" className="text-xs sm:text-sm text-neutral-300 flex items-center gap-2 cursor-pointer font-medium">
                    <Shield className="w-4 h-4 text-white" />
                    <span>Request bilateral Non-Disclosure Agreement (NDA) prior to technical review</span>
                  </label>
                </div>

                {/* Footer Buttons (No Arrow Glyph) */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div className="text-xs text-neutral-400 font-medium">
                    FACILITY: HARDWARE PARK, HYDERABAD
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-white text-black text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-neutral-200 transition-colors shadow-lg"
                  >
                    TRANSMIT REQUIREMENTS
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
