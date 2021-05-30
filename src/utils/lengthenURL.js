const urlLengthener = require("url-lengthener")
const utils = require('../main')
/** lengthen URL
 ** Lengthens a url
 * @param {string} URL URL to lengthen
 * @returns {string} Lengthened URL
 */
module.exports = (URL) => {
    const fURL = utils.formatURL(URL)
    if (utils.notNull(fURL)){
        let lengthened_url = urlLengthener.lengthen(fURL);
        return lengthened_url
    } else return null
}