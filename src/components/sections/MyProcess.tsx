import { motion, type Variants } from 'motion/react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ProcessStep from '../ui/ProcessStep'
import { processSteps } from '../../data/process'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function MyProcess() {
  return (
    <section id="process" className="py-24 md:py-32">
      <Container>
        <SectionHeading label="My Process" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6"
        >
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-taupe md:block" />

          {processSteps.map((step) => (
            <motion.div key={step.number} variants={item}>
              <ProcessStep {...step} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}