import { useEffect, useState } from 'react'

export default function ServiceCard({ title, description, Illustration, cta, imageUrl, imageHeight }) {
  const [loaded, setLoaded] = useState(false)

  // Simulate illustration "loading"
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/80 dark:bg-neutral-900/50 backdrop-blur shadow-subtle hover:shadow-elevated transition">
      <div className={`${imageHeight ?? 'h-40'} mb-4`}>
        {!loaded ? (
          <div className="skeleton h-full w-full" />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${title} image`}
                loading="lazy"
                className="h-full w-full object-cover object-top rounded-md border border-neutral-200 dark:border-neutral-800 shadow-subtle"
              />
            ) : (
              Illustration && <Illustration className="w-24 h-24 text-brand" />
            )}
          </div>
        )}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      {cta}
    </div>
  )
}