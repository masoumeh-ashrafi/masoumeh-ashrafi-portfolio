import { siteConfig } from '@/config/site'

const technicalProfile = [
  {
    command: 'whoami',
    output:
      'Frontend Engineer focused on React, Next.js, TypeScript, performance, accessibility, and scalable UI architecture.',
  },
  {
    command: 'core_stack',
    output:
      'React · Next.js App Router · TypeScript · Tailwind CSS · Server Components',
  },
  {
    command: 'focus',
    output:
      'Building fast, maintainable, SEO-ready interfaces with clear user flows and clean component boundaries.',
  },
  {
    command: 'working_style',
    output:
      'I start from product goals, define structure, build reusable UI patterns, and optimize for real users.',
  },
]

const workflow = [
  'Clarify the product goal and user journey before writing UI code.',
  'Design route structure, layout hierarchy, and reusable component boundaries.',
  'Build responsive, accessible, and performance-conscious interfaces.',
  'Optimize metadata, images, rendering strategy, and client-side JavaScript.',
  'Document technical decisions through project breakdowns and case studies.',
]

export default function TerminalBio() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#08080d] shadow-2xl shadow-black/30">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-4">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
        </div>

        <p className="font-mono text-xs text-white/35">
          technical-profile.ts
        </p>
      </div>

      <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1fr_1fr]">
        <section aria-labelledby="terminal-profile-title">
          <h3
            id="terminal-profile-title"
            className="font-mono text-xs uppercase tracking-[0.22em] text-white/35"
          >
            Profile
          </h3>

          <div className="mt-5 grid gap-4">
            {technicalProfile.map((item) => (
              <article
                key={item.command}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
              >
                <p className="font-mono text-xs text-emerald-300/60">
                  $ {item.command}
                </p>

                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="terminal-workflow-title">
          <h3
            id="terminal-workflow-title"
            className="font-mono text-xs uppercase tracking-[0.22em] text-white/35"
          >
            Working Method
          </h3>

          <ol className="mt-5 grid gap-3">
            {workflow.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
              >
                <span className="font-mono text-sm text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="text-sm leading-7 text-white/64">
                  {item}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <p className="font-mono text-xs text-white/35">
              $ contact
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-flex text-sm font-medium text-white/68 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}