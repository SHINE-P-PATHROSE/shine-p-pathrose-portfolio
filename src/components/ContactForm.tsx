import { useState, type FormEvent } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { cn } from '../lib/utils'
import { profile } from '../data/profile'

type FormStatus = 'idle' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setStatus('success')
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(form))
  }

  const handleChange = (field: keyof FormData, value: string) => {
    const next = { ...form, [field]: value }
    setForm(next)
    if (touched[field]) {
      setErrors(validate(next))
    }
    if (status !== 'idle') setStatus('idle')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-white light:text-gray-900">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={cn(
            'w-full rounded-lg border bg-charcoal px-4 py-3 text-white transition-colors placeholder:text-muted/50 focus:border-accent focus:outline-none light:bg-gray-50 light:text-gray-900',
            errors.name && touched.name ? 'border-red-500' : 'border-border light:border-gray-300',
          )}
          placeholder="Your name"
        />
        {errors.name && touched.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-white light:text-gray-900">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={cn(
            'w-full rounded-lg border bg-charcoal px-4 py-3 text-white transition-colors placeholder:text-muted/50 focus:border-accent focus:outline-none light:bg-gray-50 light:text-gray-900',
            errors.email && touched.email ? 'border-red-500' : 'border-border light:border-gray-300',
          )}
          placeholder="you@example.com"
        />
        {errors.email && touched.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-white light:text-gray-900">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(
            'w-full resize-none rounded-lg border bg-charcoal px-4 py-3 text-white transition-colors placeholder:text-muted/50 focus:border-accent focus:outline-none light:bg-gray-50 light:text-gray-900',
            errors.message && touched.message ? 'border-red-500' : 'border-border light:border-gray-300',
          )}
          placeholder="Tell me about the opportunity or project..."
        />
        {errors.message && touched.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400" role="status">
          <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Opening your email client — message ready to send.
        </div>
      )}

      {status === 'error' && Object.keys(errors).length > 0 && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Please fix the errors above before submitting.
        </div>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
    </form>
  )
}
