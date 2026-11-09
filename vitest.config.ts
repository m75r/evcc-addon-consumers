// Vitest für den Browser-Teil (happy-dom); CSS-Importe als Text wie beim Bauen
import { cssAsText } from "@evcc-addons/sdk/vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
  oxc: { jsx: { runtime: "automatic", importSource: "preact" } },
  plugins: [cssAsText()],
  test: { environment: "happy-dom", include: ["test/**/*.test.{ts,tsx}"] },
});
