'use strict';

const replace = require('rollup-plugin-replace');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    babel: {
      plugins: [
        'transform-object-rest-spread',
      ]
    },
    rollup: {
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify(process.env.EMBER_ENV)
        })
      ]
    }
  });

  return app.toTree();
};
