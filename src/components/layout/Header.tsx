import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderClosed, FolderOpen, FileText } from 'lucide-react'
import { cn } from '../../utils/cn'

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'Evidence', path: '/evidence' },
  { label: 'Token', path: '/token' },
  { label: 'X / Twitter', path: '/twitter' },
  { label: 'Full Dossier', path: '/dossier' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 group">
            <FileText className="w-4 h-4 text-gold group-hover:text-red transition-colors" />
            <span className="font-mono text-sm font-semibold text-text tracking-tight">
              FIFA_FILES
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={cn(
                    'relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                    isActive
                      ? 'text-gold'
                      : 'text-text-muted hover:text-text hover:bg-surface-elevated'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gold/10 border border-gold/20 rounded-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive ? (
                      <FolderOpen className="w-3.5 h-3.5" />
                    ) : (
                      <FolderClosed className="w-3.5 h-3.5" />
                    )}
                    {tab.label}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
