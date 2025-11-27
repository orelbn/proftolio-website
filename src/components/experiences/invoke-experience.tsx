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
          I gained hands-on experience with live streaming technologies,
          focusing on improving both platform functionality and the user
          experience. While working with highly talented designers, project
          managers, and fellow developers.
        </p>
        <p>
          One highlight was resolving a critical synchronization bug where
          livestream perspectives would slowly drift out of sync, degrading the
          live experience. After an event, we received user feedback, and I
          noticed the issue myself while watching, so I started digging in. I
          realized that with network latency and varying processing times, the
          timestamps for each perspective gradually drift apart.
        </p>
        <p>
          To fix this, I implemented a synchronization mechanism that
          periodically checks and adjusts the timestamps of each perspective
          against a master clock. That meant calculating the time difference for
          each perspective and applying small, controlled adjustments to bring
          them back in sync, while allowing some tolerance to avoid jittery
          playback. After deploying the fix, the next event ran super smoothly.
        </p>
      </div>
    </ExperienceCard>
  );
}
