// components/myprojects/ProjectModal.tsx
'use client'

import { Project } from '@/data/projects'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // جلوگیری از اسکرول هنگام باز بودن مودال
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // بستن با کلید Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const architectureLayers = [
    {
      title: 'Frontend',
      items: project.architecture.frontend,
      color: 'border-blue-500/30',
    },
    {
      title: 'Backend',
      items: project.architecture.backend,
      color: 'border-emerald-500/30',
    },
    {
      title: 'Auth',
      items: project.architecture.auth,
      color: 'border-purple-500/30',
    },
    {
      title: 'Database',
      items: project.architecture.database,
      color: 'border-amber-500/30',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 p-8 md:p-10 rounded-sm'
        onClick={e => e.stopPropagation()}
      >
        {/* دکمه بستن (X) جایگزین شده با SVG مستقیم */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors'
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>

        {/* هدر پروژه */}
        <div className='mb-8'>
          <div className='flex items-start justify-between'>
            <div>
              <h2 className='text-3xl md:text-4xl font-light tracking-tight text-white'>
                {project.title}
              </h2>
              <p className='text-gray-400 text-base mt-2 max-w-2xl'>
                {project.description}
              </p>
            </div>
            {project.href && project.href !== '#' && (
              <a
                href={project.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm border border-white/10 px-4 py-2'
              >
                <span>Live Demo</span>
                {/* آیکون لینک خارجی جایگزین شده با SVG مستقیم */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"/>
                  <path d="M10 14 21 3"/>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg>
              </a>
            )}
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            {project.techStack.map(tech => (
              <span
                key={tech}
                className='text-xs px-3 py-1 border border-white/10 text-gray-400'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* دیاگرام معماری */}
        <div className='border-t border-white/5 pt-6'>
          <h3 className='text-sm font-light tracking-wider text-white/40 uppercase mb-4'>
            Architecture Overview
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {architectureLayers.map(layer => (
              <div
                key={layer.title}
                className={`border-l-2 ${layer.color} pl-4 py-1`}
              >
                <h4 className='text-xs uppercase tracking-wider text-white/30 mb-2'>
                  {layer.title}
                </h4>
                <ul className='space-y-1'>
                  {layer.items.map(item => (
                    <li
                      key={item}
                      className='text-sm text-white/70 flex items-start gap-2'
                    >
                      <span className='text-white/20'>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ویژگی‌های کلیدی */}
          {project.architecture.features && (
            <div className='mt-6 pt-6 border-t border-white/5'>
              <h4 className='text-xs uppercase tracking-wider text-white/30 mb-3'>
                Key Features
              </h4>
              <div className='flex flex-wrap gap-2'>
                {project.architecture.features.map(feature => (
                  <span
                    key={feature}
                    className='text-xs px-3 py-1 border border-white/5 text-white/40'
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* فوتر مودال */}
        <div className='mt-6 pt-4 border-t border-white/5 flex justify-end'>
          <button
            onClick={onClose}
            className='text-xs text-white/30 hover:text-white/60 transition-colors'
          >
            Press ESC to close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}