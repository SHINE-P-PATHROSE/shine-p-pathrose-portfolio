import { useEffect, useState } from 'react'
import { moreProjectSlugs, staticRepoMeta } from '../data/projects'
import { profile } from '../data/profile'

export interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  stack: string
  liveUrl?: string
  image?: string
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
        )
        if (!res.ok) throw new Error('Failed to fetch repositories')

        const data = await res.json()
        if (cancelled) return

        const filtered = (data as Array<{
          name: string
          description: string | null
          html_url: string
          homepage: string | null
          language: string | null
          stargazers_count: number
          forks_count: number
          updated_at: string
        }>)
          .filter((r) => moreProjectSlugs.includes(r.name as (typeof moreProjectSlugs)[number]))
          .map((r) => {
            const meta = staticRepoMeta[r.name]
            return {
              ...r,
              description: r.description || meta?.description || '',
              stack: meta?.stack || r.language || '—',
              liveUrl: r.homepage || meta?.liveUrl || undefined,
              image: meta?.image,
            }
          })

        setRepos(filtered)
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Unknown error')
          setRepos(
            moreProjectSlugs.map((name) => ({
              name,
              description: staticRepoMeta[name]?.description ?? '',
              html_url: `https://github.com/${profile.githubUsername}/${name}`,
              homepage: staticRepoMeta[name]?.liveUrl ?? null,
              language: null,
              stargazers_count: 0,
              forks_count: 0,
              updated_at: '',
              stack: staticRepoMeta[name]?.stack ?? '—',
              liveUrl: staticRepoMeta[name]?.liveUrl,
              image: staticRepoMeta[name]?.image,
            })),
          )
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchRepos()
    return () => {
      cancelled = true
    }
  }, [])

  return { repos, loading, error }
}

export function useAllGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
        )
        if (!res.ok) throw new Error('Failed to fetch repositories')

        const data = await res.json()
        if (cancelled) return

        setRepos(
          (data as GitHubRepo[]).filter(
            (r) => r.name !== 'SHINE-P-PATHROSE' && r.name !== 'Portfolio',
          ),
        )
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Unknown error')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchRepos()
    return () => {
      cancelled = true
    }
  }, [])

  return { repos, loading, error }
}
