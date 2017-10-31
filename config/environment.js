'use strict';

const fs = require('fs');
const defaultModuleConfigurationPath = __dirname + '/../node_modules/@glimmer/application-pipeline/lib/broccoli/default-module-configuration.ts';
const defaultModuleConfigurationString = fs.readFileSync(defaultModuleConfigurationPath, 'utf-8');

const moduleConfiguration = eval('(' + defaultModuleConfigurationString.replace('export default', '').replace(';', '') + ')');

moduleConfiguration['types']['store'] = {
  definitiveCollection: 'store'
};
moduleConfiguration['collections']['store'] = {
  types: ['store'],
  defaultType: 'store'
};
moduleConfiguration['types']['connect'] = {
  definitiveCollection: 'connect'
};
moduleConfiguration['collections']['connect'] = {
  types: ['connect'],
  defaultType: 'connect'
};
moduleConfiguration['types']['enhancer'] = {
  definitiveCollection: 'enhancers'
};
moduleConfiguration['collections']['enhancer'] = {
  types: ['enhancers/index'],
  defaultType: 'enhancer'
};
moduleConfiguration['types']['middleware'] = {
  definitiveCollection: 'middleware'
};
moduleConfiguration['collections']['middleware'] = {
  types: ['middleware/index'],
  defaultType: 'middleware'
};
moduleConfiguration['types']['reducer'] = {
  definitiveCollection: 'reducers'
};
moduleConfiguration['collections']['reducer'] = {
  types: ['reducers/index'],
  defaultType: 'reducer'
};

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-redux',
    environment: environment,
    moduleConfiguration
  };

  return ENV;
};
