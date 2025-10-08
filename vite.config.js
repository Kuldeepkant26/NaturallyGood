import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // bind 0.0.0.0 in Docker
    allowedHosts: ['naturallygood.in', 'www.naturallygood.in'],
    hmr: {
      protocol: 'wss',
      host: 'www.naturallygood.in', // or 'naturallygood.in'
      clientPort: 443,
    },
  },
})

