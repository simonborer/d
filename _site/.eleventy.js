const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const readingTime = require("eleventy-plugin-reading-time");
const esbuild = require("esbuild");
const postCss = require("postcss");
const postcssSass = require('@csstools/postcss-sass');
const CleanCSS = require("clean-css");
const autoprefixer = require("autoprefixer");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(readingTime);

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("icons");
    // eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    eleventyConfig.addPassthroughCopy("robots.txt");

    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    eleventyConfig.addShortcode("br", function() {
        return `<br aria-hidden="true">`;
    });

    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
            if (!item.data.tags) return
            item.data.tags.forEach((tag) => tagsSet.add(tag))
        })
        return tagsSet
    });
    eleventyConfig.setTemplateFormats(["js", "njk", "html"]);
    // eleventyConfig.addWatchTarget("sass/**/*.scss");
    eleventyConfig.addWatchTarget("js/**/*");
    eleventyConfig.addWatchTarget("**/*.js");
    eleventyConfig.addNunjucksAsyncFilter("esbuild", (jsFile, done) => {
        esbuild
            .build({
                entryPoints: [jsFile],
                bundle: true,
                minify: true
            })
            .then(
                (result) => {
                    const reduced = result.outputFiles.reduce(
                        (combined, r) => combined + r.text,
                        ""
                    );
                    done(null, reduced);
                },
                (e) => done(e, null)
            );
    });
    // eleventyConfig.addNunjucksAsyncFilter("postcss", (cssCode, done) => {
    //     const cleanCss = new CleanCSS({});
    //     postCss([postcssSass(), require("postcss-nested"), autoprefixer])
    //         .process(cssCode)
    //         .then(
    //             (r) => {
    //                 const result = cleanCss.minify(r.css);
    //                 if (result.errors.length) {
    //                     done(result.errors, null);
    //                 } else {
    //                     done(null, result.styles);
    //                 }
    //             },
    //             (e) => {
    //                 done(e, null);
    //             }
    //         );
    // });
};