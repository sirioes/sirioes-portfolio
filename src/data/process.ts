export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'I gather requirements, study the problem domain, and clarify goals before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'I design the system structure — database schema, API contracts, and layer boundaries using Clean Architecture principles.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'I implement features end-to-end: backend logic, database queries, and a clean, responsive frontend.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'I write unit and integration tests to verify business logic and data access work correctly and independently.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Final review, code cleanup, and handover — shipping production-ready features that are built to scale.',
  },
]
