import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { hero, profile } from '../data/profile'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Button } from '../components/Button'
import { GitHubIcon } from '../components/icons'
import { ScrollReveal } from '../components/ScrollReveal'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        {!reduced && (
          <motion.div
            className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-violet-600/5 blur-[80px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
            {hero.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{hero.headline}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted light:text-gray-600">
            {hero.subtext}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-2">
            {hero.techChips.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted light:border-gray-200 light:bg-gray-100 light:text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href={profile.resumePath} download variant="secondary" size="lg">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
            <Button
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm light:border-gray-200 light:bg-white">
            <span className="h-2 w-2 rounded-full bg-muted" aria-hidden="true" />
            <span className="text-muted light:text-gray-600">
              Currently working at{' '}
              <span className="font-medium text-white light:text-gray-900">
                Baehal Software Limited
              </span>
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted light:text-gray-500">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profile.location}
          </div>
        </ScrollReveal>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted light:text-gray-400"
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  )
}
