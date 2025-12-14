import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
<<<<<<< HEAD
    devSourcemap: true, // 👈 enables CSS source maps
=======
    devSourcemap: true, // This enables sourcemaps for CSS in dev
>>>>>>> 2f791f5ee143a2738b00802c2531833e9327858e
  },
})
