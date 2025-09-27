import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Github, Image, Play } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  type: "demo" | "live" | "screenshots" | "portfolio";
  isWinner?: boolean;
  icon: "image" | "play" | "github";
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  href?: string;
  youtubeId?: string;
  customImage?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = {
    image: Image,
    play: Play,
    github: Github,
  }[project.icon];



  return (
    <Card>
      <CardContent className="flex flex-col">
        <div className="mb-4 flex-shrink-0">
          <CardTitle className="text-xl mb-3">
            {project.title}
          </CardTitle>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          {project.href && (
            <Button
              variant="outline"
              size="sm"
              className="w-fit"
              asChild
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          )}
        </div>

        {/* Bottom - Media (standard aspect ratio) */}
        <div className="aspect-video">
          {project.youtubeId ? (
            <div className="bg-muted rounded-lg relative overflow-hidden group w-full h-full">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.customImage ? (
            <div className="bg-muted rounded-lg relative overflow-hidden group w-full h-full cursor-pointer" 
                 onClick={project.href ? () => window.open(project.href, '_blank') : undefined}>
              <img
                src={project.customImage}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="bg-muted rounded-lg relative overflow-hidden group w-full h-full cursor-pointer" 
                 onClick={project.href ? () => window.open(project.href, '_blank') : undefined}>
              <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}>
                <IconComponent className={`w-20 h-20 ${project.iconColor}`} />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}