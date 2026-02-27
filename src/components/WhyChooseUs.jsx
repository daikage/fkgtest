import { CheckCircle } from 'lucide-react'

const features = [
  '24/7 Manned Network Operations Center',
  'Mobile Patrol Management Team',
  'Licensed, Experienced & Qualified Security Staff',
  'Over 95 Patrol Vehicles',
  '3 Fully Equipped Training Academies',
  'Fully Insured & Legal Company',
]

export default function WhyChooseUs() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Industry-leading posture backed by training, technology, and disciplined response.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f}
            className="flex items-start gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-4"
          >
            <CheckCircle className="text-brand mt-0.5" size={18} />
            <span className="text-sm text-neutral-800 dark:text-neutral-300">{f}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
