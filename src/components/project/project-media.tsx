interface ProjectMediaProps {
  videoSrc?: string;
  customImage?: string;
  title: string;
  primaryHref?: string;
  fallbackHref?: string;
}

export function ProjectMedia({
  videoSrc,
  customImage,
  title,
  primaryHref,
  fallbackHref,
}: ProjectMediaProps) {
  const linkHref = primaryHref ?? fallbackHref;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-md bg-muted group">
      {videoSrc && (
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          controls
          playsInline
        />
      )}
      {!videoSrc && customImage && linkHref && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
          aria-label={`Open ${title} in a new tab`}
        >
          <img
            src={customImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </a>
      )}
      {!videoSrc && customImage && !linkHref && (
        <img src={customImage} alt={title} className="w-full h-full object-cover" loading="lazy" />
      )}
    </div>
  );
}
