module.exports = function(eleventyConfig) {
    // Assets folder
    eleventyConfig.addPassthroughCopy("assets")
    // All .txt files
    eleventyConfig.addPassthroughCopy("*.txt")
    // Ignore Templates folder
    eleventyConfig.ignores.add("/templates");
    return {
        dir: {            
            output: "dist"
        }
    };
};

/*
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
*/