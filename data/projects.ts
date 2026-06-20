// data/projects.ts

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  href: string
  architecture: {
    frontend: string[]
    backend: string[]
    auth: string[]
    database: string[]
    features: string[]
  }
}

export const projects: Project[] = [
  {
    id: 'razy-soft',
    title: 'Razy Soft',
    description: 'Full-stack e-commerce platform with authentication and subscription system built for streamlined product management.',
    techStack: ['Next.js', 'Tailwind CSS', 'Prisma', 'Stripe', 'NextAuth'],
    href: 'https://razysoft.com',
    architecture: {
      frontend: ['Next.js (App Router)', 'Tailwind CSS', 'React Query', 'Framer Motion'],
      backend: ['Next.js API Routes', 'Prisma ORM', 'PostgreSQL', 'Stripe Webhooks'],
      auth: ['NextAuth.js', 'JWT', 'Route Middleware', 'Protected Routes'],
      database: ['PostgreSQL', 'Prisma Client', 'Optimized Queries', 'Migrations'],
      features: ['Product Management', 'Subscription System', 'Payment Processing', 'Dashboard Analytics'],
    },
  },
  {
    id: 'fateme-darvishi',
    title: 'Permanent Makeup & Portfolio',
    description: 'A premium, fully responsive portfolio and gallery showcase developed with high-performance metrics and pixel-perfect design.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Canvas API'],
    href: 'https://permanent-makeup-portfolio-nextjs.vercel.app/',
    architecture: {
      frontend: ['Next.js (App Router)', 'Tailwind CSS', 'TypeScript', 'Custom Canvas Layouts'],
      backend: ['Static Site Generation (SSG)', 'Optimized Images', 'Edge Runtime'],
      auth: ['Public Portfolio Structure', 'Secure Client-side Routing'],
      database: ['Optimized Assets Configuration', 'JSON Schema Structure'],
      features: ['Interactive Gallery', 'Responsive Typography', 'Premium Dark/Purple Aesthetics', 'SEO Optimized'],
    },
  },
]