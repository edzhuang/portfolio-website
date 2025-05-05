interface NowItemProps {
  text: string
  className?: string
}

export function NowItem({ text, className = "" }: NowItemProps) {
  return (
    <div className={`relative pl-4 ${className}`}>
      <div className="absolute left-0 top-1.5 w-2 h-2 bg-foreground"></div>
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  )
}
