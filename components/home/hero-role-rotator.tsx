'use client'

import { useEffect, useState } from 'react'

const ROLES = [
  'Frontend Engineer',
  'React Specialist',
  'Next.js Developer',
  'TypeScript Developer',
] as const

export function HeroRoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState<
    (typeof ROLES)[number] | string
  >(ROLES[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setDisplayText(ROLES[0])
      return
    }

    const currentRole = ROLES[roleIndex]

    const timeoutId = window.setTimeout(
      () => {
        if (!isDeleting && displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
          return
        }

        if (!isDeleting && displayText === currentRole) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
          return
        }

        setIsDeleting(false)
        setRoleIndex(currentIndex => (currentIndex + 1) % ROLES.length)
      },
      isDeleting ? 35 : 70,
    )

    return () => window.clearTimeout(timeoutId)
  }, [displayText, isDeleting, roleIndex])

  return (
    <p className='mt-5 min-h-8 text-lg font-medium text-violet-200 sm:text-xl'>
      <span className='sr-only'>
        Frontend Engineer, React Specialist, Next.js Developer, TypeScript
        Developer
      </span>

      <span aria-hidden='true'>
        {displayText}
        <span className='ml-1 [color:#05050a]'>|</span>
      </span>
    </p>
  )
}
