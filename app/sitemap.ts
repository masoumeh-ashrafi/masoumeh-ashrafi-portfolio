import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/projects', '/case-studies', '/contact']

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const caseStudyUrls = projects
    .filter((project) => project.caseStudyUrl)
    .map((project) => ({
      url: `${siteConfig.url}${project.caseStudyUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))

  return [...staticUrls, ...caseStudyUrls]
}