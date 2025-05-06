"use client";

import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { ExperienceItem } from "@/components/experience-item";
import { AboutItem } from "@/components/about-item";
import { Footer } from "@/components/footer";
import { ScrollFade } from "@/components/scroll-fade";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground relative px-4">
      {/* Minimal grid background like Stripe */}
      <div className="absolute inset-x-4 inset-y-0 max-w-[1080px] mx-auto pointer-events-none">
        {/* 5 vertical lines */}
        <div className="absolute left-0 h-full border-l border-gridline" />
        <div className="absolute left-1/4 h-full border-l border-gridline" />
        <div className="absolute left-2/4 h-full border-l border-gridline" />
        <div className="absolute left-3/4 h-full border-l border-gridline" />
        <div className="absolute right-0 h-full border-l border-gridline" />
      </div>

      {/* Header/Navigation - Floating with blur effect */}
      <div className="fixed mx-auto w-full top-6 px-4 flex justify-center z-10">
        <div className="max-w-[1080px] w-full px-6">
          <header className="flex items-center justify-between w-full px-6 py-3 rounded-full bg-secondary/70 backdrop-blur-md shadow-lg border border-gridline">
            <Link
              href=""
              className="text-body-md hover:text-muted-foreground transition-colors"
            >
              Eddie Zhuang
            </Link>
            <nav className="flex space-x-12">
              <Link
                href="#about"
                className="text-body-sm hover:text-muted-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-body-sm hover:text-muted-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-body-sm hover:text-muted-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-body-sm hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </header>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-40 max-w-[1080px] px-6 pt-48 pb-40">
        {/* Hero Section */}
        <section className="flex flex-col gap-6">
          <ScrollFade delay={1}>
            <h1 className="text-heading-xl mb-2">Eddie Zhuang</h1>
          </ScrollFade>
          <ScrollFade delay={2}>
            <p className="text-heading-md text-muted-foreground">
              Computer science student at McMaster University
            </p>
          </ScrollFade>
        </section>

        {/* About Section */}
        <ScrollFade>
          <section id="about" className="flex flex-col gap-12">
            <h2 className="text-heading-lg">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <ScrollFade delay={1}>
                <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
              <ScrollFade delay={2}>
                <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
              <ScrollFade delay={3}>
                <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
              <ScrollFade delay={4}>
                <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              </ScrollFade>
            </div>
          </section>
        </ScrollFade>

        {/* Experience Section */}
        <ScrollFade>
          <section id="experience" className="flex flex-col gap-12">
            <h2 className="text-heading-lg">Experience</h2>
            <div className="flex flex-col gap-16">
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

        {/* Projects Section */}
        <ScrollFade>
          <section id="projects">
            <h2 className="text-heading-lg mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 [&>*]:aspect-video">
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

        {/* Contact Section */}
        <ScrollFade>
          <section
            id="contact"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-heading-lg mb-6">Contact</h2>
              <p className="text-body-md text-muted-foreground mb-2">
                Have an opportunity in mind, or just want to chat?
              </p>
              <p className="text-body-md text-muted-foreground">
                Feel free to send me a message.
              </p>
            </div>
            <ContactForm />
          </section>
        </ScrollFade>
      </div>

      {/* Footer */}
      <div className="w-full max-w-[1080px]">
        <Footer />
      </div>
    </div>
  );
}
