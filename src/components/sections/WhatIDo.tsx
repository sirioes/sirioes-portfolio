import { motion, type Variants } from 'motion/react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WhatIDo() {
  return (
    <section id="services" className="bg-sand py-24 md:py-32">
      <Container>
        <SectionHeading label="What I Do" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}