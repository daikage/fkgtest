export default function TrustedBy() {
  const banks = ['FirstBank', 'Stanbic', 'GTBank', 'Access', 'Zenith', 'UBA']

  return (
    <section className="container py-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block h-1 w-6 rounded bg-brand" />
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
          Trusted by leading institutions
        </h3>
      </div>
      {/* UPDATED: added shadow */}
      <div className="relative overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 bg-white/70 dark:bg-neutral-900/50 backdrop-blur shadow-subtle hover:shadow-soft transition-shadow">
        <div className="animate-[marquee_18s_linear_infinite] flex gap-8 whitespace-nowrap">
          {[...banks, ...banks].map((b, i) => (
            <div key={`${b}-${i}`} className="flex items-center gap-2 opacity-80">
              <span className="inline-block h-6 w-6 rounded bg-neutral-200 dark:bg-neutral-800" aria-hidden />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}