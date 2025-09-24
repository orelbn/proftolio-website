import React from "react";
import "../css/printable-resume.css";

const PrintableResumePage: React.FC = () => {
  return (
    <div className="printable-resume">
      <div className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1>Orel Ben Neriah</h1>
          <div className="contact-info">
            <span>github.com/orelbn</span>
            <span>•</span>
            <span>orelbn.ca</span>
            <span>•</span>
            <span>linkedin.com/in/orel-ben-neriah-401590216</span>
          </div>
        </header>

        {/* Technologies */}
        <section className="resume-section">
          <h2>Technologies</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <strong>Languages:</strong> TypeScript, Python, SQL
            </div>
            <div className="tech-category">
              <strong>Frameworks & Libraries:</strong> Next.js, React, Vue,
              Tailwind CSS 4, Shadcn, Zustand, Drizzle ORM, Electron JS,
              Lexical, Vercel AI SDK
            </div>
            <div className="tech-category">
              <strong>Databases & Cloud:</strong> AWS, PostgreSQL + pgvector,
              Redis, DynamoDB, Supabase
            </div>
            <div className="tech-category">
              <strong>Tools & Testing:</strong> Docker, Git, Bun, Vitest,
              Playwright, Jest, PyTest, AWS CDK, SST
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Experience</h2>

          <div className="job">
            <div className="job-header">
              <div>
                <h3>Stride Software Inc.</h3>
                <div className="job-title">Co-founder</div>
              </div>
              <div className="job-location-date">
                <div>Vancouver, BC</div>
                <div>May 2024 – September 2025</div>
              </div>
            </div>
            <ul className="job-bullets">
              <li>
                Launched a specialized AI Assistant for structural engineers,
                with a Python-based PDF ingestion pipeline for RAG, optimized
                performance with Redis caching, and integrated secure
                authentication and Stripe subscription billing.
              </li>
              <li>
                Released a desktop application for engineering calculations and
                documentation, that handles large-context state management, and
                implements a custom graph-based algorithm for efficient handling
                of calculations.
              </li>
              <li>
                Upgraded a client&apos;s Postgres database for managing a large
                amount of internal fenestration data, implementing row-level
                security, RBAC, and RPCs to build a secure and efficient system
                for handling bulk data uploads and complex data retrieval.
              </li>
              <li>
                Developed modern UIs using React 19, Tailwind, and Shadcn,
                delivering accessible and responsive user experiences.
              </li>
              <li>
                Implemented multi-layer testing across all projects (unit,
                integration, E2E, and database testing), analytics, and CI/CD
                pipelines to ensure quality and efficient deployment.
              </li>
              <li>
                Used Docker to support local development and testing, and
                deployed applications to AWS with infrastructure as code.
              </li>
            </ul>
            <div className="job-tech">
              <strong>Technologies:</strong> TypeScript, Python, Next.js 15,
              Electron JS, React 19, Vercel AI SDK, Zustand, Postgres, AWS,
              Drizzle ORM, Docker, Vitest, Playwright
            </div>
          </div>

          <div className="job">
            <div className="job-header">
              <div>
                <h3>BC Registries (Service BC)</h3>
                <div className="job-title">Application Developer Co-op</div>
              </div>
              <div className="job-location-date">
                <div>Vancouver, BC</div>
                <div>May 2023 – Aug 2023</div>
              </div>
            </div>
            <ul className="job-bullets">
              <li>
                Exceeded expectations by contributing 50+ pull requests,
                implementing new registration flows, fixing bugs, and improving
                code quality for personal and manufactured home registery.
              </li>
              <li>
                Actively participated in stakeholder meetings, demos, and
                cross-team discussions to improve code quality and developer
                experience.
              </li>
            </ul>
            <div className="job-tech">
              <strong>Technologies:</strong> TypeScript, Vue, Jest
            </div>
          </div>

          <div className="job">
            <div className="job-header">
              <div>
                <h3>Invoke Co.</h3>
                <div className="job-title">Web Developer Co-op</div>
              </div>
              <div className="job-location-date">
                <div>Vancouver, BC</div>
                <div>Sep 2022 – Dec 2022</div>
              </div>
            </div>
            <ul className="job-bullets">
              <li>
                Delivered new features for the live-streaming platform Incrowd,
                including analytics upgrades, audio/video synchronization, and
                security improvements.
              </li>
              <li>
                Identified and resolved development issues through collaboration
                with the team.
              </li>
              <li>
                Enhanced platform security by implementing AWS WAF and CORS
                policies.
              </li>
            </ul>
            <div className="job-tech">
              <strong>Technologies:</strong> TypeScript, React, GraphQL, AWS
              (API Gateway, AppSync, DynamoDB, IAM, Lambda, S3, WAF)
            </div>
          </div>
        </section>

        {/* Open Source & Education */}
        <div className="two-column">
          <section className="resume-section">
            <h2>Open Source Contributions</h2>
            <div className="open-source">
              <h3>mathjs</h3>
              <div className="project-period">Ongoing</div>
              <ul>
                <li>
                  Updated TypeScript definitions to include generics, improving
                  type safety and inference.
                </li>
                <li>
                  Fixed bugs and enhanced developer experience for TypeScript
                  users.
                </li>
                <li>Updated documentation for clarity and usability.</li>
              </ul>
              <div className="project-tech">
                <strong>Technologies:</strong> JavaScript, TypeScript, Node.js
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="education">
              <div>
                <strong>Bachelor of Science in Computer Science</strong>
              </div>
              <div>University of British Columbia | 2024</div>
            </div>
            <div className="education">
              <div>
                <strong>Bachelor of Arts</strong>
              </div>
              <div>Simon Fraser University | 2020</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrintableResumePage;
