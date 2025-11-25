import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <Avatar className="size-36 lg:size-48 mx-auto">
        <AvatarImage src="/profile.jpg" alt="Orel Ben Neriah" loading="lazy" />
        <AvatarFallback className="text-xl bg-primary text-primary-foreground">
          OBN
        </AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <GradientText
          text="Orel Ben Neriah"
          gradient="linear-gradient(90deg, var(--primary) 0%, var(--secondary) 20%, var(--accent) 50%, var(--secondary) 80%, var(--primary) 100%)"
          className="text-5xl font-bold"
        />
        <p className="text-2xl font-light text-muted-foreground">
          Fullstack Software Developer
        </p>
        <div className="relative mx-auto max-w-2xl">
          <SplittingText
            text="Focused on Security, Performance, and Maintainability."
            aria-hidden="true"
            className="block text-lg text-center text-muted/20 select-none text-balance"
            disableAnimation
            highlightRegex={/Security|Performance|Maintainability/}
            highlightClassName="font-bold"
          />
          <SplittingText
            text="Focused on Security, Performance, and Maintainability."
            className="block text-lg text-center text-muted-foreground absolute inset-0 text-balance"
            type="chars"
            inView
            initial={{ y: 0, opacity: 0, x: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            highlightRegex={/Security|Performance|Maintainability/}
            highlightClassName="text-foreground font-bold"
          />
        </div>
      </div>

      <TooltipProvider>
        <div className="flex justify-center items-center space-x-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="rounded-full" size="icon" asChild>
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
              <p>Checkout my GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="rounded-full" size="icon" asChild>
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
              <p>Connect with me on Linkedin</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </section>
  );
}
