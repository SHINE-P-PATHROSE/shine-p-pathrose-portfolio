import { Bot, LoaderCircle, Send, Sparkles, User } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SectionHeading } from './SectionHeading'
import { ScrollReveal } from './ScrollReveal'
import { experience } from '../data/experience'
import { featuredProjects } from '../data/projects'
import { skillCategories } from '../data/skills'

interface Message {
  role: 'assistant' | 'user'
  content: string
}

function getOfflineAnswer(question: string): string {
  const normalized = question.toLowerCase()
  const djangoProjects = featuredProjects
    .filter((project) => project.technologies.some((technology) => technology.toLowerCase().includes('django')))
    .map((project) => project.title)
    .join(', ')
  const coreSkills = skillCategories
    .flatMap((category) => category.skills.filter((skill) => skill.proficiency === 'core').map((skill) => skill.name))
    .filter((skill, index, all) => all.indexOf(skill) === index)
    .slice(0, 8)
    .join(', ')
  const isro = experience.find((item) => item.company.includes('ISRO'))

  if (normalized.includes('django')) {
    return `Shine's Django projects include ${djangoProjects}. The portfolio highlights authentication, CRUD workflows, REST APIs, dashboards and database-backed features.`
  }
  if (normalized.includes('isro') || normalized.includes('satellite')) {
    return isro
      ? `At ${isro.company}, Shine worked as a ${isro.role}. Key work included FastAPI services, authentication, role-based access control, project navigation, document management and Python automation.`
      : 'The portfolio does not include detailed ISRO information.'
  }
  if (normalized.includes('skill') || normalized.includes('technology') || normalized.includes('stack')) {
    return `Core strengths include ${coreSkills}. The main focus is Python full-stack development with Django, FastAPI, REST APIs and database-driven applications.`
  }
  if (normalized.includes('project') || normalized.includes('work')) {
    return `The portfolio features ${featuredProjects.length} projects across e-commerce, HR workflows, internal tools, job applications, leave management and responsive corporate websites.`
  }
  return 'Live AI is unavailable, but you can ask about projects, Django, ISRO experience, skills or the technical stack.'
}

const suggestions = [
  'What Django projects has Shine built?',
  'Summarize Shine\'s ISRO experience.',
  'Which skills are core strengths?',
]

export function PortfolioAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Ask me about Shine\'s projects, experience, skills, or technical background.',
    },
  ])
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const askQuestion = async (event: FormEvent) => {
    event.preventDefault()
    const trimmed = question.trim()
    if (!trimmed || loading) return

    setMessages((current) => [...current, { role: 'user', content: trimmed }])
    setQuestion('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      })
      const raw = await response.text()
      let data: { answer?: string; error?: string } = {}

      if (raw.trim()) {
        try {
          data = JSON.parse(raw) as { answer?: string; error?: string }
        } catch {
          throw new Error('The assistant returned an invalid response. Please try again after deployment.')
        }
      }

      if (!response.ok || !data.answer) throw new Error(data.error || 'Assistant unavailable')
      setMessages((current) => [...current, { role: 'assistant', content: data.answer! }])
    } catch (caught) {
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: getOfflineAnswer(trimmed) },
      ])
      setError(caught instanceof Error ? `${caught.message} Showing offline portfolio information.` : 'Live AI is unavailable. Showing offline portfolio information.')
    } finally {
      setLoading(false)
    }
  }

  const handleSuggestion = (suggestion: string) => {
    setQuestion(suggestion)
  }

  return (
    <section id="assistant" className="py-24 sm:py-32" aria-labelledby="assistant-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="assistant-heading"
            eyebrow="AI Assistant"
            title="Ask about my work"
            subtitle="A focused portfolio assistant grounded in the projects, skills and experience shown on this site."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface light:border-gray-200 light:bg-white">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4 light:border-gray-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-white light:text-gray-900">Portfolio assistant</p>
                <p className="text-xs text-muted">Ask a concise question about Shine's background</p>
              </div>
            </div>

            <div className="max-h-96 space-y-4 overflow-y-auto p-5" aria-live="polite">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && <Bot className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />}
                  <p className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${message.role === 'user' ? 'bg-accent text-white' : 'bg-charcoal text-muted light:bg-gray-100 light:text-gray-700'}`}>
                    {message.content}
                  </p>
                  {message.role === 'user' && <User className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />}
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-3 text-sm text-muted" role="status">
                  <Bot className="h-4 w-4 text-accent" aria-hidden="true" />
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Thinking...
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border px-5 py-4 light:border-gray-200">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSuggestion(suggestion)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent-light light:border-gray-300 light:text-gray-600"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={askQuestion} className="flex gap-2 border-t border-border p-5 light:border-gray-200">
              <label htmlFor="assistant-question" className="sr-only">Ask about Shine's work</label>
              <input
                id="assistant-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                maxLength={500}
                placeholder="Ask about projects, skills, or experience..."
                className="min-w-0 flex-1 rounded-lg border border-border bg-charcoal px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted/60 focus:border-accent light:border-gray-300 light:bg-gray-50 light:text-gray-900"
              />
              <button type="submit" disabled={loading || !question.trim()} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-50" aria-label="Ask assistant">
                <Send className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Ask</span>
              </button>
            </form>
            {error && <p className="px-5 pb-5 text-sm text-red-400" role="alert">{error}</p>}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
