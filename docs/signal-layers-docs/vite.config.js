import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/minimalist-ui/',
  build: {
    outDir: '../',
    emptyOutDir: true
  }
})