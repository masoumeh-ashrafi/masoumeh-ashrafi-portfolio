// app/projects/page.tsx

import { Metadata } from 'next'
import ProjectGrid from '@/components/myprojects/ProjectGrid'

export const metadata: Metadata = {
  title: 'Projects | Frontend Engineer & Instructor',
  description: 'A showcase of projects with interactive architecture exploration.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">
          Projects
        </h1>
        <ProjectGrid />
      </div>
    </main>
  )
}