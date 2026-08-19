// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves project sites from a /<repo-name>/ subpath; Cloudflare (and local dev/
// preview) serve from the domain root. GitHub Actions always sets GITHUB_ACTIONS=true, so the
// GitHub Pages workflow gets the subpath automatically and every other build defaults to root —
// no manual toggling needed between deploy targets.
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  ...(isGithubPagesBuild ? { site: 'https://StephenTredger.github.io', base: '/Astro-proto' } : {}),
});
