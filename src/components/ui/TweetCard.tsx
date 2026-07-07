import { motion } from 'framer-motion'
import { ExternalLink, Heart, Repeat2 } from 'lucide-react'

interface TweetCardProps {
  handle: string
  displayName: string
  content: string
  url: string
  likes?: string
  retweets?: string
  index: number
}

export default function TweetCard({
  handle,
  displayName,
  content,
  url,
  likes,
  retweets,
  index,
}: TweetCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="block group"
    >
      <div className="p-4 rounded-lg border border-border bg-surface hover:bg-surface-elevated hover:border-gold/30 transition-all duration-300">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-solana-purple to-gold flex items-center justify-center text-[10px] font-bold text-white">
            {displayName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text truncate">{displayName}</p>
            <p className="text-xs text-text-muted">@{handle}</p>
          </div>
          <svg className="w-4 h-4 text-text-muted shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        <p className="text-sm text-text leading-relaxed mb-3 line-clamp-4">{content}</p>

        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" /> {likes || '—'}
          </span>
          <span className="flex items-center gap-1">
            <Repeat2 className="w-3.5 h-3.5" /> {retweets || '—'}
          </span>
          <span className="flex items-center gap-1 ml-auto group-hover:text-gold transition-colors">
            View <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.a>
  )
}
