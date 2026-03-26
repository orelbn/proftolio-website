import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function HeroSocials() {
  return (
    <TooltipProvider>
      <div className="flex justify-center items-center space-x-4">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                className="rounded-full size-10"
                nativeButton={false}
                render={
                  <a
                    href="https://github.com/orelbn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  />
                }
              />
            }
          >
            <img src="/GitHub_Invertocat_White.svg" alt="" aria-hidden="true" className="h-5 w-5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Checkout my GitHub</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                className="rounded-full size-10"
                nativeButton={false}
                render={
                  <a
                    href="https://linkedin.com/in/orelbn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  />
                }
              />
            }
          >
            <img
              src="/InBug-White.png"
              alt=""
              aria-hidden="true"
              className="h-5 w-5 object-contain"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Connect with me on Linkedin</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
