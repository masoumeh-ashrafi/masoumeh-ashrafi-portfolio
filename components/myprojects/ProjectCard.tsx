'use client'

import Image from 'next/image'
import { Project } from '@/data/projects'
import makeupImg from '/images/makeup-portfolio.png'
import { motion } from 'framer-motion'
import razySoftImg from '/images/razy-soft.png'

// ایمپورت مستقیم تامنیل‌های جدید پپیتویی

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
  // انتخاب تصویر بر اساس پروژه
  const backgroundImage = project.id === 'razy-soft' ? razySoftImg : makeupImg

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      className='group relative cursor-pointer bg-[#1A022E] rounded-[40px] p-8 border-2 border-purple-500/10 hover:border-[#E0AAFF]/50 shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[380px] overflow-hidden'
    >
      {/* لایه تصویر پس‌زمینه (مدل پپیتو: Multi-Layout) */}
      <div className='absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-110 z-0'>
        <Image
          src={backgroundImage}
          alt={project.title}
          fill
          className='object-cover object-center'
          sizes='(max-w-1024px) 100vw, 50vw'
          priority
        />

        {/* گرادیانت هوشمند برای خوانایی متن روی تصاویر شلوغ پپیتویی */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#140226] via-[#140226]/60 to-[#140226]/20 z-10' />

        {/* درخشش نئونی یاسی در لبه‌ها هنگام هاور */}
        <div className='absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#C77DFF]/50 transition-all duration-500 rounded-[40px] z-20' />
      </div>

      {/* محتوای متنی - با افکت شیشه‌ای (Glassmorphism) برای جلوگیری از تداخل با عکس شلوغ پشت */}
      <div className='relative z-30'>
        <h3 className='text-2xl md:text-3xl font-black tracking-tight text-white mb-3 group-hover:text-[#E0AAFF] transition-colors duration-300 drop-shadow-2xl'>
          {project.title}
        </h3>
        <div className='inline-block bg-[#240643]/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xl'>
          <p className='text-purple-100 text-sm md:text-base leading-relaxed line-clamp-2 font-medium'>
            {project.description}
          </p>
        </div>
      </div>

      {/* بخش پایین کارت: تکنولوژی‌ها و دکمه */}
      <div className='relative z-30 mt-auto'>
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.techStack.slice(0, 3).map(tech => (
            <span
              key={tech}
              className='text-[10px] px-3 py-1 bg-white/10 text-white border border-white/10 rounded-full font-bold backdrop-blur-md'
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className='text-[10px] px-2 py-1 bg-[#C77DFF]/20 text-[#E0AAFF] rounded-full font-bold'>
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className='flex items-center gap-3 text-[#E0AAFF] group-hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 pt-4 border-t border-white/10'>
          <span className='drop-shadow-lg'>View Architecture</span>
          <div className='w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#8A5CF5] transition-all duration-500'>
            <svg
              className='w-4 h-4 transform group-hover:translate-x-0.5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
