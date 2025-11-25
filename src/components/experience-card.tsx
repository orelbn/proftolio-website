import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ExperienceCardProps = {
  title: string;
  company: string;
  duration: string;
  children: React.ReactNode;
};

export function ExperienceCard({
  title,
  company,
  duration,
  children,
}: ExperienceCardProps) {
  return (
    <Card className="py-4">
      <CardContent>
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-foreground text-xl">{title}</h4>
          <Badge className="text-sm">{duration}</Badge>
        </div>
        <p className="text-muted-foreground -translate-y-1 text-lg">
          {company}
        </p>

        <div className="text-muted-foreground leading-relaxed">{children}</div>
      </CardContent>
    </Card>
  );
}
