import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ImageModal({ src, open, onClose }) {
  if (!open || !src) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
            className="relative max-w-4xl max-h-[90vh] w-full"
          >
            <img
              src={src}
              alt="Enlarged service gallery view"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={onClose}
              aria-label="Close image view"
              className="absolute -top-3 -right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
