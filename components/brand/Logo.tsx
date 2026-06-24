import Link from 'next/link'

interface LogoProps {
  showText?: boolean
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group inline-flex items-center gap-3"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg shadow-black/20 transition group-hover:border-white/20 group-hover:bg-white/[0.07]">
        <span className="text-sm font-semibold tracking-tight text-white">
          MA
        </span>

         
      </span>

      {showText ? (
        <span className="hidden leading-none sm:block">
          <span className="block text-sm font-semibold tracking-tight text-white">
            Masoumeh Ashrafi
          </span>
          <span className="mt-1 block text-xs font-medium text-white/45">
            Frontend Engineer
          </span>
        </span>
      ) : null}
    </Link>
  )
}