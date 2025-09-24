import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-foreground">Co-founder</h4>
              <Badge variant="outline">May 2024 - Sep 2025</Badge>
            </div>
            <p className="text-muted-foreground mb-2">Stride Software Inc.</p>
            <p className="text-sm text-muted-foreground">
              Launched specialized AI Assistant for structural engineers with
              Python-based RAG pipeline and Redis caching. Released desktop app
              using Electron JS with custom graph-based algorithm for
              engineering calculations. Implemented multi-layer testing, CI/CD
              pipelines, and deployed to AWS with infrastructure as code.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-foreground">
                Application Developer Co-op
              </h4>
              <Badge variant="outline">May 2023 - Aug 2023</Badge>
            </div>
            <p className="text-muted-foreground mb-2">
              BC Registries (Service BC)
            </p>
            <p className="text-sm text-muted-foreground">
              Contributed 50+ pull requests improving personal property and
              manufactured home registries with Vue and TypeScript.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-foreground">
                Web Developer Co-op
              </h4>
              <Badge variant="outline">Sep 2022 - Dec 2022</Badge>
            </div>
            <p className="text-muted-foreground mb-2">Invoke Co.</p>
            <p className="text-sm text-muted-foreground">
              Delivered new features for Incrowd live-streaming platform
              including analytics upgrades and enhanced security with AWS WAF.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
