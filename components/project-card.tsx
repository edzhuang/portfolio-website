import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  className?: string
}

export function ProjectCard({ title, description, imageUrl, className = "" }: ProjectCardProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="rounded-3xl overflow-hidden border border-gridline">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-heading-sm text-foreground">{title}</h3>
      <p className="text-body-md text-muted-foreground">{description}</p>
    </div>
  )
}
