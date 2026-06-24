import Link from 'next/link'
import type { Metadata } from 'next'
import { caseStudyJsonLd } from '@/lib/seo'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

interface CaseStudyPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return projects
    .filter(project => project.caseStudyUrl)
    .map(project => ({
      id: project.id,
    }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { id } = await params
  const project = projects.find(item => item.id === id)

  if (!project) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params
  const project = projects.find(item => item.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className='min-h-screen bg-background text-foreground'>
      <article className='relative isolate overflow-hidden px-6 pb-24 pt-42 sm:pb-28 sm:pt-36 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mx-auto max-w-4xl'>
          <Link
            href='/case-studies'
            className='text-sm font-medium text-white/45 transition hover:text-white'
          >
            ← Back to case studies
          </Link>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <span className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/55'>
              {project.category}
            </span>

            <span className='text-xs text-white/35'>{project.year}</span>
          </div>

          <h1 className='mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]'>
            {project.title}
          </h1>

          <p className='mt-6 text-lg leading-8 text-white/64'>
            {project.summary}
          </p>

          <div className='mt-10 flex flex-wrap gap-3'>
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Live demo
            </a>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.07]'
              >
                Source code
              </a>
            ) : null}
          </div>

          <div className='mt-14 grid gap-6'>
            <section className='rounded-3xl border border-white/10 bg-white/[0.035] p-6'>
              <h2 className='text-xl font-semibold text-white'>Problem</h2>
              <p className='mt-4 text-sm leading-7 text-white/62'>
                {project.problem}
              </p>
            </section>

            <section className='rounded-3xl border border-white/10 bg-white/[0.035] p-6'>
              <h2 className='text-xl font-semibold text-white'>Solution</h2>
              <p className='mt-4 text-sm leading-7 text-white/62'>
                {project.solution}
              </p>
            </section>

            <section className='rounded-3xl border border-white/10 bg-white/[0.035] p-6'>
              <h2 className='text-xl font-semibold text-white'>Impact</h2>
              <p className='mt-4 text-sm leading-7 text-white/62'>
                {project.impact}
              </p>
            </section>

            <section className='rounded-3xl border border-white/10 bg-white/[0.035] p-6'>
              <h2 className='text-xl font-semibold text-white'>
                Technical Architecture
              </h2>

              <div className='mt-6 grid gap-5 sm:grid-cols-2'>
                {Object.entries(project.architecture).map(([title, items]) => (
                  <div key={title}>
                    <h3 className='text-sm font-semibold capitalize text-white/80'>
                      {title}
                    </h3>

                    <ul className='mt-3 grid gap-2'>
                      {items?.map(item => (
                        <li
                          key={item}
                          className='text-sm leading-6 text-white/58'
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
