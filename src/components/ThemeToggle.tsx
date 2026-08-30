import { Monitor, Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'
import { cn } from '../lib/utils'

interface ThemeToggleProps {
  theme: Theme
  onChange: (theme: Theme) => void
}

const options: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: 'dark', icon: Moon, label: 'Dark mode' },
  { value: 'light', icon: Sun, label: 'Light mode' },
  { value: 'system', icon: Monitor, label: 'System theme' },
]

export function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  return (
    <div
      className="flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5 light:border-gray-200 light:bg-gray-100"
      role="group"
      aria-label="Theme selection"
    >
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={cn(
            'rounded-md p-2 transition-colors',
            theme === value
              ? 'bg-accent text-white'
              : 'text-muted hover:text-white light:hover:text-gray-900',
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
