import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";

export function HeroContent() {
  return (
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
      <p className="max-w-2xl mx-auto text-foreground text-balance pt-4">
        With a background in Criminology and Computer Science, I bring a unique
        perspective to tech. When I'm not coding, you'll find me running,
        lifting weights, playing soccer, or brewing a great cup of coffee.
      </p>
    </div>
  );
}
