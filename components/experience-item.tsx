interface ExperienceItemProps {
  years: string;
  organization: string;
  title: string;
  description: string;
  className?: string;
}

export function ExperienceItem({
  years,
  organization,
  title,
  description,
  className = "",
}: ExperienceItemProps) {
  return (
    <div className={`grid grid-cols-4 gap-12 ${className}`}>
      <div className="flex items-center col-span-1 text-body-md text-muted-foreground h-12">
        {years}
      </div>
      <div className="relative col-span-2 flex flex-col gap-2">
        <div className="absolute -left-6 top-3 border-l h-6 border-foreground"></div>
        <h3 className="flex items-center text-heading-md text-foreground h-12">
          {organization}
        </h3>
        <h4 className="text-heading-sm text-foreground">{title}</h4>
        <p className="text-body-md text-muted-foreground">{description}</p>
      </div>
      <div className="col-span-1 flex justify-end">
        <div className="w-12 h-12 border border-gridline"></div>
      </div>
    </div>
  );
}
