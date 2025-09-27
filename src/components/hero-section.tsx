import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <Avatar className="w-24 h-24 mx-auto">
        <AvatarImage src="/profile.jpg" alt="Orel Ben Neriah" loading="lazy" />
        <AvatarFallback className="text-xl bg-primary text-primary-foreground">
          OBN
        </AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Orel Ben Neriah</h2>
        <p className="text-xl text-muted-foreground">Awesome Person - Software Developer</p>
        <p className="text-muted-foreground max-w-4xl mx-auto">
          I'm a software developer with lots of interest. My experience is mainly in web-development, but I love to learn more about security, system coding and fun algorithms.
          Outside of software development, I lift, run, and play soccer sometimes. I also like video games, hot chocolate, and try to drink/make amazing coffee.
          Feel free to reach out to talk about anything tech or non-tech!
        </p>
      </div>

      <TooltipProvider>
        <div className="flex justify-center items-center space-x-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/orelbn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/orel-ben-neriah-401590216"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="/Orel's Resume - No Contant Info.pdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Resume"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </section>
  );
}
