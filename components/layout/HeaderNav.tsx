'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { usePathname } from 'next/navigation'

export function HeaderNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-1">
      {siteConfig.navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={[
              'relative rounded-full px-3 py-2 text-sm font-medium transition',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
              isActive
                ? 'bg-white/10 text-white'
                : 'text-white/55 hover:bg-white/5 hover:text-white',
            ].join(' ')}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}