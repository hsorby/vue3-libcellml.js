import createLibCellML from 'libcellml.js'
import { reactive } from 'vue'

/**
 * Install function for installing plugin into Vue 3 application.
 *
 * @param {Object} app
 * @param {Object} options
 */
function install(app) {
  const libcellml = reactive({
    state: 'loading',
    module: undefined,
  })

  app.provide('$libcellml', libcellml)

  createLibCellML().then((module) => {
    libcellml.state = 'ready'
    libcellml.module = module
  })
}

export default install
