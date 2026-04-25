import { ProjectItem } from "@/components/portfolio/project-item";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-balance font-heading text-2xl font-semibold sm:text-3xl">
            Featured Projects
          </h2>
          <p className="text-pretty text-lg text-foreground/65 dark:text-foreground/75">
            A few projects across conversational agents, desktop tooling, domain-specific AI, and
            cloud infrastructure.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
