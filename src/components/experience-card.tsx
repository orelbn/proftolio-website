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
    <Card className="py-6 border-2 shadow-lg transition-all hover:border-primary/20">
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <div className="space-y-1">
            <h4 className="font-bold text-lg text-foreground drop-shadow-sm tracking-tight">
              {title}
            </h4>
            <p className="font-medium text-muted-foreground -translate-y-2">
              {company}
            </p>
          </div>
          <Badge variant="secondary" className="text-sm px-3 py-1 shadow-sm">
            {duration}
          </Badge>
        </div>

        <div className="text-foreground leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
