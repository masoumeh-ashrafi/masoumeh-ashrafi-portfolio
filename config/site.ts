export const siteConfig = {
  name: 'Masoumeh Ashrafi',
  role: 'Frontend Engineer',
  description: 'Professional Frontend Engineer specializing in React, Next.js, and high-performance web applications.',
  email: 'masoumeh.ashrafi98@gmail.com',
  url: 'https://www.masoumeh-ashrafi.ir',
  
  // Social Links - اضافه شدن لینک‌های یوتیوب و اینستاگرام
  social: {
    github: 'https://github.com/masoumeh-ashrafi',
    linkedin: 'https://www.linkedin.com/in/masoumeh-ashrafi-96250825a/',
    youtube: 'https://youtube.com/@masoumehashrafi2020',
    instagram: 'https://www.instagram.com/front_maa',
  },

  // ... بقیه‌ی آیتم‌ها بدون تغییر (navItems و metadata)
  navItems: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ],

  metadata: {
    title: {
      default: 'Masoumeh Ashrafi | Frontend Engineer',
      template: '%s | Masoumeh Ashrafi',
    },
    description: 'Explore the portfolio of Masoumeh Ashrafi, a dedicated Frontend Engineer.',
    og: {
      type: 'website',
      locale: 'en_US',
      description: 'Professional portfolio of Masoumeh Ashrafi, Frontend Engineer.',
      url: 'https://www.masoumeh-ashrafi.ir',
      images: ['/og-image.png'], 
    },
  },
} as const;
