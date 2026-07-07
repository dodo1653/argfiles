import { useEffect, useRef, useState } from 'react'

interface RealTweetEmbedProps {
  url: string
}

export default function RealTweetEmbed({ url }: RealTweetEmbedProps) {
  const [html, setHtml] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true

    fetch(`https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&omit_script=true&theme=dark`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then((data) => {
        setHtml(data.html)
      })
      .catch(() => {
        setError(true)
      })
  }, [url])

  useEffect(() => {
    if (!html) return

    const render = () => {
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load(containerRef.current)
      }
    }

    render()
    const timer = setTimeout(render, 600)

    if (!document.querySelector('script[src*="widgets.js"]')) {
      const s = document.createElement('script')
      s.src = 'https://platform.twitter.com/widgets.js'
      s.async = true
      s.onload = render
      document.body.appendChild(s)
    }

    return () => clearTimeout(timer)
  }, [html])

  if (error) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 rounded-lg border border-border bg-surface text-center hover:bg-surface-elevated transition-colors"
      >
        <p className="text-xs text-text-muted font-mono mb-1">Failed to load embed</p>
        <p className="text-xs text-gold font-mono">View on X →</p>
      </a>
    )
  }

  if (!html) {
    return (
      <div className="p-8 rounded-lg border border-border bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-5 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          <span className="text-xs text-text-muted font-mono">Loading tweet...</span>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="twitter-embed-wrapper"
      style={{ minHeight: 200 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
