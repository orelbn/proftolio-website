import { Hono } from "hono";

type Bindings = {
  ASSETS: Fetcher;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => {
  console.log("API root endpoint hit.");
  return c.json({
    name: "Cloudflare",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (c) => {
  return c.json({ status: "ok", worker: "running" });
});

// Handle HTML routes specifically (root route for SPA)
app.get("/", async (c) => {
  console.log("Serving root route with enhanced security headers.");
  // For the root route, delegate to static assets
  const response = await c.env.ASSETS.fetch(c.req.raw);

  // Generate a cryptographically secure nonce
  const nonce = btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))),
  );

  // Get the HTML content
  let html = await response.text();

  // Replace all __NONCE__ occurrences with the actual nonce
  html = html.replace(/__NONCE__/g, nonce);

  // Create new headers with security headers
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
