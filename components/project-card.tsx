import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  url,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="rounded-3xl overflow-hidden border border-gridline">
        {url ? (
          <Link href={url}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={400}
              height={225}
              className="w-full h-auto object-cover cursor-pointer transition-transform hover:scale-105"
            />
          </Link>
        ) : (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
      {url ? (
        <div className="inline-block">
          <Link href={url} className="group inline-block relative">
            <h3 className="text-heading-sm text-foreground inline-block">
              {title}
            </h3>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      ) : (
        <h3 className="text-heading-sm text-foreground">{title}</h3>
      )}
      <p className="text-body-md text-muted-foreground">{description}</p>
    </div>
  );
}
