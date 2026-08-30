import { Code2, ExternalLink, Star } from 'lucide-react'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { GitHubIcon } from '../components/icons'

export function MoreProjects() {
  const { repos, loading, error } = useGitHubRepos()

  return (
    <section id="more-projects" className="py-24 sm:py-32" aria-labelledby="more-projects-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="more-projects-heading"
            eyebrow="GitHub Explorer"
            title="More projects"
            subtitle="Additional repositories from open source work — metadata fetched from GitHub."
          />
        </ScrollReveal>

        {loading && (
          <p className="mt-12 text-center text-muted" role="status">
            Loading repositories…
          </p>
        )}

        {error && (
          <p className="mt-12 text-center text-sm text-muted" role="alert">
            Using cached project data. Live GitHub fetch unavailable.
          </p>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <ScrollReveal key={repo.name} delay={index * 0.05}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 light:border-gray-200 light:bg-white">
                {repo.image ? (
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-charcoal light:bg-gray-100">
                    <img
                      src={repo.image}
                      alt={`${repo.name} project preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-accent/20 bg-gradient-to-br from-charcoal via-surface to-accent/20 p-4 light:border-gray-200 light:from-gray-100 light:via-white light:to-indigo-50"
                    aria-label={`${repo.name} repository preview`}
                  >
                    <div className="flex items-center gap-1.5 border-b border-white/10 pb-3 light:border-gray-200">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="ml-2 font-mono text-[9px] text-muted">repository</span>
                    </div>
                    <div className="mt-4 space-y-2 font-mono text-[9px] text-accent-light">
                      <p><span className="text-muted">$</span> git status</p>
                      <p className="text-muted">working tree ready</p>
                      <p><span className="text-muted">$</span> stack --show</p>
                      <p className="truncate text-white light:text-gray-700">{repo.stack}</p>
                    </div>
                    <Code2 className="absolute bottom-4 right-4 h-7 w-7 text-accent/60" aria-hidden="true" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-white group-hover:text-accent-light light:text-gray-900">
                    {repo.name}
                  </h3>
                  <div className="flex shrink-0 items-center gap-2 text-xs text-muted">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted light:text-gray-500">
                  {repo.description || 'No description provided.'}
                </p>

                <p className="mt-3 font-mono text-xs text-accent/80">{repo.stack}</p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-light"
                  >
                    <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                    Code
                  </a>
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-light"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Demo
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
