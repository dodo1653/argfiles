import { useState } from 'react'
import { usePageTitle } from '../utils/usePageTitle'
import { Copy, Check, ExternalLink, Coins, Rocket, Shield } from 'lucide-react'
import Stamp from '../components/ui/Stamp'
import TokenBadge from '../components/ui/TokenBadge'
import RevealOnScroll from '../components/animations/RevealOnScroll'

const CA = '5tZpXgw3PuBQ4KZjk4aT4vPjnTgtJgyL3rr9rPxMpump'

const steps = [
  {
    icon: Rocket,
    title: 'Create a Solana Wallet',
    desc: 'Use Phantom, Solflare, or Backpack. Fund it with SOL from an exchange.',
  },
  {
    icon: Coins,
    title: 'Go to pump.fun',
    desc: 'Navigate to pump.fun and connect your Solana wallet.',
  },
  {
    icon: Shield,
    title: 'Swap for $FIFAFILES',
    desc: 'Search for the contract address below and swap your SOL for $FIFAFILES tokens.',
  },
]

export default function TokenPage() {
  usePageTitle('$FIFAFILES Token')
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>

      <section className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="mb-2">
            <Stamp variant="confidential" label="TOKEN" />
          </div>

          <div className="flex flex-col items-center gap-6 mb-8">
            <img
              src="/ticker.png"
              alt="$FIFAFILES Token"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gold/30 shadow-lg shadow-gold/10 object-cover"
            />
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text">
              $FIFAFILES
            </h1>
          </div>

          <p className="text-sm text-text-muted max-w-xl leading-relaxed mb-6 mx-auto">
            The conspiracy is tokenised. $FIFAFILES is a community-driven token on the Solana
            blockchain, launched on pump.fun. Holders are part of the dossier — the evidence
            lives on-chain, and the narrative can never be deleted.
          </p>
          <div className="flex justify-center">
            <TokenBadge size="lg" />
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <RevealOnScroll>
            <div className="p-6 rounded-lg border border-border bg-surface">
              <h2 className="font-mono text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
                Token Information
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-xs text-text-muted font-mono">Token Name</span>
                  <span className="text-xs text-text font-mono font-semibold">Fifa Files</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-xs text-text-muted font-mono">Ticker</span>
                  <span className="text-xs text-solana-green font-mono font-bold">$FIFAFILES</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-xs text-text-muted font-mono">Network</span>
                  <span className="text-xs text-solana-purple font-mono font-semibold">Solana</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-xs text-text-muted font-mono">Launch</span>
                  <span className="text-xs text-text font-mono">pump.fun</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-text-muted font-mono">Standard</span>
                  <span className="text-xs text-text font-mono">SPL Token</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="p-6 rounded-lg border border-border bg-surface">
              <h2 className="font-mono text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
                Contract Address
              </h2>
              <p className="text-xs text-text-muted mb-3">
                Copy the contract address below to trade on pump.fun or your preferred Solana DEX.
              </p>
              <div className="flex items-center gap-2 p-3 rounded-md bg-bg border border-border">
                <code className="flex-1 text-xs font-mono text-text-muted truncate">
                  {CA}
                </code>
                <button
                  onClick={copyAddress}
                  className="shrink-0 p-1.5 rounded-md hover:bg-surface-elevated transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-solana-green" />
                  ) : (
                    <Copy className="w-4 h-4 text-text-muted hover:text-text" />
                  )}
                </button>
              </div>
              <p className="text-[10px] text-text-muted font-mono mt-2">
                Live on pump.fun. Trade now.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-10 p-6 rounded-lg border border-border bg-surface">
            <h2 className="font-mono text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
              How to Buy
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={step.title}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono font-bold">
                      {i + 1}
                    </span>
                    <step.icon className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-semibold text-text mb-1">{step.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://pump.fun/coin/5tZpXgw3PuBQ4KZjk4aT4vPjnTgtJgyL3rr9rPxMpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-solana-purple/10 border border-solana-purple/30 text-solana-green rounded-lg font-mono text-sm font-semibold hover:bg-solana-purple/20 transition-all duration-300"
            >
              TRADE ON PUMP.FUN <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
