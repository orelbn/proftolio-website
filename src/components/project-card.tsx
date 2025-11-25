import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  type: "demo" | "live" | "screenshots" | "portfolio";
  isWinner?: boolean;
  icon: "image" | "play" | "github";
  iconColor: string;
  href?: string;
  link?: string;
  linkText?: string;
  youtubeId?: string;
  customImage?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-2 h-full group">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted relative ring-1 ring-border/50 shadow-sm transition-all duration-300 group-hover:shadow-md">
        {project.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : project.customImage ? (
          <div
            className="w-full h-full cursor-pointer relative"
            onClick={
              project.href
                ? () => window.open(project.href, "_blank")
                : undefined
            }
          >
            <img
              src={project.customImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="w-full h-full cursor-pointer relative"
            onClick={
              project.href
                ? () => window.open(project.href, "_blank")
                : undefined
            }
          ></div>
        )}
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="flex gap-1 shrink-0">
            {project.link && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  title="Visit Website"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.href && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  title="View Code"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} className="px-2.5 py-0.5 font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
