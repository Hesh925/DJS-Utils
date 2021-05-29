const utils = require('../main')
/** Format URL
 ** Formats a URL
 * @param {string} URL URL to be formated
 * @returns {string} Formated URL.
 */
module.exports = (URL) => {
    if (utils.notNull(URL)) {
        if ((URL.toLowerCase()).startsWith("https://" || "http://")) {
            return URL
        } else {
            var fURL = `https://${URL}`
        }
        return fURL
    } else return null
}