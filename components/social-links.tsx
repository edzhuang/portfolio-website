import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function SocialLinks() {
  return (
    <div className="flex flex-row gap-4">
      <Link
        href="https://github.com/edzhuang"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-7 h-7 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/eddie-zhuang/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-7 h-7 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
      <Link
        href="https://x.com/edzhuan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
      >
        <FaXTwitter className="w-7 h-7 text-foreground hover:text-muted-foreground transition-colors" />
      </Link>
    </div>
  );
}
