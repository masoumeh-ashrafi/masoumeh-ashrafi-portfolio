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
      color: 'border-[#8A5CF5]',
    },
    {
      title: 'Backend',
      items: project.architecture.backend,
      color: 'border-[#FFD3E8]',
    },
    {
      title: 'Auth',
      items: project.architecture.auth,
      color: 'border-purple-400',
    },
    {
      title: 'Database',
      items: project.architecture.database,
      color: 'border-indigo-400',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E0044]/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#2D0B5A] border border-purple-500/20 p-8 md:p-10 rounded-[32px] shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* دکمه بستن (X) با هاور یاسی زنده */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-purple-200/40 hover:text-[#8A5CF5] transition-colors duration-300"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>

        {/* هدر پروژه */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-purple-200/70 text-base mt-3 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
            {project.href && project.href !== '#' && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center self-start gap-2 bg-[#8A5CF5] hover:bg-[#7646e3] text-white font-bold text-sm px-5 py-2.5 rounded-2xl shadow-lg shadow-[#8A5CF5]/20 transition-all duration-300"
              >
                <span>Live Demo</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"/>
                  <path d="M10 14 21 3"/>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg>
              </a>
            )}
          </div>
          
          {/* تک‌استک با رنگ‌های پاستلی */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 bg-[#1E0044]/60 text-[#FFD3E8] border border-purple-500/20 rounded-xl font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* دیاگرام معماری */}
        <div className="border-t border-purple-500/20 pt-6">
          <h3 className="text-xs font-bold tracking-widest text-[#FFD3E8] uppercase mb-6">
            Architecture Overview
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {architectureLayers.map(layer => (
              <div
                key={layer.title}
                className={`border-l-4 ${layer.color} pl-4 py-1 bg-[#1E0044]/30 rounded-r-2xl pr-4 py-3 border-purple-500/10 border`}
              >
                <h4 className="text-xs font-black uppercase tracking-wider text-[#8A5CF5] mb-2">
                  {layer.title}
                </h4>
                <ul className="space-y-1.5">
                  {layer.items.map(item => (
                    <li
                      key={item}
                      className="text-sm text-purple-100 flex items-start gap-2"
                    >
                      <span className="text-[#FFD3E8]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ویژگی‌های کلیدی */}
          {project.architecture.features && (
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <h4 className="text-xs font-bold tracking-widest text-[#FFD3E8] uppercase mb-4">
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.architecture.features.map(feature => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 bg-white/5 text-purple-200 rounded-xl border border-white/5"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* فوتر مودال */}
        <div className="mt-8 pt-4 border-t border-purple-500/20 flex justify-end">
          <button
            onClick={onClose}
            className="text-xs text-purple-200/40 hover:text-[#FFD3E8] transition-colors duration-300"
          >
            Press ESC to close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}