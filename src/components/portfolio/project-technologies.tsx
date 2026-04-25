import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectTechnologies({ project }: { project: Project }) {
  const visibleTechnologies = project.featuredTechnologies ?? project.technologies.slice(0, 4);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechnologies.map((tech) => (
        <Badge key={tech} variant="secondary">
          {tech}
        </Badge>
      ))}
    </div>
  );
}
