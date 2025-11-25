import { ExperienceCard } from "../experience-card";

export function InvokeExperience() {
  return (
    <ExperienceCard
      title="Web Developer Co-op"
      company="Invoke Co."
      duration="Sep 2022 - Dec 2022"
    >
      <div className="space-y-2">
        <p>
          Gained experience working with live streaming technologies. Focused on
          improving platform functionality and user experience.
        </p>
        <p>
          I resolved a critical synchronization bug where livestream
          perspectives would drift out of sync, degrading the live experience
          quality. This was after an event where we got user feedback and I
          observed the synchronization issue myself, soon after I started
          investigating. I quickly realized that due to network latency and
          varying processing times, the timestamps can drift apart over time for
          the different perspectives.
        </p>
        <p>
          To fix this, I implemented a synchronization mechanism that
          periodically checks and adjusts the timestamps of each perspective
          based on a master clock. This involved calculating the time difference
          between each perspective and the master clock, then applying small
          adjustments to keep them in sync. I did allow for some tolerance to
          avoid constant adjustments that could lead to jittery playback. After
          deploying the fix, the next event ran smoothly without any
          synchronization issues, significantly enhancing the user experience.
        </p>
      </div>
    </ExperienceCard>
  );
}
