const pluginGraphQL = require('@greenwood/plugin-graphql');
const pluginImportCss = require('@greenwood/plugin-import-css');
const pluginThemePresentation = require('greenwood-starter-presentation');

module.exports = {
  title: 'Knowing Your TCO',
  
  plugins: [
    ...pluginImportCss(),
    ...pluginGraphQL(),
    ...pluginThemePresentation()
  ]
};