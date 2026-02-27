import ServiceGrid from '../components/ServiceGrid.jsx'

export default function Services() {
  return (
    <>
      <div className="px-2 md:px-4 py-10">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Fort Knox Guards delivers tailored, intelligence-led security solutions across Nigeria.
        </p>
        {/* ... detailed services ... */}
      </div>
      <ServiceGrid onCTAClick={() => {}} />
    </>
  )
}