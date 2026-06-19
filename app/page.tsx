'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

const ROLES = [
  'Frontend Engineer',
  'Programming Instructor',
  'React Specialist',
]

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
      }, 80)
    } else if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      }, 40)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Welcome to my portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          MASOUMEH ASHRAFI
        </h1>

        <div className="mb-8 h-10">
          <h2 className="text-xl text-zinc-300 md:text-3xl">
            <span>{displayText}</span>
            <span className="animate-blink ml-1 text-white">|</span>
          </h2>
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-zinc-400">
          I build modern web applications with React, Next.js and TypeScript,
          focusing on performance, accessibility and clean user experiences.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View My Work
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}