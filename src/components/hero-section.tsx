import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <Avatar className="w-24 h-24 mx-auto">
        <AvatarImage src="/profile.jpg" alt="Orel Ben Neriah" />
        <AvatarFallback className="text-xl bg-primary text-primary-foreground">
          OBN
        </AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Orel Ben Neriah</h2>
        <p className="text-xl text-muted-foreground">Full Stack Developer</p>
        <p className="text-muted-foreground max-w-4xl mx-auto">
          I'm a software developer passionate about building modern, efficient
          applications. Recent co-founder at Stride Software, specializing in
          full-stack development and AI-powered solutions.
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
                <a href="mailto:contactorelbn@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="/resume.pdf"
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
