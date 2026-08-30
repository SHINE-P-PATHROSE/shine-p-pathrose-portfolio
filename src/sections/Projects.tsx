import { useState } from 'react'
import { featuredProjects } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Full Stack', 'Business Apps', 'Frontend', 'Automation']
  const visibleProjects = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter((project) => project.filterTags.includes(activeFilter))

  return (
    <section id="projects" className="py-24 sm:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Featured work"
            subtitle="Curated projects showcasing full-stack development, REST APIs and business application engineering."
          />
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === filter
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-muted hover:border-accent/50 hover:text-accent-light light:border-gray-300 light:text-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured={index < 3}
            />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-12 text-center text-muted" role="status">
            No featured projects match this filter.
          </p>
        )}
      </div>
    </section>
  )
}
