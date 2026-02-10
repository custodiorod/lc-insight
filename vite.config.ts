import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: true,
    hmr: {
      host: '99cbc6f5ce31.ngrok-free.app',
      protocol: 'wss',
      clientPort: 443
    }
  }
})
