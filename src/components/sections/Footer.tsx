import { motion } from 'motion/react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { contactItems, socialLinks } from '../../data/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-ink text-cream">
      <Container className="grid gap-16 py-24 md:grid-cols-2 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Let&apos;s create something
            <br />
            meaningful together.
          </h2>
          <p className="mt-4 text-cream/60">Currently open to new projects and opportunities.</p>
          <div className="mt-8">
            <Button
              href="mailto:wirdianthi05@gmail.com"
              showArrow
              className="bg-cream! text-ink! hover:bg-clay!"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col justify-center gap-4"
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-cream/80 transition-colors hover:text-cream"
            >
              <item.icon size={18} className="text-clay" />
              {item.label}
            </a>
          ))}
        </motion.div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-cream/50 md:flex-row">
          <p>&copy; {year} Ni Luh Risma Putri Wirdianthi. All rights reserved.</p>
          <div className="flex items-center gap-6 uppercase tracking-wide">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="transition-colors hover:text-cream">
                {social.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  )
}