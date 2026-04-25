import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { getSafeExternalUrl } from "@/lib/safe-url";
import { FileCode2, Play } from "lucide-react";

export function ProjectActions({ project }: { project: Project }) {
  const safeHref = getSafeExternalUrl(project.href);
  const safeLiveHref = getSafeExternalUrl(project.liveHref);

  if (!safeHref && !safeLiveHref) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {safeLiveHref ? (
        <Button
          nativeButton={false}
          size="sm"
          render={<a href={safeLiveHref} target="_blank" rel="noopener noreferrer" />}
        >
          <Play data-icon="inline-start" />
          Try it
        </Button>
      ) : null}
      {safeHref ? (
        <Button
          nativeButton={false}
          size="sm"
          variant="ghost"
          render={<a href={safeHref} target="_blank" rel="noopener noreferrer" />}
        >
          <FileCode2 data-icon="inline-start" />
          View code
        </Button>
      ) : null}
    </div>
  );
}
