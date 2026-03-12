import { motion } from 'framer-motion'

const team = [
  {
    name: 'Oluwatoba Oyewale',
    role: 'Executive Director',
    imageUrl: 'https://i.ibb.co/zVGpjZVR/Oluwatoba-Oyewale-Executive-Director.jpg?q=80&w=200&h=200&fit=crop'
  },
  {
    name: 'Morenike Oladele',
    role: 'Finance Head',
    imageUrl: 'https://i.ibb.co/2174MG2n/Morenike-Oladele-Finance-Head.jpg?q=80&w=200&h=200&fit=crop'
  },
  {
    name: 'Dorathy Edet',
    role: 'Regional Manger Lagos and SW',
    imageUrl: 'https://i.ibb.co/VYRNBZsc/Dorathy-Edet-Regional-Manager-Lagos-SW.jpg?q=80&w=200&h=200&fit=crop'
  },
  {
    name: 'Akinwunmi Akinsuroju',
    role: 'GM Operational Standardization Quality Management',
    imageUrl: 'https://i.ibb.co/wr47g0w6/Akinwunmi-Akinsuroju-GM-Operational-Standardization-Quality-Management.jpg?q=80&w=200&h=200&fit=crop'
  }
]

export default function Management() {
  return (
    <div className="px-2 md:px-4 py-10">
      <h1 className="text-3xl font-bold">Our Leadership</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Meet the experienced team driving our mission to set and maintain the standard for security in Africa.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5 text-center"
          >
            <img
              src={person.imageUrl}
              alt={`Photo of ${person.name}`}
              className="h-24 w-24 rounded-full object-cover mx-auto border-2 border-brand/50 shadow-soft"
              loading="lazy"
            />
            <h3 className="mt-4 font-semibold">{person.name}</h3>
            <p className="mt-1 text-sm text-brand">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
