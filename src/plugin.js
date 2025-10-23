import createLibCellML from 'libcellml.js'
import { reactive } from 'vue'

const moduleLoadPromise = createLibCellML()

/**
 * Install function for installing plugin into Vue 3 application.
 *
 * @param {Object} app
 * @param {Object} options
 */
function install(app) {
  const libcellml = reactive({
    status: 'loading',
    library: null, 
  })

  app.provide('$libcellml', libcellml)

  app.provide('$libcellml_ready', moduleLoadPromise)

  moduleLoadPromise.then((module) => {
    libcellml.status = 'ready'
    libcellml.library = module
  })
}

export default install
