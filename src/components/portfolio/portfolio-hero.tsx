import { AboutCard } from "@/components/portfolio/about-card";
import { SocialLinks } from "@/components/portfolio/social-links";

export function PortfolioHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden border-b">
      <img
        src="/orel-beatiful-picture.webp"
        alt="Orel standing outdoors in front of hills and sky"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-background/30 dark:bg-background/65" />
      <div className="relative flex min-h-screen flex-col justify-between gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-balance font-heading text-4xl font-bold">Orel Ben Neriah</h1>
          <p className="text-lg text-foreground/60 dark:text-foreground/70 sm:text-2xl">
            Full Stack Software Engineer
          </p>
          <SocialLinks />
        </div>
        <AboutCard />
      </div>
    </section>
  );
}
