// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://payzillion.com', // Production Domain
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});