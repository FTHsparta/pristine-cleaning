import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',    // main entry point (already exists)
        about: 'about.html',   // additional page 1
        contact: 'contact.html', // additional page 2
      },
    },
  },
})


