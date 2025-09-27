import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  isFirst?: boolean;
}

export function ExperienceCard({ 
  title, 
  company, 
  duration, 
  description, 
}: ExperienceCardProps) {
  return (
    <Card className="py-4">
      <CardContent>
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <Badge variant="outline">{duration}</Badge>
        </div>
        <p className="text-muted-foreground -translate-y-1">{company}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}