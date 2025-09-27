import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => {
  return c.json({
    name: "Proftolio API",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (c) => {
  return c.json({ status: "ok", worker: "running" });
});

// Handle HTML routes specifically (root route for SPA)
app.get("/", async (c) => {
  const response = await c.env.ASSETS.fetch(c.req.raw);

  const nonce = btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))),
  );

  let html = await response.text();
  html = html.replace(/__NONCE__/g, nonce);

  const newHeaders = new Headers(response.headers);
  newHeaders.set("X-Frame-Options", "DENY");
  newHeaders.set("X-Content-Type-Options", "nosniff");
  newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  newHeaders.set("Content-Security-Policy", `frame-ancestors 'none'`);

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
});

export default app;
