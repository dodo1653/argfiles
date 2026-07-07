import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ShieldAlert } from 'lucide-react'
import Stamp from '../components/ui/Stamp'
import EvidenceCard from '../components/ui/EvidenceCard'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import { evidenceItems } from '../data/evidence'

export default function EvidencePage() {
  return (
    <>
      <Helmet>
        <title>Evidence — The Fifa Files</title>
      </Helmet>

      <section className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert className="w-5 h-5 text-red" />
            <Stamp variant="top-secret" label="EVIDENCE" />
          </div>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text mt-3 mb-3">
            The Case Files
          </h1>
          <p className="text-sm text-text-muted max-w-2xl leading-relaxed mb-2">
            Five verified incidents from the 2026 FIFA World Cup. Each one shows a pattern of
            systematic favouritism toward Argentina. Cross-referenced with X posts, official
            complaints, and video evidence.
          </p>
          <p className="text-xs text-text-muted font-mono">
            CLASSIFICATION: TOP SECRET &bull; {evidenceItems.length} EXHIBITS &bull; EYES ONLY
          </p>
        </RevealOnScroll>

        <div className="mt-12 space-y-10">
          {evidenceItems.map((item, i) => (
            <EvidenceCard key={item.id} {...item} index={i} />
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 rounded-lg border border-red/20 bg-red/5"
          >
            <p className="text-xs font-mono text-red font-semibold mb-2">CASE STATUS</p>
            <p className="text-sm text-text-muted leading-relaxed">
              The above exhibits represent a fraction of the documented irregularities at the 2026
              FIFA World Cup. Each incident has been verified through broadcast footage, official
              match reports, and social media records. The pattern suggests coordinated —
              or at minimum, culturally embedded — bias within FIFA's officiating structure.
            </p>
          </motion.div>
        </RevealOnScroll>
      </section>
    </>
  )
}
