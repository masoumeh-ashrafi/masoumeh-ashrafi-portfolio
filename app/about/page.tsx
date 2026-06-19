// app/about/page.tsx

import TerminalBio from '@/components/TerminalBio'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">
          About
        </h1>
        
        {/* ترمینال بیو - کامپوننت اصلی */}
        <TerminalBio />
        
        {/* بخش مهارت‌ها با تگ‌های مینیمال */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-xl font-light tracking-wide mb-6 text-white/70">
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'React', 
              'Next.js', 
              'TypeScript', 
              'Tailwind CSS', 
              'Node.js', 
              'GraphQL', 
              'Framer Motion', 
              'Prisma'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border border-white/10 text-white/60 hover:border-white/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}