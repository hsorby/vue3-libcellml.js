# Vue3 libcellml.js

A simple wrapper for loading libcellml.js into a Vue 3 application.
This project provides libcellml.js for consumers to inject into their own components.
Vue3-libcellml.js uses the key '$libcellml' to the Vue3 providing and injecting framework.

Example usage, (composition API):

```vue
<script setup>
  import { inject } from 'vue'

  const libcellml = inject('$libcellml')
</script>
```

The libcellml object has two keys: 'state', 'module'.
The 'state' key reports the state of the module, this can either be 'loading' or 'ready'.
A state of 'loading' indicates that libcellml.js is currently being loaded and is not ready for use.
A state of 'ready' indicates that libcellml.js has finished loading and it is ready for using.

The 'module' key holds a reference to the libcellml.js module.
While libcellml.js is loading the 'module' will be *undefined*.

## Install

`yarn add vue3-libcellml.js`
