import { Award, GraduationCap } from 'lucide-react'
import { certification, education } from '../data/education'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

export function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32" aria-labelledby="education-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic background"
            subtitle="Computer Science foundation from Anna University-affiliated engineering program."
          />
        </ScrollReveal>

        <div className="mt-16 space-y-6">
          {education.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <article className="flex gap-4 rounded-xl border border-border bg-surface/50 p-6 light:border-gray-200 light:bg-white sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white light:text-gray-900">{item.degree}</h3>
                    <p className="text-sm text-muted light:text-gray-500">
                      {item.institution}
                      {item.affiliation && ` · ${item.affiliation}`}
                    </p>
                    <time className="mt-1 block font-mono text-xs text-muted">{item.period}</time>
                  </div>
                </div>
                <div className="shrink-0 text-right sm:ml-4">
                  <p className="text-2xl font-bold text-accent">{item.score}</p>
                  <p className="text-xs text-muted">{item.scoreLabel}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
              Certification
            </h3>
            <article className="flex items-center gap-4 rounded-xl border border-accent/20 bg-accent/5 p-6 light:border-accent/30 light:bg-accent/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Award className="h-5 w-5 text-accent-light" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-white light:text-gray-900">
                  {certification.title}
                </h4>
                <p className="text-sm text-muted light:text-gray-600">{certification.issuer}</p>
              </div>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
