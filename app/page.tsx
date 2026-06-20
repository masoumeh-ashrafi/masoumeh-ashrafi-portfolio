'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const ROLES = [
  'Frontend Engineer',
  'Programming Instructor',
  'React Specialist',
]

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, 80)
    } else if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      }, 40)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2D0B5A] px-6 py-12 md:py-20">
      {/* هاله و گرادینت‌های نوری ملایم پس‌زمینه به سبک پپیتو */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#8A5CF5] opacity-25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#FFD3E8] opacity-20 blur-[100px] rounded-full pointer-events-none" />

      {/* شبکه خطوط بک‌گراند */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <section className="relative z-10 mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ستون متن‌ها و معرفی (چپ‌چین به سبک بین‌المللی) */}
        <div className="flex flex-col space-y-6 text-center md:text-left order-2 md:order-1">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFD3E8] font-bold">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            MASOUMEH ASHRAFI
          </h1>

          {/* افکت تایپینگ بدون حذف هیچ آیتمی */}
          <div className="h-10">
            <h2 className="text-xl text-purple-200 md:text-3xl font-bold">
              <span>{displayText}</span>
              <span className="animate-pulse ml-1 text-[#FFD3E8]">|</span>
            </h2>
          </div>

          <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            I build modern web applications with React, Next.js and TypeScript,
            focusing on performance, accessibility and clean user experiences.
          </p>

          {/* دکمه‌های اکشن با لبه‌های گردِ پپیتویی و رنگ‌های یاسی-صورتی */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-8 py-3.5 bg-[#8A5CF5] hover:bg-[#7646e3] text-white font-bold rounded-2xl text-center shadow-lg shadow-[#8A5CF5]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl text-center border border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* ستون تصویر شما با قاب منحصربه‌فرد و متحرک یاسی-صورتی */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">
            
            {/* لایه رنگی متحرک و نامتقارنِ پشت عکس */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A5CF5] to-[#FFD3E8] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-80 blur-sm" />
            
            {/* قاب اصلی شیشه‌ای برای قرارگیری عکس شما */}
            <div className="absolute inset-3 bg-[#1E0044]/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
              <Image
                src="/my-avatar.jpg" // عکس خودت رو با این نام در پوشه public بذار
                alt="Masoumeh Ashrafi"
                fill
                priority
                className="object-cover object-center p-2 rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}