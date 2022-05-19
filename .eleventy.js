const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const readingTime = require("eleventy-plugin-reading-time");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, 1200],
    formats: ["avif", "webp", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

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

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

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