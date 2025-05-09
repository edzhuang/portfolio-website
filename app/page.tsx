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
        <div className="container flex flex-col gap-36 pt-48 pb-36">
          {/* Hero Section */}
          <ScrollFade delay={1}>
            <section className="flex flex-col gap-3">
              <h1 className="text-heading-xl">Eddie Zhuang</h1>
              <p className="text-heading-md text-muted-foreground">
                Computer science student
              </p>
            </section>
          </ScrollFade>

          {/* About Section */}
          <ScrollFade delay={2}>
            <section id="about" className="flex flex-col gap-8">
              <h2 className="text-heading-lg">About</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <AboutItem text="I'm a computer science student at McMaster University" />
                <AboutItem text="I have experience with full-stack development and machine learning" />
                <AboutItem text="Right now, I’m working on full-stack projects and searching for software engineering internships" />
                <AboutItem text="In the past, I've worked with genetic algorithms as a research assistant and organized a hackathon" />
              </div>
            </section>
          </ScrollFade>

          {/* Experience Section */}
          <ScrollFade delay={3}>
            <section id="experience" className="flex flex-col gap-8">
              <h2 className="text-heading-lg">Experience</h2>
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
          </ScrollFade>

          {/* Projects Section */}
          <ScrollFade delay={4}>
            <section id="projects" className="flex flex-col gap-8">
              <h2 className="text-heading-lg">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 [&>*]:aspect-video">
                <ProjectCard
                  title="ResNet"
                  description={
                    'My implementation of the paper "Deep Residual Learning for Image Recognition" from scratch in PyTorch'
                  }
                  imageUrl="/images/resnet.png"
                  url={"https://github.com/edzhuang/resnet"}
                />
                <ProjectCard
                  title="Pethsapp"
                  description="React Native app made for my high school to deliver announcement notifications, event updates, and general school information"
                  imageUrl="/images/pethsapp.png"
                  url={"https://www.tsac.ca/pethsapp"}
                />
                <ProjectCard
                  title="YRHacks Discord Bot"
                  description="Python Discord bot for YRHacks to automate participant verification and match attendees with mentors during the event"
                  imageUrl="/images/discord.png"
                  url={"https://github.com/yrhacks/yrhacks-discord-bot-2023"}
                />
                <ProjectCard
                  title="Air Hockey AI"
                  description="A reinforcement learning agent trained to play air hockey, made using the Unity ML-Agents toolkit"
                  imageUrl="/images/air-hockey-ai.png"
                  url={"https://edzhuang.itch.io/air-hockey-ai"}
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
