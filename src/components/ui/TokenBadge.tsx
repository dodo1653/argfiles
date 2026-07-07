import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface TokenBadgeProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function TokenBadge({ className, size = 'md' }: TokenBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
    lg: 'text-base px-4 py-1.5 gap-2',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'inline-flex items-center rounded-full border font-mono font-semibold',
        'border-solana-purple/40 bg-solana-purple/5 text-solana-green',
        sizeClasses[size],
        className
      )}
    >
      <span className="w-2 h-2 rounded-full bg-solana-green animate-pulse" />
      SOLANA
    </motion.div>
  )
}
