import { PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MobileCTA({ onOpenQuote }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const onResize = () => setShow(window.innerWidth < 768) // md breakpoint
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:hidden z-40"
        >
          <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/70 backdrop-blur shadow-soft">
            <button
              onClick={onOpenQuote}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-amber-500 text-black font-semibold px-4 py-3 hover:opacity-95"
            >
              <PhoneCall size={18} />
              Get a Quick Quote
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
