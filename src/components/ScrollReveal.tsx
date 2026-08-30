import { motion, type HTMLMotionProps } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  children: React.ReactNode
}

export function ScrollReveal({ delay = 0, children, ...props }: ScrollRevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
