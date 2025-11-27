import { HeroContent } from "@/components/hero/hero-content";
import { HeroSocials } from "@/components/hero/hero-socials";
import { HeroImage } from "./hero/hero-image";

export function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <HeroImage />
      <HeroContent />
      <HeroSocials />
    </section>
  );
}
