import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kidschool/',  // Set base path to match the project folder
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    }
  }
})
