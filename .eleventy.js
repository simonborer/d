const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const readingTime = require("eleventy-plugin-reading-time");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(readingTime);

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("icons");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    eleventyConfig.addPassthroughCopy("robots.txt");

    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    eleventyConfig.addShortcode("br", function() {
        return `<br aria-hidden="true">`;
    });

    eleventyConfig.addPairedNunjucksShortcode("ext", function(content, href) {return `<a href="${href}" target="_blank" rel="noreferrer">${content}</a>`});

    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
            if (!item.data.tags) return
            item.data.tags.forEach((tag) => tagsSet.add(tag))
        })
        return tagsSet
    });
};