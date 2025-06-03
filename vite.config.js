import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        photos: 'photos.html',
      },
    },
  },
  publicDir: 'public', // ensure Vite copies public/_redirects and other static files
})



