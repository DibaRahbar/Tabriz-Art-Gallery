import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the built site work on GitHub Pages under /<repo>/ without extra config
export default defineConfig({
  base: './',
  plugins: [react()],
})
