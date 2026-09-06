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
    title: 'YourSkin',
    category: 'Machine Learning',
    year: '2026',
    description: 'A two-stage skin cancer risk assessment app: a symptom questionnaire scored by a Random Forest model, plus skin-lesion image classification with an EfficientNet-B3 deep learning model. Includes user auth, assessment history, and multilingual (EN/ID) support.',
    tags: ['React', 'Flask', 'TensorFlow', 'scikit-learn'],
    image: '/assets/work/yourskin.webp',
    href: 'https://yourskin-eight.vercel.app/',
  },
  {
    title: 'PureSkin',
    category: 'Web Development',
    year: '2026',
    description: 'A full-stack beauty clinic and skincare e-commerce site built with Laravel: product catalog with category filtering, shopping cart, user authentication, and a treatment showcase with a consultation booking modal.',
    tags: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    image: '/assets/work/pureskin.webp',
    href: 'https://pureskin.codeeblock.com/',
  },
]
