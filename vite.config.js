import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA(
      {
        manifest: {
          name: 'Mulhouse Mysteries',
          start_url: '/',
          display: 'standalone',
          theme_color: '#271D15',
          icons: [
            {
              src: 'src/assets/logo.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ],
          background_color: '#271D15',
        }
      }
  ), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
