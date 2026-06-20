'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const ROLES = [
  'Frontend Engineer',
  'React Specialist',
  'Next.js Developer',
  'TypeScript Developer',
]

const STACK_ITEMS = ['React', 'Next.js', 'TypeScript', 'SEO', 'Performance', 'RTL/i18n']

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, 70)
    } else if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1400)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      }, 35)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#12071f] px-6 py-10 text-white md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,92,245,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,183,213,0.18),transparent_32%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ffd3e8] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#ffb7d5] shadow-[0_0_18px_rgba(255,183,213,0.9)]" />
            Available for freelance frontend projects
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Masoumeh
            <span className="block bg-gradient-to-r from-[#c77dff] via-[#ffd3e8] to-white bg-clip-text text-transparent">
              Ashrafi
            </span>
          </h1>

          <div className="mt-6 flex h-12 items-center justify-center md:justify-start">
            <h2 className="text-2xl font800 text-purple-100 md:text-3xl">
              <span>{displayText}</span>
              <span className="ml-1 animate-pulse text-[#ffb7d5]">|</span>
            </h2>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            I build fast, accessible, and SEO-friendly web applications with
            <span className="font-semibold text-white"> React, Next.js, and TypeScript</span>,
            focused on clean UI, web performance, and RTL/i18n user experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {STACK_ITEMS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/projects"
              className="rounded-2xl bg-[#8a5cf5] px-8 py-4 text-center font-bold text-white shadow-[0_18px_45px_rgba(138,92,245,0.35)] transition hover:-translate-y-0.5 hover:bg-[#7646e3]"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              Contact Me
            </Link>

            <a
              href="https://github.com/masoumeh-ashrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-[290px] sm:w-[380px] md:w-[460px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-[#8a5cf5]/40 via-[#ffb7d5]/20 to-white/10 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#1e0044]">
                <Image
                  src="/images/my-avatar.jpg"
                  alt="Masoumeh Ashrafi"
                  fill
                  priority
                  sizes="(max-width: 768px) 290px, 460px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-[#1a082d]/85 p-4 text-center shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-bold text-white">React · Next.js · TypeScript</p>
                <p className="mt-1 text-xs text-white/55">SEO-focused frontend development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}