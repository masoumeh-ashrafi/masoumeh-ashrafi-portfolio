import { HeaderNav } from '@/components/layout/HeaderNav'
import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />

        <div className="flex items-center gap-4">
          <HeaderNav />

          <Link
            href="/contact"
            className="hidden rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold !text-[#05050a] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  )
}