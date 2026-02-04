import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type ExperienceCardProps = {
  value: string;
  title: string;
  company: string;
  duration: string;
  children: React.ReactNode;
};

export function ExperienceCard({
  value,
  title,
  company,
  duration,
  children,
}: ExperienceCardProps) {
  return (
    <AccordionItem
      value={value}
      className="group/experience relative px-6 border-2 rounded-2xl bg-card shadow-sm transition-all hover:border-primary/20 data-open:border-primary/30 data-open:shadow-md"
    >
      <AccordionTrigger className="flex flex-1 items-start justify-between py-6 hover:no-underline gap-4">
        <div className="flex flex-col items-start gap-1 text-left flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h4 className="font-semibold text-base text-foreground tracking-tight">
              {title}
            </h4>
            <Badge
              variant="outline"
              className="hidden sm:inline-flex text-[10px] font-semibold text-muted-foreground border-muted-foreground/20 uppercase tracking-wider"
            >
              {duration}
            </Badge>
          </div>
          <p className="text-sm font-medium text-muted-foreground">{company}</p>
          <Badge
            variant="outline"
            className="mt-2 sm:hidden text-[10px] font-semibold text-muted-foreground border-muted-foreground/20 uppercase tracking-wider"
          >
            {duration}
          </Badge>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pb-6">
        <div className="text-foreground leading-relaxed">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
