import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'

export default function QuoteModal({ open, onClose }) {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: 'onChange' })

  useEffect(() => { if (!open) reset() }, [open, reset])
  if (!open) return null

  const onSubmit = (data) => {
    console.log('Lead submitted:', data) // Replace with your API call
    onClose()
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              {...register('name', { required: 'Name is required' })}
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Company</label>
            <input
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              {...register('company')}
              placeholder="Acme Inc."
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
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                {...register('phone')}
                placeholder="+1 555 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Service</label>
              <select
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                {...register('service', { required: 'Please select a service' })}
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                <option value="tactical-presence">Tactical Presence</option>
                <option value="rapid-response">Rapid Response</option>
                <option value="risk-mitigation">Risk Mitigation</option>
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
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full rounded-xl bg-brand px-4 py-2 font-semibold text-black hover:bg-brand-dark disabled:opacity-50"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}