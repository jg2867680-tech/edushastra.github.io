// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Replace 'username' and 'my-astro-site' with yours
  site: 'https://username.github.io',
  base: '/my-astro-site', 
  integrations: [tailwind()],
});
