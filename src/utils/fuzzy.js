const Fuse = require('fuse.js')
/** Fuzzy Search
 ** Fuzzy search 
 * @param {string} pattern 
 * @param {object} list 
 * @param {object} options 
 * @peram {object} keys
 * @returns {object} List of near matches to pattern
 */
module.exports = (pattern, list, options, keys) => {
        var key = keys || ['']
    const sOptions = options || {
        //isCaseSensitive: false,
        //includeScore: true,
        //shouldSort: true,
        //ignoreLocation: true,
        //minMatchCharLength: 1,
        //includeMatches: false,
        //findAllMatches: false,
        //location: 0,
        //threshold: 0.6,
        //distance: 100,
        //useExtendedSearch: false,
        //ignoreFieldNorm: false,
        keys: [key]
     };
    const fuses = new Fuse(list, sOptions)
    return fuses.search(pattern);
}