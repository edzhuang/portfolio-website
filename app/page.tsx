"use client";

import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/ui/project-card";
import { ExperienceItem } from "@/components/ui/experience-item";
import { AboutItem } from "@/components/ui/about-item";
import { Footer } from "@/components/footer";
import { ScrollFade } from "@/components/ui/scroll-fade";
import { Header } from "@/components/ui/header";
import { projectLinks } from "@/lib/navigation";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground relative">
      {/* Minimal grid background like Stripe */}
      <div className="absolute inset-0 pointer-events-none px-4">
        <div className="container relative w-full h-full">
          {/* 5 vertical lines */}
          <div className="absolute left-0 h-full border-l" />
          <div className="absolute left-1/4 h-full border-l border-dashed hidden md:block" />
          <div className="absolute left-2/4 h-full border-l border-dashed hidden md:block" />
          <div className="absolute left-3/4 h-full border-l border-dashed hidden md:block" />
          <div className="absolute right-0 h-full border-l" />
        </div>
      </div>

      {/* Header/Navigation - Floating with blur effect */}
      <div className="fixed z-10 left-0 right-0 pt-4 md:pt-6 transition-[padding] duration-300 flex justify-center w-full px-4">
        <Header />
      </div>

      {/* Content Container */}
      <div className="w-full px-4">
        <div className="container flex flex-col">
          {/* Hero Section */}
          <ScrollFade delay={1}>
            <section className="flex flex-col gap-3 pt-32 md:pt-36 pb-12 md:pb-16 text-center md:text-left">
              <h1 className="text-heading-lg md:text-heading-xl">
                Eddie Zhuang
              </h1>
              <p className="text-heading-sm md:text-heading-md text-muted-foreground">
                Computer science at McMaster
              </p>
            </section>
          </ScrollFade>
          {/* About Section */}
          <ScrollFade delay={2}>
            <section className="flex flex-col gap-8 py-6 md:py-8">
              <h2 id="about" className="text-heading-md md:text-heading-lg">
                About
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                <AboutItem text="I'm a computer science student at McMaster University" />
                <AboutItem text="I have experience with full-stack development and machine learning" />
                <AboutItem text="Right now, I’m working on full-stack projects and searching for software engineering internships" />
                <AboutItem text="In the past, I've worked with genetic algorithms as a research assistant and organized a hackathon" />
              </div>
            </section>
          </ScrollFade>
          {/* Experience Section */}
          <ScrollFade delay={3}>
            <section className="flex flex-col gap-8 py-12 md:py-16">
              <h2
                id="experience"
                className="text-heading-md md:text-heading-lg"
              >
                Experience
              </h2>
              <div className="flex flex-col gap-16">
                <ExperienceItem
                  years="2024"
                  organization="McMaster University"
                  title="Research Assistant"
                  description="Implemented genetic algorithm techniques for reinforcement learning tasks"
                  imageUrl="/images/mcmaster.png"
                />
                <ExperienceItem
                  years="2022 - 2023"
                  organization="YRHacks"
                  title="Technology Executive"
                  description="Developed a Discord bot and assisted with the website for the York Region's student hackathon"
                  imageUrl="/images/yrhacks.png"
                />
              </div>
            </section>
          </ScrollFade>{" "}
          {/* Projects Section */}
          <ScrollFade delay={4}>
            <section className="flex flex-col gap-8 py-12 md:py-16">
              <h2 id="projects" className="text-heading-md md:text-heading-lg">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 [&>*]:aspect-video">
                {projectLinks.map((project) => (
                  <ProjectCard
                    key={project.href}
                    title={project.label}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    url={project.href}
                  />
                ))}
              </div>
            </section>
          </ScrollFade>
          {/* Contact Section */}
          <ScrollFade delay={5}>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-28 md:py-32">
              <div className="flex flex-col gap-4">
                <h2 id="contact" className="text-heading-md md:text-heading-lg">
                  Contact
                </h2>
                <p className="text-body-sm md:text-body-md text-muted-foreground mb-2">
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
