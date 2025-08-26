import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],  // Allow these methods
      allowedHeaders: ['Content-Type'], // Customize allowed headers
    }
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      
    },
  }
})
