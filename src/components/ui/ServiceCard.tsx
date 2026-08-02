import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-taupe bg-cream p-6 transition-all duration-300 hover:border-clay hover:bg-sand">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-taupe bg-sand transition-colors duration-300 group-hover:border-clay group-hover:bg-cream">
        <Icon size={18} className="text-clay" />
      </div>
      <p className="mt-5 font-display text-lg">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
    </div>
  )
}
