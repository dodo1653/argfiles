import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface RedactedTextProps {
  text: string
  redactRatio?: number
  className?: string
  revealOnHover?: boolean
}

export default function RedactedText({
  text,
  redactRatio = 0.4,
  className,
  revealOnHover = true,
}: RedactedTextProps) {
  const [revealed, setRevealed] = useState(false)

  const words = text.split(' ')
  const redactedWords: (string | null)[] = words.map((word) =>
    Math.random() < redactRatio ? null : word
  )

  return (
    <span
      className={cn('relative inline', className)}
      onMouseEnter={() => revealOnHover && setRevealed(true)}
      onMouseLeave={() => revealOnHover && setRevealed(false)}
      style={{ cursor: revealOnHover ? 'help' : undefined }}
    >
      {revealed
        ? text
        : redactedWords.map((word, i) => (
            <span key={i}>
              {word !== null ? (
                word
              ) : (
                <motion.span
                  className="inline-block bg-red/80 text-red/80 rounded-sm select-none mx-0.5"
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.2 }}
                  style={{ minWidth: `${Math.random() * 30 + 20}px` }}
                >
                  {'\u2588'.repeat(Math.max(3, Math.floor(Math.random() * 6) + 3))}
                </motion.span>
              )}
              {i < words.length - 1 && ' '}
            </span>
          ))}
    </span>
  )
}
