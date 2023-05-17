const Fuse = require("fuse.js");

module.exports = (pattern, list, options, keys) => {
    var key = keys || [ "" ];
    const sOptions = options || {
        // IsCaseSensitive: false,
        // IncludeScore: true,
        // ShouldSort: true,
        // IgnoreLocation: true,
        // MinMatchCharLength: 1,
        // IncludeMatches: false,
        // FindAllMatches: false,
        // Location: 0,
        // Threshold: 0.6,
        // Distance: 100,
        // UseExtendedSearch: false,
        // IgnoreFieldNorm: false,
        keys: [ key ]
    };
    const fuses = new Fuse(list, sOptions);
    return fuses.search(pattern);
};