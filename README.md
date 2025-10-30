# Vue3 libcellml.js

A simple wrapper for loading libcellml.js into a Vue 3 application.
This project provides libcellml.js for consumers to inject into their own components.
Vue3-libcellml.js uses the key '$libcellml' to the Vue3 providing and injecting framework.

Example usage, (composition API):

```vue
<template>
  <button :disabled="libcellml.status !== 'ready'" type="primary">
    Load CellML
  </button>
</template>

<script setup>
  import { inject } from 'vue'

  const libcellml = inject('$libcellml')

  function processCellML(content) {
    let parser = new libcellml.library.Parser()
    let model = parser.parseModel(content)

    console.log(model.name())

    model.delete()
    parser.delete()
  }
</script>
```

The libcellml object has two keys: 'state', 'library'.
The 'state' key reports the state of the module, this can either be 'loading' or 'ready'.
A state of 'loading' indicates that libcellml.js is currently being loaded and is not ready for use.
A state of 'ready' indicates that libcellml.js has finished loading and it is ready for using.

The 'library' key holds a reference to the libcellml.js module.
While libcellml.js is loading the 'library' will be *undefined*.

If you want to do something as soon as the module has loaded you can do the following:

```vue
<script setup>
import { inject } from "vue"

const libcellmlReadyPromise = inject("$libcellml_ready")

onMounted(async () => {
  await libcellmlReadyPromise
  // libcellml.js has loaded now
})
</script>
```

You also need to stop vite from optomising this dependency.
An example `vite.config.js` is:

```javascript
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    fs: {},
  },
  optimizeDeps: {
    // Exclude the wasm-based library from pre-bundling
    exclude: ["vue3-libcellml.js"],
    esbuildOptions: {
      target: "es2020",
    },
  },
})
```

The reason this is required is not fully understood at this time.

## Install

`yarn add vue3-libcellml.js`
