"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";

/**
 * Props for the Hero section.
 * Kept fully typed and optional with sensible defaults so the component
 * stays reusable across locales or future content sources (e.g. CMS).
 */
interface HeroProps {
  /** Full display name, rendered as the page's H1 */
  name?: string;
  /** Current role or specialization */
  role?: string;
  /** One or two sentence value proposition */
  tagline?: string;
  /** Label for the primary call-to-action */
  ctaLabel?: string;
  /** Anchor or route the call-to-action links to */
  ctaHref?: string;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.4,
    transition: { duration: 1.4, ease: "easeInOut", delay: 0.6 },
  },
};

export default function Hero({
  name = "Your Name",
  role = "Frontend Engineer",
  tagline = "I design and build fast, accessible interfaces with an eye for detail.",
  ctaLabel = "View Work",
  ctaHref = "#projects",
}: HeroProps) {
  return (
    // reducedMotion="user" automatically respects the OS-level
    // prefers-reduced-motion setting by neutralizing transform animations.
    <MotionConfig reducedMotion="user">
      <section
        aria-label="Introduction"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper px-6 sm:px-10 lg:px-20"
      >
        {/* Blueprint grid backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E4E7EC 1px, transparent 1px), linear-gradient(to bottom, #E4E7EC 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Left margin rule, like a drafting sheet border */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-line sm:left-10 sm:block lg:left-20"
        />

        {/* Compass mark — the signature element, drawn on load */}
        <svg
          aria-hidden="true"
          viewBox="0 0 160 160"
          className="pointer-events-none absolute right-6 top-10 hidden h-32 w-32 sm:block lg:right-16 lg:top-16 lg:h-40 lg:w-40"
        >
          <motion.circle
            cx="80"
            cy="80"
            r="58"
            fill="none"
            stroke="#3454D1"
            strokeWidth="1"
            initial="hidden"
            animate="visible"
            variants={draw}
          />
          <motion.line
            x1="80"
            y1="14"
            x2="80"
            y2="146"
            stroke="#3454D1"
            strokeWidth="1"
            initial="hidden"
            animate="visible"
            variants={draw}
          />
          <motion.line
            x1="14"
            y1="80"
            x2="146"
            y2="80"
            stroke="#3454D1"
            strokeWidth="1"
            initial="hidden"
            animate="visible"
            variants={draw}
          />
        </svg>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative z-10 max-w-2xl sm:pl-10 lg:pl-20"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            FIG. 01 — Introduction
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-8xl"
          >
            {name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 font-mono text-sm uppercase tracking-[0.15em] text-accent"
          >
            {role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              {ctaLabel}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        <span
          aria-hidden="true"
          className="absolute bottom-8 right-6 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60 sm:right-10 sm:block lg:right-20"
        >
          Scale 1:1
        </span>
      </section>
    </MotionConfig>
  );
}
