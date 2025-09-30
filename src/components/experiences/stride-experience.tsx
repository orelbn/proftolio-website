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
          Another fun and interesting challenge was implementing editor
          navigation between regular text and custom components. Here is a
          function I wrote:
        </p>
        <div className="relative max-w-2xl">
          <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            typescript
          </div>
          <pre className="bg-muted/50 border rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap break-words">
            <code className="text-foreground leading-relaxed">
              {`/**
 * Checks if the next MathFieldNode is close enough to the current selection 
 * based on the direction of movement.
 * @param next - The next MathFieldNode.
 * @param moving - The direction of movement ('up' or 'down').
 * @returns True if the next MathFieldNode is close enough, false otherwise.
 */
function isCloseEnough(next: MathFieldNode, moving: 'up' | 'down') {
  const isMovingUp = moving === 'up';
  const selectionY = getSelectionY(isMovingUp ? 'top' : 'bottom');

  if (!selectionY) return false;
  const ref = next.getRef();

  const mathFieldY = ref.getBoundingClientRect()[isMovingUp ? 'bottom' : 'top'];

  // Space calculation in pixels (accounts for zoom)
  const spaceBetween = isMovingUp
    ? selectionY - mathFieldY
    : mathFieldY - selectionY;

  // Threshold chosen through testing - adjust with padding/margin changes
  const AccountForPossibleRowBelow = 30;

  return spaceBetween < AccountForPossibleRowBelow;
}

function getSelectionY(section: 'top' | 'bottom') {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0).cloneRange();
  let y: number = 0;
  
  if (range.getClientRects) {
    const rects = range.getClientRects();
    if (rects.length > 0) {
      const rect = section === 'top' ? rects[0] : rects[rects.length - 1];
      y = rect[section];
    }
  }

  return y;
}`}
            </code>
          </pre>
        </div>
        We used great open-source libraries as part of the project I encourage
        you to check them out:
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
