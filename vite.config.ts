import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.cjs';
import { base } from './route.config'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [svelte({
    /* plugin options */
  })],
  build: {
    outDir: 'dist',
  },
  base: base,
})