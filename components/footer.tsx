import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="container grid grid-cols-2 md:grid-cols-4 px-6 pt-12 pb-24 gap-12 border-t border-gridline relative z-10">
      <div className="flex flex-col gap-6 col-span-2">
        <Link
          href=""
          className="text-heading-sm text-foreground hover:text-muted-foreground transition-colors"
        >
          Eddie Zhuang
        </Link>
        <SocialLinks />
      </div>

      <div className="flex flex-col gap-6 col-span-1">
        <div className="text-footer-heading">Landing</div>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="#about"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 col-span-1">
        <div className="text-footer-heading">Projects</div>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="#"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ResNet
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pethsapp
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              YRHacks Discord Bot
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Air Hockey AI
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
