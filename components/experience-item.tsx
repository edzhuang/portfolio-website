interface ExperienceItemProps {
  years: string
  organization: string
  title: string
  description: string
  className?: string
}

export function ExperienceItem({ years, organization, title, description, className = "" }: ExperienceItemProps) {
  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      <div className="col-span-1 text-muted-foreground">{years}</div>
      <div className="col-span-2">
        <h3 className="text-foreground font-normal">{organization}</h3>
        <h4 className="text-foreground font-normal">{title}</h4>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      <div className="col-span-1 flex justify-end">
        <div className="w-6 h-6 border border-gridline"></div>
      </div>
    </div>
  )
}
