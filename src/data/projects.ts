export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featuredTechnologies?: string[];
  mediaType: "image" | "video";
  mediaSrc: string;
  href?: string;
  liveHref?: string;
};

export const projects: Project[] = [
  {
    id: "ore-ai",
    title: "Ore AI",
    description:
      "A personal conversational agent with a distinct personality, built around my interests, routines, projects, and favourite places.",
    technologies: [
      "React",
      "TanStack Router",
      "Cloudflare Workers",
      "AI SDK",
      "Drizzle ORM",
      "Better Auth",
      "MCP",
    ],
    featuredTechnologies: ["AI", "TanStack Start", "Cloudflare", "MCP"],
    href: "https://github.com/orelbn/ore-ai-web",
    liveHref: "https://oreai.orelbn.ca/",
    mediaType: "image",
    mediaSrc: "/oreai-preview.webp",
  },
  {
    id: "stride",
    title: "Stride",
    description:
      "A desktop workspace for structured notes and calculations, designed to modernize and improve how engineers document and reason through their work.",
    technologies: ["ElectronJS", "TypeScript", "React", "Lexical"],
    mediaType: "video",
    mediaSrc: "/stride-demo.mp4",
  },
  {
    id: "shenko-ai",
    title: "Shenko AI",
    description:
      "A domain-focused assistant for structural engineering questions, helping users explore technical concepts with context-aware responses.",
    technologies: ["Next.js", "TypeScript", "Python", "AI Agent"],
    mediaType: "image",
    mediaSrc: "/shenko-ai-demo.gif",
  },
  {
    id: "aws-room-booking",
    title: "AWS Room Booking System",
    description:
      "A room booking platform for checking availability, reserving shared spaces, and managing booking records through a simple web interface.",
    technologies: ["AWS", "Serverless", "MySQL", "React"],
    mediaType: "video",
    mediaSrc: "/aws-room-booking-demo.mp4",
  },
];
