interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center">
      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sand border border-clay text-sm font-medium text-clay">
        {number}
      </div>
      <div className="md:mt-5">
        <p className="font-display text-lg">{title}</p>
        <p className="mt-2 max-w-40 text-sm leading-relaxed text-ink/60 md:mx-auto">{description}</p>
      </div>
    </div>
  )
}
