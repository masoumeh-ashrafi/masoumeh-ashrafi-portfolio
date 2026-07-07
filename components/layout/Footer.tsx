import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            className="text-sm font-semibold text-white transition hover:text-white/80"
          >
            {siteConfig.name}
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
            Frontend Engineer building fast, accessible, and SEO-ready web
            interfaces with React, Next.js, and TypeScript.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            Navigation
          </h2>

          <nav aria-label="Footer navigation" className="mt-4 grid gap-3">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/55 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            Connect
          </h2>

          <div className="mt-4 grid gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/55 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/55 transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/55 transition hover:text-white"
            >
              YouTube
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/55 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <p className="mx-auto max-w-6xl text-sm text-white/35">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and
          TypeScript.
        </p>
      </div>
    </footer>
  )
}
