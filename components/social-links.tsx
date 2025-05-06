import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export function SocialLinks() {
  return (
    <div className="flex flex-row gap-6">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="w-8 h-8 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="w-8 h-8 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
      <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
        <SiX className="w-8 h-8 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
    </div>
  )
}
