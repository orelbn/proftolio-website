import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { getSafeExternalUrl } from "@/lib/safe-url";

const moreProjectsHref = getSafeExternalUrl("https://github.com/orelbn");

export function ProjectsSection() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl font-semibold">Featured Projects</h3>

      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}

      {moreProjectsHref && (
        <div className="pt-4 text-center">
          <a
            href={moreProjectsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects on GitHub →
          </a>
        </div>
      )}
    </section>
  );
}
