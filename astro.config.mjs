// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
    trailingSlash: 'never',
  integrations: [
    sitemap({ filter: (p) => !p.includes('/thanks') && !p.includes('/legal/') }),
    icon({ include: { lucide: ['sofa', 'bed-double', 'leaf', 'shield-check', 'bug-off'] } }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-display',
      weights: [700, 800, 900],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Arial Black', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Open Sans',
      cssVariable: '--font-body',
      weights: [400, 600, 700],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Segoe UI', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  },

});
