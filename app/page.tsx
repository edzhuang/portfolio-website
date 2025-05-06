"use client"

import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { ExperienceItem } from "@/components/experience-item"
import { NowItem } from "@/components/now-item"
import { SocialLinks } from "@/components/social-links"
import { Footer } from "@/components/footer"
import { ScrollFade } from "@/components/scroll-fade"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Minimal grid background like Stripe */}
      <div className="absolute inset-0 max-w-6xl mx-auto left-0 right-0 pointer-events-none">
        {/* 5 vertical lines */}
        <div className="absolute left-0 h-full border-l border-gridline/30" />
        <div className="absolute left-1/4 h-full border-l border-gridline/30" />
        <div className="absolute left-2/4 h-full border-l border-gridline/30" />
        <div className="absolute left-3/4 h-full border-l border-gridline/30" />
        <div className="absolute right-0 h-full border-l border-gridline/30" />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-40">
        {/* Header/Navigation - Floating with blur effect */}
        <div className="sticky top-6 flex justify-center w-full z-10">
          <header className="flex items-center justify-between px-6 py-3 rounded-full bg-secondary/70 backdrop-blur-md shadow-lg border border-gridline/20 w-full">
            <div className="text-heading-sm">Eddie Zhuang</div>
            <nav className="flex space-x-12">
              <Link href="#projects" className="text-body-md hover:text-muted-foreground transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-body-md hover:text-muted-foreground transition-colors">
                Experience
              </Link>
              <Link href="#now" className="text-body-md hover:text-muted-foreground transition-colors">
                Now
              </Link>
              <Link href="#contact" className="text-body-md hover:text-muted-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </header>
        </div>

        {/* Hero Section */}
        <ScrollFade>
          <section>
            <h1 className="text-heading-xl mb-2">Eddie Zhuang</h1>
            <p className="text-heading-md text-muted-foreground">Computer science student at McMaster University</p>
          </section>
        </ScrollFade>

        {/* Projects Section */}
        <ScrollFade>
          <section id="projects">
            <h2 className="text-2xl font-normal mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [&>*]:aspect-video">
              <ScrollFade delay={1}>
                <ProjectCard
                  title="Project Name"
                  description="This is the project description. It gives a short description of the project."
                  imageUrl="/placeholder.svg?height=225&width=400"
                />
              </ScrollFade>
              <ScrollFade delay={2}>
                <ProjectCard
                  title="Project Name"
                  description="This is the project description. It gives a short description of the project."
                  imageUrl="/placeholder.svg?height=225&width=400"
                />
              </ScrollFade>
              <ScrollFade delay={3}>
                <ProjectCard
                  title="Project Name"
                  description="This is the project description. It gives a short description of the project."
                  imageUrl="/placeholder.svg?height=225&width=400"
                />
              </ScrollFade>
              <ScrollFade delay={4}>
                <ProjectCard
                  title="Project Name"
                  description="This is the project description. It gives a short description of the project."
                  imageUrl="/placeholder.svg?height=225&width=400"
                />
              </ScrollFade>
            </div>
          </section>
        </ScrollFade>

        {/* Experience Section */}
        <ScrollFade>
          <section id="experience">
            <h2 className="text-2xl font-normal mb-8">Experience</h2>
            <div className="space-y-12">
              <ScrollFade delay={1}>
                <ExperienceItem
                  years="20XX - 20YY"
                  organization="Organization"
                  title="Job Title"
                  description="Description of the job and what I worked on. Make it a sentence or two."
                />
              </ScrollFade>
              <ScrollFade delay={2}>
                <ExperienceItem
                  years="20XX - 20YY"
                  organization="Organization"
                  title="Job Title"
                  description="Description of the job and what I worked on. Make it a sentence or two."
                />
              </ScrollFade>
              <ScrollFade delay={3}>
                <ExperienceItem
                  years="20XX - 20YY"
                  organization="Organization"
                  title="Job Title"
                  description="Description of the job and what I worked on. Make it a sentence or two."
                />
              </ScrollFade>
            </div>
          </section>
        </ScrollFade>

        {/* Now Section */}
        <ScrollFade>
          <section id="now">
            <h2 className="text-2xl font-normal mb-8">Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollFade delay={1}>
                <NowItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
              <ScrollFade delay={2}>
                <NowItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
              <ScrollFade delay={3}>
                <NowItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
            </div>
          </section>
        </ScrollFade>

        {/* Contact Section */}
        <ScrollFade>
          <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-normal mb-4">Contact</h2>
              <p className="text-muted-foreground mb-2">Have an opportunity in mind, or just want to chat?</p>
              <p className="text-muted-foreground">Feel free to send me a message.</p>
            </div>
            <ContactForm />
          </section>
        </ScrollFade>

        {/* Footer */}
        <ScrollFade>
          <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gridline">
            <div>
              <div className="text-foreground mb-4">Eddie Zhuang</div>
              <SocialLinks />
            </div>
            <Footer />
          </footer>
        </ScrollFade>
      </div>
    </div>
  )
}
