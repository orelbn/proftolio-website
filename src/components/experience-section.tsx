import { Accordion } from "@/components/ui/accordion";
import { BCRegistriesExperience } from "./experiences/bc-registries-experience";
import { InvokeExperience } from "./experiences/invoke-experience";
import { StrideExperience } from "./experiences/stride-experience";

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold tracking-tight">Experience</h3>
      <Accordion defaultValue={["stride"]} className="space-y-4">
        <StrideExperience />
        <BCRegistriesExperience />
        <InvokeExperience />
      </Accordion>
    </section>
  );
}
