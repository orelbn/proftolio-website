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
          <h4 className="font-semibold text-foreground">{title}</h4>
          <Badge variant="outline">{duration}</Badge>
        </div>
        <p className="text-muted-foreground -translate-y-1">{company}</p>

        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
