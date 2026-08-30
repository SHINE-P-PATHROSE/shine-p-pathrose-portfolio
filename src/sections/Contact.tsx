import { Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { ContactForm } from '../components/ContactForm'
import { Button } from '../components/Button'
import { GitHubIcon, LinkedInIcon } from '../components/icons'

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'shine-p-pathrose',
    href: profile.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'SHINE-P-PATHROSE',
    href: profile.github,
    icon: GitHubIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's build something useful."
            subtitle="Open to opportunities in Python, Django, backend and full-stack development."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div>
              <div className="space-y-4">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-4 transition-all hover:border-accent/30 light:border-gray-200 light:bg-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                      <p className="font-medium text-white light:text-gray-900">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <Button href={profile.resumePath} download variant="primary" size="lg">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 light:border-gray-200 light:bg-white">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
