import { motion } from 'framer-motion'

const photos = [
  { src: '/evidence1.jpg', label: 'EXHIBIT A', date: '2026-07-07' },
  { src: '/evidence2.jpg', label: 'EXHIBIT B', date: '2026-07-07' },
  { src: '/evidence3.jpg', label: 'EXHIBIT C', date: '2026-07-07' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.35, delayChildren: 0.2 },
  },
}

const photoVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const rotations = [-1.5, 2, -1]

export default function EvidencePhotoShowcase() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full py-12"
    >
      {/* Red string connectors */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'drop-shadow(0 0 2px rgba(204, 51, 51, 0.3))' }}
      >
        <motion.line
          x1="33%"
          y1="45%"
          x2="50%"
          y2="30%"
          stroke="#cc3333"
          strokeWidth="0.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
        <motion.line
          x1="50%"
          y1="30%"
          x2="67%"
          y2="45%"
          stroke="#cc3333"
          strokeWidth="0.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        />
        <motion.line
          x1="33%"
          y1="45%"
          x2="67%"
          y2="45%"
          stroke="#cc3333"
          strokeWidth="0.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 2.0 }}
        />
      </svg>

      {/* Evidence photos grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.label}
            variants={photoVariants}
            style={{ rotate: rotations[i] }}
            className="group relative"
          >
            {/* Photo frame */}
            <div className="relative overflow-hidden rounded-sm border border-border bg-surface shadow-2xl">
              {/* The image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={photo.src}
                  alt={`Evidence photograph ${i + 1}`}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 1.5,
                  }}
                />

                {/* Dark vignette overlay — pulses subtly */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
                  }}
                  animate={{ opacity: [0.5, 0.7, 0.5] }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.8,
                  }}
                />

                {/* Redacted corner stamp */}
                <motion.div
                  className="absolute top-2 right-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.4, duration: 0.5 }}
                >
                  <div className="text-[8px] font-mono font-bold text-red/70 tracking-widest bg-red/10 px-1.5 py-0.5 border border-red/30 rotate-6">
                    REDACTED
                  </div>
                </motion.div>

                {/* Hover redacted overlay — creepy reveal */}
                <motion.div
                  className="absolute inset-0 bg-bg/0 group-hover:bg-bg/60 transition-all duration-700 flex items-center justify-center"
                  initial={false}
                >
                  <motion.span
                    className="text-[10px] font-mono text-red/0 group-hover:text-red/70 tracking-[0.2em] uppercase"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    [ Classified ]
                  </motion.span>
                </motion.div>

                {/* Red dot in corner — like a evidence marker */}
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-red"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <span className="text-[9px] font-mono text-red/60 tracking-widest">
                    {photo.label}
                  </span>
                </div>
              </div>

              {/* Bottom evidence metadata */}
              <div className="px-3 py-2 border-t border-border bg-bg/80">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-text-muted/60 tracking-wider">
                    {photo.date}
                  </span>
                  <span className="text-[8px] font-mono text-text-muted/40">
                    CASE FILE #00{i + 1}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
