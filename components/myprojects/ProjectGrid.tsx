'use client'

import { AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '@/data/projects'
import { useState } from 'react'

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      {/* گرید پروژه‌ها با افزایش فاصله (gap) به سبک پپیتو برای خلوت‌تر شدن دیزاین */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-10 pb-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
            index={index}
          />
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  )
}