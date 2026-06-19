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
    description: 'Full-stack e-commerce platform with authentication and subscription system',
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
  // می‌توانید پروژه‌های دیگر را نیز اضافه کنید
]