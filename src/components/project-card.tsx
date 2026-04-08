import { Badge } from "@/components/ui/badge";
import { ProjectActions } from "@/components/project/project-actions";
import { ProjectMedia } from "@/components/project/project-media";
import type { Project } from "@/data/projects";
import { getSafeExternalUrl } from "@/lib/safe-url";

export function ProjectCard({
  mediaType,
  mediaSrc,
  description,
  technologies,
  title,
  href,
  liveHref,
}: Project) {
  const safeHref = getSafeExternalUrl(href);
  const safeLiveHref = getSafeExternalUrl(liveHref);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-border last:border-b-0">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="px-2.5 py-0.5 font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        <ProjectActions liveHref={safeLiveHref} codeHref={safeHref} />
      </div>

      <ProjectMedia mediaType={mediaType} mediaSrc={mediaSrc} title={title} />
    </article>
  );
}
