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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D0B5A]/60 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* لوگو یا عنوان سایت با هاور یاسی زنده */}
        <Link 
          href="/" 
          className="text-white/80 hover:text-[#8A5CF5] text-base font-black tracking-widest transition-colors duration-300"
        >
          Portfolio.
        </Link>
        
        {/* منوی ناوبری با افکت اکتیو یاسی-بنفش شاداب */}
        <nav className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-300 relative py-1 ${
                  isActive 
                    ? 'text-[#8A5CF5]' 
                    : 'text-purple-200/60 hover:text-white'
                }`}
              >
                {link.name}
                
                {/* یک خط متحرک و ظریفِ زیر لینک فعال به سبک پپیتو */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8A5CF5] to-[#FFD3E8] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}