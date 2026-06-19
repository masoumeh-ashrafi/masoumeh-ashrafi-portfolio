// components/myprojects/ProjectCard.tsx
'use client'

import { Project } from '@/data/projects'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  index: number
}

export default function ProjectCard({
  project,
  onClick,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={onClick}
      className='group border border-white/10 hover:border-white/30 transition-colors duration-300 p-6 cursor-pointer bg-black/30 hover:bg-black/50'
    >
      <h3 className='text-xl font-light tracking-wide mb-2 group-hover:text-white/90 transition-colors'>
        {project.title}
      </h3>
      <p className='text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2'>
        {project.description}
      </p>
      <div className='flex flex-wrap gap-2'>
        {project.techStack.slice(0, 4).map(tech => (
          <span
            key={tech}
            className='text-xs px-3 py-1 border border-white/10 text-gray-500 group-hover:border-white/20 transition-colors'
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className='text-xs px-3 py-1 text-gray-500'>
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
      <div className='mt-4 text-white/20 text-xs uppercase tracking-wider group-hover:text-white/40 transition-colors'>
        Click to explore architecture →
      </div>
    </motion.div>
  )
}
