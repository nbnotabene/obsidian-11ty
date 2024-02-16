module.exports = function(eleventyConfig) {
    // Assets folder
    eleventyConfig.addPassthroughCopy("assets")
    // All .txt files
    eleventyConfig.addPassthroughCopy("*.txt")
    // Ignore Templates folder
    eleventyConfig.ignores.add("/templates");
};