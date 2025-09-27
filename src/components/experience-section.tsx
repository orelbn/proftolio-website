import { ExperienceCard } from "@/components/experience-card";

const experiences = [
  {
    title: "Co-founder",
    company: "Stride Software Inc.",
    duration: "May 2024 - Sep 2025",
    description: "Launched specialized AI Assistant for structural engineers with Python-based RAG pipeline and Redis caching. Released desktop app using Electron JS with custom graph-based algorithm for engineering calculations. Implemented multi-layer testing, CI/CD pipelines, and deployed to AWS with infrastructure as code."
  },
  {
    title: "Application Developer Co-op",
    company: "BC Registries (Service BC)",
    duration: "May 2023 - Aug 2023",
    description: "Contributed 50+ pull requests improving personal property and manufactured home registries with Vue and TypeScript."
  },
  {
    title: "Web Developer Co-op",
    company: "Invoke Co.",
    duration: "Sep 2022 - Dec 2022",
    description: "Delivered new features for Incrowd live-streaming platform including analytics upgrades and enhanced security with AWS WAF."
  }
];

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
      <div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.duration}`}
            title={experience.title}
            company={experience.company}
            duration={experience.duration}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
}
