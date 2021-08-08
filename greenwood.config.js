const pluginGraphQL = require('@greenwood/plugin-graphql');
const pluginImportCss = require('@greenwood/plugin-import-css');
const pluginThemePresentation = require('greenwood-starter-presentation');
// const { ResourceInterface } = require('@greenwood/cli/src/lib/resource-interface');

// class ThemePackPageOverrideResource extends ResourceInterface {
//   constructor(compilation, options) {
//     super(compilation, options);
//     this.extensions = ['*'];
//   }

//   async shouldIntercept(url) {
//     console.debug('ThemePackPageOverrideResource shouldIntercept', url)
//     return Promise.resolve(url.replace(this.compilation.context.userWorkspace, '') === '/');
//   }

//   async intercept(url) {
//     console.debug('ThemePackPageOverrideResource intercept', url)
//     return Promise.resolve({ body: 'hello world!'});
//   }
// }


module.exports = {
  title: 'Knowing Your TCO',
  
  plugins: [
    ...pluginImportCss(),
    ...pluginGraphQL(),
    ...pluginThemePresentation()
    // {
    //   type: 'resource',
    //   name: 'my-theme-pack:resource',
    //   provider: (compilation, options) => new ThemePackPageOverrideResource(compilation, options)
    // }
  ]
};