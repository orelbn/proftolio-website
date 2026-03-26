export function HeroContent() {
  return (
    <div className="space-y-2">
      <h1
        className="text-5xl font-bold text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 20%, var(--accent) 50%, var(--secondary) 80%, var(--primary) 100%)",
        }}
      >
        Orel Ben Neriah
      </h1>
      <p className="text-2xl font-light text-muted-foreground">Fullstack Software Developer</p>

      <div className="relative mx-auto max-w-2xl">
        <p
          aria-hidden="true"
          className="block text-lg text-center text-muted/20 select-none text-balance"
        >
          Focused on <span className="font-bold">Security</span>,{" "}
          <span className="font-bold">Performance</span>, and{" "}
          <span className="font-bold">Maintainability</span>.
        </p>
        <p className="absolute inset-0 block text-lg text-center text-muted-foreground text-balance">
          Focused on <span className="text-foreground font-bold">Security</span>,{" "}
          <span className="text-foreground font-bold">Performance</span>, and{" "}
          <span className="text-foreground font-bold">Maintainability</span>.
        </p>
      </div>
      <p className="max-w-2xl mx-auto text-foreground text-balance pt-4">
        With a background in Criminology and Computer Science, I bring a unique perspective to tech.
        When I'm not coding, you'll find me running, lifting weights, playing soccer, or brewing a
        great cup of coffee.
      </p>
    </div>
  );
}
