import { ExperienceCard } from "../experience-card";

export function StrideExperience() {
  return (
    <ExperienceCard
      title="Co-founder"
      company="Stride Software Inc."
      duration="May 2024 - Sep 2025"
    >
      <div className="space-y-2">
        <p>
          Stride is a startup focused on building software in the
          civil/structural engineering space. We built multiple products
          including Stride (a modernized calculation and documentation editor)
          and Shenko AI (an AI assistant for structural engineers).
        </p>
        <p>
          The math module was particularly interesting. I designed a graph-based
          system to track calculation dependencies to enable dynamic calculation
          functionality. The feature required keeping track of upstream and
          downstream nodes, cycle detection, and potential nodes so that if you
          added a math variable in the future it can be detected.
        </p>
        <p>
          We used great open-source libraries as part of the project I encourage
          you to check them out:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <a
              href="https://lexical.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lexical
            </a>
          </li>
          <li>
            <a
              href="https://mathlive.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MathLive
            </a>
          </li>
          <li>
            <a
              href="https://mathjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Math.js
            </a>
          </li>
        </ul>
      </div>
    </ExperienceCard>
  );
}
