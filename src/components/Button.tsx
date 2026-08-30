import { cn } from '../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  as?: 'a'
}

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never
  as?: 'button'
}

type ButtonProps = (ButtonAsAnchor | ButtonAsButton) & {
  variant?: ButtonVariant
  size?: ButtonSize
  magnetic?: boolean
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/25 hover:shadow-accent/40',
  secondary:
    'glass text-white hover:bg-white/10 light:text-gray-900 light:hover:bg-gray-100',
  ghost: 'text-muted hover:text-white light:hover:text-gray-900',
  outline:
    'border border-border text-white hover:border-accent hover:text-accent-light light:border-gray-300 light:text-gray-900',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href) {
    const { href, as: _as, magnetic: _mag, ...rest } = props as ButtonAsAnchor & {
      as?: string
      magnetic?: boolean
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { as: _as, magnetic: _mag, ...rest } = props as ButtonAsButton & {
    as?: string
    magnetic?: boolean
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
