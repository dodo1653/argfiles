import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { TrendingUp } from 'lucide-react'
import Stamp from '../components/ui/Stamp'
import TweetCard from '../components/ui/TweetCard'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import { tweets } from '../data/tweets'

export default function TwitterPage() {
  return (
    <>
      <Helmet>
        <title>X / Twitter Storm — The Fifa Files</title>
      </Helmet>

      <section className="pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-gold" />
            <Stamp variant="confidential" label="X / TWITTER" />
          </div>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text mt-3 mb-3">
            Everyone Is Talking
          </h1>
          <p className="text-sm text-text-muted max-w-2xl leading-relaxed mb-4">
            Millions of posts. Global trending. From football fans to journalists to cultural
            commentators — the world is connecting the dots. Below are 11 of the most viral
            posts exposing the truth.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              TRENDING WORLDWIDE
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="text-gold font-semibold">1.2M+</span> posts
            </span>
            <span className="text-border hidden sm:inline">|</span>
            <span className="hidden sm:inline">
              <span className="text-gold font-semibold">11</span> curated exhibits
            </span>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {tweets.map((tweet, i) => (
            <TweetCard key={tweet.handle} {...tweet} index={i} />
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-lg border border-border bg-surface text-center"
          >
            <p className="text-sm text-text-muted mb-4">
              The conversation is happening right now on X. Join the movement.
            </p>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold rounded-lg font-mono text-sm font-semibold hover:bg-gold/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              FOLLOW ON X
            </a>
          </motion.div>
        </RevealOnScroll>
      </section>
    </>
  )
}
