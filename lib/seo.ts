import type { Project } from '@/data/projects'
import { siteConfig } from '@/config/site'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Frontend Engineering',
      'Web Performance',
      'Search Engine Optimization',
      'Accessibility',
      'UI Architecture',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function caseStudyJsonLd(project: Project) {
  const pageUrl = `${siteConfig.url}${project.caseStudyUrl}`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${project.title} Case Study`,
      url: pageUrl,
      description: project.summary,
      author: {
        '@type': 'Person',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Case Studies',
            item: `${siteConfig.url}/case-studies`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
    },
  ]
}