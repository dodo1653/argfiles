import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function TypewriterText({
  text,
  className,
  delay = 0,
  speed = 0.03,
}: TypewriterTextProps) {
  return (
    <span className={cn('inline', className)}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: delay + i * speed }}
          className="inline"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
