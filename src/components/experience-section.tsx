import { BCRegistriesExperience } from "./experiences/bc-registries-experience";
import { InvokeExperience } from "./experiences/invoke-experience";
import { StrideExperience } from "./experiences/stride-experience";

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
      <div className="space-y-4">
        <StrideExperience />
        <BCRegistriesExperience />
        <InvokeExperience />
      </div>
    </section>
  );
}
