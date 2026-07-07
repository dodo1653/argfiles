import { motion } from 'framer-motion'
import { FileText, UserCheck, AlertTriangle, Scale, Quote } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import Stamp from '../components/ui/Stamp'
import RedactedText from '../components/ui/RedactedText'
import RevealOnScroll from '../components/animations/RevealOnScroll'

const sections = [
  {
    icon: FileText,
    title: 'Executive Summary',
    content: `The 2026 FIFA World Cup has been marred by a series of controversial officiating decisions that have disproportionately benefited the defending champions, Argentina. This dossier compiles verified incidents — from unejected red cards to overturned VAR decisions to direct political interference — that collectively paint a picture of systematic favouritism within football's governing body.

The evidence spans five distinct incidents across the tournament, supported by broadcast footage, official match reports, and corroborated by global media coverage. The pattern is not incidental. It is structural.`,
  },
  {
    icon: AlertTriangle,
    title: 'Pattern of Behaviour',
    content: `What emerges from the evidence is not a series of isolated mistakes but a consistent pattern:

1. Star player protection — Lionel Messi escaping a clear red card against Algeria set the precedent that the tournament's biggest name would be officiated differently.
2. VAR applied selectively — Egypt's goal was overturned for a foul 70 yards and 20 seconds before the shot. Cape Verde's offside in the buildup was ignored.
3. Institutional bias exposed — FIFA President Gianni Infantino was caught admitting he "suffered with Argentina."
4. Political interference normalized — Donald Trump successfully intervened to overturn a US player's red card, a first since 1962.

When four independent categories of evidence all point in the same direction, it ceases to be coincidence.`,
  },
  {
    icon: Scale,
    title: 'The VAR Problem',
    content: `VAR was introduced to correct "clear and obvious errors." At this World Cup, it has been weaponized selectively.

Against Egypt, VAR wound the clock back over 20 seconds to find a soft shirt pull that no one complained about in real time. Against Cape Verde, VAR failed to spot a clear offside in the buildup to Argentina's winning goal. Against Algeria, VAR did not even check Messi's studs-up challenge.

The technology is not the problem. The people controlling it are. When the same team benefits from every marginal call and every controversial non-call, the system is not broken — it is working exactly as designed.`,
  },
  {
    icon: UserCheck,
    title: 'Political Interference',
    content: `Perhaps the most damning evidence is the Balogun red card incident. A sitting US President called the FIFA President. Hours later, a disciplinary ruling was overturned for the first time in 64 years. Trump bragged about it. Infantino confirmed the call. Belgium's legal challenge was dismissed.

This single incident proves that FIFA's disciplinary process is not independent. It can be influenced by power. If a phone call from a head of state can change a World Cup decision, then the entire framework of sporting fairness collapses.`,
  },
]

const quotes = [
  {
    text: 'It was a rigged game. It wasn\'t our fault. That referee… it seems like this match was rigged.',
    author: 'Mostafa Zico, Egypt Forward',
    source: 'Post-match interview, July 7 2026',
  },
  {
    text: 'Red cards are not overturned by political phone calls. They are overturned by rules, evidence and independent bodies.',
    author: 'Sepp Blatter, Former FIFA President',
    source: 'X / Twitter, July 6 2026',
  },
  {
    text: 'This is unprecedented, incomprehensible and unjustifiable. FIFA has crossed a red line.',
    author: 'UEFA Official Statement',
    source: 'Press release, July 6 2026',
  },
  {
    text: 'Bad, bad, bad, bad, bad decision that will hurt the World Cup.',
    author: 'Ståle Solbakken, Norway Coach',
    source: 'Press conference, July 6 2026',
  },
]

export default function DossierPage() {
  usePageTitle('Full Dossier')

  return (
    <>

      <section className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-red" />
            <Stamp variant="top-secret" label="COMPLETE DOSSIER" />
          </div>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text mt-3 mb-2">
            The Full Report
          </h1>
          <p className="text-xs text-text-muted font-mono mb-1">
            CLASSIFICATION: TOP SECRET &bull; DOCUMENT ID: FIFA-2026-001
          </p>
          <p className="text-xs text-text-muted font-mono">
            ISSUED: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </RevealOnScroll>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <RevealOnScroll key={section.title} delay={i * 0.1}>
              <div className="p-6 rounded-lg border border-border bg-surface">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-5 h-5 text-gold" />
                  <h2 className="font-mono text-lg font-bold text-text">{section.title}</h2>
                </div>
                <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
                  <RedactedText text={section.content} redactRatio={0.08} />
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12">
            <h2 className="font-mono text-lg font-bold text-text mb-6 flex items-center gap-2">
              <Quote className="w-4 h-4 text-gold" />
              Key Statements
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {quotes.map((quote) => (
                <div
                  key={quote.author}
                  className="p-5 rounded-lg border border-border bg-surface"
                >
                  <p className="text-sm text-text italic leading-relaxed mb-3">"{quote.text}"</p>
                  <div className="text-xs">
                    <p className="text-gold font-semibold">{quote.author}</p>
                    <p className="text-text-muted">{quote.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-lg border border-red/20 bg-red/5 text-center"
          >
            <Stamp variant="top-secret" label="VERDICT" className="mb-4" />
            <p className="text-sm text-text-muted max-w-2xl mx-auto leading-relaxed mb-4">
              The evidence presented in this dossier demonstrates a clear and documented pattern of
              favourable treatment toward Argentina at the 2026 FIFA World Cup. While individual
              incidents can be dismissed as subjective, the cumulative weight of five separate
              categories of evidence — spanning VAR manipulation, political interference, and
              institutional bias — leads to an unavoidable conclusion.
            </p>
            <p className="text-base font-mono font-bold text-red">
              THE FIX WAS IN.
            </p>
            <p className="text-xs text-text-muted font-mono mt-4">
              DOSSIER CLOSED &bull; THE FIFA FILES &bull; {new Date().getFullYear()}
            </p>
          </motion.div>
        </RevealOnScroll>
      </section>
    </>
  )
}
