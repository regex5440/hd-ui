import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'components', 'index.jsx'),
      name: 'hd-ui',
      fileName: (format) => `index.${format}.js`
    },
    outDir: 'build',
  },
  plugins: [react()],
})
