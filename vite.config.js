import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'components', 'index.jsx'),
      name: 'hd-ui',
      fileName: (format) => `index.${format}.js`
    },
    outDir: 'build',
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  },
  plugins: [react()],
})
