import Link from "next/link"
import { Github, Linkedin, X } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github className="w-5 h-5 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
      <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
        <X className="w-5 h-5 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
    </div>
  )
}
