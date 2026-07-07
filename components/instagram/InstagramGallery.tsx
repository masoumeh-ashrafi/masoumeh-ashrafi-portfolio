import Image from 'next/image'
import Link from 'next/link'

// داده‌ها رو بیرون از کامپوننت تعریف کردیم تا با هر بار رندر، دوباره ساخته نشن (Memory Optimization)
const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: '/images/post1.webp',
    link: 'https://www.instagram.com/reel/DGlnGo9M7B5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    title: 'عنوان پست اول',
  },
  {
    id: 2,
    image: '/images/post2.webp',
    link: 'https://www.instagram.com/reel/DIUbh-4NM8F/?utm_source=ig_web_copy_link',
    title: 'عنوان پست دوم',
  },
]

export default function InstagramGallery() {
  return (
    // اضافه کردن یک wrapper برای کنترل بهتر در ریسپانسیو
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
      {INSTAGRAM_POSTS.map(post => (
        <Link
          key={post.id}
          href={post.link}
          target='_blank'
          rel='noopener noreferrer' // حتماً این رو اضافه کن (Security Best Practice)
          className='relative block overflow-hidden rounded-xl shadow-lg group'
        >
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            // با aspect-square، جلویِ پرشِ چیدمان (CLS) رو می‌گیریم
            className='w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110'
            // برای سئو و پرفورمنس، اگه این بخش اولین چیزیه که کاربر می‌بینه، اولویت رو بالا ببر
            priority={false}
          />
          {/* یه لایه روی عکس برای زیبایی بیشتر */}
          <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </Link>
      ))}
    </div>
  )
}
