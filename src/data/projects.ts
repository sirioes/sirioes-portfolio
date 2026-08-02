export interface Project {
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  image?: string
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Travel Web App',
    category: 'Web Design',
    year: '2025',
    description: 'A modern travel booking platform with multilingual support, product management, and integrated payment — built end-to-end with Laravel.',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
    image: '/assets/work/travelwebapp.webp',
    href: 'https://mijnamortravel.com/',
  },
  {
    title: 'PureSkin',
    category: 'Web Development',
    year: '2026',
    description: 'A beauty clinic and skincare e-commerce website with a dynamic product catalog, category filtering, and database-driven content.',
    tags: ['Laravel', 'Tailwind CSS', 'Python'],
    image: '/assets/work/yourskin.webp',
    href: 'https://yourskin-eight.vercel.app/',
  },
]
