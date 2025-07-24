// Navigation data for the portfolio website
// Used in header, footer, and any other navigation elements

// Main navigation items that appear in the primary nav
export const mainNavItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Project links - centralized for consistency
export const projectLinks = [
  {
    href: "https://place-app.com",
    label: "Place",
    description:
      "A recreation of Reddit's r/place, a realtime online collaborative canvas built with Next.js and Supabase",
    imageUrl: "/images/place.png",
  },
  {
    href: "https://github.com/edzhuang/resnet",
    label: "ResNet",
    description:
      'My implementation of the paper "Deep Residual Learning for Image Recognition" from scratch in PyTorch',
    imageUrl: "/images/resnet.png",
  },
  {
    href: "https://www.tsac.ca/pethsapp",
    label: "Pethsapp",
    description:
      "React Native app made for my high school to deliver announcement notifications, event updates, and general school information",
    imageUrl: "/images/pethsapp.png",
  },
  {
    href: "https://edzhuang.itch.io/air-hockey-ai",
    label: "Air Hockey AI",
    description:
      "A reinforcement learning agent trained to play air hockey, made using the Unity ML-Agents toolkit",
    imageUrl: "/images/air-hockey-ai.png",
  },
];
