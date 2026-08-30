import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Theme } from '../hooks/useTheme'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { ThemeToggle } from './ThemeToggle'

interface NavigationProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Navigation({ theme, onThemeChange }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-obsidian/80 backdrop-blur-md transition-all duration-300 light:bg-white/85',
        scrolled ? 'glass border-b border-white/5 py-3 light:border-gray-200/80' : 'py-5',
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-white light:text-gray-900"
        >
          SP<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm transition-colors',
                    active === id
                      ? 'text-accent-light'
                      : 'text-muted hover:text-white light:hover:text-gray-900',
                  )}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onChange={onThemeChange} />
          <Button href={profile.resumePath} download variant="outline" size="sm">
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden light:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 top-[60px] z-40 bg-obsidian/95 backdrop-blur-lg transition-all duration-300 lg:hidden light:bg-white/95',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  tabIndex={open ? 0 : -1}
                  className={cn(
                    'block rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                    active === id ? 'text-accent-light' : 'text-muted',
                  )}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li className="mt-4 border-t border-border pt-4 light:border-gray-200">
            <div className="mb-4">
              <ThemeToggle theme={theme} onChange={onThemeChange} />
            </div>
            <Button
              href={profile.resumePath}
              download
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleNavClick}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
