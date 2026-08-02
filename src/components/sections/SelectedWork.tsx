import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import { projects } from '../../data/projects'

const INTERVAL = 5000

export default function SelectedWork() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % projects.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const project = projects[current]

  return (
    <section id="work" className="py-24 md:py-32">
      <Container>

        {/* Header */}
        <div className="flex items-end justify-between">
          <p className="text-sm uppercase tracking-[0.2em] text-ink/60">Selected Work</p>
          {/* View All Projects — coming soon */}
        </div>

        {/* Slider layout */}
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">

          {/* Gambar */}
          <div className="relative overflow-hidden rounded-2xl bg-sand aspect-video">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={current}
                src={project.image}
                alt={project.title}
                custom={direction}
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Info panel kanan */}
          <div className="flex flex-col justify-between py-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="mt-4"
                >
                  <h3 className="font-display text-3xl leading-tight">{project.title}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/50">
                    {project.category} · {project.year}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/60">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-taupe px-3 py-1 text-xs uppercase tracking-wide text-ink/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href ?? '#'}
                    className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-ink transition-colors hover:text-clay"
                  >
                    View Project <ArrowRight size={14} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigator */}
            <div className="mt-8 flex flex-col gap-3">
              {projects.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`flex items-center gap-3 text-left transition-all duration-300 ${i === current ? 'text-ink' : 'text-ink/30 hover:text-ink/60'}`}
                >
                  <span className={`h-px transition-all duration-300 ${i === current ? 'w-8 bg-clay' : 'w-4 bg-taupe'}`} />
                  <span className="text-xs uppercase tracking-[0.15em]">{p.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}
