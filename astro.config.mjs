// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gimigit.github.io/bitcoin-romania/',
  base: '/bitcoin-romania/',
  integrations: [mdx(), sitemap()],
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
});