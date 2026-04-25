import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, ShieldCheck, Zap } from "lucide-react";

export function AboutCard() {
  return (
    <Card className="w-fit max-w-2xl bg-card/80 backdrop-blur">
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="max-w-2xl text-pretty text-foreground/70 dark:text-foreground/80">
          With a background in Computer Science and Criminology, I bring an analytical approach to
          software engineering, grounded in understanding problems clearly before turning them into
          working systems.
        </p>
        <div className="grid gap-3 text-sm text-foreground/60 dark:text-foreground/70">
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" />
            <span>Focused on security, performance, and maintainability.</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap aria-hidden="true" />
            <span>
              Full-stack development across React, Python, TypeScript, and cloud platforms.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Coffee aria-hidden="true" />
            <span>Outside of code: running, lifting, soccer, and a good cup of coffee.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
