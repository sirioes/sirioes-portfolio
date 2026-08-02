import type { LucideIcon } from 'lucide-react'
import { Globe, Database, Code2, FlaskConical } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Full-Stack Web Dev',
    description: 'Building end-to-end web applications with Laravel, Tailwind CSS, and MySQL — from database schema to user-facing UI.',
  },
  {
    icon: Code2,
    title: 'Backend & API Design',
    description: 'Designing RESTful APIs with FastAPI and Laravel, applying Clean Architecture and OOP design patterns for maintainable systems.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Modeling relational databases in MySQL and PostgreSQL, writing migrations, seeders, and ORM logic with Eloquent and SQLAlchemy.',
  },
  {
    icon: FlaskConical,
    title: 'Testing & Architecture',
    description: 'Writing unit and integration tests, applying Repository, Factory, and Strategy patterns to keep business logic clean and extensible.',
  },
]
