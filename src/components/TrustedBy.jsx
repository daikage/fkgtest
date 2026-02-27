export default function TrustedBy() {
  // PUT YOUR LOGO FILES IN: project_root/public/logos/
  // Example files:
  // public/logos/airtel.png
  // public/logos/unionbank.png
  // public/logos/fcmb.png
  // public/logos/firstbank.png
  // public/logos/accessbank.png
  // public/logos/polaris.png
  // public/logos/ecobank.png
  // public/logos/keystone.png
  // public/logos/unitybank.png
  // public/logos/americantower.png
  // public/logos/eleganza.png
  // public/logos/sfcg.png
  // public/logos/ndwestern.png
  // public/logos/technoil.png
  // public/logos/npsc.png
  // public/logos/african-industries.png
  // public/logos/agpc.png
  // public/logos/oiltest.png
  // public/logos/spar.png
  // public/logos/cbn.png
  // public/logos/swift-oil.png
  // public/logos/altbank.png
  // public/logos/diva-cakes.png

  const logos = [
    { name: 'Airtel', src: `${import.meta.env.BASE_URL}logos/airtel.png` },
    { name: 'Union Bank', src: `${import.meta.env.BASE_URL}logos/unionbank.png` },
    { name: 'FCMB', src: `${import.meta.env.BASE_URL}logos/fcmb.png` },
    { name: 'First Bank', src: `${import.meta.env.BASE_URL}logos/firstbank.png` },
    { name: 'Access Bank', src: `${import.meta.env.BASE_URL}logos/accessbank.png` },
    { name: 'Polaris Bank', src: `${import.meta.env.BASE_URL}logos/polaris.png` },
    { name: 'EcoBank', src: `${import.meta.env.BASE_URL}logos/ecobank.png` },
    { name: 'Keystone Bank', src: `${import.meta.env.BASE_URL}logos/keystone.png` },
    { name: 'Unity Bank', src: `${import.meta.env.BASE_URL}logos/unitybank.png` },
    { name: 'American Tower', src: `${import.meta.env.BASE_URL}logos/americantower.png` },
    { name: 'Eleganza Group', src: `${import.meta.env.BASE_URL}logos/eleganza.png` },
    { name: 'SFCG', src: `${import.meta.env.BASE_URL}logos/sfcg.png` },
    { name: 'NDWestern', src: `${import.meta.env.BASE_URL}logos/ndwestern.png` },
    { name: 'Technoil', src: `${import.meta.env.BASE_URL}logos/technoil.png` },
    { name: 'NPSC', src: `${import.meta.env.BASE_URL}logos/npsc.png` },
    { name: 'African Industries', src: `${import.meta.env.BASE_URL}logos/african-industries.png` },
    { name: 'AGPC', src: `${import.meta.env.BASE_URL}logos/agpc.png` },
    { name: 'The Oiltest Group', src: `${import.meta.env.BASE_URL}logos/oiltest.png` },
    { name: 'Spar Market', src: `${import.meta.env.BASE_URL}logos/spar.png` },
    { name: 'CBN', src: `${import.meta.env.BASE_URL}logos/cbn.png` },
    { name: 'Swift Oil', src: `${import.meta.env.BASE_URL}logos/swift-oil.png` },
    { name: 'The Alternative Bank', src: `${import.meta.env.BASE_URL}logos/altbank.png` },
    { name: 'Diva Cakes', src: `${import.meta.env.BASE_URL}logos/diva-cakes.png` },
  ]

  return (
    <section className="px-2 md:px-4 py-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block h-1 w-6 rounded bg-brand" />
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
          Trusted by leading institutions
        </h3>
      </div>
      <div className="relative overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 bg-white/70 dark:bg-neutral-900/50 backdrop-blur shadow-subtle hover:shadow-soft transition-shadow">
        {/* FIX: use inline style for animation to avoid Tailwind arbitrary value issues */}
        <div style={{ animation: 'marquee 22s linear infinite' }} className="flex gap-8 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center gap-2 min-w-max">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="h-7 w-auto object-contain"
                onError={(e) => {
                  // Hide the broken image but keep the name visible
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-sm">{logo.name}</span>
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