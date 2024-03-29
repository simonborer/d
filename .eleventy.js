const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const readingTime = require("eleventy-plugin-reading-time");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes, title = ``, loading = `lazy`, cssClass = ``) {

  let metadata = await Image(src, {
    widths: [300, 614, 1200, 2400],
    formats: ["avif", "webp", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    title,
    loading,
    decoding: "async",
    class: cssClass,
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(readingTime);

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("img");
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

    eleventyConfig.addShortcode("separator", function(id) {
        return `<svg class="section-separator" width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#${id})'/></svg>`;
    });

    eleventyConfig.addPairedNunjucksShortcode("section", function(content, id) {return `<section id="${id}" class="row row--section">${content}</section>`});

    eleventyConfig.addPairedNunjucksShortcode("slide", function(content, slideOnly) {return `<div data-slide class="row${slideOnly ? ` slide-only` : ``}">${content}</div>`});
    
    eleventyConfig.addShortcode("sectionImg", function(src, alt, height, width) {
        return `<img class="body-icon body-icon--x-large" height="${height}" width="${width}" alt="${alt}" src="/images/${src}.svg">`;
    });

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    eleventyConfig.addPairedNunjucksShortcode("ext", function(content, href) {return `<a href="${href}" target="_blank" rel="noreferrer">${content}<span class="show-for-sr"> Opens in a new window</span></a>`});

    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
            if (!item.data.tags) return
            item.data.tags.forEach((tag) => tagsSet.add(tag))
        })
        return tagsSet
    });

    eleventyConfig.addCollection("featuredAndPinned", function(collectionApi) {
        const allSorted = collectionApi.getAllSorted();

        const featured = allSorted.filter(post => post.data.featured === true);
        const pinned = allSorted.filter(post => post.data.pinned === true);
        const neitherPinnedNorFeatured = allSorted.filter(post => post.data.featured !== true && post.data.pinned !== true);
        const postArr = featured.concat(pinned).concat(neitherPinnedNorFeatured);

        return postArr;
    });

    eleventyConfig.addFilter("allGas", function(str) {
        if (typeof str !== 'undefined') {
            str = str.trim().replace("-", "&#8209;");
            str = str.split(" ").length - 1 > 2 ? str.replace(/\s([^\s]*)$/, '&nbsp;' + '$1').replace(/\s/, "&nbsp;") : str.replace(/\s/, "&nbsp;");
            return str;
        }
    });

    eleventyConfig.addFilter("lowerCase", function(str) {
        if (typeof str !== 'undefined') {
            return str.toLowerCase();
        }
    });
};