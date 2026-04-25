import { Button } from "@/components/ui/button";

type SocialButtonProps = {
  href: string;
  label: string;
  ariaLabel: string;
  iconSrc: string;
  iconClassName?: string;
};

export function SocialButton({
  href,
  label,
  ariaLabel,
  iconSrc,
  iconClassName,
}: SocialButtonProps) {
  return (
    <Button
      nativeButton={false}
      size="sm"
      variant="outline"
      render={<a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} />}
    >
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className={iconClassName ?? "h-4 w-4 invert dark:invert-0"}
      />
      {label}
    </Button>
  );
}
