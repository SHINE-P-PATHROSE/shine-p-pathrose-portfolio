import { featuredProjects } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'

export function Projects() {
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

        <div className="mt-16 space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
