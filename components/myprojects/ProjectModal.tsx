'use client'

import type { Project } from '@/data/projects'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const architectureLayers = [
    {
      title: 'Frontend',
      items: project.architecture.frontend,
    },
    {
      title: 'Rendering',
      items: project.architecture.rendering,
    },
    {
      title: 'Data',
      items: project.architecture.data,
    },
    {
      title: 'Auth',
      items: project.architecture.auth,
    },
    {
      title: 'Integrations',
      items: project.architecture.integrations,
    },
    {
      title: 'Performance',
      items: project.architecture.performance,
    },
  ].filter(
    (layer): layer is { title: string; items: string[] } =>
      Array.isArray(layer.items) && layer.items.length > 0,
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-xl"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 16 }}
        transition={{ duration: 0.18 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#08080d] p-6 shadow-2xl shadow-black/40 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-5 top-5 rounded-full p-2 text-white/45 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/55">
              {project.category}
            </span>

            <span className="text-xs text-white/35">{project.year}</span>
          </div>

          <h2
            id="project-modal-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {project.title}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
            {project.summary}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#05050a' }}
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Live demo
          </a>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Source code
            </a>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>

        <section className="mt-8 border-t border-white/10 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
            Key highlights
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white/62"
              >
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-white/10 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
            Architecture overview
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
              >
                <h4 className="text-sm font-semibold text-white">
                  {layer.title}
                </h4>

                <ul className="mt-3 grid gap-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-6 text-white/60"
                    >
                      <span className="text-white/30">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 border-t border-white/10 pt-5 text-right">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}