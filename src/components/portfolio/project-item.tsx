import { ProjectActions } from "@/components/portfolio/project-actions";
import { ProjectMediaFrame } from "@/components/portfolio/project-media-frame";
import { ProjectTechnologies } from "@/components/portfolio/project-technologies";
import type { Project } from "@/data/projects";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="grid gap-5 border-t border-primary/35 py-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-balance font-heading text-2xl font-semibold">{project.title}</h3>
        <ProjectTechnologies project={project} />
        <p className="text-pretty leading-7 text-foreground/65 dark:text-foreground/75">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <ProjectActions project={project} />
        <ProjectMediaFrame project={project} />
      </div>
    </article>
  );
}
