import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://the-artisanal-collective-handmade-with-love.example.com'
});