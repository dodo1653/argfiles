import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, FileText, MessageCircle, Database } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import Stamp from '../components/ui/Stamp'
import TypewriterText from '../components/animations/TypewriterText'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import TokenBadge from '../components/ui/TokenBadge'

const previewCards = [
  {
    icon: FileText,
    title: 'The Evidence',
    desc: 'Five verified incidents showing a pattern of favourable treatment for Argentina at the 2026 World Cup.',
    link: '/evidence',
    color: 'text-red',
  },
  {
    icon: MessageCircle,
    title: 'X / Twitter Storm',
    desc: 'Over a million posts. 11 viral tweets. The world is talking. See what everyone is saying.',
    link: '/twitter',
    color: 'text-gold',
  },
  {
    icon: Database,
    title: '$FIFAFILES Token',
    desc: 'A tokenised movement on Solana. The conspiracy is now a currency. Join the dossier.',
    link: '/token',
    color: 'text-solana-green',
  },
]

export default function HomePage() {
  usePageTitle('Classified Dossier')

  return (
    <>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <Stamp variant="top-secret" label="TOP SECRET" delay={0.3} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold text-text tracking-tight mb-4 text-glow">
              <TypewriterText text="THE FIFA" delay={0.8} speed={0.035} />
              <br />
              <TypewriterText text="FILES" delay={2.2} speed={0.035} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="text-base sm:text-lg text-text-muted font-mono max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            A classified dossier exposing the evidence — VAR manipulation, political interference,{' '}
            <span className="text-gold">and a World Cup written in advance.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/evidence"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold rounded-lg font-mono text-sm font-semibold hover:bg-gold/20 transition-all duration-300 group"
            >
              VIEW EVIDENCE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/dossier"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-muted rounded-lg font-mono text-sm hover:border-gold/30 hover:text-text transition-all duration-300"
            >
              READ FULL DOSSIER
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-text-muted/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Preview Cards Section */}
      <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Stamp variant="confidential" label="CLASSIFIED BRIEF" />
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-text mt-4 mb-3">
              OPEN DOSSIER
            </h2>
            <p className="text-text-muted text-sm max-w-xl mx-auto">
              Three exhibits. One conclusion. Navigate the case files below.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {previewCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 0.1}>
              <Link
                to={card.link}
                className="group block p-6 rounded-lg border border-border bg-surface hover:bg-surface-elevated hover:border-gold/20 transition-all duration-300 h-full"
              >
                <card.icon className={`w-8 h-8 ${card.color} mb-4`} />
                <h3 className="font-mono text-lg font-semibold text-text mb-2 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{card.desc}</p>
                <span className="flex items-center gap-1 text-xs font-mono text-gold group-hover:gap-2 transition-all">
                  ACCESS <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="mt-20 text-center p-8 rounded-lg border border-border bg-surface">
            <img
              src="/ticker.png"
              alt="$FIFAFILES Token"
              className="w-16 h-16 rounded-full border-2 border-gold/20 mx-auto mb-3 object-cover"
            />
            <TokenBadge className="mb-3" />
            <p className="font-mono text-lg font-bold text-text">$FIFAFILES</p>
            <p className="text-sm text-text-muted mt-2 mb-4 max-w-md mx-auto">
              The movement is tokenised. The evidence is permanent. The narrative is unstoppable.
            </p>
            <Link
              to="/token"
              className="inline-flex items-center gap-2 text-sm font-mono text-solana-green hover:text-solana-green/80 transition-colors"
            >
              VIEW TOKEN <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
