import Image from "next/image";

interface ExperienceItemProps {
  years: string;
  organization: string;
  title: string;
  description: string;
  className?: string;
  imageUrl?: string;
}

export function ExperienceItem({
  years,
  organization,
  title,
  description,
  className = "",
  imageUrl,
}: ExperienceItemProps) {
  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 ${className}`}
    >
      {/* Years column */}
      <div className="hidden md:flex flex-row items-center md:col-span-1 text-body-md text-muted-foreground h-12">
        {years}
      </div>

      {/* Description column */}
      <div className="relative col-span-1 md:col-span-2 flex flex-col gap-2 order-2 md:order-1">
        <div className="absolute -left-6 top-3 border-l h-6 border-foreground"></div>
        <h3 className="flex items-center text-heading-sm md:text-heading-md text-foreground h-12">
          {organization}
        </h3>
        <h4 className="text-body-md md:text-heading-sm text-foreground">
          {title}
        </h4>
        <p className="text-body-sm md:text-body-md text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Image column */}
      <div className="col-span-1 flex order-1 md:order-2 justify-start md:justify-end">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={organization}
          width={56}
          height={56}
          className="w-14 h-14 object-cover rounded-lg overflow-hidden border"
        />
      </div>
    </div>
  );
}
