import { ArrowRight } from 'lucide-react'

interface SectionHeadingProps {
  label: string
  linkLabel?: string
  linkHref?: string
}

export default function SectionHeading({ label, linkLabel, linkHref }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between">
      <p className="text-sm uppercase tracking-[0.2em] text-ink/60">{label}</p>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-ink/70 transition-colors hover:text-ink"
        >
          {linkLabel}
          <ArrowRight size={14} />
        </a>
      )}
    </div>
  )
}