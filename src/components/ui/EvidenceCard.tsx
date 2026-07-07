import { motion } from 'framer-motion'
import { Calendar, ExternalLink, MessageCircle } from 'lucide-react'

interface EvidenceCardProps {
  id: string
  title: string
  date: string
  description: string
  category: string
  impact: string
  tweetLinks: { handle: string; url: string }[]
  index: number
}

export default function EvidenceCard({
  title,
  date,
  description,
  category,
  impact,
  tweetLinks,
  index,
}: EvidenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/40 to-transparent" />
      <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full border-2 border-gold bg-bg" />

      <div className="ml-6 p-5 rounded-lg border border-border bg-surface hover:bg-surface-elevated transition-colors glow-card">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gold-dim">
                {category}
              </span>
              <span className="text-[10px] font-mono text-text-muted">EXHIBIT {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-base font-semibold text-text leading-snug">{title}</h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono shrink-0">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mb-3">{description}</p>

        <div className="flex items-center gap-2 mb-3 text-xs">
          <span className="text-red font-mono font-semibold">IMPACT:</span>
          <span className="text-text-muted">{impact}</span>
        </div>

        {tweetLinks.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border">
            <MessageCircle className="w-3.5 h-3.5 text-solana-purple" />
            {tweetLinks.map((tweet, i) => (
              <a
                key={i}
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-gold transition-colors"
              >
                @{tweet.handle} <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
