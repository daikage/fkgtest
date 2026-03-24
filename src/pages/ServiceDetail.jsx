import { useMemo, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services.js'
import ImageModal from '../components/ImageModal.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = useMemo(() => services.find(s => s.slug === slug), [slug])
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (src) => setSelectedImage(src)
  const closeModal = () => setSelectedImage(null)

  // Ensure we don't land near the footer; scroll to top on route change
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'smooth' })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [slug])

  if (!service) {
    return (
      <div className="px-2 md:px-4 py-10">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6 text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">The service you’re looking for doesn’t exist.</p>
          <Link to="/#services" className="mt-4 inline-block btn-outline rounded-xl">Back to Services</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="px-2 md:px-4 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <p className="text-sm text-neutral-700 dark:text-neutral-400">{service.shortDescription}</p>
        </div>

        {/* Hero image */}
        {service.images?.[0] && (
          <div
            className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur group cursor-pointer"
            onClick={() => openModal(service.images[0])}
          >
            <img
              src={service.images[0]}
              alt={`${service.title} visual`}
              loading="eager"
              className="h-[22rem] md:h-[28rem] w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        )}

        {/* Description */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6">
            <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {service.fullDescription.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6">
            <h3 className="font-semibold text-lg">Key Capabilities</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {service.features.map((f) => (<li key={f}>{f}</li>))}
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="/#services" className="btn-outline rounded-xl">Back to Services</a>
              {/* <a href="/#contact" className="btn-primary rounded-xl">Request Quote</a> */}
            </div>
          </div>
        </div>

         {/* Gallery */}
        {service.images?.length > 1 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {service.images.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 group cursor-pointer"
                  onClick={() => openModal(src)}
                >
                  <img
                    src={src}
                    alt={`${service.title} gallery ${i + 1}`}
                    loading="lazy"
                    className="h-80 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <ImageModal open={!!selectedImage} src={selectedImage} onClose={closeModal} />
    </>
  )
}