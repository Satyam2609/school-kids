import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Root pe deploy kar rahe ho
  build: {
    // rollupOptions hatao for now
  }
})
