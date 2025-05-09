interface NowItemProps {
  text: string;
  className?: string;
}

export function AboutItem({ text, className = "" }: NowItemProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -left-6 border-l h-6 border-foreground"></div>
      <p className="text-body-sm md:text-body-md text-muted-foreground">
        {text}
      </p>
    </div>
  );
}
