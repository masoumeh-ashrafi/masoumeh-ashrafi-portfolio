'use client'

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1A022E] text-white px-6 py-32 md:px-12 lg:px-24 relative overflow-hidden flex flex-col items-center justify-center">
      
      <div className="max-w-3xl w-full relative z-10">
        {/* تیتر با فضای بازتر */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-20 text-center"
        >
          Contact <span className="text-[#FFB7D5]">Me</span>
        </motion.h1>

        {/* کانتینر اصلی با Padding بیشتر برای تنفس */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl"
        >
          {/* متن توضیحی با فاصله استاندارد از سایر بخش‌ها */}
          <p className="text-purple-100/70 text-xl text-center mb-16 font-medium leading-relaxed max-w-lg mx-auto">
            همیشه آماده صحبت درباره ایده‌های نو و پروژه‌های چالش‌برانگیز هستم.
          </p>

          {/* افزایش گپ بین دکمه‌ها برای جلوگیری از چسبندگی */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            
            {[
              { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com/masoumeh-ashrafi' },
              { icon: <FaLinkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/masoumeh-ashrafi-96250825a/' },
              { icon: <FaEnvelope />, name: 'Email', link: 'mailto:masoumeh.ashrafi98@gmail.com' }
            ].map((item, index) => (
              <motion.a 
                key={index}
                whileHover={{ y: -8, backgroundColor: 'rgba(199, 125, 255, 0.15)' }}
                href={item.link}
                target="_blank"
                className="flex items-center justify-center gap-4 px-10 py-5 border border-white/10 rounded-full text-white/80 hover:text-white transition-all duration-300 min-w-[160px]"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-lg">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}