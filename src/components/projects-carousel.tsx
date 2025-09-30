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
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground text-center">
        Featured Projects
      </h3>

      <Carousel
        setApi={setApi}
        className="w-full max-w-3xs sm:max-w-lg md:max-w-lg mb-0 lg:max-w-4xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </section>
  );
}
