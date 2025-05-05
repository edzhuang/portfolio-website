import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  className?: string
}

export function ProjectCard({ title, description, imageUrl, className = "" }: ProjectCardProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="rounded-lg overflow-hidden border border-gridline">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-foreground font-normal">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
