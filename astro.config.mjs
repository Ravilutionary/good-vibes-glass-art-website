import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://goodvibesglassart.com",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "static",
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    inlineStylesheets: 'always'
  }
});
