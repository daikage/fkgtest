import PageBox from '../components/PageBox.jsx'
export default function About() {
  return (
  <>
    <div className="px-2 md:px-4 py-10">
      <h1 className="text-3xl font-bold">About Fort Knox Guards</h1>
      {/* Wrapped the About text in a card */}
      <div className="mt-4 max-w-8xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6">
        <div className="text-justify leading-relaxed md:leading-7 space-y-3 text-neutral-700 dark:text-neutral-300">
          <p>
            We mitigate risk through intelligence-led operations. Our teams leverage SOPs, site audits,
            and continuous improvement to deliver measurable outcomes — not just presence.
          </p>
          <p>
            Fort Knox Guards is a security service company established and licensed to render professional security and
            community relations services. The company’s director and management are made up of experienced individuals with
            military backgrounds, paramilitary training, and corporate executives with high levels of integrity and moral standing.
          </p>
        </div>
      </div>

      {/* ADDED: Vision, Mission, Strategy, Values as cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5">
          <h3 className="font-semibold text-lg">Our Vision</h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            To set and maintain the standard for securing people and assets in Africa.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5">
          <h3 className="font-semibold text-lg">Our Mission</h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            We help you improve and reduce crime risk on your location(s) through a complete security program that protects
            your key assets: your people and property.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5 sm:col-span-2">
          <h3 className="font-semibold text-lg">Our Strategy</h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Striving towards our vision to set security standards, we employ the strong technical know-how of our unique
            workforce which collectively spans over 95 years of global experience. We also leverage on our global partners in
            providing e-security solutions to meet emerging security threats in Nigeria today.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5 sm:col-span-2">
          <h3 className="font-semibold text-lg">Our Values</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-medium">Trust in God:</span> Belief in the Almighty in all we do.
            </li>
            <li>
              <span className="font-medium">Integrity:</span> Matching our actions with our commitments.
            </li>
            <li>
              <span className="font-medium">Professionalism:</span> Constantly and actively improving on our services and the way we work.
            </li>
            <li>
              <span className="font-medium">Excellence:</span> Commitment to quality and service superiority.
            </li>
            <li>
              <span className="font-medium">Value for Money</span>
            </li>
            <li>
              <span className="font-medium">Respect for People</span>
            </li>
          </ul>
        </div>
      </div>

      {/* About page visual */}
      <div className="mt-8 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
        <img
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80"
          alt="Security operations and monitoring"
          loading="lazy"
          className="h-[28rem] md:h-[34rem] w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  </>
  )
}
