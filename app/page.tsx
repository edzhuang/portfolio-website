"use client";

import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { ExperienceItem } from "@/components/experience-item";
import { AboutItem } from "@/components/about-item";
import { Footer } from "@/components/footer";
import { ScrollFade } from "@/components/scroll-fade";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground relative">
      {/* Minimal grid background like Stripe */}
      <div className="container mx-auto absolute inset-x-0 inset-y-0 pointer-events-none z-0">
        {/* 5 vertical lines */}
        <div className="absolute left-0 h-full border-l border-gridline" />
        <div className="absolute left-1/4 h-full border-l border-gridline border-dashed hidden md:block" />
        <div className="absolute left-2/4 h-full border-l border-gridline border-dashed" />
        <div className="absolute left-3/4 h-full border-l border-gridline border-dashed hidden md:block" />
        <div className="absolute right-0 h-full border-l border-gridline" />
      </div>

      {/* Header/Navigation - Floating with blur effect */}
      <Header />

      {/* Content Container */}
      <div className="container mx-auto flex flex-col gap-40 px-6 pt-48 pb-40">
        {/* Hero Section */}
        <ScrollFade delay={1}>
          <section className="flex flex-col gap-6">
            <h1 className="text-heading-xl mb-2">Eddie Zhuang</h1>
            <p className="text-heading-md text-muted-foreground">
              Computer science student at McMaster University
            </p>
          </section>
        </ScrollFade>

        {/* About Section */}
        <ScrollFade delay={2}>
          <section id="about" className="flex flex-col gap-12">
            <h2 className="text-heading-lg">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
              <AboutItem text="Short point whose bullet picks out a section of the grid lines" />
            </div>
          </section>
        </ScrollFade>

        {/* Experience Section */}
        <ScrollFade delay={3}>
          <section id="experience" className="flex flex-col gap-12">
            <h2 className="text-heading-lg">Experience</h2>
            <div className="flex flex-col gap-16">
              <ExperienceItem
                years="20XX - 20YY"
                organization="Organization"
                title="Job Title"
                description="Description of the job and what I worked on. Make it a sentence or two."
              />
              <ExperienceItem
                years="20XX - 20YY"
                organization="Organization"
                title="Job Title"
                description="Description of the job and what I worked on. Make it a sentence or two."
              />
              <ExperienceItem
                years="20XX - 20YY"
                organization="Organization"
                title="Job Title"
                description="Description of the job and what I worked on. Make it a sentence or two."
              />
            </div>
          </section>
        </ScrollFade>

        {/* Projects Section */}
        <ScrollFade delay={4}>
          <section id="projects">
            <h2 className="text-heading-lg mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 [&>*]:aspect-video">
              <ProjectCard
                title="Project Name"
                description="This is the project description. It gives a short description of the project."
                imageUrl="/placeholder.svg?height=225&width=400"
              />
              <ProjectCard
                title="Project Name"
                description="This is the project description. It gives a short description of the project."
                imageUrl="/placeholder.svg?height=225&width=400"
              />
              <ProjectCard
                title="Project Name"
                description="This is the project description. It gives a short description of the project."
                imageUrl="/placeholder.svg?height=225&width=400"
              />
              <ProjectCard
                title="Project Name"
                description="This is the project description. It gives a short description of the project."
                imageUrl="/placeholder.svg?height=225&width=400"
              />
            </div>
          </section>
        </ScrollFade>

        {/* Contact Section */}
        <ScrollFade delay={5}>
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
      <Footer />
    </div>
  );
}
