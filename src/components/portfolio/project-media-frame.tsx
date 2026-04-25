import type { Project } from "@/data/projects";

export function ProjectMediaFrame({ project }: { project: Project }) {
  return (
    <div className="aspect-video overflow-hidden rounded-md border bg-card">
      {project.mediaType === "video" ? (
        <video src={project.mediaSrc} className="h-full w-full object-cover" controls playsInline />
      ) : (
        <img
          src={project.mediaSrc}
          alt={project.title}
          className="h-full w-full bg-background object-contain p-2"
          loading="lazy"
        />
      )}
    </div>
  );
}
