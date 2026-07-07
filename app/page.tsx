import { personJsonLd, websiteJsonLd } from '@/lib/seo'

import { HeroRoleRotator } from '@/components/home/hero-role-rotator'
import Image from 'next/image'
import InstagramGallery from '@/components/instagram/InstagramGallery';
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Engineer for Fast, Accessible Web Interfaces',
  description:
    'Masoumeh Ashrafi is a frontend engineer building fast, accessible, SEO-ready web interfaces with React, Next.js, TypeScript, and scalable UI architecture.',
  alternates: {
    canonical: '/',
  },
}

const highlights = [
  'Performance-first interfaces',
  'SEO-ready Next.js architecture',
  'Accessible and RTL/i18n-aware UI',
]

export default function HomePage() {
  const jsonLd = [personJsonLd(), websiteJsonLd()]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 sm:pb-28 sm:pt-36 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-1/2 top-[-240px] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/60">
              Frontend Engineer · React · Next.js · TypeScript
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              I build fast, accessible, and conversion-focused web interfaces.
            </h1>

            <HeroRoleRotator />

            <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              I help businesses turn complex product ideas into scalable
              frontend systems using React, Next.js, TypeScript, and clean UI
              architecture.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/case-studies"
                style={{ color: '#05050a' }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View case studies
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start a project
              </Link>

              <a
                href="https://github.com/masoumeh-ashrafi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
              <Image
                src="/images/my-avatar.jpg"
                alt="Masoumeh Ashrafi, frontend engineer"
                width={840}
                height={840}
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 300px"
                className="aspect-square rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section - اضافه شده توسط منتور */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <h2 className="mb-8 text-2xl font-semibold text-white">Latest from Instagram</h2>
        <InstagramGallery />
      </section>

    </main>
  )
}
