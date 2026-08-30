import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../data/projects'
import { Button } from './Button'
import { GitHubIcon } from './icons'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ProjectCardProps {
  project: Project
  index: number
  featured?: boolean
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const reduced = useReducedMotion()
  const [imageFailed, setImageFailed] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 light:border-gray-200 light:bg-white ${
        featured ? 'lg:grid lg:grid-cols-2 lg:gap-0' : ''
      }`}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: reduced ? 0 : index * 0.08 }}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-charcoal light:bg-gray-100 ${
          featured ? 'aspect-video lg:aspect-auto lg:min-h-[320px]' : 'aspect-video'
        }`}
      >
        {imageFailed ? (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-charcoal via-surface to-accent/20 p-6 text-center light:from-gray-100 light:via-white light:to-indigo-50">
            <span className="font-mono text-sm text-muted light:text-gray-600">
              {project.title} preview unavailable
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              featured ? 'object-cover lg:object-contain' : 'object-cover'
            }`}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/65 via-transparent to-transparent light:from-gray-900/25" />
        <span className="absolute top-4 left-4 font-mono text-xs text-accent-light">
          PROJECT {num}
        </span>
      </div>

      <div className={`flex flex-col p-6 sm:p-8 ${featured ? 'justify-center' : ''}`}>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-white light:text-gray-900">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted light:text-gray-600">
          {project.description}
        </p>

        {project.caseStudy && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent/80">
            Business Application Case Study
          </p>
        )}

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, featured ? 5 : 3).map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted light:text-gray-500"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted light:border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
