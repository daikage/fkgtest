import { useEffect, useState } from 'react'
import { ShieldCheck, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'fkg_privacy_ack_v1'

export default function PrivacyPolicyModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY)
      if (!seen) setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {}
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative w-full max-w-lg glass rounded-2xl p-5 sm:p-6 shadow-elevated">
        {/* ADDED: Close button (X) */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="btn-ghost rounded-lg absolute right-3 top-3"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-lg bg-brand/15 text-brand p-2">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Privacy Policy</h3>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              We use personal information you provide (like name, email, phone) to respond to enquiries and deliver our
              services. We also use cookies and analytics to operate and improve this site. By continuing, you acknowledge
              our Privacy Policy.
            </p>
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <button onClick={accept} className="btn-primary rounded-xl">Accept & Continue</button>
              <Link to="/privacy-policy" className="btn-outline rounded-xl">Read Full Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
