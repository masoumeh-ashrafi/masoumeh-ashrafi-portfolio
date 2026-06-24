import Image from 'next/image'
import type { Metadata } from 'next'
import TerminalBio from '@/components/ui/TerminalBio'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Masoumeh Ashrafi, a frontend engineer focused on React, Next.js, TypeScript, performance, accessibility, SEO, and scalable UI architecture.',
}

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'App Router',
  'Performance',
  'Accessibility',
  'SEO',
  'UI Architecture',
]

const principles = [
  {
    title: 'Performance-first execution',
    description:
      'I structure interfaces with fast rendering, minimal client-side JavaScript, optimized images, and clean component boundaries.',
  },
  {
    title: 'Product-aware frontend',
    description:
      'I do not treat UI as decoration. I connect interface decisions to clarity, trust, conversion, and maintainability.',
  },
  {
    title: 'Scalable architecture',
    description:
      'I prefer predictable folders, typed data models, reusable UI patterns, and feature boundaries that can grow with the product.',
  },
]

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <section className='relative isolate overflow-hidden px-6 pb-24 pt-42 sm:pb-28 sm:pt-36 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]'>
          <div>
            <p className='text-sm font-medium text-white/45'>About Masoumeh</p>

            <h1 className='mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]'>
              I build frontend systems that are fast, clear, and maintainable.
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg'>
              I am a frontend engineer focused on React, Next.js, TypeScript,
              and scalable UI architecture. My work combines clean
              implementation, performance discipline, accessible interfaces, and
              product-level thinking.
            </p>

            <p className='mt-5 max-w-2xl text-base leading-8 text-white/56'>
              I care about how interfaces behave under real product constraints:
              responsive layouts, SEO requirements, reusable components,
              internationalization, maintainable styling, and clear user flows.
            </p>

            <div className='mt-9 flex flex-wrap gap-2'>
              {skills.map(skill => (
                <span
                  key={skill}
                  className='rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-[500px]'>
            <div className='absolute inset-0 -z-10 rounded-[2rem] bg-accent/15 blur-3xl' />

            <div className='relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30'>
              <div className='relative h-full overflow-hidden rounded-[1.5rem]'>
                <Image
                  src='/images/me-at-work.jpg'
                  alt='Masoumeh Ashrafi working on frontend interface architecture'
                  fill
                  priority
                  sizes='(min-width: 1024px) 500px, (min-width: 640px) 80vw, 100vw'
                  className='object-cover'
                />

                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6'>
                  <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/60">
  Frontend Engineer · React · Next.js · TypeScript
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 pb-24 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-6 md:grid-cols-3'>
            {principles.map(principle => (
              <article
                key={principle.title}
                className='rounded-3xl border border-white/10 bg-white/[0.035] p-6'
              >
                <h2 className='text-lg font-semibold text-white'>
                  {principle.title}
                </h2>

                <p className='mt-4 text-sm leading-7 text-white/58'>
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 pb-24 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-8 flex items-center gap-4'>
            <div className='h-px flex-1 bg-white/10' />

            <h2 className='text-xs font-semibold uppercase tracking-[0.24em] text-white/35'>
              Technical Profile
            </h2>

            <div className='h-px flex-1 bg-white/10' />
          </div>

          <TerminalBio />
        </div>
      </section>
    </main>
  )
}
