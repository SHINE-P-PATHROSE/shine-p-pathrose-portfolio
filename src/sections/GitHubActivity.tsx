import { GitBranch, GitFork, Star } from 'lucide-react'
import { profile } from '../data/profile'
import { useAllGitHubRepos } from '../hooks/useGitHubRepos'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'

export function GitHubActivity() {
  const { repos, loading, error } = useAllGitHubRepos()

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0)
  const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))].slice(0, 6)

  const recent = [...repos]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 5)

  return (
    <section id="github" className="py-24 sm:py-32" aria-labelledby="github-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="github-heading"
            eyebrow="Open Source"
            title="GitHub activity"
            subtitle="Real public repository data — no fabricated statistics."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-6 text-center light:border-gray-200 light:bg-white">
              <GitBranch className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
              <p className="mt-3 text-3xl font-bold text-white light:text-gray-900">
                {loading ? '—' : error ? 'Unavailable' : repos.length}
              </p>
              <p className="text-sm text-muted">Public repositories</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border bg-surface p-6 text-center light:border-gray-200 light:bg-white">
              <Star className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
              <p className="mt-3 text-3xl font-bold text-white light:text-gray-900">
                {loading ? '—' : error ? 'Unavailable' : totalStars}
              </p>
              <p className="text-sm text-muted">Total stars</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-xl border border-border bg-surface p-6 text-center light:border-gray-200 light:bg-white">
              <GitFork className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
              <p className="mt-3 text-3xl font-bold text-white light:text-gray-900">
                {loading ? '—' : error ? 'Unavailable' : totalForks}
              </p>
              <p className="text-sm text-muted">Total forks</p>
            </div>
          </ScrollReveal>
        </div>

        {error && (
          <p className="mt-8 text-center text-sm text-muted" role="alert">
            Live GitHub activity is temporarily unavailable.
          </p>
        )}

        {languages.length > 0 && (
          <ScrollReveal delay={0.25}>
            <div className="mt-8">
              <p className="mb-3 text-sm text-muted">Primary languages</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted light:border-gray-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Recently updated
            </h3>
            <ul className="space-y-3">
              {recent.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border bg-surface/50 px-4 py-3 transition-colors hover:border-accent/30 light:border-gray-200 light:bg-white"
                  >
                    <span className="font-mono text-sm text-white light:text-gray-900">
                      {repo.name}
                    </span>
                    <span className="text-xs text-muted">
                      {repo.language ?? '—'} ·{' '}
                      {new Date(repo.updated_at).toLocaleDateString('en-IN', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-accent-light hover:underline"
            >
              View all on GitHub →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
