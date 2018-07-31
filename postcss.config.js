const precss = require('precss');
const autoprefixer = require('autoprefixer');
const stripInlineComments = require('postcss-strip-inline-comments');
const fontpath = require('postcss-fontpath');
const mixins = require('postcss-mixins');

module.exports = {
  plugins: [
    stripInlineComments,
    precss,
    fontpath,
    autoprefixer,
    mixins,
    require('postcss-simple-vars'),
    require('postcss-nested'),
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
