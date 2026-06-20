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

  // منطق تایپینگ و حذف متن
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, 70) // سرعت تایپ کردن
    } else if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1500) // زمان توقف بعد از اتمام تایپ
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      }, 35) // سرعت پاک کردن
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2D0B5A] px-6 py-12 md:py-20">
      
      {/* هاله‌های نوری در پس‌زمینه */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#8A5CF5] opacity-25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#FFD3E8] opacity-20 blur-[100px] rounded-full pointer-events-none" />

      {/* شبکه خطوط ملایم پس‌زمینه */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <section className="relative z-10 mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ستون متن‌ها و معرفی */}
        <div className="flex flex-col space-y-7 text-center md:text-left order-2 md:order-1">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFD3E8] font-black">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            MASOUMEH ASHRAFI
          </h1>

          {/* افکت تایپینگ با ارتفاع ثابت */}
          <div className="h-12 flex items-center justify-center md:justify-start">
            <h2 className="text-2xl text-purple-200 md:text-3xl font-bold">
              <span>{displayText}</span>
              <span className="animate-pulse ml-1 text-[#FFD3E8]">|</span>
            </h2>
          </div>

          <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mx-auto md:mx-0 font-medium">
            من با استفاده از React، Next.js و TypeScript اپلیکیشن‌های وب مدرن می‌سازم.
            تمرکز من بر عملکرد، دسترسی‌پذیری و خلق تجربه‌های کاربری تمیز است.
          </p>

          {/* دکمه‌های اکشن */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-10 py-4 bg-[#8A5CF5] hover:bg-[#7646e3] text-white font-bold rounded-2xl text-center shadow-lg shadow-[#8A5CF5]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl text-center border border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* ستون تصویر */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]">
            
            {/* گرادینت رنگی پشت عکس */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A5CF5] to-[#FFD3E8] rounded-full opacity-60 blur-md shadow-[0_0_50px_rgba(138,92,245,0.5)]" />
            
            {/* قاب شیشه‌ای عکس */}
            <div className="absolute inset-3 bg-[#1E0044]/70 backdrop-blur-md rounded-full border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-3">
              <Image
                src="/images/my-avatar.jpg" // عکس خودت رو با این نام در پوشه public/images/ بذار
                alt="Masoumeh Ashrafi"
                width={420}
                height={420}
                priority
                className="object-cover object-center rounded-full"
              />
            </div>
          </div>
        </div>

        {/* شبکه خطوط بک‌گراند در موبایل */}
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      </section>
    </main>
  )
}