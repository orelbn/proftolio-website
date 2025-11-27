import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroImage() {
  return (
    <Avatar className="size-36 lg:size-48 mx-auto">
      <AvatarImage src="/profile.webp" alt="Orel Ben Neriah" loading="lazy" />
      <AvatarFallback className="text-xl bg-primary text-primary-foreground">
        OBN
      </AvatarFallback>
    </Avatar>
  );
}
