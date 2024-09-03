import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { loadEnv } from 'vite'
import UploadToSFTP from 'vite-plugin-sftp-deploy'

const env = loadEnv('', process.cwd(), '')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', manifest: {
        name: 'ASoft Default APP',
        short_name: 'AsoftDevelopment',
        description: 'ASoft Default APP Template',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    UploadToSFTP({
      host: env.SSH_HOST,
      username: env.SSH_USER,
      password: env.SSH_PASSWORD,
      remotePath: env.SSH_PATH,
      verbose: true
    })],
})
