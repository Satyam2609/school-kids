import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-alice-carousel': 'react-alice-carousel',
      '@': path.resolve(__dirname, './src') // optional shortcut for imports
    }
  },
  build: {
    outDir: 'dist' // Ensure this matches your vercel.json if custom
  },
  // 👇👇 Add this part
  server: {
    historyApiFallback: true
  }
})
