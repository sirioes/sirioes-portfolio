import { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import Container from '../ui/Container'
import Button from '../ui/Button'

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left) / rect.width
      mouse.current.y = (e.clientY - rect.top) / rect.height
    }
    window.addEventListener('mousemove', onMove)

    const cols = 12
    const rows = 8

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const mx = (mouse.current.x - 0.5) * 2  // -1 to 1
      const my = (mouse.current.y - 0.5) * 2

      const tiltX = my * 18   // deg
      const tiltY = mx * -18

      // perspective projection helper
      const project = (gx: number, gy: number) => {
        const fov = 600
        // normalize to -0.5..0.5
        const nx = gx - 0.5
        const ny = gy - 0.5

        // rotate around X axis
        const cosX = Math.cos((tiltX * Math.PI) / 180)
        const sinX = Math.sin((tiltX * Math.PI) / 180)
        const ry = ny * cosX - 0 * sinX
        const rz = ny * sinX

        // rotate around Y axis
        const cosY = Math.cos((tiltY * Math.PI) / 180)
        const sinY = Math.sin((tiltY * Math.PI) / 180)
        const rx2 = nx * cosY + rz * sinY
        const rz2 = -nx * sinY + rz * cosY

        const scale = fov / (fov + rz2 * 300)
        return {
          x: w / 2 + rx2 * w * scale,
          y: h / 2 + ry * h * scale,
          scale,
        }
      }

      // draw grid lines
      const lineColor = 'rgba(201,181,156,0.25)'  // clay color subtle

      // vertical lines
      for (let c = 0; c <= cols; c++) {
        const gx = c / cols
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        ctx.lineWidth = 0.8
        for (let r = 0; r <= rows; r++) {
          const gy = r / rows
          const p = project(gx, gy)
          if (r === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        }
        ctx.stroke()
      }

      // horizontal lines
      for (let r = 0; r <= rows; r++) {
        const gy = r / rows
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        ctx.lineWidth = 0.8
        for (let c = 0; c <= cols; c++) {
          const gx = c / cols
          const p = project(gx, gy)
          if (c === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        }
        ctx.stroke()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      <GridBackground />
      <Container className="relative grid items-center gap-16 md:grid-cols-2">
        {/* Kolom teks */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-ink/60">
            Hello, I&apos;m{' '}
            <span className="font-display text-base italic normal-case tracking-normal text-clay">
              Risma
            </span>
          </p>

          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
            Software
            <br />
            Developer
          </h1>

          <p className="mt-6 max-w-md text-ink/70">
            Information Technology student with a focus on software development and
            systems architecture — currently seeking an internship
            to build scalable, real-world solutions.
          </p>

          <div className="mt-8">
            <Button href="#work" showArrow>
              View My Work
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-wide text-ink/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
            </span>
            Available for Internship
          </div>
        </div>

        {/* Kolom gambar */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-t-[999px] bg-sand">
            <img src="/assets/foto-profile.jpg" className="h-full w-full object-cover" alt="Risma" />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
            className="absolute right-0 top-8 h-20 w-20 md:-right-4 md:h-28 md:w-28"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <circle
                cx="50" cy="50" r="47" fill="none" stroke="currentColor"
                strokeWidth="0.5" strokeDasharray="2 3" className="text-taupe"
              />
              <text fontSize="7" letterSpacing="2" className="fill-ink/70 uppercase">
                <textPath href="#badge-circle" startOffset="0%">
                  Available for Internship • Available for Internship •
                </textPath>
              </text>
              <circle cx="50" cy="50" r="3" className="fill-clay" />
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
