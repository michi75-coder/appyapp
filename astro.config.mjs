import { defineConfig } from "astro/config";

// GitHub Pages serves the site from /appyapp/ until a domain of its own is plugged in:
// then `site` becomes that domain and `base` goes.
export default defineConfig({
  site: "https://michi75-coder.github.io",
  base: "/appyapp",
  trailingSlash: "always",
});
