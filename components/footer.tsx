import Link from "next/link"

export function Footer() {
  return (
    <>
      <div className="space-y-2">
        <div className="text-foreground font-normal">Landing</div>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#now" className="text-muted-foreground hover:text-foreground transition-colors">
              Now
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <div className="text-foreground font-normal">Projects</div>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Vercel Deploy Bot
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Air Hockey AI
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              AI Bot Behavior
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
