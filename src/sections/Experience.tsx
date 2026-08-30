import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Professional journey"
            subtitle="Building real applications across internships, technical support and engineering roles."
          />
        </ScrollReveal>

        <div className="relative mt-16">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-8 lg:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <article className="relative lg:pl-20">
                  <div className="absolute left-0 top-1 hidden lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-surface light:bg-white">
                      <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/20 hover:bg-surface light:border-gray-200 light:bg-white sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white light:text-gray-900">
                          {item.role}
                        </h3>
                        <p className="text-accent-light">{item.company}</p>
                      </div>
                      <time className="shrink-0 font-mono text-sm text-muted">{item.period}</time>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted light:text-gray-600"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
