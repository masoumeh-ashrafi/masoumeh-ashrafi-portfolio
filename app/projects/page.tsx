'use client'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Razyar Invoice',
    desc: 'Invoice management interface focused on clean UI, responsive layout, authentication, structured financial workflows, and scalable frontend architecture. Currently being improved and documented as a full frontend case study.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    image: '/images/razy-soft.png',
    demo: '',  
    github: 'https://github.com/masoumeh-ashrafi/razyar-project',
    status: 'Case study in progress',
  },
  {
    title: 'RTL Pepito Theme',
    desc: 'RTL landing page/theme focused on responsive UI, right-to-left layout, accessibility, and SEO-friendly structure for Persian and Arabic user experiences.',
    tech: ['Next.js', 'Tailwind CSS', 'RTL', 'SEO'],
    image: '/images/makeup-portfolio.png',
    demo: '',
    github: 'https://github.com/masoumeh-ashrafi/rtl-pepito-theme',
    status: 'Documented project',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#1A022E] text-white py-24 px-6 md:px-12">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#9D4EDD] opacity-10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFB7D5] opacity-5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-black tracking-[0.3em] text-[#FFB7D5] uppercase bg-white/5 px-6 py-2 rounded-full inline-block backdrop-blur-sm border border-white/10 mb-6"
          >
            Featured Works
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#FFB7D5]">
              Projects
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[40px] backdrop-blur-md group hover:border-[#C77DFF]/50 transition-all duration-500 flex flex-col"
            >
              <div className="relative w-full aspect-video rounded-[25px] overflow-hidden mb-8 border border-white/10">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 text-xs font-bold bg-[#C77DFF]/10 rounded-full text-[#FFB7D5] border border-[#C77DFF]/20">
                  {project.status}
                </span>
              </div>

              <h3 className="text-3xl font-black mb-4">{project.title}</h3>

              <p className="text-purple-100/70 mb-8 leading-relaxed flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1.5 text-xs font-bold bg-white/5 rounded-full text-[#C77DFF] border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white font-bold hover:text-[#FFB7D5] transition-colors"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white font-bold hover:text-[#FFB7D5] transition-colors"
                  >
                    View Repository <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}