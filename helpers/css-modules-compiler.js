const hook = require('css-modules-require-hook');
const sass = require('node-sass');
const path = require('path');

hook({
  extensions: ['.sass'],
  generateScopedName: '[local]',
  preprocessCss: function (css, filepath) {
    let result =  sass.renderSync({
      data: css,
      indentedSyntax: true,
      includePaths: [ path.resolve(filepath, '..') ],
      outputStyle:  'compressed'
    });
    return result.css;
  }
});
