import { ModeToggle } from "@/components/mode-toggle";
import { FeaturedProjects } from "@/components/portfolio/featured-projects";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";

export function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <main className="flex flex-col gap-8 pb-6">
        <PortfolioHero />
        <FeaturedProjects />
      </main>
    </div>
  );
}
