import createLibCellML from 'libcellml.js'

/**
 * Install function for installing plugin into Vue 3 application.
 *
 * @param {Object} app
 * @param {Object} options
 */
function install(app) {
  createLibCellML().then((module) => {
    app.provide('$libcellml', module)
  })
}

export default install
