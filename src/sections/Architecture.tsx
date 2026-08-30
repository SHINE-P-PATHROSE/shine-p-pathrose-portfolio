import { ChevronDown } from 'lucide-react'
import { architectureLayers } from '../data/skills'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { motion } from 'framer-motion'

export function Architecture() {
  const reduced = useReducedMotion()

  return (
    <section id="architecture" className="py-24 sm:py-32" aria-labelledby="architecture-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="architecture-heading"
            eyebrow="Stack"
            title="Engineering capabilities"
            subtitle="How I architect and build full-stack web applications."
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 flex max-w-md flex-col items-center">
          {architectureLayers.map((layer, index) => (
            <ScrollReveal key={layer.label} delay={index * 0.12}>
              <div className="flex w-full flex-col items-center">
                <motion.div
                  className="w-full rounded-xl border border-border bg-surface px-6 py-5 text-center light:border-gray-200 light:bg-white"
                  whileHover={reduced ? {} : { scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {layer.label}
                  </p>
                  <p className="mt-2 text-sm text-white light:text-gray-800">
                    {layer.items.join(' / ')}
                  </p>
                </motion.div>
                {index < architectureLayers.length - 1 && (
                  <ChevronDown
                    className="my-2 h-5 w-5 text-accent/50"
                    aria-hidden="true"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
