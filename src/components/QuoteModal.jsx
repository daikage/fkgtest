import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'

export default function QuoteModal({ open, onClose }) {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: 'onChange' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (!open) {
      reset()
      setStatus('idle')
      setNotice('')
    }
  }, [open, reset])

  if (!open) return null

  const onSubmit = async (data) => {
    try {
      setStatus('sending')
      setNotice('')
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Email send failed')
      }
      setStatus('success')
      setNotice('Email sent successfully')
      // Close after a short confirmation delay
      setTimeout(() => {
        onClose()
      }, 1000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setNotice(err.message || 'Email send failed')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* UPDATED: better mobile handling: max height + scrolling */}
      <div className="relative w-full max-w-lg glass rounded-2xl p-5 sm:p-6 shadow-elevated max-h-[80vh] sm:max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Request a Quick Quote</h3>
          <button onClick={onClose} aria-label="Close" className="btn-ghost rounded-lg"><X /></button>
        </div>

        {/* Notice area */}
        {status !== 'idle' && notice && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-4 rounded-lg px-3 py-2 text-sm border ${
              status === 'success'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'border-red-300 bg-red-50 text-red-700 dark:border-red-700/50 dark:bg-red-900/30 dark:text-red-300'
            }`}
          >
            {notice}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              {...register('name', { required: 'Name is required' })}
              placeholder="Jane Doe"
              disabled={status === 'sending'}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Company</label>
            <input
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              {...register('company')}
              placeholder="Acme Inc."
              disabled={status === 'sending'}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' }
              })}
              placeholder="jane@example.com"
              disabled={status === 'sending'}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                {...register('phone')}
                placeholder="+234 800 000 0000"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Service</label>
              <select
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                {...register('service', { required: 'Please select a service' })}
                defaultValue=""
                disabled={status === 'sending'}
              >
                <option value="" disabled>Select a service</option>
                <option value="manned-guarding">Manned Guarding</option>
                <option value="event-security-management">Event Security Management</option>
                <option value="executive-protection">Executive Protection</option>
                <option value="risk-and-advisory-services">Risk & Advisory Services</option>
                <option value="security-technology-solutions">Security Technology Solutions</option>
                <option value="journey-management">Journey Management</option>
              </select>
              {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              {...register('message')}
              placeholder="Tell us about your site, schedule, and risk profile."
              disabled={status === 'sending'}
            />
          </div>

          <button
            type="submit"
            disabled={!isValid || status === 'sending'}
            className="w-full rounded-xl bg-brand px-4 py-2 font-semibold text-black hover:bg-brand-dark disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
}