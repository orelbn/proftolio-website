import { ExperienceCard } from "../experience-card";

export function BCRegistriesExperience() {
  return (
    <ExperienceCard
      title="Application Developer Co-op"
      company="BC Registries (Service BC)"
      duration="May 2023 - Aug 2023"
    >
      <div className="space-y-2">
        <p>
          I was part of the modernization project in BC Registries, focusing on
          upgrading their technology stack. In that role, I implemented new
          registration flows for manufactured homes and personal property
          registries.
        </p>
        <p>
          It was a great experience, at this point this was my 2nd co-op so I
          was more familiar with the software development process, and was able
          to hit the ground running relatively quickly. I learned Vue.js, which
          was fun because up to that point I was mainly using React. Vue was
          very intuitive and I liked the way that there was more built-in state
          management manage as in comparsion to React. I also enjoyed how you
          can declare your styling in the same file as your component, and that
          they already had standard global context library that you can opt
          into.
        </p>
        <p>
          I was lucky to be part of a great team. We had project managers, UI
          designers, QA testers, fellow developers, and subject matter experts
          all very approachable and collaborative. Getting to work closely with
          each person was the highlight of my experience.
        </p>
      </div>
    </ExperienceCard>
  );
}
