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
      <div className="absolute inset-0 pointer-events-none px-4 z-0">
        <div className="container relative w-full h-full">
          {/* 5 vertical lines */}
          <div className="absolute left-0 h-full border-l border-gridline" />
          <div className="absolute left-1/4 h-full border-l border-gridline border-dashed hidden md:block" />
          <div className="absolute left-2/4 h-full border-l border-gridline border-dashed" />
          <div className="absolute left-3/4 h-full border-l border-gridline border-dashed hidden md:block" />
          <div className="absolute right-0 h-full border-l border-gridline" />
        </div>
      </div>

      {/* Header/Navigation - Floating with blur effect */}
      <div className="fixed z-10 left-0 right-0 pt-4 md:pt-6 transition-[padding] duration-300 flex justify-center w-full px-4">
        <Header />
      </div>

      {/* Content Container */}
      <div className="w-full px-4">
        <div className="container flex flex-col gap-36 pt-48 pb-40">
          {/* Hero Section */}
          <ScrollFade delay={1}>
            <section className="flex flex-col gap-3">
              <h1 className="text-heading-xl mb-2">Eddie Zhuang</h1>
              <p className="text-heading-md text-muted-foreground">
                Computer science at McMaster
              </p>
            </section>
          </ScrollFade>

          {/* About Section */}
          <ScrollFade delay={2}>
            <section id="about" className="flex flex-col gap-8">
              <h2 className="text-heading-lg">About</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <AboutItem text="I'm a computer science student at McMaster University with a passion for building clean, thoughtful software" />
                <AboutItem text="My current interests lie in full-stack development and machine learning" />
                <AboutItem text="Right now, I’m focused on improving my development skills through hands-on projects and preparing for software engineering internships" />
                <AboutItem text="Long-term, I’m aiming to work at a company where I can grow as an engineer, contribute to impactful products, and eventually dive deeper into ML infrastructure and AI tooling" />
              </div>
            </section>
          </ScrollFade>

          {/* Experience Section */}
          <ScrollFade delay={3}>
            <section id="experience" className="flex flex-col gap-8">
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
            <section id="projects" className="flex flex-col gap-8">
              <h2 className="text-heading-lg">Projects</h2>
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
              <div className="flex flex-col gap-4">
                <h2 className="text-heading-lg">Contact</h2>
                <p className="text-body-md text-muted-foreground mb-2">
                  Have an opportunity in mind, or just want to chat? <br />
                  Feel free to send me a message.
                </p>
              </div>
              <ContactForm />
            </section>
          </ScrollFade>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-4">
        <Footer />
      </div>
    </div>
  );
}
