import { Code2, Database, Layers, Zap } from 'lucide-react'
import { about, profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

const buildIcons = [Layers, Database, Zap, Code2]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Engineering identity"
            subtitle="Backend-oriented full-stack development with a focus on practical, production-ready applications."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted light:text-gray-600">{about.intro}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="mt-10 mb-4 text-sm font-semibold uppercase tracking-wider text-white light:text-gray-900">
                Engineering principles
              </h3>
              <ul className="space-y-3">
                {about.principles.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted light:text-gray-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h3 className="mt-10 mb-6 text-sm font-semibold uppercase tracking-wider text-white light:text-gray-900">
                What I build
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {about.whatIBuild.map(({ title, description }, i) => {
                  const Icon = buildIcons[i]
                  return (
                    <div
                      key={i}
                      className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 light:border-gray-200 light:bg-white"
                    >
                      <Icon
                        className="mb-3 h-5 w-5 text-accent transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <h4 className="font-medium text-white light:text-gray-900">{title}</h4>
                      <p className="mt-1 text-sm text-muted light:text-gray-500">{description}</p>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="sticky top-28 rounded-2xl border border-border bg-surface p-6 light:border-gray-200 light:bg-white">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 font-mono text-2xl font-bold text-accent">
                  SP
                </div>
                <h3 className="text-xl font-semibold text-white light:text-gray-900">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm text-accent-light">{profile.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted light:text-gray-500">
                  {profile.tagline}
                </p>

                <div className="mt-6 border-t border-border pt-6 light:border-gray-200">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                    Core strengths
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {about.strengths.slice(0, 8).map((s, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-charcoal px-2.5 py-1 text-xs text-muted light:bg-gray-100 light:text-gray-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
