const utils = require('../main.js')
/** Remove Duplicates
 ** Removes duplicates from an array
 * @param {Array} arr Array to have dupes removed from
 * @returns {Array} Array without dupes
 */
module.exports = (arr) => {
    if (utils.notNull(arr)) {
        // eslint-disable-next-line no-undef
        return [...new Set(arr)]
    } else return null
}