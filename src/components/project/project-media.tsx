import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  mediaType: "image" | "video";
  mediaSrc: string;
  title: string;
}

export function ProjectMedia({ mediaType, mediaSrc, title }: ProjectMediaProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-md bg-muted group md:-mt-4 md:self-start">
      {mediaType === "video" ? (
        <video src={mediaSrc} className="w-full h-full object-cover" controls playsInline />
      ) : (
        <img
          src={mediaSrc}
          alt={title}
          className={cn(
            "h-full w-full object-contain object-center bg-background p-2 transition-transform duration-500 sm:p-3",
          )}
          loading="lazy"
        />
      )}
    </div>
  );
}
