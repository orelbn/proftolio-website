import { ExperienceCard } from "../experience-card";

export function StrideExperience() {
  return (
    <ExperienceCard
      title="Co-founder & CTO"
      company="Stride Software Inc."
      duration="May 2024 - Sep 2025"
    >
      <div className="space-y-4">
        <p>
          Stride aimed to modernize the tools used by engineers, mainly
          structural engineers. As CTO, I was responsible for building the
          applications, and making the technical decisions. I didn't just build
          prototypes; I designed reliable fullstack products that followed best
          software development practices and conventions. Include single
          responsibility principle, automated testing, continuous integration
          and deployment, security best practices as outline by OWASP, and
          keeping up with the latest technology and software practices.
        </p>
        <p>
          The most interesting technical challenge was definitely the math
          engine. I designed a custom graph-based system that tracks
          dependencies between every calculation in a document. It works like a
          spreadsheet but for narrative reports—if you update a variable at the
          start, everything downstream recalculates instantly, handling complex
          cycles and unit conversions automatically.
        </p>
        <p>
          We used great open-source libraries as part of our projects I
          encourage you to check them out:
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
          <li>
            <a
              href="https://electronjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Electron
            </a>
          </li>
          <li>
            <a
              href="https://ai-sdk.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI SDK
            </a>
          </li>
          <li>
            <a
              href="https://better-auth.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BETTER-AUTH
            </a>
          </li>
        </ul>
      </div>
    </ExperienceCard>
  );
}
