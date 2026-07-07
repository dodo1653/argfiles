import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type StampVariant = 'classified' | 'top-secret' | 'confidential'

interface StampProps {
  variant?: StampVariant
  label?: string
  className?: string
  delay?: number
}

const variants: Record<StampVariant, { label: string; className: string }> = {
  'classified': { label: 'CLASSIFIED', className: 'stamp-classified' },
  'top-secret': { label: 'TOP SECRET', className: 'stamp-top-secret' },
  'confidential': { label: 'CONFIDENTIAL', className: 'stamp-confidential' },
}

export default function Stamp({ variant = 'classified', label, className, delay = 0 }: StampProps) {
  const v = variants[variant]
  return (
    <motion.div
      initial={{ scale: 2, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 0.85, rotate: -3 }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={cn('stamp', v.className, className)}
    >
      {label || v.label}
    </motion.div>
  )
}
