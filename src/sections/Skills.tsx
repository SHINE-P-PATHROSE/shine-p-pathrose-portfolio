import { motion } from 'framer-motion'
import {
  proficiencyLabels,
  skillCategories,
  type Proficiency,
} from '../data/skills'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { cn } from '../lib/utils'

const proficiencyStyles: Record<Proficiency, string> = {
  core: 'border-accent/40 bg-accent/10 text-accent-light',
  working: 'border-border bg-surface text-muted light:border-gray-200 light:bg-gray-50',
  learning: 'border-violet-500/30 bg-violet-500/10 text-violet-300 light:text-violet-700',
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Technical toolkit"
            subtitle="Categorized by proficiency — no inflated percentages, just honest capability levels."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.08}>
              <div className="rounded-2xl border border-border bg-surface/50 p-6 light:border-gray-200 light:bg-white">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white light:text-gray-900">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i}>
                      <motion.div
                        className="flex items-center justify-between gap-2"
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        <span className="text-sm text-muted light:text-gray-700">{skill.name}</span>
                        <span
                          className={cn(
                            'shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide',
                            proficiencyStyles[skill.proficiency],
                          )}
                        >
                          {proficiencyLabels[skill.proficiency]}
                        </span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
