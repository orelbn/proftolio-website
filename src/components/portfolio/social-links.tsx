import { SocialButton } from "@/components/portfolio/social-button";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <SocialButton
        href="https://github.com/orelbn"
        label="GitHub"
        ariaLabel="Open Orel's GitHub profile"
        iconSrc="/GitHub_Invertocat_White.svg"
      />
      <SocialButton
        href="https://linkedin.com/in/orelbn"
        label="LinkedIn"
        ariaLabel="Open Orel's LinkedIn profile"
        iconSrc="/InBug-White.png"
        iconClassName="h-4 w-4 object-contain invert dark:invert-0"
      />
    </div>
  );
}
