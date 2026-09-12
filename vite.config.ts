import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const dist = new URL('./dist/', import.meta.url)
      copyFileSync(fileURLToPath(new URL('index.html', dist)), fileURLToPath(new URL('404.html', dist)))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
