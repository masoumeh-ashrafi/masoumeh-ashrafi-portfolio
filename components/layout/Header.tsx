'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white/60 hover:text-white text-sm tracking-widest transition-colors">
          Portfolio.
        </Link>
        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}