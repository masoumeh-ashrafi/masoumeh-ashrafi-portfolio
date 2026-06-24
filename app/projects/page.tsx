import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected frontend projects by Masoumeh Ashrafi, focused on React, Next.js, TypeScript, performance, accessibility, SEO, and scalable UI architecture.',
}

export default function ProjectsPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <section className='relative isolate overflow-hidden px-6 pb-24 pt-42 sm:pb-28 sm:pt-36 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mx-auto max-w-6xl'>
          <div className='max-w-3xl'>
            <p className='text-sm font-medium text-white/45'>Selected Work</p>

            <h1 className='mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Frontend projects built with product thinking and clean
              architecture.
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg'>
              A curated set of projects focused on scalable UI systems,
              performance, accessibility, SEO, and maintainable frontend
              architecture.
            </p>
          </div>

          <div className='mt-14 grid gap-6 md:grid-cols-2'>
            {projects.map(project => (
              <article
                key={project.id}
                className='group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/20 hover:bg-white/[0.055]'
              >
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/55'>
                    {project.category}
                  </span>

                  <span className='text-xs text-white/35'>{project.year}</span>
                </div>

                <div className='mt-6'>
                  <h2 className='text-2xl font-semibold tracking-tight text-white'>
                    {project.title}
                  </h2>

                  <p className='mt-2 text-sm font-medium text-white/40'>
                    {project.role}
                  </p>

                  <p className='mt-5 text-sm leading-7 text-white/62'>
                    {project.summary}
                  </p>
                </div>

                <div className='mt-7 grid gap-3'>
                  {project.highlights.slice(0, 3).map(highlight => (
                    <div
                      key={highlight}
                      className='rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/58'
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className='mt-7 flex flex-wrap gap-2'>
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className='rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/55'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='mt-auto flex flex-wrap gap-3 pt-8'>
                  {project.caseStudyUrl ? (
                    <Link
                      href={project.caseStudyUrl}
                      className='inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                    >
                      Read case study
                    </Link>
                  ) : null}

                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Live demo
                  </a>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white/55 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                    >
                      Source code
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
