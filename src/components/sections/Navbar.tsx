import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Sparkle } from 'lucide-react'
import Container from '../ui/Container'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-taupe bg-sand">
      <Container className="flex flex-col items-center gap-4 py-6">
        <a href="#home" className="flex items-center gap-2">
          <Sparkle size={16} className="text-clay" />
          <span className="font-display text-2xl uppercase tracking-wide text-clay">
            sirioes&apos;s portfolio
          </span>
          <Sparkle size={16} className="text-clay" />
        </a>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-wide text-ink/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-clay">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-1 text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-taupe bg-sand md:hidden"
          >
            <Container className="flex flex-col items-center gap-4 py-6 text-sm uppercase tracking-wide">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-clay"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}