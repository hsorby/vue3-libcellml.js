import init from 'libcellml.js'

/**
 * Install function for installing plugin into Vue 3 application.
 *
 * @param {Object} app
 * @param {Object} options
 */
function install(app) {
  init().then((module) => {
    app.provide('$libcellml', module)
  })
}

export default install
