'use client' // حتماً این خط در بالاترین قسمت فایل باشد

import Image from 'next/image'
import TerminalBio from '@/components/TerminalBio'
import { motion } from 'framer-motion'

// واریانت‌های انیمیشن برای مهارت‌ها
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1A022E] text-white px-6 py-24 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* هاله‌های نوری پس‌زمینه */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#7B2CBF] opacity-20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#FFB7D5] opacity-10 blur-[130px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* بخش Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-[#FFB7D5] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
              The Mind Behind the Code
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#FFB7D5]">
                Engineer.
              </span>
            </h1>
            <p className="text-purple-100/70 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
              من معتقدم کدنویسی فقط حل مسئله نیست، بلکه خلق یک تجربه بصری بی‌نقص است. 
              ترکیب معماری دقیق فرانت‌اند با دیزاین مدرن، تخصص من است.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7B2CBF] to-[#FFB7D5] rounded-[40px] opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700" />
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-[500px] mx-auto rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src="/images/me-at-work.jpg" 
                alt="Me at work"
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px]">
                <p className="text-white font-bold text-sm tracking-widest uppercase">
                  Currently Designing the Future
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* بخش ترمینال بیو */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent to-white/10"></div>
             <h2 className="text-xl font-black uppercase tracking-[0.2em] text-[#C77DFF]">Detailed Bio</h2>
             <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent to-white/10"></div>
          </div>
          <TerminalBio />
        </section>

        {/* بخش مهارت‌ها با انیمیشن */}
        <section className="border-t border-white/5 pt-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black mb-10 text-center lg:text-left"
          >
            Core <span className="text-[#FFB7D5]">Arsenal</span>
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {[
              'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
              'Node.js', 'GraphQL', 'Framer Motion', 'Prisma', 'UI/UX Design'
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(199, 125, 255, 0.2)',
                  boxShadow: '0 0 25px rgba(199, 125, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-sm font-bold bg-white/5 border border-white/10 text-purple-100 rounded-full hover:border-[#C77DFF]/50 hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  )
}