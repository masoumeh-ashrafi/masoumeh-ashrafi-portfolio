'use client'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Razyar Invoice',
    desc: 'Invoice management interface focused on clean UI, responsive layout, authentication, structured financial workflows, and scalable frontend architecture.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    image: '/images/razy-soft.png',
    demo: '',
    github: 'https://github.com/masoumeh-ashrafi/razyar-project',
    status: 'Case study in progress',
    category: 'Full-stack Frontend',
    highlights: ['Authentication', 'Financial Workflow', 'Dashboard UI'],
  },
  {
    title: 'Permanent Makeup Portfolio',
    desc: 'A premium responsive portfolio website for a beauty and permanent makeup business, focused on gallery presentation, clean UI, and conversion-oriented structure.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/makeup-portfolio.png',
    demo: '',
    github:
      'https://github.com/masoumeh-ashrafi/permanent-makeup-portfolio-nextjs',
    status: 'Live-style portfolio',
    category: 'Business Portfolio',
    highlights: ['Responsive UI', 'Gallery Layout', 'Business Branding'],
  },
 {
  title: 'RTL Pepito Theme',
  desc: 'RTL landing page/theme inspired by the Pepito design system, focused on responsive UI, right-to-left layout, accessibility, and SEO-friendly structure for Persian and Arabic user experiences.',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'RTL', 'SEO'],
  image: '/images/pepito-cover.png',
  demo: 'https://preview.themeforest.net/item/pepito-pet-care-veterinary-template/full_screen_preview/56370391',
  github: 'https://github.com/masoumeh-ashrafi/rtl-pepito-theme',
  status: 'Live preview available',
  category: 'RTL / SEO UI',
  highlights: ['RTL Layout', 'Responsive UI', 'Pepito-inspired Design'],
},
  {
    title: 'Fateme Darvishi Website',
    desc: 'Personal portfolio and business website for a beauty service brand, focused on visual presentation, service structure, and simple user navigation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    demo: '',
    github: 'https://github.com/masoumeh-ashrafi/fatemedarvishi-website',
    status: 'Legacy frontend project',
    category: 'Static Website',
    highlights: ['Business Website', 'Service Pages', 'Visual Layout'],
  },
  {
    title: 'Modern Login Form',
    desc: 'A clean login form interface built with HTML, CSS, and JavaScript, focused on layout, form styling, and frontend fundamentals.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    demo: '',
    github: 'https://github.com/masoumeh-ashrafi/-modern-login-form',
    status: 'UI component',
    category: 'Frontend UI',
    highlights: ['Form UI', 'CSS Styling', 'JavaScript Basics'],
  },
]

export default function ProjectsPage() {
  return (
<main className="relative min-h-screen overflow-hidden bg-[#FFF7EF] px-5 pb-28 pt-32 text-[#1F1646] sm:px-6 md:px-10 lg:px-12">      {/* Pepito-inspired soft background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-[#79D6CF]/30 blur-[140px]" />
        <div className="absolute -bottom-32 -left-24 h-[560px] w-[560px] rounded-full bg-[#FFB7C8]/35 blur-[150px]" />
        <div className="absolute left-[20%] top-[18%] h-[260px] w-[260px] rounded-full bg-[#F7D3FF]/35 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF9FB2]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <section className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex rounded-full border border-[#FFD8E3] bg-white/80 px-6 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#D86F8A] shadow-sm backdrop-blur-sm"
          >
            Featured Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl font-black tracking-[-0.06em] text-[#1F1646] sm:text-6xl md:text-8xl"
          >
            Selected{' '}
            <span className="bg-gradient-to-r from-[#7E4CC2] via-[#FF8A7A] to-[#FFB7C8] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6F6385] md:text-lg"
          >
            A curated collection of frontend projects focused on React, Next.js,
            TypeScript, SEO, performance, accessibility, and RTL/i18n user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              'React',
              'Next.js',
              'TypeScript',
              'SEO',
              'Performance',
              'RTL/i18n',
            ].map(item => (
              <span
                key={item}
                className="rounded-full border border-[#F3D9E3] bg-white/80 px-4 py-2 text-sm font-bold text-[#7E4CC2] shadow-sm backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </section>

        {/* Project Grid */}
<section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08 }}
className="group relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-[34px] border border-[#F3D9E3] bg-white/95 p-5 shadow-[0_24px_70px_rgba(126,76,194,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#FFB7C8] hover:shadow-[0_28px_80px_rgba(240,155,176,0.24)]"            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#E9FAFA]/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                {/* Image / Placeholder */}
<div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[26px] border border-[#F3D9E3] bg-[#FFF4F7]">                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FFE6EF] via-[#E9FAFA] to-[#F5E9FF]">
                      <div className="px-6 text-center">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D86F8A]">
                          Frontend Project
                        </p>
                        <h3 className="mt-4 text-2xl font-black leading-tight text-[#1F1646]">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-xs font-semibold text-[#6F6385]">
                          UI · Responsive · Frontend
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#7E4CC2] shadow-sm backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Status */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#F3D9E3] bg-[#FFF4F7] px-4 py-1.5 text-xs font-bold text-[#D86F8A]">
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h2 className="mb-4 text-2xl font-black tracking-tight text-[#1F1646] md:text-3xl">
                  {project.title}
                </h2>

                <p className="mb-6 text-sm leading-7 text-[#6F6385] md:text-base">
                  {project.desc}
                </p>

                {/* Highlights */}
<div className="mb-6 grid grid-cols-1 gap-2.5">
                    {project.highlights.map(item => (
                    <div
                      key={item}
className="rounded-2xl border border-[#F3D9E3] bg-[#FFF8F5] px-4 py-2.5 text-sm font-semibold text-[#6F6385]"                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="mb-7 flex flex-wrap gap-2.5">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="rounded-full border border-[#F3D9E3] bg-[#FFF4F7] px-3.5 py-1.5 text-xs font-bold text-[#7E4CC2]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#7E4CC2] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(126,76,194,0.22)] transition hover:bg-[#6B3DB0]"
                    >
                      Live Demo <FaExternalLinkAlt />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-[#F3D9E3] bg-[#FFF4F7] px-5 py-3 text-sm font-bold text-[#1F1646] transition hover:bg-[#FFE6EF] hover:text-[#D86F8A]"
                    >
                      View Repository <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  )
}