import ServiceGrid from '../components/ServiceGrid.jsx'

export default function Services() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Advanced guard operations, rapid response, and asset protection tailored to your environment.
        </p>
      </div>
      <ServiceGrid onCTAClick={() => {}} />
    </>
  )
}