/*jshint esversion: 6 */
const postcss = require('postcss')

module.exports = {
    plugins: [
        // Needed for postcss-mixins to run before tailwind, issue can be found here:
        // https://github.com/tailwindlabs/tailwindcss/issues/4114#issuecomment-989931186
        require('postcss-import'),
        require('postcss-simple-vars'),
        {
            postcssPlugin: 'grouped',
            Once(root, { result }) {
                return postcss([
                    require('postcss-mixins')
                ]).process(root, result.opts);
            }
        },
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer')
    ]
};