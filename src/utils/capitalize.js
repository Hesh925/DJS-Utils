const utils = require('../main')
/** Capitalize
 ** Capitalize a string
 * @param {string} string
 * @returns {string} Capitalized string
 */
module.exports = (string) => {
    if (utils.notNull(string)) {
        return string.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ');
    } else return null
};