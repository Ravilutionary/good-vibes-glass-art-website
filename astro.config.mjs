import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    inlineStylesheets: 'always'
  }
});
