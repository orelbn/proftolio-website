import { Button } from "@/components/ui/button";

interface ProjectActionsProps {
  liveHref?: string;
  codeHref?: string;
}

export function ProjectActions({ liveHref, codeHref }: ProjectActionsProps) {
  if (!liveHref && !codeHref) return null;

  return (
    <div className="flex items-center gap-2 mt-auto pt-2">
      {liveHref && (
        <Button
          nativeButton={false}
          variant="default"
          size="sm"
          render={<a href={liveHref} target="_blank" rel="noopener noreferrer" />}
        >
          Try it
        </Button>
      )}
      {codeHref && (
        <Button
          nativeButton={false}
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
          render={<a href={codeHref} target="_blank" rel="noopener noreferrer" />}
        >
          <img
            src="/GitHub_Invertocat_White.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4 invert dark:invert-0"
          />
          View code
        </Button>
      )}
    </div>
  );
}
