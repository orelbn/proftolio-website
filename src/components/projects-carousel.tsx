import { ProjectCard } from "@/components/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";

export function ProjectsCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);
  return (
    <section className="space-y-6">
      <Carousel setApi={setApi} className="w-full mb-0 mx-auto">
        <div className="flex mb-4 justify-between items-center">
          <h3 className="text-2xl font-semibold text-foreground">
            Featured Projects
          </h3>
          <div className="flex gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>

        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id}>
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
