import { fileURLToPath } from "node:url";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";
import { defineConfig } from "vite-plus";

const configDir = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), cloudflare(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(configDir, "./src"),
    },
  },
  lint: {
    ignorePatterns: ["dist/**", "worker-configuration.d.ts"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ["dist/**", "worker-configuration.d.ts"],
  },
  html: {
    cspNonce: "__NONCE__",
  },
});
