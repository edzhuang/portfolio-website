import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { mainNavItems, projectLinks } from "@/lib/navigation";

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
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 col-span-1">
        <div className="text-footer-heading">Projects</div>
        <ul className="flex flex-col gap-3">
          {projectLinks.map((project) => (
            <li key={project.href}>
              <Link
                href={project.href}
                className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {project.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
