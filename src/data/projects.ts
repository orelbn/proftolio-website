export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
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
      "A conversational agent built around my own interests and hobbies. It has a distinct personality and can invoke tools that render visual UIs directly in the conversation.",
    technologies: [
      "React 19",
      "TanStack Router",
      "Cloudflare Workers",
      "AI SDK",
      "Drizzle ORM",
      "Better Auth",
      "MCP",
    ],
    href: "https://github.com/orelbn/ore-ai-web",
    liveHref: "https://oreai.orelbn.ca/",
    mediaType: "image",
    mediaSrc: "/oreai-preview.webp",
  },
  {
    id: "stride",
    title: "Stride",
    description:
      "Built with ElectronJS and React, using Lexical as the rich-text editor framework. State flows through a custom graph-based model that resolves calculation dependencies in order.",
    technologies: ["ElectronJS", "TypeScript", "React", "Lexical"],
    mediaType: "video",
    mediaSrc: "/stride-demo.mp4",
  },
  {
    id: "shenko-ai",
    title: "Shenko AI",
    description:
      "Built with Next.js and TypeScript on the frontend, with a Python backend. Integrates the Vercel AI SDK and scopes the model context toward structural engineering queries.",
    technologies: ["AI SDK", "Python", "TypeScript", "Next.js"],
    mediaType: "image",
    mediaSrc: "/shenko-ai-demo.gif",
  },
  {
    id: "aws-room-booking",
    title: "AWS Room Booking System",
    description:
      "Full-stack on AWS using CDK to provision Lambda, API Gateway, and an RDS MySQL database. Frontend is React with TypeScript.",
    technologies: ["AWS CDK", "TypeScript", "React", "MySQL"],
    mediaType: "video",
    mediaSrc: "/aws-room-booking-demo.mp4",
  },
];
