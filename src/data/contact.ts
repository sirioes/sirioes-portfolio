import type { LucideIcon } from 'lucide-react'
import { Mail, Phone, MapPin } from 'lucide-react'

export interface ContactItem {
  icon: LucideIcon
  label: string
  href: string
}

export const contactItems: ContactItem[] = [
  { icon: Mail, label: 'wirdianthi05@gmail.com', href: 'mailto:wirdianthi05@gmail.com' },
  { icon: Phone, label: '+62 813-3730-5095', href: 'tel:+6281337305095' },
  { icon: MapPin, label: 'Gianyar, Bali', href: '#' },
]

export interface SocialLink {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/sirioes' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/risma-putri-wirdianthi/' },
  { label: 'Instagram', href: 'https://www.instagram.com/23.thii/' },
]
