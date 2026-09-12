import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: fromRoot('./index.html'),
        beavers: fromRoot('./beavers.html'),
        cubs: fromRoot('./cubs.html'),
        scouts: fromRoot('./scouts.html'),
        band: fromRoot('./band.html'),
        contact: fromRoot('./contact.html')
      }
    }
  }
})
