/** Fuzzy Search
 ** Fuzzy search 
 * @param {string} pattern 
 * @param {object} list 
 * @param {object} keys 
 * @returns {object} List of near matches to pattern
 */
module.exports = (pattern, list, keys) => {
        if (keys){
        var key = keys
    } else {
        var key = ['']
    }

    const Fuse = require('fuse.js')
    const options = {
        isCaseSensitive: false,
        includeScore: false,
        shouldSort: true,
        ignoreLocation: true,
        minMatchCharLength: 1,
        //includeMatches: false,
        //findAllMatches: false,
        //location: 0,
        //threshold: 0.6,
        //distance: 100,
        //useExtendedSearch: false,
        //ignoreFieldNorm: false,
        keys: [key]
     };
    const fuse = new Fuse(list, options);
    const search = fuse.search(pattern)
    return search;
}