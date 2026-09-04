const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('autoprefixer'),
        purgecss({
            content: ['_site/**/*.html'],
            safelist: ['no-scroll', 'nav__links--expanded', 'nav__toggle-tap-to-close--open', '[data-ann-mobile-only] + .rough-annotation']
        })
    ]
}