import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Masoumeh Ashrafi for frontend engineering projects, React and Next.js development, performance optimization, SEO-ready interfaces, and scalable UI architecture.',
}

const projectTypes = [
  'React / Next.js frontend development',
  'Performance and Core Web Vitals optimization',
  'SEO-ready marketing or portfolio websites',
  'UI architecture and design system implementation',
]

const messageChecklist = [
  'Project type and main goal',
  'Current website or product link, if available',
  'Expected timeline',
  'Budget range, if already defined',
]

const emailHref = `mailto:${siteConfig.email}?subject=Frontend%20Project%20Inquiry&body=Hi%20Masoumeh,%0D%0A%0D%0AI%27m%20reaching%20out%20about%20a%20frontend%20project.%0D%0A%0D%0AProject%20type:%0D%0AGoal:%0D%0ATimeline:%0D%0ABudget%20range:%0D%0AWebsite/product%20link:%0D%0A%0D%0AThanks.`

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <section className='relative isolate overflow-hidden px-6 pb-24 pt-32 sm:pb-28 sm:pt-36 lg:px-8'>
        <div className='absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
          <div>
            <p className='text-sm font-medium text-white/45'>Contact</p>

            <h1 className='mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]'>
              Have a frontend project that needs clean execution?
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg'>
              I work on React and Next.js projects that need fast interfaces,
              scalable frontend architecture, accessible UI, and SEO-aware
              implementation.
            </p>

           <div className="mt-9 flex flex-col gap-3 sm:flex-row">
  <a
    href={emailHref}
    style={{ color: '#05050a' }}
    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    Start by email
  </a>

  <a
    href={siteConfig.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    LinkedIn
  </a>

  <a
    href={siteConfig.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    GitHub
  </a>
</div>
          </div>

          <aside className='rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8'>
            <h2 className='text-xl font-semibold text-white'>
              Good fit projects
            </h2>

            <ul className='mt-5 grid gap-3'>
              {projectTypes.map(item => (
                <li
                  key={item}
                  className='rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white/62'
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className='mt-8 border-t border-white/10 pt-8'>
              <h2 className='text-xl font-semibold text-white'>
                What to include
              </h2>

              <ul className='mt-5 grid gap-3'>
                {messageChecklist.map(item => (
                  <li
                    key={item}
                    className='flex gap-3 text-sm leading-6 text-white/62'
                  >
                    <span className='text-white/30'>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-8 border-t border-white/10 pt-8'>
              <h2 className='text-xl font-semibold text-white'>
                Response expectation
              </h2>

              <p className='mt-4 text-sm leading-7 text-white/62'>
                I usually respond within 24–48 hours with a short follow-up
                about scope, timeline, and the next practical step.
              </p>
            </div>

            <div className='mt-8 rounded-2xl border border-white/10 bg-black/20 p-4'>
              <p className='text-sm leading-6 text-white/55'>
                Preferred contact:
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className='mt-2 inline-flex text-sm font-semibold text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
              >
                {siteConfig.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
