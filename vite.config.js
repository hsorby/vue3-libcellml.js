import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [vue()],

  // Set up the '@' alias to point to the 'src' directory
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    sourcemap: true,
    lib: {
      // Point this to your library's main entry file
      entry: path.resolve(__dirname, 'src/plugin.js'), 
      
      // The global variable name for the UMD build
      name: 'Vue3LibcellmlJs', 
      
      // Build both formats
      formats: ['es', 'umd'],
      
      // Generates the filenames from your package.json
      fileName: (format) => `vue3-libcellml.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      // Externalize your peer dependencies so they aren't bundled
      external: ['vue', 'libcellml.js'],
      
      output: {
        // Provide global variable names for the UMD build
        globals: {
          vue: 'Vue',
          'libcellml.js': 'libcellml.js',
        },
      },
    },
  },
})
