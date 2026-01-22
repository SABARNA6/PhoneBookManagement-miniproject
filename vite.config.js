import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: true, // listen on all interfaces
    port: Number(process.env.PORT) || 10000, // Use Render's PORT or fallback locally
    allowedHosts: [
      'phonebookmanagement-miniproject.onrender.com',
      'localhost'
    ]
  }
})
