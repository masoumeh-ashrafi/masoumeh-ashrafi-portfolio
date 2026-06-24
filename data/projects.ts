// data/projects.ts

export type ProjectCategory =
  | 'B2B System'
  | 'E-commerce'
  | 'Portfolio'
  | 'UI System'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  year: string
  role: string
  summary: string
  problem: string
  solution: string
  impact: string
  techStack: string[]
  liveUrl: string
  githubUrl?: string
  caseStudyUrl?: string
  highlights: string[]
  architecture: {
    frontend: string[]
    rendering: string[]
    data?: string[]
    auth?: string[]
    integrations?: string[]
    performance: string[]
  }
}

export const projects: Project[] = [
  {
    id: 'razy',
    title: 'Razy B2B Platform',
    category: 'B2B System',
    year: '2025',
    role: 'Frontend / Full-stack Developer',
    summary:
      'A scalable product-management and commerce platform built with Next.js, TypeScript, Prisma, authentication workflows, and payment integration.',
    problem:
      'The project required a structured web application capable of handling authenticated user flows, product management, payment-related workflows, and maintainable frontend architecture.',
    solution:
      'I built the application with a modular Next.js architecture, typed data models, protected routes, reusable UI patterns, and integration-ready backend workflows.',
    impact:
      'Created a production-oriented foundation for a business platform with clearer user flows, scalable routing, and maintainable feature boundaries.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'NextAuth',
      'Stripe',
    ],
    liveUrl:
      'https://razyar-project-5idj-b92b20t6c-masoumeh-ashrafis-projects.vercel.app/',
    caseStudyUrl: '/case-studies/razy',
    highlights: [
      'Protected dashboard architecture',
      'Product and subscription workflows',
      'Typed database layer with Prisma',
      'Payment integration structure',
      'Scalable App Router organization',
    ],
    architecture: {
      frontend: [
        'Next.js App Router',
        'React components',
        'TypeScript domain types',
        'Tailwind CSS design system',
      ],
      rendering: [
        'Server-rendered routes',
        'Client components only where interactivity is required',
      ],
      data: ['Prisma ORM', 'PostgreSQL data model', 'Typed server operations'],
      auth: ['NextAuth.js', 'JWT/session handling', 'Protected routes'],
      integrations: ['Stripe payments', 'Stripe webhook structure'],
      performance: [
        'Route-level code splitting',
        'Optimized component boundaries',
        'Reusable layout structure',
      ],
    },
  },
  {
    id: 'fateme-darvishi',
    title: 'Permanent Makeup Portfolio',
    category: 'Portfolio',
    year: '2025',
    role: 'Frontend Developer',
    summary:
      'A responsive portfolio and visual gallery website for a beauty/personal-brand business, focused on presentation quality, mobile UX, and fast static delivery.',
    problem:
      'The client-facing website needed to present services and visual work clearly while maintaining a premium visual style and smooth browsing experience on mobile devices.',
    solution:
      'I designed and implemented a static, responsive Next.js website with optimized visual sections, reusable layout components, and a focused gallery experience.',
    impact:
      'Improved the presentation of the personal brand through a more polished interface, clearer service structure, and faster access to visual portfolio content.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Canvas API'],
    liveUrl: 'https://permanent-makeup-portfolio-nextjs.vercel.app/',
    caseStudyUrl: '/case-studies/fateme-darvishi',
    highlights: [
      'Responsive portfolio layout',
      'Gallery-focused user experience',
      'Premium dark visual direction',
      'Static performance-oriented structure',
      'Reusable UI sections',
    ],
    architecture: {
      frontend: [
        'Next.js App Router',
        'TypeScript components',
        'Tailwind CSS utility system',
        'Custom visual sections',
      ],
      rendering: ['Static page rendering', 'Public marketing pages'],
      performance: [
        'Optimized static delivery',
        'Image-conscious layout structure',
        'Minimal client-side JavaScript',
      ],
    },
  },
]