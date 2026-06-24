import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Detailed frontend case studies by Masoumeh Ashrafi, covering product thinking, architecture, performance, accessibility, and implementation decisions.',
}

export default function CaseStudiesPage() {
  const caseStudyProjects = projects.filter(project => project.caseStudyUrl)

  return (
    <main className='min-h-screen bg-background text-foreground'>
      <section className='relative isolate overflow-hidden px-6 pb-24 pt-42 sm:pb-28 sm:pt-36 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mx-auto max-w-6xl'>
          <div className='max-w-3xl'>
            <p className='text-sm font-medium text-white/45'>Case Studies</p>

            <h1 className='mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Project breakdowns focused on architecture and product decisions.
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg'>
              These case studies explain the problem, solution, technical
              decisions, trade-offs, and frontend architecture behind selected
              projects.
            </p>
          </div>

          <div className='mt-14 grid gap-6 md:grid-cols-2'>
            {caseStudyProjects.map(project => (
              <article
                key={project.id}
                className='rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/20 hover:bg-white/[0.055]'
              >
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/55'>
                    {project.category}
                  </span>

                  <span className='text-xs text-white/35'>{project.year}</span>
                </div>

                <h2 className='mt-6 text-2xl font-semibold tracking-tight text-white'>
                  {project.title}
                </h2>

                <p className='mt-4 text-sm leading-7 text-white/62'>
                  {project.problem}
                </p>

                <div className='mt-7'>
                  <Link
                    href={project.caseStudyUrl!}
                    className='inline-flex items-center justify-center rounded-xl  px-4 py-2.5 text-sm font-semibold !text-black transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Read case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
