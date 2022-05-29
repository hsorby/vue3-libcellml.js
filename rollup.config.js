import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/plugin.js',
  external: ['vue', 'libcellml.js'],
  output: [
    {
      file: 'dist/vue3-libcellml.js.cjs.js',
      format: 'cjs',
      exports: 'default',
    },
    {
      file: 'dist/vue3-libcellml.js.es.js',
      format: 'esm',
    },
    {
      name: 'Vue3libcellml.js',
      file: 'dist/vue3-libcellml.js.umd.js',
      format: 'umd',
      globals: {
        'libcellml.js': 'libcellml.js',
        vue: 'Vue',
      },
    },
  ],
  plugins: [commonjs(), vue(), buble(), terser()],
}
