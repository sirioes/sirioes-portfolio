
interface ProjectCardProps {
  title: string
  category: string
  year: string
  image?: string
}

export default function ProjectCard({ title, category, year, image }: ProjectCardProps) {
  return (
    <a href="#" className="group block">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-sand">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-ink/30">
            {title}
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="font-display text-lg">{title}</p>
        <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">
          {category} · {year}
        </p>
      </div>
    </a>
  )
}