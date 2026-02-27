export default function About() {
  return (
    <div className="px-2 md:px-4 py-10">
      <h1 className="text-3xl font-bold">About Fort Knox Guards</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        We mitigate risk through intelligence-led operations. Our teams leverage SOPs, site audits,
        and continuous improvement to deliver measurable outcomes — not just presence. Fort Knox Guards is a security service company established and licensed to render professional security and
        community relations services. The company’s director and management are made up of experienced individuals with
        military backgrounds, paramilitary training, and corporate executives with high levels of integrity and moral standing.
        We help you improve and reduce crime risk on your location(s) through a complete security program that protects
        your key assets: your people and property. More than two decades in the industry give us the power to perform every day and every time.
      </p>
      

      {/* Visual */}
      <div className="mt-8 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
        <img
          src="https://i.ibb.co/Fq8vbZY2/DSC1463.jpg"
          alt="Security operations and monitoring"
          loading="lazy"
          className="h-[28rem] md:h-[34rem] w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  )
}
