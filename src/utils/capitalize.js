const utils = require('../main')
/** Capitalize
 ** Capitalize a string
 * @param {string} string
 * @returns {string} Capitalized string
 */
 module.exports = (string) => {
    const str = string.toString()
    if (utils.notNull(str)) {
        return str.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ');
    } else return null
};